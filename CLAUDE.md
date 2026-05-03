# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (Vite)
pnpm build        # Type-check + production build
pnpm typecheck    # Run tsc --noEmit only
pnpm lint         # Run ESLint
pnpm format       # Prettier over all .ts/.tsx files
pnpm preview      # Preview production build locally
```

No test runner is configured. Use `pnpm typecheck` to catch type errors before committing.

## Architecture

This is a **Vite + React 19 + TypeScript** app using **Tailwind CSS v4** and **shadcn/ui** (Radix-based). Package manager is **pnpm**.

The app is a print-style lab guide viewer for Grade 8 Geometry STEM Club sessions (ISTE LIVE 2026). It has two distinct rendering modes:

### Lab Guides (`src/components/lab-guides/`)
Interactive lab booklets for students and teachers. Each guide (`Dilations.tsx`, `RigidMotions.tsx`, `PythagoreanTheorem.tsx`) follows a **page-flip pattern**: a `PAGES` array maps `id → label → Component`, and a Tabs + PREV/NEXT nav renders one page at a time. Pages are split into teacher-facing sections (Standards, Phases, Implementation, Classroom) and student-facing Discovery Log pages.

### Planning Views (`src/components/planning/`)
Module planning and standards alignment documents rendered as interactive reference views. These are for presentation/review, not student interaction.

### Design Token System
All lab guide styling uses `--lab-*` CSS custom properties defined in `src/index.css` (separate from the standard shadcn `--background`/`--foreground` palette). The token object is imported as `labTokens` from `src/lib/labTokens.ts` and aliased as `T` inside guide components. When adding new lab content, use `var(--lab-...)` inline styles or the `labTokens` object — do not use Tailwind semantic tokens (`bg-background`, etc.) inside lab guide components.

### Shared Lab Primitives (`src/components/lab-guides/labPrimitives.tsx`)
Reusable micro-components for all lab guides:
- `ProgressDots` — step indicator showing current page in a section
- `ScoredLine` / `SectionLabel` / `Badge` — typographic chrome
- `PromptBox` — student prompt callout
- `DotGrid` — dot-paper SVG area for sketching predictions
- `WriteLines` — lined writing area

### Path Alias
`@/` resolves to `src/` (configured in Vite and tsconfig).

## Content Domain

Modules implement a **discovery-first pedagogy**: manipulation before explanation, spatial reasoning before coordinate rules, "earned reveal" of formal notation. See `docs/PRODUCT.md` for LSSM standards alignment and `docs/PHILOSOPHY.md` for pedagogical principles. Understanding these documents is necessary context for making content decisions.

The canonical triangle used in M2 and M3 is **A(1,1) B(4,2) C(2,4)**. M1 uses a different pre-image: **A(−3,−2) B(1,−1) C(−2,1)**.
