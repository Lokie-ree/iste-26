# Lab Guide Architecture Alignment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Correct all factual errors in the three lab guide components and align their student pages to the phases of the as-built modules.

**Architecture:** Three independent files, each corrected in isolation. M1 is content-only edits (no structural change). M2 and M3 each replace one student page component, with accompanying teacher section and PAGES array updates. All new content uses existing labPrimitives — no new primitives required.

**Tech Stack:** React 19, TypeScript, Vite. Verification: `pnpm typecheck` (no test runner configured). All files in `src/components/lab-guides/`.

---

## Reference

- Spec: `docs/superpowers/specs/2026-05-02-lab-guide-architecture-alignment-design.md`
- Architecture docs: `docs/modules/M1_ARCHITECTURE.md`, `M2_ARCHITECTURE.md`, `M3_ARCHITECTURE.md`
- Existing primitives: `src/components/lab-guides/labPrimitives.tsx` — `Badge`, `DotGrid`, `ProgressDots`, `PromptBox`, `ScoredLine`, `SectionLabel`, `WriteLines`

---

## Task 1: M1 — RigidMotions.tsx — 4 content corrections

**Files:**
- Modify: `src/components/lab-guides/RigidMotions.tsx`

M1's pre-image triangle is `A(−3,−2) B(1,−1) C(−2,1)` — not the canonical M2/M3 triangle. The module uses clockwise-only rotations.

- [ ] **Step 1: Fix ImplementationPage SHAPE FAMILY**

In `RigidMotions.tsx`, find `ImplementationPage`. Replace:
```tsx
{ label: "SHAPE FAMILY", value: "Scalene triangle — A(1,1) B(4,2) C(2,4). This triangle carries through all three modules in the progression." },
```
With:
```tsx
{ label: "SHAPE FAMILY", value: "Scalene triangle — A(−3,−2) B(1,−1) C(−2,1). This is the M1 pre-image; the canonical triangle A(1,1) B(4,2) C(2,4) is used in M2 and M3." },
```

- [ ] **Step 2: Fix TranslationsPage REFERENCE box**

In `TranslationsPage`, replace:
```tsx
<span className="font-mono text-[12px] text-[var(--lab-white)]">A(1,1)  B(4,2)  C(2,4)</span>
```
With:
```tsx
<span className="font-mono text-[12px] text-[var(--lab-white)]">A(−3,−2)  B(1,−1)  C(−2,1)</span>
```

- [ ] **Step 3: Fix CapstonePage REFERENCE box**

In `CapstonePage`, replace:
```tsx
<span className="font-mono text-[12px] text-[var(--lab-white)]">A(1,1)  B(4,2)  C(2,4)</span>
```
With:
```tsx
<span className="font-mono text-[12px] text-[var(--lab-white)]">A(−3,−2)  B(1,−1)  C(−2,1)</span>
```

- [ ] **Step 4: Fix RotationsPage — direction and second prompt**

In `RotationsPage`, replace:
```tsx
<p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[12px] mb-[6px]">
  90° counterclockwise about the origin
</p>
<PromptBox>PREDICT: Where will the triangle land?</PromptBox>
<DotGrid height={110} />
<p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">
  180° about the origin
</p>
<PromptBox>PREDICT: What happens to (x, y)?</PromptBox>
```
With:
```tsx
<p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[12px] mb-[6px]">
  90° clockwise about the origin
</p>
<PromptBox>PREDICT: Where will the triangle land?</PromptBox>
<DotGrid height={110} />
<p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">
  180° about the origin
</p>
<PromptBox>PREDICT: Try 180° — what do you notice about both coordinates?</PromptBox>
```

- [ ] **Step 5: Typecheck**

