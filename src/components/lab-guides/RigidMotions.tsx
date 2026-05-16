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
      <ScoredLine mode="theme" />
      <h1 className="font-sans text-[28px] font-bold text-[var(--lab-white)] mt-[24px] mb-[16px] leading-[1.2]">
        <span className="block mb-[4px]">Rigid Motions</span>
        <span className="block">& Congruence</span>
      </h1>
      <p className="font-sans text-[14px] text-[var(--lab-text)] mb-[4px]">Grade 8 Mathematics</p>
      <p className="font-sans text-[12px] text-[var(--lab-text-dim)]">IVLA STEM Club</p>
      <div className="flex flex-wrap justify-center gap-2 my-[24px]">
        <Badge>8.G.A.1</Badge><Badge>8.G.A.2</Badge><Badge>8.G.A.3</Badge>
      </div>
      <ScoredLine mode="theme" />
      <p className="font-sans text-[15px] italic text-[var(--lab-accent)] my-[16px] max-w-[320px]">
        "What stays the same when a shape moves?"
      </p>
      <ScoredLine mode="theme" />
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
      <ScoredLine mode="theme" />
      {[
        { code: "8.G.A.1", desc: "Verify experimentally the properties of rotations, reflections, and translations: lines are taken to lines, angle measures are preserved, parallel lines are taken to parallel lines." },
        { code: "8.G.A.2", desc: "Understand that a two-dimensional figure is congruent to another if the second can be obtained from the first by a sequence of rotations, reflections, and translations; given two congruent figures, describe a sequence that exhibits the congruence." },
        { code: "8.G.A.3", desc: "Describe the effect of dilations, translations, rotations, and reflections on two-dimensional figures using coordinates. Rotations are only about the origin; reflections are only over the x-axis and y-axis in Grade 8." },
      ].map(({ code, desc }) => (
        <div key={code} className="my-[12px]">
          <span className="font-mono text-[13px] text-[var(--lab-accent)]">{code}</span>
          <p className="font-sans text-[12px] text-[var(--lab-text)] mt-[4px] ml-[8px] leading-[1.5]">
            {desc}
          </p>
        </div>
      ))}
      <ScoredLine mode="theme" />
      <SectionLabel>Rigor Components</SectionLabel>
      <div className="my-[10px]">
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[8px] mb-[2px]">Conceptual Understanding</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students understand why distances and angles are preserved under rigid motions — not just that they are.
        </p>
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[10px] mb-[2px]">Procedural Skill</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students apply coordinate rules for translations, reflections, and rotations after demonstrating spatial mastery.
        </p>
        <p className="font-sans text-[12px] font-semibold text-[var(--lab-white)] mt-[10px] mb-[2px]">Application</p>
        <p className="font-sans text-[11px] text-[var(--lab-text)] ml-[8px] leading-[1.4]">
          Students formulate predictions, test against visual feedback, and justify congruence by describing transformation sequences — a modeling and validation cycle.
        </p>
      </div>
      <ScoredLine mode="theme" />
      <SectionLabel>Achievement Level Progression</SectionLabel>
      {[
        { level: "Level 3", label: "Basic", colorClass: "text-[var(--lab-text-dim)]", desc: "Predict transformation outputs spatially. No coordinates visible. Building intuition through manipulation." },
        { level: "Level 4", label: "Mastery", colorClass: "text-[var(--lab-accent)]", desc: "Coordinate rules revealed after spatial mastery. Connect spatial reasoning to algebraic representation." },
        { level: "Level 5", label: "Advanced", colorClass: "text-[var(--lab-info)]", desc: "Build multi-step transformation sequences. Justify congruence by describing the sequence mapping one figure to another." },
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
      <ScoredLine mode="theme" />
      {[
        { num: "01", title: "Spatial Exploration", desc: "Drag a ghost shape to explore spatial relationships. No scoring, no coordinates — pure manipulation. Building the mental model that makes everything else possible." },
        { num: "02", title: "Predict & Reveal", desc: "The core loop. Commit a prediction by placing the ghost, then watch the animated reveal. Immediate visual feedback — no multiple choice. Scoring tracks accuracy across translations, reflections, and rotations." },
        { num: "03", title: "Coordinate Layer", desc: "The earned reveal. After demonstrating spatial mastery, coordinate notation appears. The formula is a label for a known idea — not an instruction to memorize." },
        { num: "04", title: "Capstone", desc: "Build two-step transformation sequences. The inverse task: given both figures, identify the sequence. Level 5 — describing sequences to justify congruence." },
      ].map(({ num, title, desc }) => (
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
      <ScoredLine mode="theme" />
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-4 py-3 text-center my-[8px]">
        <p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[4px]">Discovery before formula.</p>
        <p className="font-sans text-[14px] text-[var(--lab-accent)] mb-[8px]">Manipulation before explanation.</p>
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
      <ScoredLine mode="theme" />
      {[
        { label: "DURATION", value: "2–3 class periods (45 min each)" },
        { label: "DEVICES", value: "Desktop or laptop recommended; tablet supported" },
        { label: "SETUP", value: "No account required. Navigate to URL. Students begin immediately." },
        { label: "TEACHER ROLE", value: "Observer and facilitator — the module is self-guided." },
        { label: "SHAPE FAMILY", value: "Scalene triangle — A(−3,−2) B(1,−1) C(−2,1). This is the M1 pre-image; the canonical triangle A(1,1) B(4,2) C(2,4) is used in M2 and M3." },
      ].map(({ label, value }) => (
        <div key={label} className="my-[10px]">
          <span className="font-mono text-[10px] text-[var(--lab-text-dim)]">{label}</span>
          <p className="font-sans text-[12px] text-[var(--lab-text)] mt-[3px] ml-[10px] leading-[1.4]">
            {value}
          </p>
        </div>
      ))}
      <div className="bg-[var(--lab-surface)] rounded-[4px] px-[14px] py-[8px] my-[12px]">
        <span className="font-mono text-[13px] text-[var(--lab-accent)]">creative-lab-five.vercel.app</span>
      </div>
      <ScoredLine mode="theme" />
      <SectionLabel>What to Watch For</SectionLabel>
      {[
        { title: "Skipping prediction", desc: "Encourage genuine commitment. The predict/reveal loop only builds understanding if the prediction is real." },
        { title: "Spatial mastery, notation struggle", desc: "Expected and by design. The L3→L4 boundary is where spatial understanding meets algebraic representation. Give it time." },
        { title: "Discovering non-commutativity", desc: "In the capstone, some notice that transformation order matters. This is a Level 5 insight — name it when you see it." },
        { title: "Engagement signals", desc: "\"That's sick.\" \"Wait, how did it know?\" \"Can I try another one?\" These mean the instrument is working." },
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
      <ScoredLine mode="theme" />
      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        The module is self-guided, but strategic teacher moves amplify the learning.
      </p>
      {[
        { when: "Before the module", move: "Ask: \"When you slide a book across a desk, what changes? What doesn't?\" Let students generate hypotheses. Do not define rigid motion yet." },
        { when: "During Phase 1–2", move: "Circulate and listen. Students will talk about predictions. Resist correcting — the reveal does that. Note which transformations produce the most surprise." },
        { when: "At the Phase 3 boundary", move: "This is the earned reveal. Students who struggled with coordinates in prior units may break through here because spatial understanding is already in place." },
        { when: "During the capstone", move: "Ask pairs to compare sequences. \"Did you both get the same result? Is there another sequence that works?\" This surfaces non-commutativity naturally." },
        { when: "After the module", move: "Debrief with the core question: \"What stays the same when a shape moves?\" Students should now answer with precision — distances, angles, parallelism." },
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

function TranslationsPage() {
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
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">TRANSLATIONS</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">(x, y) → ( ?, ? )</span>
      </div>
      <ScoredLine mode="theme" />
      <div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[8px] flex items-center gap-3">
        <span className="font-sans text-[10px] text-[var(--lab-text-dim)]">REFERENCE</span>
        <span className="font-mono text-[12px] text-[var(--lab-white)]">A(−3,−2)  B(1,−1)  C(−2,1)</span>
      </div>
      <PromptBox>PREDICT: Where will the triangle land?</PromptBox>
      <DotGrid height={130} />
      <PromptBox>REVEAL: What rule did you discover?</PromptBox>
      <div className="px-[8px]">
        <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mt-[4px]">The coordinate rule for this translation:</p>
      </div>
      <WriteLines count={2} />
      <div className="px-[8px]">
        <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mt-[4px]">What stayed the same about the triangle?</p>
      </div>
      <WriteLines count={2} />
      <ProgressDots total={5} current={0} label="Discovery Log" />
    </div>
  );
}

function ReflectionsPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">REFLECTIONS</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">(x, y) → ( ?, ? )</span>
      </div>
      <ScoredLine mode="theme" />
      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[12px] mb-[6px]">
        Reflect over the x-axis
      </p>
      <PromptBox>PREDICT: Where will each vertex land?</PromptBox>
      <DotGrid height={100} />
      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">
        Reflect over the y-axis
      </p>
      <PromptBox>PREDICT: Where will each vertex land?</PromptBox>
      <DotGrid height={100} />
      <PromptBox>REVEAL: What coordinates changed? What stayed the same?</PromptBox>
      <WriteLines count={3} />
      <ProgressDots total={5} current={1} label="Discovery Log" />
    </div>
  );
}

function RotationsPage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.accent}>Discovery Log</SectionLabel>
      <div className="flex justify-between items-baseline mt-[12px]">
        <h2 className="font-sans text-[16px] font-bold text-[var(--lab-white)] m-0">ROTATIONS</h2>
        <span className="font-mono text-[11px] text-[var(--lab-text-dim)]">(x, y) → ( ?, ? )</span>
      </div>
      <ScoredLine mode="theme" />
      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[12px] mb-[6px]">
        90° clockwise about the origin
      </p>
      <PromptBox>PREDICT: Where will the triangle land?</PromptBox>
      <DotGrid height={110} />
      <p className="font-sans text-[13px] font-semibold text-[var(--lab-accent)] mt-[14px] mb-[6px]">
        180° about the origin
      </p>
      <PromptBox>PREDICT: Try 180° — what do you notice about both coordinates?</PromptBox>
      <DotGrid height={100} />
      <PromptBox>REVEAL: Describe the pattern in the coordinates.</PromptBox>
      <WriteLines count={3} />
      <ProgressDots total={5} current={2} label="Discovery Log" />
    </div>
  );
}

function CapstonePage() {
  return (
    <div className="px-[20px] py-[24px]">
      <SectionLabel color={T.info}>Discovery Log</SectionLabel>
      <h2 className="font-sans text-[16px] font-bold uppercase tracking-[0.05em] text-[var(--lab-info)] mt-[12px] mb-[4px]">
        Capstone: Sequence Builder
      </h2>
      <ScoredLine mode="theme" />
      <p className="font-sans text-[12px] text-[var(--lab-text)] my-[8px] leading-[1.5]">
        Build a two-step transformation sequence. Predict the final position after both transformations are applied in order.
      </p>
      <div className="bg-[var(--lab-surface)] rounded-[3px] px-[10px] py-[6px] my-[8px] flex items-center gap-3">
        <span className="font-sans text-[10px] text-[var(--lab-text-dim)]">REFERENCE</span>
        <span className="font-mono text-[12px] text-[var(--lab-white)]">A(−3,−2)  B(1,−1)  C(−2,1)</span>
      </div>
      {["STEP 1", "STEP 2"].map((step) => (
        <div key={step} className="my-[14px]">
          <p className="font-mono text-[13px] font-bold text-[var(--lab-accent)] mb-[8px]">{step}</p>
          {["TRANSFORMATION TYPE", "PARAMETERS", step === "STEP 1" ? "PREDICTED RESULT  A'( , )  B'( , )  C'( , )" : "FINAL POSITION  A''( , )  B''( , )  C''( , )"].map((field) => (
            <div key={field} className="mt-[4px] mb-[4px] ml-[10px]">
              <span className="font-mono text-[9px] text-[var(--lab-text-dim)] tracking-[0.1em]">{field}</span>
              <div className="h-[18px] border-b border-[var(--lab-border)]" />
            </div>
          ))}
        </div>
      ))}
      <ScoredLine mode="theme" />
      <PromptBox>Why are the original and final triangles congruent?</PromptBox>
      <WriteLines count={3} />
      <PromptBox>Does the order of your steps matter? How do you know?</PromptBox>
      <WriteLines count={3} />
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
      <ScoredLine mode="theme" />
      <DotGrid height={440} />
      <ProgressDots total={5} current={4} label="Discovery Log" />
    </div>
  );
}

function BackCover() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <SectionLabel>Laboratory Grade</SectionLabel>
      <ScoredLine mode="theme" />
      <p className="font-sans text-[14px] text-[var(--lab-text)] mt-[16px] mb-[4px]">Designed by Randall LaPoint, Jr.</p>
      <p className="font-sans text-[11px] text-[var(--lab-text-dim)] mb-[4px]">15 years in math classrooms.</p>
      <p className="font-sans text-[11px] text-[var(--lab-text-dim)]">Building the tools that let me serve students at scale.</p>
      <ScoredLine mode="theme" />
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
  { id: "translations", label: "Translate", Component: TranslationsPage },
  { id: "reflections", label: "Reflect", Component: ReflectionsPage },
  { id: "rotations", label: "Rotate", Component: RotationsPage },
  { id: "capstone", label: "Capstone", Component: CapstonePage },
  { id: "notes", label: "Notes", Component: NotesPage },
  { id: "back", label: "Back", Component: BackCover },
];

export default function LabGuideRigidMotions() {
  const [activeId, setActiveId] = useState<string>(PAGES[0].id);
  const pageIndex = PAGES.findIndex((p) => p.id === activeId);
  const current = PAGES[pageIndex] ?? PAGES[0];

  const goPrev = () => {
    if (pageIndex > 0) {
      setActiveId(PAGES[pageIndex - 1].id);
    }
  };

  const goNext = () => {
    if (pageIndex < PAGES.length - 1) {
      setActiveId(PAGES[pageIndex + 1].id);
    }
  };

  return (
    <div className="bg-[var(--lab-bg)] min-h-screen text-[var(--lab-text)] font-sans">
      <Tabs value={activeId} onValueChange={setActiveId} className="w-full">
        <div
          className="sticky top-0 z-10 border-b border-[var(--lab-border)] backdrop-blur bg-[color-mix(in_srgb,var(--lab-surface)_80%,transparent)]"
        >
          <div className="relative overflow-hidden">
            <TabsList
              aria-label="Lab guide pages"
              className="w-full justify-start overflow-x-auto flex-nowrap bg-transparent [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {PAGES.map((p) => (
                <TabsTrigger
                  key={p.id}
                  value={p.id}
                  className="whitespace-nowrap text-[10px] tracking-[0.15em]"
                >
                  {p.label}
                </TabsTrigger>
              ))}
            </TabsList>
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-8"
              style={{ background: 'linear-gradient(to right, transparent, color-mix(in srgb, var(--lab-surface) 95%, transparent))' }}
              aria-hidden="true"
            />
          </div>
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
              pageIndex === 0 ? "text-[var(--lab-text-dim)] opacity-30" : "text-[var(--lab-text-dim)]"
            }`}
          >
            ← PREV
          </Button>
          <span className="font-mono text-[9px] text-[var(--lab-text-dim)]" aria-label={`Page ${pageIndex + 1} of ${PAGES.length}`}>
            {pageIndex + 1} / {PAGES.length}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={goNext}
            disabled={pageIndex === PAGES.length - 1}
            className={`font-mono text-[10px] border-[var(--lab-border)] ${
              pageIndex === PAGES.length - 1 ? "text-[var(--lab-text-dim)] opacity-30" : "text-[var(--lab-text-dim)]"
            }`}
          >
            NEXT →
          </Button>
        </div>
      </Tabs>
    </div>
  );
}