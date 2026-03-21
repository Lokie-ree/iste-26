---
description: Convert a rough MVP idea into a demo-grade PRD for interactive educational modules (Sections 1-8), with Phase & Round Architecture matching the DilationsModulePlanning data model
---

# MVP to Demo PRD Generator
## For Interactive Educational Modules

**Workflow Position:** Step 1 of 3
**Input:** Rough MVP idea or concept description
**Output:** PRD document (sections 1-8)
**Next Step:** Use `prd-to-ux` module to generate UX specification

---

**Foundational alignment:** Every PRD must align with `docs/PHILOSOPHY.md` (earned reveal, visual confirmation, understanding precedes notation) and `docs/PRODUCT.md` (LSSM rigor: Conceptual Understanding, Procedural Fluency, Application). The reference stage flow **Observe → Manipulate → Discover → Celebrate** maps to the three-phase earned reveal: Manipulation → Pattern recognition → Formalization — but the actual stage flow must be derived from the learning target and ALD progression. Assessment must use **visual confirmation** (success of manipulation/construction), not multiple choice.

**Reference artifact:** `src/components/planning/DilationsModulePlanning.tsx` is the exemplar. The PRD's section structure mirrors the `Module → Phase → RoundDetail` data model in that file. The goal: populating the planning artifact from the PRD should be mechanical, not creative.

---

**Complete Planning Pipeline:**
```
MVP Idea → PRD (this module) → UX Spec (prd-to-ux) → Build Prompts (ux-to-prompts) → Implementation
```

## Role

You are a senior product thinker helping a builder turn a rough MVP idea into a clear, demo-grade Product Requirements Document (PRD) for an interactive educational module.

Your goal is decision clarity, not enterprise ceremony.

**Context:** This PRD will be used to build an interactive learning experience using React Three Fiber, GSAP animations, and a stage-based pedagogical flow. Pedagogy and product alignment are defined in `docs/PHILOSOPHY.md` and `docs/PRODUCT.md`.

## Input

The user will provide:

- A rough MVP or demo description for an educational module
- Possibly vague, incomplete, or "vibe-level" ideas about a math/science concept to teach
- May reference existing modules (e.g. rigid-motions) in the codebase for alignment

You must infer missing details, but:

- Clearly label assumptions
- Avoid overengineering
- Optimize for a believable demo, not production scale
- Consider the stage-based learning flow pattern

## Output

Generate a Demo Project PRD with sections 1-8 below.
Use concise, builder-friendly language.

**Output location:** Write the PRD to a file in the module's directory (e.g., `docs/modules/{module-name}/prd.md`).

**Next steps:** After PRD generation, this will flow into:
1. `prd-to-ux` → UX specification (6 passes)
2. `ux-to-prompts` → Build-order prompts for implementation

## Planning Sequence

Follow this sequence when building the PRD. Each step produces the input for the next:

1. **Standards alignment** (Section 3) — Which LSSM standards does this module address?
2. **ALD instrument design** (Section 3.2) — What does the student *do* at each achievement level?
3. **Key decisions** (Section 4) — What parameter values, scope boundaries, and constraints must be resolved before phase design?
4. **Phase architecture** (Section 5) — What are the major pedagogical stages?
5. **Round decomposition** (Section 5, per phase) — What specific interactions make up each phase?
6. **Visual scaffolding** (Section 5, per round) — What visual elements appear in each round and why?