```bash
pnpm typecheck
```
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/lab-guides/RigidMotions.tsx
git commit -m "fix(lab-guide): correct M1 triangle vertices and rotation direction"
```

---

## Task 2: M2 — Dilations.tsx — teacher section

**Files:**
- Modify: `src/components/lab-guides/Dilations.tsx`

Five teacher section changes: Cover title, StandardsPage (badge + standard entry + ALD), PhasesPage (Phase 01 and 04 descriptions), ImplementationPage (What to Watch For), ClassroomPage (Phase 1 move, Phase 3 rename, add Phase 4 entry).

- [ ] **Step 1: Fix Cover title**

Replace:
```tsx
<h1 className="font-sans text-[28px] font-bold text-[var(--lab-white)] mb-[16px] leading-[1.2]">
  & Right Triangles
</h1>
```
With:
```tsx
<h1 className="font-sans text-[28px] font-bold text-[var(--lab-white)] mb-[16px] leading-[1.2]">
  & Similarity
</h1>
```

- [ ] **Step 2: Fix Cover — badge; then StandardsPage — standard entry, Level 5 ALD**

The `<Badge color={T.info}>G-SRT bridge</Badge>` badge is in the **`Cover` function** (around line 28), not inside `StandardsPage`. Replace in `Cover`:
```tsx
<Badge color={T.info}>G-SRT bridge</Badge>
```
With:
```tsx
<Badge>8.G.A.5</Badge>
```

In `StandardsPage`, replace the standards array (currently 2 entries — `8.G.A.3` and `8.G.A.4`) with 3 entries:
```tsx
{[
  { code: "8.G.A.3", desc: "Describe the effect of dilations, translations, rotations, and reflections on two-dimensional figures using coordinates. Dilations use the origin as center of dilation." },
  { code: "8.G.A.4", desc: "Explain that a two-dimensional figure is similar to another if the second can be obtained by a sequence of rotations, reflections, translations, and dilations. Describe the sequence that exhibits similarity." },
  { code: "8.G.A.5", desc: "Use informal arguments to establish facts about the AA criterion for triangle similarity." },
].map(({ code, desc }) => (
```

In `StandardsPage`, replace the Level 5 ALD entry (current):
```tsx
{ level: "Level 5", label: "Advanced", colorClass: "text-[var(--lab-info)]", desc: "Describe sequences combining rigid motions and dilations to exhibit similarity. Explain why corresponding angles are congruent and sides are proportional." },
```
With:
```tsx
{ level: "Level 5", label: "Advanced", colorClass: "text-[var(--lab-info)]", desc: "Describe sequences combining rigid motions and dilations to exhibit similarity. Apply the AA criterion to determine whether two triangles are similar." },
```

- [ ] **Step 3: Fix PhasesPage — Phase 01 and Phase 04 descriptions**

In the `phases` array, replace Phase 01:
```tsx
{ num: "01", title: "Scale Factor Exploration", desc: "Students drag a ghost triangle to predict where the dilated image will land. Scale factor is given; students reason spatially about where each vertex ends up. No coordinates — pure manipulation. Building the spatial foundation for what dilation means." },
```

Replace Phase 04:
```tsx
{ num: "04", title: "AA Criterion Capstone", desc: "Discover that two angle pairs are sufficient to establish similarity (AA). Test triangle pairs — prove similarity by describing a transformation sequence, or prove non-similarity by showing angle mismatch. Three pairs; one is not similar." },
```

- [ ] **Step 4: Fix ImplementationPage — remove slider reference from watch-for, add NOT SIMILAR entry**

In the `What to Watch For` array, the entry "Confusing dilation with translation" has this `desc`:
```tsx
"Students may think 'bigger' means 'moved right and up.' The ray visualization in Phase 2 corrects this — growth happens along rays from the origin."
```
This is already slider-free — no change needed.

Add a new entry at the end of the watch-for array (before "Engagement signals"):
```tsx
{ title: "The NOT SIMILAR path", desc: "Phase 4 has one non-similar pair. Students who rely only on visual impression may mistake it for similar. The angle evidence is the proof. Watch for students who reach for sequences first and then get stuck." },
```

- [ ] **Step 5: Fix ClassroomPage — Phase 1 move (already slider-free), rename capstone → Phase 3, add Phase 4 entry**

The "During Phase 1" move already reads correctly (no slider reference). No change needed.

Replace `"During the capstone"` key:
```tsx
{ when: "During Phase 3", move: "Pairs should compare: 'I used translate then dilate. You used dilate then translate. Did we get the same result?' This surfaces commutativity questions from Module 1 in a new context." },
```

Add after it:
```tsx
{ when: "During Phase 4 (AA Criterion)", move: "Phase 4 introduces a new kind of question: not 'find the sequence' but 'is there one?' Students who encounter the non-similar pair for the first time often try to force a sequence. Let the angle labels do the work." },
```

- [ ] **Step 6: Typecheck**

```bash
pnpm typecheck
```
Expected: no errors.

- [ ] **Step 7: Commit**

```bash
git add src/components/lab-guides/Dilations.tsx
git commit -m "fix(lab-guide): align M2 teacher section — title, 8.G.A.5, AA capstone phase descriptions"
```

---

## Task 3: M2 — Dilations.tsx — student pages

**Files:**
- Modify: `src/components/lab-guides/Dilations.tsx`

Delete `RightTrianglesPage`, add `AAPage`, rewrite `CapstonePage`, update PAGES array.

- [ ] **Step 1: Delete RightTrianglesPage and add AAPage in its place**

Delete the entire `RightTrianglesPage` function. In its place, add:

```tsx
function AAPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">AA CRITERION</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">two angle pairs → similarity</span>
      </div>
      <ScoredLine />

      <PromptBox>Two triangles are shown. Before angles are revealed — predict: are they similar?</PromptBox>
      <DotGrid height={100} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">
        Reveal Matches
      </p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[10px] my-[6px]">
        <div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-2">
          <span>Angle pair 1:  ___ ° = ___ °</span>
          <span>Angle pair 2:  ___ ° = ___ °</span>
        </div>
      </div>
      <div className="px-[8px]">
        <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mt-[4px]">How many angle pairs do you need to match to be sure the triangles are similar?</p>
      </div>
      <WriteLines count={2} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">
        A non-similar pair
      </p>
      <p className="font-sans text-[11px] text-[var(--lab-text)] mb-[6px] leading-[1.4]">
        Record the angle values for each triangle. Do any pairs match?
      </p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[10px] my-[6px]">
        <div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-2">
          <span>Triangle 1:  ___ °,  ___ °,  ___ °</span>
          <span>Triangle 2:  ___ °,  ___ °,  ___ °</span>
        </div>
      </div>
      <div className="px-[8px]">
        <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mt-[4px]">Why are these triangles NOT similar?</p>
      </div>
      <WriteLines count={2} />

      <PromptBox>Write the AA criterion in your own words.</PromptBox>
      <WriteLines count={3} />

      <ProgressDots total={5} current={2} label="Discovery Log" />
    </div>
  );
}
```

- [ ] **Step 2: Rewrite CapstonePage**

Replace the entire `CapstonePage` function with:

```tsx
function CapstonePage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.info}>Discovery Log</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-info)] mt-[12px] mb-[4px]">
        Capstone: AA Criterion
      </h2>
      <ScoredLine />

      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        Three triangle pairs. For each: prove they are similar (describe a sequence) OR prove they are not similar (show the angles don't match).
      </p>

      {(["1", "2", "3"] as const).map((n) => (
        <div key={n} className="my-[14px]">
          <p className="font-mono text-[13px] font-bold text-[var(--lab-accent)] mb-[8px]">PAIR {n}</p>
          <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[8px] my-[4px]">
            <div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex justify-between">
              <div className="flex flex-col gap-1">
                <span>Pre-image angles</span>
                <span>___ °  ___ °  ___ °</span>
              </div>
              <div className="flex flex-col gap-1 text-right">
                <span>Target angles</span>
                <span>___ °  ___ °  ___ °</span>
              </div>
            </div>
          </div>
          <div className="mt-[4px] mb-[4px] ml-[10px]">
            <span className="font-mono text-[9px] text-[var(--lab-text-dim)] tracking-[0.1em]">SIMILAR or NOT SIMILAR?</span>
            <div className="h-[18px] border-b border-[var(--lab-border)]" />
          </div>
          <div className="mt-[4px] mb-[4px] ml-[10px]">
            <span className="font-mono text-[9px] text-[var(--lab-text-dim)] tracking-[0.1em]">YOUR EVIDENCE</span>
          </div>
          <WriteLines count={2} />
        </div>
      ))}

      <ScoredLine />
      <PromptBox>What is the minimum evidence needed to prove two triangles are similar?</PromptBox>
      <WriteLines count={3} />

      <ProgressDots total={5} current={3} label="Discovery Log" />
    </div>
  );
}
```

- [ ] **Step 3: Update PAGES array**

Replace:
```tsx
{ id: "right-triangles", label: "Right △", Component: RightTrianglesPage },
```
With:
```tsx
{ id: "aa-criterion", label: "AA Criterion", Component: AAPage },
```

- [ ] **Step 4: Typecheck**

```bash
pnpm typecheck
```
Expected: no errors. If `RightTrianglesPage` is referenced anywhere else, the error will name the location — delete that reference.

- [ ] **Step 5: Commit**

```bash
git add src/components/lab-guides/Dilations.tsx
git commit -m "fix(lab-guide): replace M2 Right Triangles page with AA Criterion, rewrite capstone"
```

---

## Task 4: M3 — PythagoreanTheorem.tsx — teacher section

**Files:**
- Modify: `src/components/lab-guides/PythagoreanTheorem.tsx`

Four teacher section changes: StandardsPage precision note, PhasesPage (4-phase structure), ImplementationPage (converse watch-for, remove 3D), ClassroomPage (all five moves relabeled/rewritten).

- [ ] **Step 1: Fix StandardsPage — 8.G.B.6 precision note**

In the standards array, replace the current 8.G.B.6 entry:
```tsx
{ code: "8.G.B.6", desc: "Explain a proof of the Pythagorean Theorem and its converse using the area of squares." },
```
With:
```tsx
{ code: "8.G.B.6", desc: "Explain a proof of the Pythagorean Theorem and its converse using the area of squares. Phase 1 builds this conceptual foundation before the theorem is applied in Phases 2–4." },
```

- [ ] **Step 2: Fix PhasesPage — 4-phase structure, no drag, no 3D capstone**

Replace the current phases array (lines starting at `{ num: "01", title: "Area Exploration"...`):
```tsx
        { num: "01", title: "Area Exploration", desc: "Students manipulate squares built on each side of a right triangle. Drag, resize, observe. The visual proof emerges: the two smaller squares tile perfectly into the larger one. No formula yet — just area." },
        { num: "02", title: "Predict & Reveal: Side Lengths", desc: "Given two sides, predict the third. The reveal shows the calculation alongside the visual proof. Students see that a² + b² = c² is a description of what the areas already showed them." },
        { num: "03", title: "Coordinate Distance", desc: "The earned reveal: connect the theorem to distance. Two points on a coordinate grid. Draw the right triangle. The hypotenuse IS the distance. Students discover the distance formula as a consequence of what they already know." },
        { num: "04", title: "Capstone: Real-World & 3D", desc: "Multi-step problems in context. Find the diagonal of a rectangular prism. Calculate the distance a drone travels. Level 5 — applying the theorem in situations that require constructing the right triangle first." },
```
With:
```tsx
{[
  { num: "01", title: "Visual Proof", desc: "Students predict the area of the hypotenuse square numerically for known Pythagorean triples. The relationship a² + b² = c² is earned as a formula label for what the squares already showed. No drag — the interaction is numeric input." },
  { num: "02", title: "Converse", desc: "Does a² + b² = c² hold? Students test right and non-right triangles with a YES/NO toggle and a numeric check. Seeing the relationship fail on a non-right triple makes the converse meaningful." },
  { num: "03", title: "Unknown Side Lengths", desc: "Apply the theorem to find the missing leg or hypotenuse. The progression from finding c to isolating a leg reveals whether students understand the equation structurally." },
  { num: "04", title: "Coordinate Distance", desc: "Construct the hidden right triangle on a coordinate grid; the hypotenuse IS the distance. The distance formula is earned as a consequence of what students already know." },
].map(({ num, title, desc }) => (
```

Replace the philosophy callout text:
```tsx
<p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[4px]">See the proof before you see the formula.</p>
<p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[8px]">The equation names what the squares already showed.</p>
```
(This is already correct — no change needed here.)

- [ ] **Step 3: Fix ImplementationPage — update converse watch-for entry, remove 3D capstone entry**

In the `What to Watch For` array, replace the "The non-right triangle test" entry:
```tsx
{ title: "The non-right triangle test (Phase 2)", desc: "Students should see 5² + 6² ≠ 9². Let them verify. The converse is only meaningful if they've seen it fail." },
```

Remove the "3D extension in capstone" entry entirely:
```tsx
{ title: "3D extension in capstone", desc: "Some students will struggle to construct the right triangle in 3D problems. Encourage them to draw the 2D slice first, then extend. This is genuine Type III reasoning." },
```

- [ ] **Step 4: Fix ClassroomPage — all five moves**

Replace the entire moves array:
```tsx
{[
  { when: "Before the module", move: "Draw a right triangle on the board. Build squares on each side. Ask: 'Is there a relationship between the areas of these squares?' Let students conjecture." },
  { when: "During Phase 1", move: "This is the proof phase. Students should spend real time here. Resist jumping to the formula. The visual proof IS the understanding — the formula is just shorthand." },
  { when: "During Phase 2 (Converse)", move: "Watch students test whether 5-6-9 is a right triangle. Let them compute 5² + 6² and compare to 9². The converse is meaningful only after they've seen the relationship fail. Resist explaining why — the arithmetic speaks for itself." },
  { when: "At Phase 3 (Unknown Side Lengths)", move: "Watch for students who can find the hypotenuse but struggle to isolate a leg. The equation is structural — c² − a² = b². If a student always places the unknown as c, redirect to the visual: 'Which square is missing? Set up the equation from that side.' This reveals whether they understand the theorem or just the most common procedure." },
  { when: "At Phase 4 (Coordinate Distance)", move: "Connect explicitly: 'You already know how to find the third side. What if the two points ARE two vertices of a right triangle?' Let them construct the third vertex themselves." },
].map(({ when, move }) => (
```

- [ ] **Step 5: Typecheck**

```bash
pnpm typecheck
```
Expected: no errors.

- [ ] **Step 6: Commit**

```bash
git add src/components/lab-guides/PythagoreanTheorem.tsx
git commit -m "fix(lab-guide): correct M3 teacher section — phase structure, converse, classroom moves"
```

---

## Task 5: M3 — PythagoreanTheorem.tsx — student pages

**Files:**
- Modify: `src/components/lab-guides/PythagoreanTheorem.tsx`

Add `ConversePage`, update `ProgressDots` indices on `SideLengthsPage` and `CoordinateDistancePage` (they shift right by one), fix `CoordinateDistancePage` example points, delete `CapstonePage`, reorder PAGES array.

- [ ] **Step 1: Add ConversePage after AreaProofPage**

Insert the following new function after `AreaProofPage` and before `SideLengthsPage`:

```tsx
function ConversePage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">THE CONVERSE</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">a² + b² = c²?</span>
      </div>
      <ScoredLine />

      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        The theorem says: IF a triangle is a right triangle, THEN a² + b² = c². Does the reverse hold?
      </p>

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Test 1</p>
      <div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[4px]">
        <span className="font-mono text-[12px] text-[var(--lab-white)]">Sides: 6, 8, 10</span>
      </div>
      <PromptBox>Calculate a² + b². Does it equal c²? Is this a right triangle?</PromptBox>
      <WriteLines count={2} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Test 2</p>
      <div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[4px]">
        <span className="font-mono text-[12px] text-[var(--lab-white)]">Sides: 5, 6, 9</span>
      </div>
      <PromptBox>Calculate a² + b². Does it equal c²? Is this a right triangle?</PromptBox>
      <WriteLines count={2} />

      <PromptBox>REVEAL: State the converse of the Pythagorean Theorem in your own words.</PromptBox>
      <WriteLines count={3} />

      <ProgressDots total={5} current={1} label="Discovery Log" />
    </div>
  );
}
```

- [ ] **Step 2: Update SideLengthsPage ProgressDots index**

In `SideLengthsPage`, replace:
```tsx
<ProgressDots total={5} current={1} label="Discovery Log" />
```
With:
```tsx
<ProgressDots total={5} current={2} label="Discovery Log" />
```

- [ ] **Step 3: Fix CoordinateDistancePage — example points and computed values**

Replace:
```tsx
<div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[8px]">
  <span className="font-mono text-[12px] text-[var(--lab-white)]">Point 1: (1, 2)    Point 2: (4, 6)</span>
</div>
```
With:
```tsx
<div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[8px]">
  <span className="font-mono text-[12px] text-[var(--lab-white)]">Point 1: (1, 1)    Point 2: (4, 5)</span>
</div>
```

Replace the computed values block:
```tsx
<div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-1.5">
  <span>Horizontal distance (Δx): ___</span>
  <span>Vertical distance (Δy):   ___</span>
  <span>Distance (hypotenuse):    ___</span>
</div>
```
With:
```tsx
<div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-1.5">
  <span>Horizontal distance (Δx): 3</span>
  <span>Vertical distance (Δy):   4</span>
  <span>Distance (hypotenuse):    5</span>
</div>
```

- [ ] **Step 4: Update CoordinateDistancePage ProgressDots index**

In `CoordinateDistancePage`, replace:
```tsx
<ProgressDots total={5} current={2} label="Discovery Log" />
```
With:
```tsx
<ProgressDots total={5} current={3} label="Discovery Log" />
```

- [ ] **Step 5: Delete CapstonePage**

Delete the entire `CapstonePage` function (the "Real-World & 3D" page). It has no replacement — `ConversePage` fills the slot vacated in the PAGES array.

- [ ] **Step 6: Update PAGES array**

Replace the student-page entries in the PAGES array. Current order:
```tsx
{ id: "area-proof", label: "Area Proof", Component: AreaProofPage },
{ id: "side-lengths", label: "Side Lengths", Component: SideLengthsPage },
{ id: "distance", label: "Distance", Component: CoordinateDistancePage },
{ id: "capstone", label: "Capstone", Component: CapstonePage },
{ id: "notes", label: "Notes", Component: NotesPage },
```
New order:
```tsx
{ id: "area-proof", label: "Area Proof", Component: AreaProofPage },
{ id: "converse", label: "Converse", Component: ConversePage },
{ id: "side-lengths", label: "Side Lengths", Component: SideLengthsPage },
{ id: "distance", label: "Distance", Component: CoordinateDistancePage },
{ id: "notes", label: "Notes", Component: NotesPage },
```

- [ ] **Step 7: Typecheck**

```bash
pnpm typecheck
```
Expected: no errors. If `CapstonePage` is referenced anywhere other than PAGES (it shouldn't be), the error will name the location.

- [ ] **Step 8: Commit**

```bash
git add src/components/lab-guides/PythagoreanTheorem.tsx
git commit -m "fix(lab-guide): add M3 Converse page, remove nonexistent capstone, fix coord distance points"
```

---

## Verification Checklist

After all five tasks are complete:

- [ ] `pnpm typecheck` passes clean
- [ ] Start dev server (`pnpm dev`) and navigate to each lab guide
  - M1: Rotations page shows "90° clockwise"; Implementation shows `A(−3,−2) B(1,−1) C(−2,1)`
  - M2: Cover reads "Dilations & Similarity"; tab bar shows "AA Criterion" not "Right △"; StandardsPage has 8.G.A.5; Capstone page has 3 pair blocks
  - M3: Tab bar shows "Converse" tab between Area Proof and Side Lengths; "Capstone" tab is gone; Coordinate Distance shows points (1,1) and (4,5)
