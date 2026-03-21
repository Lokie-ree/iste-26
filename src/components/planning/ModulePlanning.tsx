import React, { useState } from "react";
import { labTokens } from "@/lib/labTokens";
// Design tokens (match lab-guides)
const T = labTokens;
type TopTabId = "overview" | "module2" | "module3" | "reuse";
type ModuleSectionId = "standards" | "alds" | "phases";
type ModuleId = "module2" | "module3";

type Standard = {
  code: string;
  text: string;
  rigor: string[];
  constraint: string | null;
  shared: boolean;
};

type Ald = {
  level: string;
  label: string;
  descriptor: string;
  instrument: string;
  color: string;
};

type Phase = {
  number: number;
  title: string;
  description: string;
  reuse: string;
  newWork: string;
  ald: string;
};

type Module = {
  id: ModuleId;
  title: string;
  subtitle: string;
  coreQuestion: string;
  coreAnswer: string;
  standards: Standard[];
  alds: Ald[];
  phases: Phase[];
  shapeNote: string;
};

const MODULES: Record<ModuleId, Module> = {
  module2: {
    id: "module2",
    title: "MODULE 02",
    subtitle: "Dilations, Similarity & Right Triangles",
    coreQuestion: "What stays the same when a shape grows?",
    coreAnswer: "Angles are preserved. Side ratios are preserved. Distances scale by a consistent factor.",
    standards: [
      {
        code: "8.G.A.3",
        text: "Describe the effect of dilations on 2D figures using coordinates",
        rigor: ["Conceptual Understanding"],
        constraint: "Dilations only use the origin as center",
        shared: true,
      },
      {
        code: "8.G.A.4",
        text: "Explain similarity via sequences of rotations, reflections, translations, and dilations; describe the sequence",
        rigor: ["Conceptual Understanding", "Procedural Skill"],
        constraint: "Origin-centered rotations/dilations, axis-aligned reflections",
        shared: false,
      },
      {
        code: "8.G.A.5",
        text: "Use informal arguments for angle sum, exterior angles, transversals, and AA criterion for similarity",
        rigor: ["Conceptual Understanding"],
        constraint: null,
        shared: false,
      },
    ],
    alds: [
      {
        level: "L3",
        label: "Entry",
        descriptor: "Describes effect of dilations on figures without coordinates. Identifies similarity.",
        instrument: "Predict & Reveal with scale factor slider — no coordinate readout. Student sees angles preserved, shape \"grows\" from origin.",
        color: T.accent,
      },
      {
        level: "L4",
        label: "Primary Target",
        descriptor: "Describes effect of dilations with coordinates. Explains similarity through transformation sequences.",
        instrument: "Coordinate readouts activate. Student sees (x,y) → (kx, ky) pattern. FormulaReadout shows dilation rule. Similarity = rigid motion + dilation.",
        color: T.info,
      },
      {
        level: "L5",
        label: "Capstone",
        descriptor: "Describes sequences including dilations to justify similarity. Uses AA criterion informally.",
        instrument: "Inverse task: two similar figures given, student builds the transformation sequence (rigid + dilation) that maps one to the other. AA discovery stage.",
        color: T.danger,
      },
    ],
    phases: [
      {
        number: 1,
        title: "Scale Factor Intuition",
        description: "The familiar scalene triangle sits at the origin. A slider controls scale factor k. Student drags to predict where the dilated image lands, then reveals. No coordinates — pure spatial reasoning about \"bigger\" and \"smaller\" from a fixed center.",
        reuse: "Ghost triangle, predict/reveal loop, GSAP reveal animation, SpriteLabel",
        newWork: "Scale factor slider component, origin-anchored dilation logic, proportional ghost sizing",
        ald: "L3",
      },
      {
        number: 2,
        title: "Coordinate Dilation",
        description: "coordinatesActive flips on. Student sees vertex labels update as scale factor changes: A(1,1)→A'(2,2) at k=2. FormulaReadout shows (x,y)→(kx,ky). The pattern clicks: every coordinate multiplied by the same factor.",
        reuse: "coordinatesActive state, FormulaReadout component, SpriteLabel with coordinates",
        newWork: "Dilation-specific formula display, scale factor in readout, k-value annotation",
        ald: "L4",
      },
      {
        number: 3,
        title: "Similarity = Rigid Motion + Dilation",
        description: "Two figures that are similar but not in a simple dilation relationship. Student must compose a rigid motion (from Module 1) with a dilation to map one onto the other. The earned reveal: \"similar\" means there exists such a sequence.",
        reuse: "SequenceBuilder pattern from M1 capstone, transformation selection UI",
        newWork: "Dilation as a selectable transformation step, combined sequence validation, similarity determination",
        ald: "L4–L5",
      },
      {
        number: 4,
        title: "AA Discovery & Capstone",
        description: "Angle measurement instrument appears. Student compares angles in similar triangles and discovers: if two angles match, the triangles must be similar (AA criterion). Capstone: inverse similarity task — given two figures, build the full sequence.",
        reuse: "Inverse task pattern from M1 capstone, CelebrationModal",
        newWork: "Angle measurement readout, AA criterion discovery flow, angle-comparison instrument",
        ald: "L5",
      },
    ],
    shapeNote: "Same scalene triangle from Module 1. Students recognize it immediately. Now it grows.",
  },
  module3: {
    id: "module3",
    title: "MODULE 03",
    subtitle: "Pythagorean Theorem",
    coreQuestion: "What's hiding inside every right triangle?",
    coreAnswer: "The area of the square on the hypotenuse equals the sum of the areas of the squares on the legs. a² + b² = c².",
    standards: [
      {
        code: "8.G.B.6",
        text: "Explain a proof of the Pythagorean Theorem and its converse using the area of squares",
        rigor: ["Conceptual Understanding"],
        constraint: null,
        shared: false,
      },
      {
        code: "8.G.B.7",
        text: "Apply the Pythagorean Theorem to determine unknown side lengths in right triangles in real-world and mathematical problems in 2D and 3D",
        rigor: ["Procedural Skill", "Application"],
        constraint: null,
        shared: false,
      },
      {
        code: "8.G.B.8",
        text: "Apply the Pythagorean Theorem to find the distance between two points in a coordinate system",
        rigor: ["Application"],
        constraint: null,
        shared: false,
      },
    ],
    alds: [
      {
        level: "L2",
        label: "Floor",
        descriptor: "Applies Pythagorean Theorem to determine the hypotenuse in a simple planar case without coordinates.",
        instrument: "Scaffolded: right triangle with labeled legs, student finds hypotenuse only. Area-of-squares visual makes a² + b² = c² tangible before symbolic.",
        color: T.textDim,
      },
      {
        level: "L3",
        label: "Entry",
        descriptor: "Applies Pythagorean Theorem to determine any side of a right triangle in a simple planar case without coordinates.",
        instrument: "Any-side mode: sometimes the unknown is a leg, not the hypotenuse. Student must rearrange reasoning (not yet the formula).",
        color: T.accent,
      },
      {
        level: "L4",
        label: "Primary Target",
        descriptor: "Applies Pythagorean Theorem in a simple planar case and to find distance between two points in a coordinate system.",
        instrument: "Coordinate grid activates. Two points plotted, student constructs the right triangle between them and applies the theorem. Distance formula emerges as earned reveal.",
        color: T.info,
      },
      {
        level: "L5",
        label: "Capstone",
        descriptor: "Applies Pythagorean Theorem in real-world and mathematical problems in 2D and 3D. Recognizes situations requiring it in multi-step problems.",
        instrument: "3D extension: rectangular prism diagonal. Multi-step problems where the right triangle isn't given — student must identify it. Real-world context overlay.",
        color: T.danger,
      },
    ],
    phases: [
      {
        number: 1,
        title: "Square Areas Discovery",
        description: "A right triangle with squares drawn on each side. Student can drag to resize the triangle. The three square areas are displayed in real-time. The relationship reveals itself: the two smaller areas always sum to the larger. No formula — just observation. The Teacher's Companion specifically calls for this model.",
        reuse: "R3F scene, dot grid, GSAP animations, SpriteLabel",
        newWork: "Dynamic square rendering on triangle sides, area calculation display, drag-to-resize interaction",
        ald: "L2–L3 (conceptual foundation)",
      },
      {
        number: 2,
        title: "Find the Missing Side",
        description: "The area-of-squares visual persists but now one square's area is hidden. Student uses the relationship to predict the missing area, then derives the side length. Progresses from hypotenuse-only (L2) to any-side (L3). Formula notation appears as earned reveal after demonstrated understanding.",
        reuse: "Predict/reveal loop, scoring system, progressive difficulty",
        newWork: "Missing-value interaction, square root introduction as earned reveal, formula readout for a² + b² = c²",
        ald: "L2 → L3",
      },
      {
        number: 3,
        title: "Distance in the Coordinate Plane",
        description: "Two points on the coordinate grid. Student clicks to construct the horizontal and vertical legs of the right triangle between them. Then applies the theorem to find the distance. The distance formula is the earned reveal — students see it's just Pythagorean Theorem with coordinates plugged in.",
        reuse: "Coordinate grid from M1/M2, coordinatesActive pattern, FormulaReadout",
        newWork: "Point-to-point triangle construction tool, distance formula as earned reveal, coordinate substitution display",
        ald: "L4",
      },
      {
        number: 4,
        title: "3D Extension & Capstone",
        description: "Rectangular prism appears in R3F (the 3D payoff for the entire three-module arc). Student must find the space diagonal by applying the theorem twice. Multi-step problems where the right triangle must be identified, not given. Real-world context problems.",
        reuse: "CelebrationModal, scoring, formula readout pattern",
        newWork: "3D prism rendering with interactive diagonal, two-step Pythagorean application, problem context overlays",
        ald: "L5",
      },
    ],
    shapeNote: "The scalene triangle's right-triangle variant becomes the primary instrument. Familiar shape, new property discovered.",
  },
};

