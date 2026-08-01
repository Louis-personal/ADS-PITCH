"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "./Reveal";

const streams = [
  "Portals",
  "Scraper",
  "Marketplaces",
  "Search",
  "Referrals",
];

export function DealFunnel() {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-bg-elevated p-6 md:p-8">
        <p className="mb-6 text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
          Demand into one pipeline
        </p>
        <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <div className="space-y-3">
            {streams.map((stream, index) => (
              <motion.div
                key={stream}
                className="rounded-xl border border-border bg-bg-card px-4 py-3 text-[14px] text-white"
                initial={reduceMotion ? false : { opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.3 }}
              >
                {stream}
              </motion.div>
            ))}
          </div>
          <div className="hidden text-center text-lime md:block" aria-hidden>
            →
          </div>
          <motion.div
            className="flex min-h-[220px] items-center justify-center rounded-2xl border border-lime/40 bg-[radial-gradient(circle_at_center,rgba(189,255,0,0.12),transparent_60%)] p-6 text-center"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.35 }}
          >
            <div>
              <p className="text-[13px] uppercase tracking-[0.14em] text-lime-soft">
                ADS pipeline
              </p>
              <p className="mt-3 text-[28px] font-semibold text-white">Scored. Ready.</p>
              <p className="mt-2 text-[14px] text-text-muted">
                Opportunities land where the team already works.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </Reveal>
  );
}
