# Recall — Mac app + cross-device sync

**Date:** 2026-06-19
**Status:** Design approved (pending spec review)
**Author:** Arshia + Claude

## Goal

Two things for the **Recall** flashcards app (the MEDI8403 Gotcha SRS flashcards):

1. Ship a **native Mac app** alongside the existing iPhone app.
2. **Sync study progress** across the iPhone app, the Mac app, **and** the web `flashcards.html` so all three stay in lockstep.

## Constraints / context (established facts)

- The iOS project (`~/gotcha-flashcards-ios`) is a SwiftUI + WKWebView shell that loads a bundled copy of the web app (`web/flashcards.{html,css,js}` + `data/`). The web app is the canonical source at `~/Desktop/MEDI8403 Gotcha Notes/` (git repo `arshia-j/medi8403-gotcha-notes`, deployed to GitHub Pages).
- Signing is a **free personal Apple Developer team** (`EZ92PNXH3Y`): 7-day provisioning expiry, **no iCloud entitlement available**. This rules out CloudKit / `NSUbiquitousKeyValueStore` without a paid (\$99/yr) membership. **Decision: self-hosted sync, no Apple account upgrade.**
- All progress lives in `localStorage["gn_fc_v1"]`. The native shell already mirrors that blob to a file in Application Support (`StoreBridge`) and re-seeds it on launch, so the app is fully offline.
- The progress schema (`gn_fc_v1`, `v:1`):
  - `sched: { [cardId]: { ease, ivl, reps, lapses, due, last, suspended?, known? } }` — per-card SM-2-lite state. `last` = day-number of last review, `reps` = successful reps. **These are the merge keys.**
  - `enabled: { [moduleId]: bool }`, `starred: { [id]: bool }`, `deleted: { [id]: bool }`, `edits: { [id]: {front,back} }`, `confidence: { [id]: ... }`.
  - `missedToday`, `history`, `log` (review stats/log).
  - prefs: `theme, examDate, intervalMult, timerSecs, fontSize, swipeEnabled, clozeMode`.
  - `streak: {count,last}`, `studied: {day,n}`.

## Decisions

| Decision | Choice |
|---|---|
| Mac app | **Mac Catalyst** on the existing target — reuse the WKWebView shell, `web/` bundle, and bridge. One codebase, two destinations. |
| Sync transport | **Self-hosted Railway service** (Node/Express + Postgres). No Apple upgrade, no cost. |
| Sync scope | iPhone app + Mac app + **web `flashcards.html`** (sync layer lives in shared `flashcards.js`, written once). |
| Architecture | **Offline-first**: `localStorage` stays source of truth; sync is background pull/push. No network ⇒ app works as today. |
| Pairing | Opt-in **sync code** + shared secret. Entered by typing/pasting **or** scanning a QR. |
| QR pairing | QR encodes a `recall://pair?...` deep link, rendered by a small bundled QR lib (no CDN). System Camera opens the app via URL scheme and auto-fills. Typed code is the universal fallback (and what the web page uses). |
| Conflict resolution | **Per-card merge** for `sched` (never lose a review); last-write-wins (`mutatedAt`) for flags/prefs; union for stats. |
| Backend swappability | Sync client talks to an abstract `SyncBackend`; the Railway HTTP backend is one implementation. Leaves the door open for iCloud later. |

## Architecture

```
 iPhone (Recall, Catalyst-shared)  ─┐
 Mac (Recall, Mac Catalyst)        ─┼─►  recall-sync (Railway)
 Web flashcards.html (Pages)       ─┘     Express + Postgres, 1 row per sync code
```

### Component 1 — Sync service (`recall-sync`, new Railway repo)

- **Stack:** Node + Express (or Fastify) + Railway Postgres.
- **Schema:**
  ```sql
  create table sync_state (
    code        text primary key,
    rev         integer not null default 0,
    state       jsonb   not null,
    updated_at  timestamptz not null default now()
  );
  ```
- **Endpoints** (all under `/v1`, require header `x-sync-secret: $SYNC_SECRET`, CORS `*`):
  - `GET /v1/state/:code` → `{ rev, state }` or `404` if absent.
  - `PUT /v1/state/:code` body `{ rev, state }` → optimistic concurrency:
    - `UPDATE sync_state SET state=$1, rev=rev+1, updated_at=now() WHERE code=$2 AND rev=$3` returning new rev.
    - 0 rows + row exists ⇒ **409** with `{ rev, state }` (current) so the client re-merges and retries.
    - No row ⇒ `INSERT` at `rev=1`.
  - `GET /` → health.
- **Auth model:** the per-user `code` is the data key and primary secret; `SYNC_SECRET` is a shared header guarding the endpoint from open writes. Sufficient for personal study data. (Bearer-per-code is a possible future hardening.)

### Component 2 — Sync client (in canonical `flashcards.js`, shared by all 3 clients)

A `RecallSync` module added to `flashcards.js`:

- **Config** in `localStorage["gn_fc_sync"]` = `{ url, code, secret, rev, clientId, lastSyncAt }`. Empty ⇒ sync off (fully offline, default).
- **`mergeStates(a, b) → merged`** — pure, unit-tested:
  - `sched`: union of card ids; per id keep the record with greater `last`, tie-break greater `reps`.
  - `log`: union (dedup); `history`: per-day max.
  - `starred, deleted, edits, enabled, confidence, prefs, streak, studied`: **last-write-wins** using a new top-level `mutatedAt` (epoch ms) — the doc with the newer `mutatedAt` wins for these fields.