const ARCH_REUSE = [
  { component: "Predict/Reveal Loop", m1: true, m2: true, m3: true, note: "Core interaction pattern across all modules" },
  { component: "SpriteLabel", m1: true, m2: true, m3: true, note: "Vertex and measurement labels" },
  { component: "coordinatesActive", m1: true, m2: true, m3: true, note: "Progressive coordinate reveal" },
  { component: "FormulaReadout", m1: true, m2: true, m3: true, note: "Earned notation display" },
  { component: "GSAP Animations", m1: true, m2: true, m3: true, note: "Reveal and transition animations" },
  { component: "Ghost/Preview", m1: true, m2: true, m3: false, note: "Student prediction visualization" },
  { component: "SequenceBuilder", m1: true, m2: true, m3: false, note: "Multi-step transformation composition" },
  { component: "CelebrationModal", m1: true, m2: true, m3: true, note: "Capstone completion" },
  { component: "Scoring System", m1: true, m2: true, m3: true, note: "Progressive round tracking" },
  { component: "Dot Grid", m1: true, m2: true, m3: true, note: "Laboratory aesthetic backdrop" },
  { component: "Scale Factor Slider", m1: false, m2: true, m3: false, note: "New for M2 — dilation control" },
  { component: "Angle Readout", m1: false, m2: true, m3: false, note: "New for M2 — AA criterion" },
  { component: "Area Display", m1: false, m2: false, m3: true, note: "New for M3 — square area visualization" },
  { component: "3D Prism", m1: false, m2: false, m3: true, note: "New for M3 — space diagonal capstone" },
];

function TabButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "8px 20px",
        background: active ? T.surfaceHi : "transparent",
        color: active ? T.accent : T.textDim,
        border: active ? `1px solid ${T.border}` : "1px solid transparent",
        borderBottom: active ? `1px solid ${T.surfaceHi}` : `1px solid ${T.border}`,
        fontFamily: "monospace",
        fontSize: "11px",
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        cursor: "pointer",
        marginBottom: "-1px",
        borderRadius: "4px 4px 0 0",
        transition: "all 0.2s",
      }}
    >
      {children}
    </button>
  );
}

function StandardCard({ standard }: { standard: Standard }) {
  const rigorColor = (r: string) => {
    if (r === "Conceptual Understanding") return T.info;
    if (r === "Procedural Skill") return T.accent;
    return T.danger;
  };

  const rigorBg = (r: string) => `color-mix(in srgb, ${rigorColor(r)} 12%, transparent)`;

  return (
    <div
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: "6px",
        padding: "14px 16px",
        marginBottom: "10px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            fontWeight: 700,
            color: T.accent,
            letterSpacing: "0.05em",
          }}
        >
          {standard.code}
        </span>
        {standard.shared && (
          <span
            style={{
              fontSize: "9px",
              fontFamily: "monospace",
              color: T.info,
              background: `color-mix(in srgb, ${T.info} 18%, transparent)`,
              padding: "2px 8px",
              borderRadius: "3px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Shared w/ M1
          </span>
        )}
      </div>
      <p style={{ fontSize: "13px", color: T.white, lineHeight: 1.5, margin: "0 0 10px 0" }}>{standard.text}</p>
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
        {standard.rigor.map((r) => (
          <span
            key={r}
            style={{
              fontSize: "9px",
              fontFamily: "monospace",
              color: rigorColor(r),
              background: rigorBg(r),
              padding: "2px 8px",
              borderRadius: "3px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            {r}
          </span>
        ))}
      </div>
      {standard.constraint && (
        <div
          style={{
            marginTop: "10px",
            paddingTop: "8px",
            borderTop: `1px solid ${T.border}`,
            fontSize: "11px",
            color: T.textDim,
            fontFamily: "monospace",
          }}
        >
          <span style={{ color: T.info, marginRight: "6px" }}>⚠</span>
          {standard.constraint}
        </div>
      )}
    </div>
  );
}

function ALDRow({ ald }: { ald: Ald }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "70px 1fr 1fr",
        gap: "12px",
        padding: "14px 0",
        borderBottom: `1px solid ${T.border}`,
        alignItems: "start",
      }}
    >
      <div>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "14px",
            fontWeight: 700,
            color: ald.color,
          }}
        >
          {ald.level}
        </span>
        <div style={{ fontSize: "9px", color: T.textDim, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "2px" }}>
          {ald.label}
        </div>
      </div>
      <p style={{ fontSize: "12px", color: T.textDim, lineHeight: 1.6, margin: 0 }}>{ald.descriptor}</p>
      <p style={{ fontSize: "12px", color: T.white, lineHeight: 1.6, margin: 0 }}>{ald.instrument}</p>
    </div>
  );
}

