export type LabTokens = {
  bg: string;
  surface: string;
  surfaceHi: string;
  border: string;
  text: string;
  textDim: string;
  accent: string;
  accentDim: string;
  white: string;
  danger: string;
  info: string;
};

/**
 * Lab guide tokens sourced from `src/index.css` (supports light/dark via the `.dark` class).
 * Values intentionally remain `var(--lab-...)` strings so styling stays theme-correct.
 */
export const labTokens: LabTokens = {
  bg: "var(--lab-bg)",
  surface: "var(--lab-surface)",
  surfaceHi: "var(--lab-surface-hi)",
  border: "var(--lab-border)",
  text: "var(--lab-text)",
  textDim: "var(--lab-text-dim)",
  accent: "var(--lab-accent)",
  accentDim: "var(--lab-accent-dim)",
  white: "var(--lab-white)",
  danger: "var(--lab-danger)",
  info: "var(--lab-info)",
};

