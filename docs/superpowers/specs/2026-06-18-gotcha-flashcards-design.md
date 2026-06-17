# Gotcha Flashcards — Anki-style cram deck (design)

**Date:** 2026-06-18 · **Branch:** `feat/flashcards` · **Goal:** a minimalist, white, elegant
spaced-repetition flashcard app to cram MEDI8403 for the exam on Monday, built from the existing
verified Gotcha cards. Max 500 atomic single-fact cards across all 22 modules.

## Decisions (approved)
- **Atomic facts** — each source Gotcha card is mined for its highest-yield single facts
  (cut-offs, doses, timing windows, first-line answers, classic MCQ traps), written as tight Q→A.
- **All modules, smart-capped to 500** — slots allocated proportionally to module size.
- Standalone page; the existing dark reading site (`index.html`) is untouched.
- Content is **extraction/rephrasing of already-verified cards**, never new medical claims.

## Files
```
flashcards.html        app shell (open / serve this)
flashcards.css         minimalist white theme (own stylesheet)
flashcards.js          deck build + SM-2-lite scheduler + localStorage
data/flashcards/*.js   generated atomic cards, one file per module
                       (self-register into window.FLASHCARDS.cards)
```
`flashcards.html` also loads the original `data/*.js` (`window.GOTCHA`) so each atomic card can join
back to its parent via `parentId` for the "Confused?" full-explanation panel (incl. image).

## Atomic card shape
```js
{ id:"cardiovascular-1-a", module:"Cardiovascular", moduleId:"cardiovascular",
  subarea:"Acute coronary syndromes", front:"Post-ACS LDL-C target?",
  back:"<1.4 mmol/L AND ≥50% reduction from baseline", parentId:"cardiovascular-1",
  image:null }   // image set only when the fact itself is image-anchored (ECG/rash/film)
```

## Per-module budgets (sum ≈ 487 ≤ 500)
gynaecology 69, paediatrics 62, obstetrics 58, respiratory 21, gastroenterology 21, renal 20,
haematology 20, cardiovascular 19, surg-acute-abdomen 19, infectious 18, endocrine 17,
dermatology 16, neurology 16, oncology 16, surg-perioperative 16, rheumatology 15, surg-safety 14,
surg-breast-endocrine 11, eyesent 10, immunology 10, surg-urology 10, surg-vascular 9.

## Scheduler (SM-2-lite) + memory
- Per-card state in `localStorage["gn_fc_v1"]`: `{ease, intervalDays, dueDate, reps, lapses}`.
- Grades **Again / Hard / Good / Easy**; day-level due dates; survives reload; Reset button.
- **Cram mode**: drill a module / all cards ignoring schedule, re-queue missed until cleared
  (the exam is days away, so cram is the primary mode).
- Module on/off toggles. Keyboard: Space = flip, 1–4 = grade.

## UI
White, generous whitespace, one calm accent, single centered card with a subtle flip, big tap
targets, mobile-first (iPhone), iOS-PWA meta (white theme-color, `height:100vh`). Top: progress +
mode/module menu. Back of card: answer (+ image when relevant) + `Confused? full explanation ▾`
expanding the parent Gotcha card. Footer: New/Learning/Due counts + streak.

## Build method
Parallel per-module subagents (Sonnet) extract atomic cards into `data/flashcards/<module>.js`;
main loop builds the shell, wires the join, verifies total ≤ 500, browser-tests flip/grade/
persistence/images, then merges `feat/flashcards` → `main` (--no-ff) and pushes.