function PhaseCard({ phase }: { phase: Phase }) {
  const aldColors: Record<string, string> = {
    L2: T.textDim,
    L3: T.accent,
    "L2–L3": T.accent,
    "L2–L3 (conceptual foundation)": T.accent,
    "L2 → L3": T.accent,
    L4: T.info,
    "L4–L5": T.danger,
    L5: T.danger,
  };

  const barColor = aldColors[phase.ald] || T.textDim;
  const barBg = `color-mix(in srgb, ${barColor} 15%, transparent)`;

  return (
    <div
      style={{
        background: T.surface,
        border: `1px solid ${T.border}`,
        borderRadius: "8px",
        padding: "20px",
        marginBottom: "16px",
        borderLeft: `3px solid ${barColor}`,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "20px",
              fontWeight: 700,
              color: T.textDim,
            }}
          >
            {String(phase.number).padStart(2, "0")}
          </span>
          <span style={{ fontSize: "15px", fontWeight: 600, color: T.white }}>{phase.title}</span>
        </div>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "10px",
            color: barColor,
            background: barBg,
            padding: "3px 10px",
            borderRadius: "3px",
            letterSpacing: "0.06em",
          }}
        >
          ALD {phase.ald}
        </span>
      </div>
      <p style={{ fontSize: "13px", color: T.textDim, lineHeight: 1.65, margin: "0 0 16px 0" }}>{phase.description}</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
        <div
          style={{
            background: T.surfaceHi,
            borderRadius: "6px",
            padding: "12px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              fontFamily: "monospace",
              color: T.accent,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "6px",
            }}
          >
            Reuse from M1
          </div>
          <p style={{ fontSize: "11px", color: T.textDim, lineHeight: 1.5, margin: 0 }}>{phase.reuse}</p>
        </div>
        <div
          style={{
            background: T.surfaceHi,
            borderRadius: "6px",
            padding: "12px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              fontFamily: "monospace",
              color: T.info,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "6px",
            }}
          >
            New Work
          </div>
          <p style={{ fontSize: "11px", color: T.textDim, lineHeight: 1.5, margin: 0 }}>{phase.newWork}</p>
        </div>
      </div>
    </div>
  );
}

