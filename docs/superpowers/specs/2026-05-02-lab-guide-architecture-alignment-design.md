# Lab Guide Architecture Alignment — Design Spec

**Date:** 2026-05-02  
**Scope:** `src/components/lab-guides/RigidMotions.tsx`, `Dilations.tsx`, `PythagoreanTheorem.tsx`  
**Approach:** Fact-fix + align student pages to real module phases (Approach B)

---

## Problem Statement

The three lab guide components contain factual errors and structural fiction relative to the as-built modules described in `docs/modules/M1_ARCHITECTURE.md`, `M2_ARCHITECTURE.md`, and `M3_ARCHITECTURE.md`. Specific issues:

- M1: Wrong pre-image triangle vertices throughout; rotation direction listed as counterclockwise when module is clockwise-only.
- M2: Cover title and a student page reference right-triangle content (M3's domain). Standards missing 8.G.A.5. Phase 4 described as "Similarity Sequences" when it is the AA Criterion capstone.
- M3: Phase structure omits the Converse phase entirely; includes a nonexistent "Real-World & 3D Capstone"; coordinate distance example uses points that don't match any module round.

**Alignment principle:** Tight on facts (every factual error corrected), loose on examples (discovery log pages use representative content from real module rounds but are not locked to specific round numbers).

---

## M1 — RigidMotions.tsx

### Scope
No structural changes. Same 11 pages, same order. Four targeted content corrections.

### Changes

**ImplementationPage — SHAPE FAMILY field**
- Wrong: `A(1,1) B(4,2) C(2,4)` (canonical triangle from M2/M3)
- Correct: `A(−3,−2) B(1,−1) C(−2,1)` (M1 pre-image per M1_ARCHITECTURE.md §Round Definitions)

**TranslationsPage — REFERENCE box**
- Same vertex correction: `A(1,1) B(4,2) C(2,4)` → `A(−3,−2) B(1,−1) C(−2,1)`

**CapstonePage — REFERENCE box**
- Same vertex correction

**RotationsPage — rotation descriptions**
- Wrong: "90° counterclockwise about the origin"
- Correct: "90° clockwise about the origin"
- Second rotation prompt updated from "180° about the origin / What happens to (x, y)?" to reflect that the module offers 90°, 180°, and 270° CW options (all clockwise). Prompt revised to: "Try 180° — what do you notice about both coordinates?"

---

## M2 — Dilations.tsx

### Scope
One page replaced (`right-triangles` → `aa-criterion`). `CapstonePage` rewritten. Teacher section updated in five places.

### Structural change
`PAGES` array: replace `{ id: "right-triangles", label: "Right △", Component: RightTrianglesPage }` with `{ id: "aa-criterion", label: "AA Criterion", Component: AAPage }`. Page count stays at 11.

### Teacher section changes

**Cover**
- Title line 2: "& Right Triangles" → "& Similarity"  
  (Full title becomes "Dilations & Similarity" across two `<h1>` lines)

**StandardsPage**
- Remove `<Badge color={T.info}>G-SRT bridge</Badge>`; replace with `<Badge>8.G.A.5</Badge>`
- Add 8.G.A.5 standard entry: "Use informal arguments to establish facts about the AA criterion for triangle similarity."
- Level 5 ALD description updated to reference AA: "Describe sequences combining rigid motions and dilations to exhibit similarity. Apply the AA criterion to determine whether two triangles are similar."

**PhasesPage**
- Phase 01 description: Remove "slider" reference. Interaction is ghost drag from pre-image position, not a slider.
- Phase 04 description: Replace "Capstone: Similarity Sequences" with "AA Criterion Capstone." New description: "Discover that two angle pairs are sufficient to establish similarity (AA). Test triangle pairs — prove similarity by describing a transformation sequence, or prove non-similarity by showing angle mismatch. Three pairs; one is not similar."

**ImplementationPage — What to Watch For**
- Remove any slider references
- Add entry: "The NOT SIMILAR path — Phase 4 has one non-similar pair. Students who rely only on visual impression may mistake it for similar. The angle evidence is the proof. Watch for students who reach for sequences first and then get stuck."

**ClassroomPage**
- "During Phase 1" move: replace slider reference with ghost drag + rays language
- Add "During Phase 4" move: "Phase 4 introduces a new kind of question: not 'find the sequence' but 'is there one?' Students who encounter the non-similar pair for the first time often try to force a sequence. Let the angle labels do the work."

### Student page changes

**RightTrianglesPage → AAPage (new)**

Content drawn from `aa-discover` and `aa-confirm` rounds.

Structure:
- Header: "AA CRITERION" / subheader: "two angle pairs → similarity"
- Intro prompt: "Two triangles are shown. Before angles are revealed — predict: are they similar?"
- `DotGrid` for sketch
- "REVEAL MATCHES" section: record matching angle pairs (two labeled rows: Pair 1 / Pair 2)
- `WriteLines`: "How many angle pairs do you need to match to be sure the triangles are similar?"
- Second pair section: one non-similar pair — record angle values, explain why the triangles are NOT similar
- `WriteLines`: "Write the AA criterion in your own words."

**CapstonePage (rewritten)**

Content drawn from `capstone-final` round (3 pairs, one not-similar).

Structure:
- Header: "CAPSTONE: AA CRITERION" / color: `T.info`
- Intro: "Three triangle pairs. For each: prove they are similar (describe a sequence) OR prove they are not similar (show the angles don't match)."
- Three pair blocks, each with:
  - "PAIR N" label
  - Two-column angle record area: Pre-image angles / Target angles
  - Field: "SIMILAR or NOT SIMILAR?" with line
  - `WriteLines` (2): "Your evidence:"
- Final `PromptBox`: "What is the minimum evidence needed to prove two triangles are similar?"
- `WriteLines` (3)

---

## M3 — PythagoreanTheorem.tsx

### Scope
One page replaced (`capstone` → `converse`). Phase structure corrected in teacher section. Coordinate distance example updated. Page count stays at 11.

### Structural change
`PAGES` array: replace `capstone` entry with `{ id: "converse", label: "Converse", Component: ConversePage }`. Reorder student pages: `area-proof → converse → side-lengths → distance → notes`.

### Teacher section changes

**StandardsPage**
- Keep 8.G.B.6 — Phase 1 ("visual-proof") is an area-based proof activity; Phase 2 directly addresses the converse. Add precision note: "Phase 1 builds the conceptual foundation for 8.G.B.6 through visual area reasoning before applying the theorem (8.G.B.7/8.G.B.8)."

**PhasesPage**
Corrected 4-phase structure:
- **01 Visual Proof** — Students predict the area of the hypotenuse square numerically. The relationship a² + b² = c² is earned as a formula label for what the squares already showed. (Replaces "Area Exploration with drag/resize" — the module uses numeric input, not drag.)
- **02 Converse** — Does a² + b² = c² hold? Students test right and non-right triangles with YES/NO toggle + numeric check. Seeing the relationship break on a non-right triple makes the converse meaningful.
- **03 Unknown Side Lengths** — Apply the theorem to find the missing leg or hypotenuse.
- **04 Coordinate Distance** — Construct the hidden right triangle on a coordinate grid; the hypotenuse IS the distance. The distance formula is earned as a consequence.

Remove all "Real-World & 3D Capstone" references.

**ImplementationPage — What to Watch For**
- Add: "The non-right triangle test (Phase 2) — students should see 5² + 6² ≠ 9². Let them verify. The converse is only meaningful if they've seen it fail."
- Remove: 3D capstone and Type III reasoning references.

**ClassroomPage**
- "During Phase 2" → now references the Converse phase (non-right triangle test), not side lengths.
- "At Phase 3" → now references Unknown Side Lengths.
- "During the capstone" move → replaced with "At Phase 4" move: coordinate distance connection. "Connect explicitly: 'You already know how to find the third side. What if the two points ARE two vertices of a right triangle?' Let them construct the third vertex themselves."

### Student page changes

**CapstonePage → ConversePage (new)**

Content drawn from `converse-6810` (right, answer YES) and `converse-569` (non-right, answer NO) rounds.

Structure:
- Header: "THE CONVERSE" / subheader: "a² + b² = c²?"
- Intro: "The theorem says: IF a triangle is a right triangle, THEN a² + b² = c². Does the reverse hold?"
- Right-triangle test block:
  - Reference: "Sides: 6, 8, 10"
  - `PromptBox`: "Calculate a² + b². Does it equal c²? Is this a right triangle?"
  - `WriteLines` (2)
- Non-right triangle test block:
  - Reference: "Sides: 5, 6, 9"
  - `PromptBox`: "Calculate a² + b². Does it equal c²? Is this a right triangle?"
  - `WriteLines` (2)
- `PromptBox`: "REVEAL: State the converse of the Pythagorean Theorem in your own words."
- `WriteLines` (3)

**CoordinateDistancePage — example points**
- Wrong: `Point 1: (1, 2)    Point 2: (4, 6)` (not a module round)
- Correct: `Point 1: (1, 1)    Point 2: (4, 5)` (hidden 3-4-5 triangle, `coord-345` round)
- Computed values updated: Δx = 3, Δy = 4, distance = 5

**SideLengthsPage — no changes required.** Examples are representative (3-4-5, 5-12-13 families) and the module does use these families, so no correction needed.

---

## Files Modified

| File | Change type |
|------|-------------|
| `src/components/lab-guides/RigidMotions.tsx` | 4 content corrections |
| `src/components/lab-guides/Dilations.tsx` | 1 page replaced, 1 page rewritten, 5 teacher section edits, PAGES array updated |
| `src/components/lab-guides/PythagoreanTheorem.tsx` | 1 page replaced, 4 teacher section edits, 1 student page content fix, PAGES array reordered |

## Out of Scope

- Shell/nav chrome (tabs, PREV/NEXT buttons) — identical across all three files; no changes.
- `labPrimitives.tsx` — no new primitives required; all new content uses existing `DotGrid`, `WriteLines`, `PromptBox`, `ScoredLine`, `SectionLabel`, `ProgressDots`.
- Planning views (`src/components/planning/`) — not lab guides; separate concern.
