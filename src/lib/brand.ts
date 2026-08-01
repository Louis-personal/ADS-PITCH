/**
 * The AGNTCY design language extracted from Figma
 * file: The Agntcy (Copy) / Rmg0lAQKsgiY455fk1e5hk
 * primary reference: Homepage 118:1636 + navbar 80:1492
 */
export const brand = {
  name: "THE AGNTCY",
  fonts: {
    sans: "Inter",
    emphasis: "Instrument Serif",
    footer: "Figtree",
  },
  colors: {
    bg: "#010001",
    bgElevated: "#0d0d0d",
    bgCard: "#1f1f1f",
    ink: "#0A0E1F",
    text: "#F3F3F3",
    muted: "#c2c2c2",
    soft: "#dbdbdc",
    lime: "#BDFF00",
    limeSoft: "#E6FFAE",
    teal: "#005561",
    border: "rgba(243,243,243,0.14)",
  },
  radii: {
    card: 16,
    pill: 58,
  },
  patterns: {
    headline:
      "Inter semibold for structure; Instrument Serif italic + lime for the emphasis word.",
    buttons:
      "Pill CTAs. Filled lime/gradient primary, white outline ghost secondary.",
    surfaces: "Near-black canvas, subtle 1px borders, 16px card radius.",
  },
} as const;