function ReuseMatrix() {
  return (
    <div style={{ overflowX: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontFamily: "monospace",
          fontSize: "11px",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "left", padding: "10px 12px", color: T.textDim, borderBottom: `1px solid ${T.border}`, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Component
            </th>
            <th style={{ textAlign: "center", padding: "10px 12px", color: T.textDim, borderBottom: `1px solid ${T.border}`, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", width: "60px" }}>
              M1
            </th>
            <th style={{ textAlign: "center", padding: "10px 12px", color: T.textDim, borderBottom: `1px solid ${T.border}`, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", width: "60px" }}>
              M2
            </th>
            <th style={{ textAlign: "center", padding: "10px 12px", color: T.textDim, borderBottom: `1px solid ${T.border}`, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em", width: "60px" }}>
              M3
            </th>
            <th style={{ textAlign: "left", padding: "10px 12px", color: T.textDim, borderBottom: `1px solid ${T.border}`, fontSize: "9px", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              Note
            </th>
          </tr>
        </thead>
        <tbody>
          {ARCH_REUSE.map((row) => (
            <tr key={row.component}>
              <td style={{ padding: "8px 12px", color: T.white, borderBottom: `1px solid ${T.border}`, fontWeight: 600 }}>{row.component}</td>
              {[row.m1, row.m2, row.m3].map((val, i) => (
                <td
                  key={i}
                  style={{
                    textAlign: "center",
                    padding: "8px 12px",
                    borderBottom: `1px solid ${T.border}`,
                    color: val ? T.accent : T.border,
                  }}
                >
                  {val ? "●" : "○"}
                </td>
              ))}
              <td style={{ padding: "8px 12px", color: T.textDim, borderBottom: `1px solid ${T.border}`, fontSize: "10px" }}>{row.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function NarrativeArc() {
  const modules = [
    {
      num: "01",
      title: "Rigid Motions",
      question: "What stays the same when a shape moves?",
      answer: "Distances and angles are preserved → Congruence",
      status: "complete",
      color: T.accent,
    },
    {
      num: "02",
      title: "Dilations & Similarity",
      question: "What stays the same when a shape grows?",
      answer: "Angles preserved, sides scale proportionally → Similarity",
      status: "next",
      color: T.info,
    },
    {
      num: "03",
      title: "Pythagorean Theorem",
      question: "What's hiding inside every right triangle?",
      answer: "a² + b² = c² — area relationship between squares on sides",
      status: "future",
      color: T.danger,
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
      {modules.map((m, i) => (
        <div key={m.num}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "60px 1fr",
              gap: "20px",
              padding: "24px 0",
              opacity: m.status === "future" ? 0.7 : 1,
            }}
          >
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "28px",
                  fontWeight: 700,
                  color: m.color,
                  lineHeight: 1,
                }}
              >
                {m.num}
              </div>
              {m.status === "complete" && (
                <span style={{ fontSize: "9px", color: T.accent, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Deployed
                </span>
              )}
              {m.status === "next" && (
                <span style={{ fontSize: "9px", color: T.info, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Next
                </span>
              )}
              {m.status === "future" && (
                <span style={{ fontSize: "9px", color: T.textDim, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Planned
                </span>
              )}
            </div>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 600, color: T.white, margin: "0 0 6px 0" }}>{m.title}</h3>
              <p style={{ fontSize: "14px", color: m.color, margin: "0 0 8px 0", fontStyle: "italic" }}>"{m.question}"</p>
              <p style={{ fontSize: "12px", color: T.textDim, margin: 0, lineHeight: 1.5 }}>{m.answer}</p>
            </div>
          </div>
          {i < modules.length - 1 && (
            <div style={{ display: "flex", alignItems: "center", paddingLeft: "26px" }}>
              <div style={{ width: "2px", height: "24px", background: `linear-gradient(to bottom, ${T.border}, ${T.surface})` }} />
              <span
                style={{
                  marginLeft: "16px",
                  fontSize: "10px",
                  fontFamily: "monospace",
                  color: T.textDim,
                  letterSpacing: "0.06em",
                }}
              >
                {i === 0 ? "Same triangle → now it grows" : "Right triangle variant → area relationship"}
              </span>
            </div>
          )}
        </div>
      ))}
      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          background: T.surface,
          borderRadius: "6px",
          border: `1px solid ${T.border}`,
        }}
      >
        <div style={{ fontSize: "9px", fontFamily: "monospace", color: T.textDim, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "8px" }}>
          Shape Continuity Principle
        </div>
        <p style={{ fontSize: "13px", color: T.textDim, lineHeight: 1.6, margin: 0 }}>
          One shape family across the entire 8.G cluster. Students meet the scalene triangle in Module 1 and never leave it.
          In Module 2 it grows. In Module 3 its right-triangle variant reveals the area relationship.
          No new geometric objects — only new properties of a familiar one.
        </p>
      </div>
    </div>
  );
}

export default function ModulePlanner() {
  const [activeModule, setActiveModule] = useState<TopTabId>("overview");
  const [activeSection, setActiveSection] = useState<ModuleSectionId>("standards");

  const mod: Module | null = activeModule === "module2" || activeModule === "module3" ? MODULES[activeModule] : null;

  const SECTION_TABS: ModuleSectionId[] = ["standards", "alds", "phases"];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: T.bg,
        color: T.text,
        fontFamily: "sans-serif",
        padding: "32px 24px",
      }}
    >
      {/* Header */}
      <div style={{ maxWidth: "900px", margin: "0 auto 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: T.accent,
              boxShadow: `0 0 8px ${T.accentDim}`,
            }}
          />
          <span
            style={{
              fontFamily: "monospace",
              fontSize: "10px",
              color: T.textDim,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Creative Lab — Grade 8 Geometry — Module Planning
          </span>
        </div>
        <h1 style={{ fontSize: "28px", fontWeight: 700, margin: "0 0 6px 0", color: T.white }}>
          Three-Module Arc
        </h1>
        <p style={{ fontSize: "14px", color: T.textDim, margin: 0 }}>
          Standards-grounded vision for Modules 2 and 3. Built from the ALDs up.
        </p>
      </div>

      {/* Module Tabs */}
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", gap: "4px", borderBottom: `1px solid ${T.border}`, marginBottom: "24px" }}>
          <TabButton active={activeModule === "overview"} onClick={() => setActiveModule("overview")}>
            Arc Overview
          </TabButton>
          <TabButton active={activeModule === "module2"} onClick={() => setActiveModule("module2")}>
            Module 02 — Similarity
          </TabButton>
          <TabButton active={activeModule === "module3"} onClick={() => setActiveModule("module3")}>
            Module 03 — Pythagorean
          </TabButton>
          <TabButton active={activeModule === "reuse"} onClick={() => setActiveModule("reuse")}>
            Reuse Matrix
          </TabButton>
        </div>

        {/* Overview */}
        {activeModule === "overview" && <NarrativeArc />}

        {/* Reuse Matrix */}
        {activeModule === "reuse" && (
          <div>
            <p style={{ fontSize: "13px", color: T.textDim, marginBottom: "20px", lineHeight: 1.6 }}>
              Module 1 infrastructure that carries forward. Filled circles indicate the component is used in that module.
              New components are marked — this is where the net-new engineering effort lives.
            </p>
            <ReuseMatrix />
          </div>
        )}

        {/* Module Detail */}
        {mod && (
          <div>
            {/* Module Header */}
            <div style={{ marginBottom: "24px" }}>
              <div
                style={{
                  fontFamily: "monospace",
                  fontSize: "11px",
                  color: T.textDim,
                  letterSpacing: "0.12em",
                  marginBottom: "4px",
                }}
              >
                {mod.title}
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: T.white, margin: "0 0 12px 0" }}>{mod.subtitle}</h2>
              <div
                style={{
                  background: T.surface,
                  border: `1px solid ${T.border}`,
                  borderRadius: "8px",
                  padding: "16px 20px",
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: "12px 16px",
                  alignItems: "start",
                }}
              >
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: T.textDim, textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: "2px" }}>
                  Core Question
                </span>
                <span style={{ fontSize: "15px", color: T.accent, fontStyle: "italic" }}>"{mod.coreQuestion}"</span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: T.textDim, textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: "2px" }}>
                  Earned Answer
                </span>
                <span style={{ fontSize: "13px", color: T.white, lineHeight: 1.5 }}>{mod.coreAnswer}</span>
                <span style={{ fontFamily: "monospace", fontSize: "10px", color: T.textDim, textTransform: "uppercase", letterSpacing: "0.1em", paddingTop: "2px" }}>
                  Shape
                </span>
                <span style={{ fontSize: "12px", color: T.textDim }}>{mod.shapeNote}</span>
              </div>
            </div>

            {/* Section Tabs */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "20px" }}>
              {SECTION_TABS.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSection(s)}
                  style={{
                    padding: "6px 16px",
                    background: activeSection === s ? T.surfaceHi : "transparent",
                    color: activeSection === s ? T.white : T.textDim,
                    border: activeSection === s ? `1px solid ${T.border}` : "1px solid transparent",
                    fontFamily: "monospace",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: "4px",
                    transition: "all 0.15s",
                  }}
                >
                  {s === "standards" ? "Standards & Rigor" : s === "alds" ? "ALD Alignment" : "Phase Design"}
                </button>
              ))}
            </div>

            {/* Standards */}
            {activeSection === "standards" && (
              <div>
                {mod.standards.map((s) => (
                  <StandardCard key={s.code} standard={s} />
                ))}
              </div>
            )}

            {/* ALDs */}
            {activeSection === "alds" && (
              <div>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "70px 1fr 1fr",
                    gap: "12px",
                    padding: "0 0 8px 0",
                    borderBottom: `1px solid ${T.border}`,
                    marginBottom: "4px",
                  }}
                >
                  <span style={{ fontFamily: "monospace", fontSize: "9px", color: T.textDim, textTransform: "uppercase", letterSpacing: "0.1em" }}>Level</span>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", color: T.textDim, textTransform: "uppercase", letterSpacing: "0.1em" }}>ALD Descriptor</span>
                  <span style={{ fontFamily: "monospace", fontSize: "9px", color: T.textDim, textTransform: "uppercase", letterSpacing: "0.1em" }}>How the Module Gets There</span>
                </div>
                {mod.alds.map((a) => (
                  <ALDRow key={a.level} ald={a} />
                ))}
              </div>
            )}

            {/* Phases */}
            {activeSection === "phases" && (
              <div>
                {mod.phases.map((p) => (
                  <PhaseCard key={p.number} phase={p} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Footer */}
      <div style={{ maxWidth: "900px", margin: "48px auto 0", paddingTop: "24px", borderTop: `1px solid ${T.border}` }}>
        <p style={{ fontFamily: "monospace", fontSize: "10px", color: T.textDim, textAlign: "center", letterSpacing: "0.05em" }}>
          CREATIVE LAB — IVLA STEM CLUB — GRADE 8 GEOMETRY — PLANNING ARTIFACT — {new Date().toISOString().split("T")[0]}
        </p>
      </div>
    </div>
  );
}