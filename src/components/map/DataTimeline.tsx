"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const years = [2000, 2005, 2010, 2015, 2020, 2026];

export function DataTimeline() {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-bg-elevated p-6 md:p-8">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
              Archive unlocked
            </p>
            <p className="mt-2 text-[28px] font-semibold text-white">
              <CountUp value={25} suffix=" years" /> of ERP data
            </p>
          </div>
          <p className="max-w-sm text-[14px] text-text-muted">
            Quotes, wins, losses and supplier performance, finally organised into
            decisions.
          </p>
        </div>
        <div className="grid grid-cols-6 gap-2 md:gap-3">
          {years.map((year, index) => (
            <motion.div
              key={year}
              className="flex flex-col justify-end"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.3 }}
            >
              <div
                className="rounded-t-lg bg-gradient-to-t from-teal to-lime"
                style={{ height: `${36 + index * 18}px` }}
              />
              <p className="mt-2 text-center text-[11px] text-text-muted md:text-[12px]">
                {year}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
