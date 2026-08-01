"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const todaySteps = [
  "Tender arrives",
  "Data extracted by hand",
  "Portals checked one by one",
  "Forms filled manually",
  "Prices gathered",
  "Quote built",
  "Re-keyed into ERP",
];

const engineSteps = [
  "Tender arrives",
  "System reads, checks history, gathers pricing",
  "Draft quote ready",
  "Human reviews and approves",
];

export function SpeedTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal>
      <div id="move-faster-timeline" className="scroll-mt-[calc(var(--nav-height)+40px)] grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-bg-elevated p-6">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-text-muted">
                Today
              </p>
              <p className="mt-2 text-[22px] font-semibold text-white">2–3 hours</p>
            </div>
            <p className="text-[13px] text-text-muted">Six manual steps</p>
          </div>
          <ol className="space-y-3">
            {todaySteps.map((step, index) => (
              <motion.li
                key={step}
                className="flex items-center gap-3 rounded-xl border border-border bg-bg-card px-3 py-2.5 text-[14px] text-text-soft"
                initial={reduceMotion ? false : { opacity: 0.25 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: index * 0.12, duration: 0.25 }}
              >
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-white/10 text-[11px]">
                  {index + 1}
                </span>
                {step}
              </motion.li>
            ))}
          </ol>
          <p className="mt-4 text-[14px] text-text-muted">
            Senior people doing copy-paste.
          </p>
        </div>

        <div className="rounded-2xl border border-lime/35 bg-[linear-gradient(180deg,rgba(189,255,0,0.08),transparent)] p-6">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
                With the engine
              </p>
              <p className="mt-2 text-[22px] font-semibold text-white">~10 minutes</p>
            </div>
            <p className="text-[13px] text-lime-soft">One human step</p>
          </div>
          <ol className="space-y-3">
            {engineSteps.map((step, index) => (
              <motion.li
                key={step}
                className="flex items-center gap-3 rounded-xl border border-lime/25 bg-black/40 px-3 py-2.5 text-[14px] text-white"
                initial={reduceMotion ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.3 }}
              >
                <span className="inline-flex size-6 items-center justify-center rounded-full bg-lime text-[11px] font-semibold text-ink">
                  {index + 1}
                </span>
                {step}
              </motion.li>
            ))}
          </ol>
          <p className="mt-4 text-[14px] text-text-soft">
            Minutes, not hours. One human step: judgment.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
