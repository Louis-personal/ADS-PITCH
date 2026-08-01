"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useId, useState } from "react";
import type { ExpandableCard as ExpandableCardType } from "@/content/opportunity-map";
import {
  ConsignmentFlow,
  EmailMock,
  GulfMapVisual,
  RepairLoopDiagram,
  TechEdgeTiles,
} from "./ExampleVisuals";

type ExpandableCardProps = {
  card: ExpandableCardType;
};

function BreakdownVisual({
  visualKey,
}: {
  visualKey: NonNullable<ExpandableCardType["breakdown"]["visualKey"]>;
}) {
  switch (visualKey) {
    case "email-mock":
      return <EmailMock />;
    case "repair-loop":
      return <RepairLoopDiagram />;
    case "gulf-map":
      return <GulfMapVisual />;
    case "consignment-flow":
      return <ConsignmentFlow />;
    case "tech-edge-tiles":
      return <TechEdgeTiles />;
    default:
      return null;
  }
}

const sections = [
  { key: "what" as const, label: "What it is" },
  { key: "why" as const, label: "Why it makes sense for ADS" },
  { key: "worthKnowing" as const, label: "Worth knowing" },
  { key: "example" as const, label: "What it could look like" },
];

export function ExpandableCard({ card }: ExpandableCardProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const reduceMotion = useReducedMotion();

  return (
    <article
      id={card.id}
      className="scroll-mt-[calc(var(--nav-height)+40px)] rounded-2xl border border-border bg-bg-elevated"
    >
      <button
        type="button"
        className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left md:px-6"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
      >
        <span>
          <span className="block text-[18px] font-semibold text-white">{card.title}</span>
          <span className="mt-2 block text-[15px] leading-snug text-text-muted">
            {card.tagline}
          </span>
        </span>
        <span
          className={[
            "mt-1 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-lime transition-transform",
            open ? "rotate-45" : "",
          ].join(" ")}
          aria-hidden
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="space-y-5 border-t border-border px-5 py-5 md:px-6">
              {sections.map((section) => (
                <div key={section.key}>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-lime-soft">
                    {section.label}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.65] text-text-soft">
                    {card.breakdown[section.key]}
                  </p>
                </div>
              ))}
              {card.breakdown.visualKey ? (
                <div className="pt-1">
                  <BreakdownVisual visualKey={card.breakdown.visualKey} />
                </div>
              ) : null}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </article>
  );
}