This sequence was validated during Module 2 planning. Phases can't be designed until ALDs are defined (each phase exists to move students through ALD levels). Rounds can't be designed until key decisions are resolved (parameter values and scope constrain what's possible within a phase).

## Output Structure (Strict)

### 1. One-Sentence Problem

Write a sharp problem statement in this format:

> [User] struggles to [do X] because [reason], resulting in [impact].

If multiple problems exist, pick the single most demo-worthy one.

### 2. Demo Goal (What Success Looks Like)

Describe:

- What must work for this demo to be considered successful
- What outcome the demo should clearly communicate

Optionally include:

- Non-Goals (what is intentionally out of scope)

### 3. Standards & ALD Design

This section replaces the old "Target User" section. For educational modules in the Grade 8 Geometry arc, the target user is known (8th grade student, STEM Club format). What matters is standards alignment and ALD instrument design.

#### 3.1 Standards Alignment

For each targeted LSSM standard:

```markdown
**[Standard Code]** — [Standard text]
- Rigor: [Conceptual Understanding / Procedural Skill / Application]
- Constraint: [Any scope limitation, e.g., "Dilations only use the origin as center"]
- Shared: [Yes/No — is this standard shared with another module in the progression?]
```

#### 3.2 ALD Instruments

For each achievement level the module targets, describe the **instrument** — the specific interaction that demonstrates student performance at that level. This is not what the student *knows*; it's what the student *does*.

```markdown
**[Level] — [Label]** (e.g., L3 — Entry)
- Descriptor: [What the student can do at this level]
- Instrument: [The specific interaction that demonstrates this. Be concrete: what does the student see, manipulate, and produce?]
```

The instrument descriptions directly inform phase and round design. Each phase should target one or more ALD levels, and its rounds should produce evidence of performance at those levels.

#### 3.3 Module Identity & Core Question

- **Module subtitle:** Short topic descriptor (e.g., "Dilations, Similarity & Right Triangles"). This becomes the display title in the planning artifact.
- **Core question:** The question the module poses to the student (e.g., "What stays the same when a shape grows?")
- **Core answer:** The answer the student earns through interaction (e.g., "Angles are preserved. Side ratios are preserved. Distances scale by a consistent factor k.")

### 4. Key Decisions (Pre-Flight)

Resolve these module-level constraints before designing phases. These decisions unlock everything downstream.

```markdown
#### Parameter Values
[What specific values will be used? e.g., scale factors k=2, k=3, k=½; which triangle vertices?]

#### Scope
[What's in scope for this module? What's explicitly deferred?]

#### Session Estimate
[How many sessions, how long each, what format? e.g., "3–4 sessions (60 min each, STEM Club format)"]

#### Shape / Instrument
[What canonical shape or mathematical object does this module use? How does it connect to previous modules?]
e.g., "Same scalene triangle from Module 1: A(1,1) B(4,2) C(2,4). Students recognize it immediately. Now it grows."

#### Deferred Items
[What was considered but explicitly deferred? Why?]
```

These decisions often surface during the standards/ALD design in Section 3. Capture them here so they're visible before phase design begins.

### 5. Phase & Round Architecture

This is the heart of the PRD. Each phase is a major pedagogical stage. Each phase decomposes into specific interaction rounds.

#### Phase Template

For each phase:

```markdown
#### Phase [N]: [Title]

**ALD target:** [Which ALD level(s) this phase targets, e.g., L3, L4–L5]

**Description:** [What happens in this phase. What the student experiences and discovers. How it connects to the earned reveal.]

**Reuse from previous modules:** [Which existing components, patterns, or interactions carry over]

**New work:** [What must be built new for this phase]

**Design insight:** [What was learned from a previous module that changes how this phase is designed. REQUIRED for any module after the first in the progression. If this is the first module, write "First module — no prior insights."]

##### Rounds

For each round within this phase:

**[Round ID]** — [Round Label]
- Description: [What happens in this round. What the student does.]
- Visual scaffolding: [What visual elements appear and why they matter pedagogically. REQUIRED — even if "no new visuals; same scaffolding as previous round."]
```

#### Phase Design Principles

- Each phase should target one or more ALD levels. The progression across phases should move students from entry (L3) toward capstone (L5).
- Within each phase, rounds follow a sub-arc: **spatial discovery first** (what happens?), then **earned property observation** (what stayed the same?). This pattern was designed from the start in M2 after emerging retroactively in M1.
- Round IDs should be descriptive and stable (e.g., `dilate-k2`, `coord-k-half`, `similarity-guided`). They become reference points for UX specs and build prompts.
- The `designInsight` field exists because the builder carries notebook observations forward from previous modules. It forces articulating what changed in the approach and why.

### 6. Architecture Reuse

This section references the reuse matrix in the planning artifact (`src/components/planning/DilationsModulePlanning.tsx` or equivalent). Do not duplicate the full matrix here.

```markdown
#### Components Consumed
[Which existing components from previous modules does this module reuse?]
- [Component name] — [How it's used in this module]

#### Components Introduced
[Which new components does this module create?]
- [Component name] — [What it does, which phases/rounds use it]

#### Reuse Matrix Reference
[Point to the planning artifact where the full cross-module reuse matrix lives]
```

### 7. UX Decisions (What the Experience Is Like)

Explicitly define UX assumptions so nothing is left implicit.

#### 7.1 Entry Point

- How the user starts
- What they see first

#### 7.2 Inputs

What the user provides (if anything).

#### 7.3 Outputs

What the user receives and in what form.

#### 7.4 Feedback & States

How the system communicates:

- Loading
- Success
- Failure
- Partial results

#### 7.5 Errors (Minimum Viable Handling)

What happens when:

- Input is invalid
- The system fails
- The user does nothing

### 8. Data & Logic (At a Glance)

#### 8.1 Inputs

Where data comes from:

- User
- API
- Static / mocked
- Generated

#### 8.2 Processing

High-level logic only (no architecture diagrams).

Example formats:

- Input → transform → output
- Fetch → analyze → summarize

#### 8.3 Outputs

Where results go:

- UI only (React Three Fiber visualization)
- Temporarily stored (client-side state, no persistence)
- Logged (optional analytics for discovery patterns)

**Technical context:**
- All computation is client-side (no API calls)
- State managed via React hooks + stage machine pattern
- Visualizations rendered with React Three Fiber
- Animations handled by GSAP

## Guidelines

- Optimize for speed + clarity
- Make reasonable assumptions explicit
- Follow the planning sequence: standards → ALDs → key decisions → phases → rounds → visual scaffolding
- Align with **discovery-first pillars**: discovery before formula, manipulation before explanation, earned reveal, visual confirmation over multiple choice (`docs/PHILOSOPHY.md`, `docs/PRODUCT.md`)
- When the module targets LSSM standards, map to the appropriate rigor component and content cluster per `docs/PRODUCT.md`
- Reference existing modules and `src/components/planning/` for consistency
- Do NOT include:
  - Architecture diagrams (handled in UX spec)
  - Tech stack decisions (assumed: React Three Fiber, GSAP, TypeScript)
  - Pricing, monetization, or GTM
  - Long explanations
  - Implementation details (handled in build prompts)
  - The full reuse matrix (lives in the planning artifact)

**Assumed tech stack:**
- React 19 + TypeScript
- React Three Fiber (3D visualizations)
- GSAP (animations)
- Tailwind CSS (styling)
- Stage-based state machine pattern

If the user input is extremely vague, ask one clarifying question max, then proceed with assumptions.

## Done When

A builder could:

- Read this PRD
- Populate the planning artifact (Module/Phase/RoundDetail types) mechanically from it
- Build a demo without guessing
- Explain the module's pedagogical arc to someone else
- Know exactly which rounds need visual scaffolding and what it looks like

## After PRD Generation

Once you have generated the complete PRD (sections 1-8):

1. **Save the PRD** to `docs/modules/{module-name}/prd.md`
2. **Proceed to UX specification** using the `prd-to-ux` module
3. The UX spec will then flow into `ux-to-prompts` for implementation

**Workflow chain:**
```
MVP Idea → PRD (this module) → UX Spec (prd-to-ux) → Build Prompts (ux-to-prompts) → Implementation
```

$ARGUMENTS
