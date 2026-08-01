import { Reveal } from "./Reveal";

export function OrgFlowCompare() {
  return (
    <Reveal>
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-bg-elevated p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-text-muted">
            Today
          </p>
          <p className="mt-2 text-[20px] font-semibold text-white">
            Routine load routes through a few people
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="grid w-full grid-cols-3 gap-2">
              {["Inbox", "Quotes", "Chasing"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-border bg-bg-card px-2 py-3 text-center text-[12px] text-text-soft"
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="text-text-muted" aria-hidden>
              ↓ ↓ ↓
            </div>
            <div className="flex w-full gap-3">
              <div className="flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-4 text-center text-[14px] font-semibold text-white">
                Owner A
              </div>
              <div className="flex-1 rounded-xl border border-white/20 bg-white/10 px-3 py-4 text-center text-[14px] font-semibold text-white">
                Owner B
              </div>
            </div>
            <p className="mt-2 text-center text-[13px] text-text-muted">
              Knowledge and throughput bottlenecked.
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-lime/35 bg-[linear-gradient(180deg,rgba(189,255,0,0.08),transparent)] p-6">
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
            After
          </p>
          <p className="mt-2 text-[20px] font-semibold text-white">
            Systems absorb the routine load
          </p>
          <div className="mt-6 flex flex-col items-center gap-3">
            <div className="grid w-full grid-cols-3 gap-2">
              {["Inbox", "Quotes", "Chasing"].map((label) => (
                <div
                  key={label}
                  className="rounded-lg border border-lime/25 bg-black/40 px-2 py-3 text-center text-[12px] text-white"
                >
                  {label}
                </div>
              ))}
            </div>
            <div className="w-full rounded-xl border border-lime/40 bg-lime/15 px-3 py-4 text-center text-[14px] font-semibold text-lime">
              Systems layer
            </div>
            <div className="text-lime-soft" aria-hidden>
              ↓
            </div>
            <div className="w-full rounded-xl border border-border bg-bg-card px-3 py-4 text-center text-[14px] text-white">
              People on judgment, clients, exceptions
            </div>
            <p className="mt-2 text-center text-[13px] text-text-soft">
              Resilience and value compound every month.
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
