import { Reveal } from "./Reveal";

export function ReportCover() {
  return (
    <Reveal>
      <div className="mx-auto max-w-sm rounded-2xl border border-border bg-[linear-gradient(160deg,#111,#020202_45%,#0a221c)] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime-soft">
          Annual report
        </p>
        <h3 className="mt-6 text-[28px] font-semibold leading-tight text-white">
          State of Military Spares
        </h3>
        <p className="mt-3 text-[14px] text-text-muted">
          Pricing trends. Lead times. Supply-chain patterns.
        </p>
        <div className="mt-10 border-t border-border pt-4">
          <p className="text-[12px] text-text-soft">Published by ADS</p>
          <p className="mt-1 text-[12px] text-text-muted">Data-backed · Industry forward</p>
        </div>
      </div>
    </Reveal>
  );
}
