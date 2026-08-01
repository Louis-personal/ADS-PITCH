import { closeBlock, phases } from "@/content/opportunity-map";
import { Reveal } from "./Reveal";

export function PhaseClose() {
  return (
    <section
      id={closeBlock.id}
      className="scroll-mt-[calc(var(--nav-height)+40px)] border-t border-border pt-16 md:pt-20"
    >
      <Reveal>
        <h3 className="text-[36px] font-semibold text-white md:text-[48px]">
          {closeBlock.headline}
        </h3>
        <p className="mt-3 max-w-2xl text-[17px] text-text-muted">{closeBlock.subline}</p>
      </Reveal>
      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {phases.map((phase, index) => (
          <Reveal key={phase.id} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-bg-elevated p-6 transition-colors hover:border-lime/40">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
                {phase.title}
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-text-muted">
                {phase.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8">
        <p className="max-w-2xl text-[15px] leading-relaxed text-text-soft">
          {closeBlock.finalLine}
        </p>
      </Reveal>
    </section>
  );
}
