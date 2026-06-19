import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { mergeStates } = require('../flashcards-sync.js');

test('sched: more-recently-reviewed card wins (greater last)', () => {
  const a = { mutatedAt: 1, sched: { x: { last: 10, reps: 3, ivl: 5 } } };
  const b = { mutatedAt: 2, sched: { x: { last: 12, reps: 1, ivl: 2 } } };
  const m = mergeStates(a, b);
  assert.equal(m.sched.x.last, 12);
  assert.equal(m.sched.x.reps, 1);
});

test('sched: tie on last broken by greater reps', () => {
  const a = { sched: { x: { last: 5, reps: 4 } } };
  const b = { sched: { x: { last: 5, reps: 2 } } };
  assert.equal(mergeStates(a, b).sched.x.reps, 4);
});

test('sched: union of card ids from both sides', () => {
  const a = { sched: { x: { last: 1, reps: 1 } } };
  const b = { sched: { y: { last: 1, reps: 1 } } };
  const m = mergeStates(a, b);
  assert.deepEqual(Object.keys(m.sched).sort(), ['x', 'y']);
});

test('history: per-day max', () => {
  const a = { history: { '2026-06-18': 10, '2026-06-19': 2 } };
  const b = { history: { '2026-06-19': 5 } };
  assert.deepEqual(mergeStates(a, b).history, { '2026-06-18': 10, '2026-06-19': 5 });
});

test('log: union, dedup by ts+id, newest first, capped at 60', () => {
  const a = { log: [{ ts: 200, id: 'a', g: 2 }, { ts: 100, id: 'b', g: 1 }] };
  const b = { log: [{ ts: 200, id: 'a', g: 2 }, { ts: 300, id: 'c', g: 3 }] };
  const m = mergeStates(a, b);
  assert.deepEqual(m.log.map((e) => e.ts), [300, 200, 100]); // sorted desc, deduped
  const big = { log: Array.from({ length: 80 }, (_, i) => ({ ts: i, id: 'k' + i })) };
  assert.equal(mergeStates(big, {}).log.length, 60);
});

test('flags: last-write-wins by mutatedAt honours un-starring', () => {
  const a = { mutatedAt: 100, starred: { x: true, y: true } };
  const b = { mutatedAt: 200, starred: { x: true } }; // y un-starred on the newer device
  const m = mergeStates(a, b);
  assert.deepEqual(m.starred, { x: true }); // newer whole map wins
});

test('prefs: newer mutatedAt wins; falls back when newer lacks the field', () => {
  const a = { mutatedAt: 100, theme: 'dark', fontSize: 1.2 };
  const b = { mutatedAt: 200, theme: 'light' };
  const m = mergeStates(a, b);
  assert.equal(m.theme, 'light');     // from newer
  assert.equal(m.fontSize, 1.2);      // newer omitted it -> fall back to older
});

test('streak: greater last day wins; studied same-day takes max n', () => {
  assert.equal(mergeStates({ streak: { count: 3, last: 9 } }, { streak: { count: 9, last: 7 } }).streak.last, 9);
  const m = mergeStates({ studied: { day: 5, n: 4 } }, { studied: { day: 5, n: 7 } });
  assert.deepEqual(m.studied, { day: 5, n: 7 });
});

test('missedToday: same day unions ids', () => {
  const m = mergeStates({ missedToday: { day: 5, ids: ['a', 'b'] } }, { missedToday: { day: 5, ids: ['b', 'c'] } });
  assert.deepEqual(m.missedToday.ids.sort(), ['a', 'b', 'c']);
});

test('idempotent on key fields: merge(a,a) preserves a', () => {
  const a = {
    mutatedAt: 500, v: 1,
    sched: { x: { last: 3, reps: 2, ivl: 4 } },
    starred: { x: true }, enabled: { cardiovascular: true },
    theme: 'dark', history: { '2026-06-19': 4 },
    streak: { count: 2, last: 3 }, studied: { day: 3, n: 4 }, log: [{ ts: 9, id: 'x' }],
  };
  const m = mergeStates(a, a);
  assert.deepEqual(m.sched, a.sched);
  assert.deepEqual(m.starred, a.starred);
  assert.equal(m.theme, 'dark');
  assert.equal(m.mutatedAt, 500);
});

test('does not throw on empty / partial / null inputs', () => {
  assert.doesNotThrow(() => mergeStates(null, undefined));
  assert.doesNotThrow(() => mergeStates({}, { sched: { x: {} } }));
  const m = mergeStates(undefined, undefined);
  assert.equal(m.v, 1);
  assert.deepEqual(m.sched, {});
});
