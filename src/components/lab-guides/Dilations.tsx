import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { labTokens } from "@/lib/labTokens";
import { Badge, DotGrid, ProgressDots, PromptBox, ScoredLine, SectionLabel, WriteLines } from "@/components/lab-guides/labPrimitives";

// ── Design Tokens ─────────────────────────────────────────────
const T = labTokens;

// ── Page Components ───────────────────────────────────────────

function Cover() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <SectionLabel>Lab Guide</SectionLabel>
      <ScoredLine />
      <h1 className="font-sans text-[28px] font-bold text-[var(--lab-white)] mt-[24px] mb-[4px] leading-[1.2]">
        Dilations, Similarity
      </h1>
      <h1 className="font-sans text-[28px] font-bold text-[var(--lab-white)] mb-[16px] leading-[1.2]">
        & Right Triangles
      </h1>
      <p className="font-sans text-[14px] text-[var(--lab-text)] mb-[4px]">Grade 8 Mathematics</p>
      <p className="font-sans text-[12px] text-[var(--lab-text-dim)]">IVLA STEM Club</p>
      <div className="flex flex-wrap justify-center gap-2 my-[24px]">
        <Badge>8.G.A.3</Badge>
        <Badge>8.G.A.4</Badge>
        <Badge color={T.info}>G-SRT bridge</Badge>
      </div>
      <ScoredLine />
      <p className="font-sans text-[15px] italic text-[var(--lab-accent)] my-[16px] max-w-[320px]">
        "What changes when a shape grows? What stays the same?"
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
        { code: "8.G.A.3", desc: "Describe the effect of dilations, translations, rotations, and reflections on two-dimensional figures using coordinates. Dilations use the origin as center of dilation." },
        { code: "8.G.A.4", desc: "Explain that a two-dimensional figure is similar to another if the second can be obtained by a sequence of rotations, reflections, translations, and dilations. Describe the sequence that exhibits similarity." },
      ].map(({ code, desc }) => (
        <div key={code} className="my-[12px]">
          <span className="font-mono text-[13px] text-[var(--lab-accent)]">{code}</span>
          <p className="font-sans text-[12px] text-[var(--lab-text)] mt-[4px] ml-[8px] leading-[1.5]">
            {desc}
          </p>
        </div>
      ))}

      <ScoredLine />
      <SectionLabel>Rigor Components</SectionLabel>
      <div className="my-[10px]">
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[8px] mb-[2px]">Conceptual Understanding</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students understand that dilations produce similar (not congruent) figures — angles are preserved, side lengths are proportional.
        </p>
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[10px] mb-[2px]">Procedural Skill</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students apply coordinate rules for dilations centered at the origin after demonstrating spatial understanding of scale factor.
        </p>
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[10px] mb-[2px]">Application</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students compose rigid motions with dilations to produce similar figures — modeling similarity as a transformation sequence rather than a static property.
        </p>
      </div>

      <ScoredLine />
      <SectionLabel>Achievement Level Progression</SectionLabel>
      {[
        { level: "Level 3", label: "Basic", colorClass: "text-[var(--lab-text-dim)]", desc: "Identify dilated figures. Recognize that a shape grew or shrank. Distinguish similar from congruent by appearance." },
        { level: "Level 4", label: "Mastery", colorClass: "text-[var(--lab-accent)]", desc: "Apply scale factor to coordinates. Describe dilation rules using (x, y) → (kx, ky). Determine scale factor from two similar figures." },
        { level: "Level 5", label: "Advanced", colorClass: "text-[var(--lab-info)]", desc: "Describe sequences combining rigid motions and dilations to exhibit similarity. Explain why corresponding angles are congruent and sides are proportional." },
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
  const phases = [
    { num: "01", title: "Scale Factor Exploration", desc: "Students drag a slider to scale the familiar scalene triangle from Module 1. No coordinates — pure visual feedback. The triangle grows and shrinks from the origin. Building intuition for what 'scale factor' means spatially." },
    { num: "02", title: "Predict & Reveal: Dilations", desc: "The core loop adapted for dilations. Given a scale factor, predict where each vertex lands. The reveal animation shows the dilation path — rays from the origin through each vertex. Scoring tracks accuracy." },
    { num: "03", title: "Coordinate Layer", desc: "The earned reveal: (x, y) → (kx, ky). After spatial mastery, coordinate notation appears. Students see that multiplying both coordinates by the scale factor is just a description of what they already understand." },
    { num: "04", title: "Capstone: Similarity Sequences", desc: "Combine a rigid motion with a dilation. Given two similar figures, describe the sequence (translate + dilate, rotate + dilate). The inverse of Module 1's capstone — now with scale." },
  ];

  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel>Teacher Section</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-accent)] mt-[12px] mb-[4px]">
        Module Phases
      </h2>
      <ScoredLine />

      {phases.map(({ num, title, desc }) => (
        <div key={num} className="my-[14px]">
          <div className="flex items-baseline gap-2.5">
            <span className="font-mono text-[14px] text-[var(--lab-accent)]">{num}</span>
            <span className="font-sans text-[13px] font-bold text-[var(--lab-white)]">{title}</span>
          </div>
          <p className="font-sans text-[11px] text-[var(--lab-text)] mt-[4px] ml-[24px] leading-[1.5]">
            {desc}
          </p>
        </div>
      ))}

      <ScoredLine />
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-4 py-3 text-center my-[8px]">
        <p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[4px]">The same triangle. A new property.</p>
        <p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[8px]">Scale changes size. It preserves shape.</p>
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
        { label: "PREREQUISITE", value: "Rigid Motions module complete (or equivalent understanding of translations, reflections, rotations)" },
        { label: "DURATION", value: "2–3 class periods (45 min each)" },
        { label: "DEVICES", value: "Desktop or laptop recommended; tablet supported" },
        { label: "SETUP", value: "No account required. Navigate to URL. Module picks up where Rigid Motions left off." },
        { label: "SHAPE FAMILY", value: "Same scalene triangle from Module 1 — A(1,1) B(4,2) C(2,4). Students recognize it immediately." },
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
        { title: "Confusing dilation with translation", desc: "Students may think 'bigger' means 'moved right and up.' The ray visualization in Phase 2 corrects this — growth happens along rays from the origin." },
        { title: "Scale factor < 1 surprises", desc: "Shrinking feels different than growing. Students who mastered k=2 may stumble on k=0.5. This is normal — let the predict/reveal loop do its work." },
        { title: "The similarity vs. congruence distinction", desc: "Students from Module 1 proved congruence. Now they need to understand that adding dilation means 'same shape, different size.' Watch for the moment this clicks." },
        { title: "Connecting to Module 1", desc: "The capstone explicitly bridges: 'rigid motion + dilation = similarity transformation.' Students who completed Module 1 will recognize the sequence-building pattern." },
        { title: "Engagement signals", desc: "\"That's sick.\" \"Wait, so it's the same shape?\" \"Can I try a different scale factor?\" These mean the instrument is working." },
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
      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        This module builds directly on Rigid Motions. The same triangle, the same predict/reveal loop, a new property to discover.
      </p>

      {[
        { when: "Before the module", move: "Ask: 'If I photocopy this triangle at 200%, what changes? What doesn't?' Let students generate hypotheses about size vs. shape. Do not define similar or scale factor yet." },
        { when: "During Phase 1", move: "Watch students discover that the triangle 'grows from a point.' They'll notice the origin matters. This is the spatial foundation for center of dilation." },
        { when: "During Phase 2", move: "The ray visualization is the key insight. When students see dilation paths as rays from the origin through each vertex, they understand WHY (kx, ky) works — it's scalar multiplication along those rays." },
        { when: "At the Phase 3 boundary", move: "Students who struggled with coordinate rules in Module 1 may find this easier — multiplication feels more natural than the sign-flipping of reflections. Celebrate that." },
        { when: "During the capstone", move: "Pairs should compare: 'I used translate then dilate. You used dilate then translate. Did we get the same result?' This surfaces commutativity questions from Module 1 in a new context." },
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

// ── Student Discovery Log Pages ───────────────────────────────

function DilationsPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">DILATIONS</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">(x, y) → (kx, ky)</span>
      </div>
      <ScoredLine />

      <div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[8px] flex items-center gap-3">
        <span className="font-sans text-[10px] text-[var(--lab-text-dim)]">REFERENCE</span>
        <span className="font-mono text-[12px] text-[var(--lab-white)]">A(1,1)  B(4,2)  C(2,4)</span>
      </div>

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Scale factor k = 2</p>
      <PromptBox>PREDICT: Where will each vertex land after dilation?</PromptBox>
      <DotGrid height={110} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Scale factor k = 0.5</p>
      <PromptBox>PREDICT: The triangle shrinks. Where do the vertices go?</PromptBox>
      <DotGrid height={110} />

      <PromptBox>REVEAL: What rule describes dilation from the origin?</PromptBox>
      <WriteLines count={2} />
      <div className="px-[8px]">
        <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mt-[4px]">What stayed the same about the triangle? What changed?</p>
      </div>
      <WriteLines count={2} />

      <ProgressDots total={5} current={0} label="Discovery Log" />
    </div>
  );
}

function SimilarityPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">SIMILARITY</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">rigid motion + dilation</span>
      </div>
      <ScoredLine />

      <PromptBox>Two figures are similar when one can be mapped to the other by a sequence of rigid motions and dilations.</PromptBox>

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Comparing angles</p>
      <p className="font-sans text-[11px] text-[var(--lab-text)] mb-[6px] leading-[1.4]">
        Measure or observe the angles in the original and dilated triangle.
      </p>
      <div className="px-[8px]">
        <p className="font-sans text-[11px] text-[var(--lab-text-dim)]">Are corresponding angles equal?</p>
      </div>
      <WriteLines count={2} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Comparing side lengths</p>
      <p className="font-sans text-[11px] text-[var(--lab-text)] mb-[6px] leading-[1.4]">
        Calculate the ratio of corresponding side lengths.
      </p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[10px] my-[6px]">
        <div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-1.5">
          <span>A'B' / AB = ___</span>
          <span>B'C' / BC = ___</span>
          <span>A'C' / AC = ___</span>
        </div>
      </div>
      <div className="px-[8px] py-[4px]">
        <p className="font-sans text-[11px] text-[var(--lab-text-dim)]">What do you notice about these ratios?</p>
      </div>
      <WriteLines count={2} />

      <PromptBox>REVEAL: What makes two figures similar (not just congruent)?</PromptBox>
      <WriteLines count={3} />

      <ProgressDots total={5} current={1} label="Discovery Log" />
    </div>
  );
}

function RightTrianglesPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">RIGHT TRIANGLES</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">bridge to G-SRT</span>
      </div>
      <ScoredLine />

      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        When similar triangles are right triangles, something powerful emerges: the ratio of sides depends only on the angle.
      </p>

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Dilating a right triangle</p>
      <PromptBox>PREDICT: Scale a right triangle by k = 2. What happens to the acute angles?</PromptBox>
      <DotGrid height={120} />
      <WriteLines count={2} />

      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">Side ratios in similar right triangles</p>
      <p className="font-sans text-[11px] text-[var(--lab-text)] mb-[8px] leading-[1.4]">
        For two similar right triangles with the same acute angle, compare: opposite / hypotenuse.
      </p>
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[12px] py-[10px] my-[6px]">
        <div className="font-mono text-[11px] text-[var(--lab-text-dim)] flex flex-col gap-1.5">
          <span>Original:  opp / hyp = ___</span>
          <span>Dilated:   opp / hyp = ___</span>
        </div>
      </div>

      <PromptBox>REVEAL: Why is this ratio the same regardless of triangle size?</PromptBox>
      <WriteLines count={3} />

      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[16px] py-[10px] text-center my-[12px]">
        <p className="font-sans text-[12px] text-[var(--lab-info)] italic m-0">
          This ratio has a name. You'll meet it in Geometry: sine.
        </p>
      </div>

      <ProgressDots total={5} current={2} label="Discovery Log" />
    </div>
  );
}

function CapstonePage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.info}>Discovery Log</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-info)] mt-[12px] mb-[4px]">
        Capstone: Similarity Sequences
      </h2>
      <ScoredLine />

      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        Describe a sequence of transformations (rigid motions + dilation) that maps one figure to a similar figure.
      </p>

      <div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[8px] flex items-center gap-3">
        <span className="font-sans text-[10px] text-[var(--lab-text-dim)]">REFERENCE</span>
        <span className="font-mono text-[12px] text-[var(--lab-white)]">A(1,1)  B(4,2)  C(2,4)</span>
      </div>

      {["STEP 1", "STEP 2"].map((step) => (
        <div key={step} className="my-[14px]">
          <p className="font-mono text-[13px] font-bold text-[var(--lab-accent)] mb-[8px]">{step}</p>
          {["TRANSFORMATION TYPE", "PARAMETERS", step === "STEP 1" ? "INTERMEDIATE RESULT" : "FINAL POSITION"].map((field) => (
            <div key={field} className="mt-[4px] mb-[4px] ml-[10px]">
              <span className="font-mono text-[9px] text-[var(--lab-text-dim)] tracking-[0.1em]">{field}</span>
              <div className="h-[18px] border-b border-[var(--lab-border)]" />
            </div>
          ))}
        </div>
      ))}

      <ScoredLine />
      <PromptBox>Are the original and final triangles similar? How do you know?</PromptBox>
      <WriteLines count={3} />
      <PromptBox>What is the scale factor between the two triangles?</PromptBox>
      <WriteLines count={2} />

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

// ── Main App ──────────────────────────────────────────────────

type PageConfig = {
  id: string;
  label: string;
  Component: React.ComponentType;
};

const PAGES: PageConfig[] = [
  { id: "cover", label: "Cover", Component: Cover },
  { id: "standards", label: "Standards", Component: StandardsPage },
  { id: "phases", label: "Phases", Component: PhasesPage },
  { id: "implementation", label: "Implementation", Component: ImplementationPage },
  { id: "classroom", label: "Classroom", Component: ClassroomPage },
  { id: "dilations", label: "Dilations", Component: DilationsPage },
  { id: "similarity", label: "Similarity", Component: SimilarityPage },
  { id: "right-triangles", label: "Right △", Component: RightTrianglesPage },
  { id: "capstone", label: "Capstone", Component: CapstonePage },
  { id: "notes", label: "Notes", Component: NotesPage },
  { id: "back", label: "Back", Component: BackCover },
];

export default function LabGuideDilations() {
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