- **`save()` change:** stamp `state.mutatedAt = Date.now()` on every write (one line). Doubles as the "dirty since last push" signal.
- **`pull()`:** GET; if server differs, `mergeStates(local, server)`, save, set local `rev = server.rev`. If local had unpushed changes, follow with `push()`.
- **`push()`:** PUT `{ rev, state }`. 200 ⇒ update local rev. 409 ⇒ merge returned state, save, retry. Network error ⇒ mark pending, retry on next trigger.
- **Triggers:** `pull()` on load (after the native seed) and on `focus`/`visibilitychange`; debounced `push()` (~4s) after any change.
- **Settings → Sync panel** (new UI in flashcards): server URL + code + secret fields, "Generate code", "Sync now", show-QR, status line (last synced / error). Reachable in all three clients.

The sync layer is **pure JS over `fetch`** — no native code needed. The native `StoreBridge` keeps mirroring `localStorage` to disk, so merged data also persists natively and re-seeds next launch. CORS `*` on the service handles the `file://` (Origin `null`) and Pages (https) origins.

### Component 3 — QR pairing (deep link, no camera permission)

- A small **bundled** QR-render lib (MIT, ~3 KB, no CDN) renders a QR of `recall://pair?u=<url>&c=<code>&s=<secret>` in the Sync panel.
- **Apps register the `recall:` URL scheme** (`CFBundleURLTypes` in `Info.plist`). System Camera detecting the QR offers "Open in Recall"; the app's SwiftUI `onOpenURL` parses the params and pushes them into the web app via `evaluateJavaScript("window.RecallSync.applyPairing(...)")` (new native→JS path).
- **Fallback:** type/paste the code on any platform (this is how the web page pairs). If the Camera deep-link banner proves flaky in testing, typed pairing always works.

### Component 4 — Mac Catalyst target

- Enable Mac Catalyst on `GotchaFlashcards` in `project.yml` (`SUPPORTS_MACCATALYST: YES`, derive Catalyst bundle id). Same sources.
- Bridge behavior on Mac: `StoreBridge` (file persistence) works; `UIActivityViewController` share works; haptics are harmless no-ops. `recall:` scheme handled the same way.
- Build Catalyst destination, sign-to-run-locally with the personal team, run on the Mac.

## Build sequence

1. **Sync service** — scaffold `recall-sync`, Postgres table, two endpoints + health; deploy to Railway; set `SYNC_SECRET`. Verify with `curl`.
2. **Sync client** — add `RecallSync` + `mergeStates` + `mutatedAt` + Sync panel to canonical `flashcards.js`/`flashcards.css`/`flashcards.html`. Unit-test `mergeStates` (Node). Browser-verify pair/pull/push against the live service.
3. **QR pairing** — bundle QR lib + render; `recall:` scheme in `Info.plist`; `onOpenURL` → `applyPairing`. (Web shows QR; apps consume.)
4. **Mac Catalyst** — enable in `project.yml`, `xcodegen generate`, build + run Mac app.
5. **Propagate** — copy updated `flashcards.{html,css,js}` (+ QR lib) into `~/gotcha-flashcards-ios/web/`, rebuild/reinstall iPhone app; push canonical web → Pages (web flashcards gain sync).
6. **End-to-end** — same code on iPhone + Mac + web; review on one, confirm it appears on the others after pull; force a conflict (study both offline, then sync) and confirm no review is lost.

## Testing

- **`mergeStates`** — pure-function unit tests (Node): per-card `last`/`reps` resolution, flag LWW by `mutatedAt`, stats union, empty/missing fields, idempotency (`merge(a,a)==a`).
- **Service** — optimistic-concurrency tests: first write inserts; stale rev ⇒ 409 + current; matching rev ⇒ rev+1.
- **Client** — browser verification: pair, study, observe push; second client pulls and shows it; offline edits both sides ⇒ merge keeps all reviews.
- **Catalyst** — build succeeds; app launches and runs on the Mac; persistence survives relaunch.

## Risks / edge cases

- **CORS from `file://`** (Origin `null`) — service sends `Access-Control-Allow-Origin: *`. ✓
- **Blob size** — ~500 cards ≈ 50–150 KB JSON; fine for `jsonb` and debounced PUT.
- **Clock skew** — flag LWW uses wall-clock `mutatedAt` (minor mis-resolution possible); `sched` merge uses device-local day-number `last` + `reps`, which is robust. Review progress is never at risk.
- **QR custom-scheme banner** — iOS Camera handling of non-http schemes can vary; typed-code fallback guarantees pairing.
- **Free-team 7-day expiry** — unchanged by this work; weekly rebuild/reinstall remains (paid Developer Program would fix it *and* unlock iCloud — out of scope, but the backend-swappable client keeps that path open).
- **Secret in client/QR** — acceptable for personal data; the code is the real per-user key.

## Out of scope

- Paid Apple Developer Program / iCloud backend / fixing the 7-day expiry.
- Multi-user accounts, server UI, encryption-at-rest beyond Railway defaults.
- In-app camera scanning (`getUserMedia`/scanner lib) — superseded by the URL-scheme approach.
