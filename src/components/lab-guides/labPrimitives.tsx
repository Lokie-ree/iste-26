import React from "react";
import { Badge as ShadcnBadge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { labTokens } from "@/lib/labTokens";

function resolveTokenTextClass(color?: string, fallback: string = "text-[var(--lab-text-dim)]") {
  if (!color) return fallback;
  if (color === labTokens.accent) return "text-[var(--lab-accent)]";
  if (color === labTokens.info) return "text-[var(--lab-info)]";
  if (color === labTokens.danger) return "text-[var(--lab-danger)]";
  if (color === labTokens.textDim) return "text-[var(--lab-text-dim)]";
  if (color === labTokens.text) return "text-[var(--lab-text)]";
  if (color === labTokens.white) return "text-[var(--lab-white)]";
  return fallback;
}

export function ProgressDots({
  total,
  current,
  label,
}: {
  total: number;
  current: number;
  label?: string;
}) {
  return (
    <div className="flex flex-col items-center gap-1.5 py-4 pb-2">
      <div className="flex items-center gap-2.5">
        {Array.from({ length: total }, (_, i) => (
          <div
            key={i}
            className={[
              "rounded-full transition-all duration-300 ease-in-out",
              i === current ? "h-3.5 w-3.5 border-2 border-[var(--lab-accent)] bg-[var(--lab-accent)] shadow-[0_0_8px_var(--lab-accent-dim)]" : "",
              i < current ? "h-2 w-2 bg-[var(--lab-accent)]" : "",
              i > current ? "h-2 w-2 border border-[var(--lab-text-dim)] bg-transparent" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          />
        ))}
      </div>

      {label && (
        <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[var(--lab-surface-hi)]">
          {label}
        </span>
      )}
    </div>
  );
}

export function ScoredLine({ mode = "lab" }: { mode?: "lab" | "theme" }) {
  if (mode === "theme") return <Separator className="my-2 bg-border" />;
  return <Separator className="my-2 bg-[var(--lab-border)]" />;
}

export function SectionLabel({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className={`font-mono text-[9px] uppercase tracking-[0.2em] ${resolveTokenTextClass(color)}`}>
      {children}
    </span>
  );
}

export function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  const colorClass = resolveTokenTextClass(color, "text-[var(--lab-accent)]");
  return (
    <ShadcnBadge
      variant="outline"
      className={`rounded-sm border-transparent bg-[var(--lab-accent-dim)] px-2 py-0.5 font-mono text-[11px] ${colorClass}`}
    >
      {children}
    </ShadcnBadge>
  );
}

export function PromptBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-2 rounded bg-[var(--lab-surface)] px-3 py-2">
      <span className="text-[13px] text-[var(--lab-white)]">{children}</span>
    </div>
  );
}

export function DotGrid({ height = 120 }: { height?: number }) {
  const dots: React.ReactNode[] = [];
  const spacing = 16;
  const cols = 22;
  const rows = Math.floor(height / spacing);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={10 + c * spacing}
          cy={10 + r * spacing}
          r={1}
          fill={labTokens.textDim}
          opacity={0.5}
        />,
      );
    }
  }

  return (
    <div className="my-1.5 rounded bg-[var(--lab-surface)] p-1">
      <svg width="100%" height={height} viewBox={`0 0 ${10 + cols * spacing} ${10 + rows * spacing}`}>
        {dots}
      </svg>
      <div className="px-2 pb-1 text-[9px] uppercase tracking-[0.1em] text-[var(--lab-surface-hi)]">
        sketch your prediction
      </div>
    </div>
  );
}

export function WriteLines({ count = 3 }: { count?: number }) {
  return (
    <div className="px-2 py-1">
      {Array.from({ length: count }, (_, i) => (
        <div key={i} className="h-[22px] border-b border-[var(--lab-border)]" />
      ))}
    </div>
  );
}

