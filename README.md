# Grade 8 Geometry — Interactive Lab Guides

Discovery-first learning experiences for the LSSM Grade 8 Geometry progression.  
Built for the IVLA STEM Club. Presented at ISTE LIVE 2026.

**[creative-lab-five.vercel.app](https://creative-lab-five.vercel.app)**

---

## What This Is

Three interactive lab guides that accompany the Grade 8 Geometry module progression. Each guide pairs a teacher section (standards alignment, module phases, implementation notes, classroom integration) with a student discovery log (predict/reveal prompts, dot-grid sketch space, write lines, capstone tasks).

The design principle: **understanding precedes notation**. Students manipulate, observe patterns, and build conceptual grounding before formal symbols appear. The equation is a label for a relationship they've already tested — not a rule to memorize.

## Module Progression

```
Grade 8 Geometry
  ├── Rigid Motions & Congruence        8.G.A.1 · 8.G.A.2 · 8.G.A.3
  ├── Dilations, Similarity & Right Triangles   8.G.A.3 · 8.G.A.4 · G-SRT bridge
  └── Pythagorean Theorem               8.G.B.6 · 8.G.B.7 · 8.G.B.8
```

The same scalene triangle — A(1,1) B(4,2) C(2,4) — carries through all three modules. Students aren't learning new geometric objects between modules; they're discovering new properties of a familiar one.

## Documentation

- [`VISION.md`](./VISION.md) — direction, audience, guiding principles
- [`docs/PHILOSOPHY.md`](./docs/philosophy.md) — discovery-first pedagogy, earned reveals, visual confirmation
- [`docs/PRODUCT.md`](./docs/product.md) — LSSM standards alignment, ALD progression, module design requirements

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS 4
- shadcn/ui

## Development

```bash
pnpm install
pnpm dev
```

## For STEM Club Students

The codebase you're reading is the same one producing the experiences you're using. The lab guides live in `src/components/lab-guides/`. The design tokens that control every color are CSS variables defined in `src/index.css`. Start there.
