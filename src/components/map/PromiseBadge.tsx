import { promiseCopy } from "@/content/opportunity-map";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

export function PromiseBadge() {
  return (
    <Reveal>
      <div
        id="reliable-promise"
        className="scroll-mt-[calc(var(--nav-height)+40px)] rounded-3xl border border-lime/40 bg-[radial-gradient(circle_at_top,rgba(189,255,0,0.14),transparent_55%)] px-6 py-10 text-center md:px-12"
      >
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-lime-soft">
          Brand promise
        </p>
        <p className="mx-auto mt-4 max-w-3xl text-[34px] font-semibold leading-tight text-white md:text-[48px]">
          {promiseCopy.headline}
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-relaxed text-text-muted">
          {promiseCopy.body}
        </p>
        <p className="mx-auto mt-3 max-w-xl text-[14px] text-text-soft">{promiseCopy.note}</p>
        <div className="mx-auto mt-8 inline-flex flex-col items-center rounded-2xl border border-border bg-black/50 px-8 py-5">
          <p className="text-[12px] uppercase tracking-[0.14em] text-text-muted">
            Avg. response time this month
          </p>
          <p className="mt-2 text-[36px] font-semibold text-lime">
            <CountUp value={0} suffix="h" />{" "}
            <span className="text-text-muted">·</span>{" "}
            <CountUp value={0} suffix="m" />
            <span className="ml-2 text-[14px] font-normal text-text-muted">
              (awaiting target)
            </span>
          </p>
        </div>
      </div>
    </Reveal>
  );
}
