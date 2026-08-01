import { Reveal } from "./Reveal";

export function AlertMock() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-bg-elevated p-5 md:p-6">
        <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
          Obsolescence alert
        </p>
        <div className="mt-4 rounded-xl border border-border bg-black/50 p-4">
          <div className="flex items-center justify-between gap-3 border-b border-border pb-3">
            <p className="text-[13px] text-text-muted">From: ADS Watchdog</p>
            <p className="text-[12px] text-text-muted">Today</p>
          </div>
          <p className="mt-4 text-[18px] font-semibold text-white">
            EOL notice: filter kit due for last-time buy
          </p>
          <p className="mt-3 text-[14px] leading-relaxed text-text-soft">
            A part on platforms you support is approaching end of life. Batch can
            be reserved now, before the market reacts.
          </p>
          <div className="mt-5 inline-flex rounded-full bg-lime px-4 py-2 text-[13px] font-semibold text-ink">
            Review last-time buy
          </div>
        </div>
      </div>
    </Reveal>
  );
}
