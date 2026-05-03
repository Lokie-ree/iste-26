import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { labTokens } from "@/lib/labTokens";
import { Badge, DotGrid, ProgressDots, PromptBox, ScoredLine, SectionLabel, WriteLines } from "@/components/lab-guides/labPrimitives";

const T = labTokens;

// ── PAGES ─────────────────────────────────────────────────────

function Cover() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <SectionLabel>Lab Guide</SectionLabel>
      <ScoredLine />
      <h1 className="font-sans text-[28px] font-bold text-[var(--lab-white)] mt-[24px] mb-[4px] leading-[1.2]">Pythagorean</h1>
      <h1 className="font-sans text-[28px] font-bold text-[var(--lab-white)] mb-[16px] leading-[1.2]">Theorem</h1>
      <p className="font-sans text-[14px] text-[var(--lab-text)] mb-[4px]">Grade 8 Mathematics</p>
      <p className="font-sans text-[12px] text-[var(--lab-text-dim)]">IVLA STEM Club</p>
      <div className="flex flex-wrap justify-center gap-2 my-[24px]">
        <Badge>8.G.B.6</Badge><Badge>8.G.B.7</Badge><Badge>8.G.B.8</Badge>
      </div>
      <ScoredLine />
      <p className="font-sans text-[15px] italic text-[var(--lab-accent)] my-[16px] max-w-[320px]">
        "Why does this relationship only work for right triangles?"
      </p>
      <ScoredLine />
      <p className="font-mono text-[11px] text-[var(--lab-text-dim)] mt-[24px]">creative-lab-five.vercel.app</p>
    </div>
  );
}

function StandardsPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel>Teacher Section</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-accent)] mt-[12px] mb-[4px]">
        Standards Alignment
      </h2>
      <ScoredLine />
      {[
        { code: "8.G.B.6", desc: "Explain a proof of the Pythagorean Theorem and its converse using the area of squares. Phase 1 builds this conceptual foundation before the theorem is applied in Phases 2–4." },
        { code: "8.G.B.7", desc: "Apply the Pythagorean Theorem to determine unknown side lengths in right triangles in real-world and mathematical problems in two and three dimensions." },
        { code: "8.G.B.8", desc: "Apply the Pythagorean Theorem to find the distance between two points in a coordinate system." },
      ].map(({ code, desc }) => (
        <div key={code} className="my-[12px]">
          <span className="font-mono text-[13px] text-[var(--lab-accent)]">{code}</span>
          <p className="font-sans text-[12px] text-[var(--lab-text)] mt-[4px] ml-[8px] leading-[1.5]">{desc}</p>
        </div>
      ))}
      <ScoredLine />
      <SectionLabel>Rigor Components</SectionLabel>
      <div className="my-[10px]">
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[8px] mb-[2px]">Conceptual Understanding</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students explain why the sum of the squares of the legs equals the square of the hypotenuse — through area models, not memorization.
        </p>
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[10px] mb-[2px]">Procedural Skill</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students apply a² + b² = c² to find unknown side lengths and distance between coordinate points.
        </p>
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[10px] mb-[2px]">Application</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students apply the theorem in real-world and mathematical problems in two and three dimensions.
        </p>
      </div>
      <ScoredLine />
      <SectionLabel>Achievement Level Progression</SectionLabel>
      {[
        { level: "Level 3", label: "Basic", colorClass: "text-[var(--lab-text-dim)]", desc: "Apply the Pythagorean Theorem to find the hypotenuse in a simple planar case without coordinates." },
        { level: "Level 4", label: "Mastery", colorClass: "text-[var(--lab-accent)]", desc: "Apply the theorem in simple planar cases and to find distance between two points in a coordinate system." },
        { level: "Level 5", label: "Advanced", colorClass: "text-[var(--lab-info)]", desc: "Apply the theorem in real-world problems in two and three dimensions. Recognize situations requiring multi-step reasoning." },
      ].map(({ level, label, colorClass, desc }) => (
        <div key={level} className="my-[10px]">
          <span className={`font-mono text-[12px] font-bold ${colorClass}`}>{level}</span>
          <span className="font-sans text-[10px] text-[var(--lab-text-dim)] ml-[6px]">({label})</span>
          <p className="font-sans text-[11px] text-[var(--lab-text)] mt-[3px] ml-[8px] leading-[1.4]">{desc}</p>
        </div>
      ))}
      <ProgressDots total={4} current={0} label="Teacher" />
    </div>
  );
}

function PhasesPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel>Teacher Section</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-accent)] mt-[12px] mb-[4px]">
        Module Phases
      </h2>
      <ScoredLine />
      {[
        { num: "01", title: "Visual Proof", desc: "Students predict the area of the hypotenuse square numerically for known Pythagorean triples. The relationship a² + b² = c² is earned as a formula label for what the squares already showed. No drag — the interaction is numeric input." },
        { num: "02", title: "Converse", desc: "Does a² + b² = c² hold? Students test right and non-right triangles with a YES/NO toggle and a numeric check. Seeing the relationship fail on a non-right triple makes the converse meaningful." },
        { num: "03", title: "Unknown Side Lengths", desc: "Apply the theorem to find the missing leg or hypotenuse. The progression from finding c to isolating a leg reveals whether students understand the equation structurally." },
        { num: "04", title: "Coordinate Distance", desc: "Construct the hidden right triangle on a coordinate grid; the hypotenuse IS the distance. The distance formula is earned as a consequence of what students already know." },
      ].map(({ num, title, desc }) => (
        <div key={num} className="my-[14px]">
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-[14px] text-[var(--lab-accent)]">{num}</span>
            <span className="font-sans text-[13px] font-bold text-[var(--lab-white)]">{title}</span>
          </div>
          <p className="font-sans text-[11px] text-[var(--lab-text)] mt-[4px] ml-[24px] leading-[1.5]">{desc}</p>
        </div>
      ))}
      <ScoredLine />
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-4 py-3 text-center my-[8px]">
        <p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[4px]">See the proof before you see the formula.</p>
        <p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[8px]">The equation names what the squares already showed.</p>
        <p className="font-sans text-[10px] text-[var(--lab-text-dim)]">— creative-lab design philosophy</p>
      </div>
      <ProgressDots total={4} current={1} label="Teacher" />
    </div>
  );
}

function ImplementationPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel>Teacher Section</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-accent)] mt-[12px] mb-[4px]">
        Implementation Notes
      </h2>
      <ScoredLine />
      {[
        { label: "PREREQUISITE", value: "Modules 1 & 2 complete (rigid motions, dilations). Students should be comfortable with coordinate rules." },
        { label: "DURATION", value: "2–3 class periods (45 min each)" },
        { label: "DEVICES", value: "Desktop or laptop recommended; tablet supported" },
        { label: "SHAPE FAMILY", value: "The scalene triangle evolves. Module 3 introduces a right-triangle variant of the familiar shape — same vertex labeling, new property to discover." },
      ].map(({ label, value }) => (
        <div key={label} className="my-[10px]">
          <span className="font-mono text-[10px] text-[var(--lab-text-dim)]">{label}</span>
          <p className="font-sans text-[12px] text-[var(--lab-text)] mt-[3px] ml-[10px] leading-[1.4]">{value}</p>
        </div>
      ))}
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[14px] py-[8px] my-[12px]">
        <span className="font-mono text-[13px] text-[var(--lab-accent)]">creative-lab-five.vercel.app</span>
      </div>
      <ScoredLine />
      <SectionLabel>What to Watch For</SectionLabel>
      {[
        { title: "Confusing legs and hypotenuse", desc: "The area model in Phase 1 anchors this. If a student misidentifies the hypotenuse, redirect to the visual: 'Which is the longest side? Which square is biggest?'" },
        { title: "The non-right triangle test (Phase 2)", desc: "Students should see 5² + 6² ≠ 9². Let them verify. The converse is only meaningful if they've seen it fail." },
        { title: "Distance formula as discovery", desc: "Phase 3 is where many students have an 'aha' moment. The distance formula isn't a new thing to memorize — it's the Pythagorean Theorem on a coordinate grid. Watch for that recognition." },
        { title: "Engagement signals", desc: "\"Wait, the distance formula is just this?\" \"That's sick.\" \"Can I find the distance between any two points?\" These mean the instrument is working." },
      ].map(({ title, desc }) => (
        <div key={title} className="my-[8px]">
          <p className="font-sans text-[11px] font-semibold text-[var(--lab-white)] mb-[2px]">{title}</p>
          <p className="font-sans text-[10px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">{desc}</p>
        </div>
      ))}
      <ProgressDots total={4} current={2} label="Teacher" />
    </div>
  );
}

function ClassroomPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel>Teacher Section</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-accent)] mt-[12px] mb-[4px]">
        Classroom Integration
      </h2>
      <ScoredLine />
      {[
        { when: "Before the module", move: "Draw a right triangle on the board. Build squares on each side. Ask: 'Is there a relationship between the areas of these squares?' Let students conjecture." },
        { when: "During Phase 1", move: "This is the proof phase. Students should spend real time here. Resist jumping to the formula. The visual proof IS the understanding — the formula is just shorthand." },
        { when: "During Phase 2 (Converse)", move: "Watch students test whether 5-6-9 is a right triangle. Let them compute 5² + 6² and compare to 9². The converse is meaningful only after they've seen the relationship fail. Resist explaining why — the arithmetic speaks for itself." },
        { when: "At Phase 3 (Unknown Side Lengths)", move: "Watch for students who can find the hypotenuse but struggle to isolate a leg. The equation is structural — c² − a² = b². If a student always places the unknown as c, redirect to the visual: 'Which square is missing? Set up the equation from that side.' This reveals whether they understand the theorem or just the most common procedure." },
        { when: "At Phase 4 (Coordinate Distance)", move: "Connect explicitly: 'You already know how to find the third side. What if the two points ARE two vertices of a right triangle?' Let them construct the third vertex themselves." },
      ].map(({ when, move }) => (
        <div key={when} className="my-[10px]">
          <p className="font-sans text-[11px] font-semibold text-[var(--lab-accent)] mb-[3px]">{when}</p>
          <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">{move}</p>
        </div>
      ))}
      <ProgressDots total={4} current={3} label="Teacher" />
    </div>
  );
}

// ── Student Discovery Log ─────────────────────────────────────

function AreaProofPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex gap-4 mt-[12px]">
        <div className="flex-1">
          <span className="font-sans text-[10px] text-[var(--lab-text-dim)]">NAME</span>
          <div className="border-b border-[var(--lab-border)] h-[16px]" />
        </div>
        <div className="flex-1">
          <span className="font-sans text-[10px] text-[var(--lab-text-dim)]">DATE</span>
          <div className="border-b border-[var(--lab-border)] h-[16px]" />
        </div>
      </div>
      <div className="flex justify-between items-baseline mt-[14px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">THE AREA PROOF</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">a² + b² = ?</span>
      </div>
      <ScoredLine />
      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        Build squares on each side of a right triangle. Measure or calculate their areas.
      </p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[10px] my-[8px]">
        <div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-2">
          <span>Square on side a:  area = ___</span>
          <span>Square on side b:  area = ___</span>
          <span>Square on side c:  area = ___</span>
        </div>
      </div>
      <PromptBox>What relationship do you see between the three areas?</PromptBox>
      <WriteLines count={2} />
      <DotGrid height={130} />
      <PromptBox>PREDICT: Does this relationship hold for ALL right triangles?</PromptBox>
      <WriteLines count={2} />
      <PromptBox>Test with a non-right triangle. Does the relationship still hold?</PromptBox>
      <WriteLines count={2} />
      <ProgressDots total={5} current={0} label="Discovery Log" />
    </div>
  );
}

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

function SideLengthsPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">FINDING SIDE LENGTHS</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">a² + b² = c²</span>
      </div>
      <ScoredLine />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[12px] mb-[6px]">Finding the hypotenuse</p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[8px] my-[4px]">
        <span className="font-mono text-[12px] text-[var(--lab-white)]">a = 3, b = 4, c = ?</span>
      </div>
      <PromptBox>PREDICT: What is c?</PromptBox>
      <WriteLines count={2} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Finding a leg</p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[8px] my-[4px]">
        <span className="font-mono text-[12px] text-[var(--lab-white)]">a = ?, b = 5, c = 13</span>
      </div>
      <PromptBox>PREDICT: What is a? How is this different from finding c?</PromptBox>
      <WriteLines count={3} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Non-integer result</p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[8px] my-[4px]">
        <span className="font-mono text-[12px] text-[var(--lab-white)]">a = 1, b = 1, c = ?</span>
      </div>
      <PromptBox>REVEAL: What is c? Express it exactly, then as a decimal.</PromptBox>
      <WriteLines count={2} />

      <ProgressDots total={5} current={2} label="Discovery Log" />
    </div>
  );
}

function CoordinateDistancePage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">COORDINATE DISTANCE</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">d = √(Δx² + Δy²)</span>
      </div>
      <ScoredLine />

      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        Plot two points. Draw a right triangle using horizontal and vertical segments. The hypotenuse is the distance.
      </p>

      <div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[8px]">
        <span className="font-mono text-[12px] text-[var(--lab-white)]">Point 1: (1, 1)    Point 2: (4, 5)</span>
      </div>

      <PromptBox>PREDICT: What are the horizontal and vertical distances?</PromptBox>
      <DotGrid height={140} />

      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[10px] my-[8px]">
        <div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-1.5">
          <span>Horizontal distance (Δx): 3</span>
          <span>Vertical distance (Δy):   4</span>
          <span>Distance (hypotenuse):    5</span>
        </div>
      </div>

      <PromptBox>REVEAL: How is finding distance the same as finding a hypotenuse?</PromptBox>
      <WriteLines count={3} />

      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[16px] py-[10px] text-center my-[12px]">
        <p className="font-sans text-[12px] text-[var(--lab-info)] italic m-0">
          The distance formula isn't new. It's the Pythagorean Theorem on a coordinate grid.
        </p>
      </div>

      <ProgressDots total={5} current={3} label="Discovery Log" />
    </div>
  );
}

function NotesPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-accent)] mt-[12px] mb-[4px]">
        Notes & Observations
      </h2>
      <ScoredLine />
      <DotGrid height={440} />
      <ProgressDots total={5} current={4} label="Discovery Log" />
    </div>
  );
}

function BackCover() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <SectionLabel>Laboratory Grade</SectionLabel>
      <ScoredLine />
      <p className="font-sans text-[14px] text-[var(--lab-text)] mt-[16px] mb-[4px]">Designed by Randall LaPoint, Jr.</p>
      <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mb-[4px]">15 years in math classrooms.</p>
      <p className="font-sans text-[11px] text-[var(--lab-text-dim)]">Building the tools that let me serve students at scale.</p>
      <ScoredLine />
      <p className="font-mono text-[12px] text-[var(--lab-accent)] my-[16px]">creative-lab-five.vercel.app</p>
      <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mb-[4px]">Part of the Grade 8 Geometry Progression</p>
      <p className="font-sans text-[10px] text-[var(--lab-text-dim)]">Rigid Motions  ·  Dilations & Similarity  ·  Pythagorean Theorem</p>
      <p className="font-mono text-[9px] text-[var(--lab-surface-hi)] mt-[24px]">ISTE LIVE 2026</p>
    </div>
  );
}

type PageConfig = {
  id: string;
  label: string;
  Component: React.ComponentType;
};

const PAGES: PageConfig[] = [
  { id: "cover", label: "Cover", Component: Cover },
  { id: "standards", label: "Standards", Component: StandardsPage },
  { id: "phases", label: "Phases", Component: PhasesPage },
  { id: "implementation", label: "Implement", Component: ImplementationPage },
  { id: "classroom", label: "Classroom", Component: ClassroomPage },
  { id: "area-proof", label: "Area Proof", Component: AreaProofPage },
  { id: "converse", label: "Converse", Component: ConversePage },
  { id: "side-lengths", label: "Side Lengths", Component: SideLengthsPage },
  { id: "distance", label: "Distance", Component: CoordinateDistancePage },
  { id: "notes", label: "Notes", Component: NotesPage },
  { id: "back", label: "Back", Component: BackCover },
];

export default function LabGuidePythagorean() {
  const [activeId, setActiveId] = useState<string>(PAGES[0].id);
  const pageIndex = PAGES.findIndex((p) => p.id === activeId);
  const current = PAGES[pageIndex] ?? PAGES[0];

  const goPrev = () => {
    if (pageIndex > 0) setActiveId(PAGES[pageIndex - 1].id);
  };

  const goNext = () => {
    if (pageIndex < PAGES.length - 1) setActiveId(PAGES[pageIndex + 1].id);
  };
  return (
    <div className="bg-[var(--lab-bg)] min-h-screen text-[var(--lab-text)] font-sans">
      <Tabs value={activeId} onValueChange={setActiveId} className="w-full">
        <div
          className="sticky top-0 z-10 border-b border-[var(--lab-border)] backdrop-blur bg-[color-mix(in_srgb,var(--lab-surface)_80%,transparent)]"
        >
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-transparent">
            {PAGES.map((p) => (
              <TabsTrigger key={p.id} value={p.id} className="whitespace-nowrap text-[10px] tracking-[0.15em]">
                {p.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="mx-auto w-full max-w-md px-3 md:max-w-2xl md:px-6 lg:max-w-3xl">
          <TabsContent value={current.id} className="mt-4">
            <current.Component />
          </TabsContent>
        </div>

        <div className="mx-auto flex w-full max-w-md items-center justify-between px-3 py-6 md:max-w-2xl md:px-6 lg:max-w-3xl">
          <Button
            variant="outline"
            size="sm"
            onClick={goPrev}
            disabled={pageIndex === 0}
            className={`font-mono text-[10px] border-[var(--lab-border)] ${
              pageIndex === 0 ? "text-[var(--lab-surface-hi)]" : "text-[var(--lab-text-dim)]"
            }`}
          >
            ← PREV
          </Button>
          <span className="font-mono text-[9px] text-[var(--lab-surface-hi)]">
            {pageIndex + 1} / {PAGES.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={goNext}
            disabled={pageIndex === PAGES.length - 1}
            className={`font-mono text-[10px] border-[var(--lab-border)] ${
              pageIndex === PAGES.length - 1 ? "text-[var(--lab-surface-hi)]" : "text-[var(--lab-text-dim)]"
            }`}
          >
            NEXT →
          </Button>
        </div>
      </Tabs>
    </div>
  );
}