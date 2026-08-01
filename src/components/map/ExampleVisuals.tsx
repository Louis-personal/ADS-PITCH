import { techEdgeTiles } from "@/content/opportunity-map";

export function EmailMock() {
  return (
    <div className="rounded-xl border border-border bg-[#111] p-3">
      <div className="rounded-lg border border-border bg-white text-[#1a1a1a]">
        <div className="flex items-center gap-2 border-b border-black/10 px-3 py-2 text-[11px] text-black/50">
          <span className="size-2 rounded-full bg-[#ff5f57]" />
          <span className="size-2 rounded-full bg-[#febc2e]" />
          <span className="size-2 rounded-full bg-[#28c840]" />
          <span className="ml-2">Inbox · ADS</span>
        </div>
        <div className="bg-[#0d0d0d] px-4 py-3 text-white">
          <p className="text-[11px] uppercase tracking-[0.14em] text-lime-soft">ADS</p>
          <p className="mt-2 text-[15px] font-semibold">
            New distribution line: [OEM name]
          </p>
        </div>
        <div className="space-y-3 px-4 py-4 text-[13px]">
          <p className="text-black/70">
            A short note on a new line we can support for your platforms.
          </p>
          <div className="rounded-lg border border-black/10 bg-[#f7f7f7] px-3 py-3">
            <p className="font-medium">Part family · Condition · Lead time</p>
          </div>
          <div className="inline-flex rounded-full bg-[#0d0d0d] px-4 py-2 text-[12px] font-semibold text-lime">
            View availability
          </div>
          <p className="text-[11px] text-black/40">Contact · Unsubscribe</p>
        </div>
      </div>
    </div>
  );
}

export function RepairLoopDiagram() {
  const steps = ["Client", "ADS system", "Repair shop", "ADS system", "Client"];
  return (
    <div className="rounded-xl border border-border bg-bg-card p-4">
      <div className="flex flex-wrap items-center gap-2">
        {steps.map((step, index) => (
          <div key={`${step}-${index}`} className="flex items-center gap-2">
            <span
              className={[
                "rounded-full border px-3 py-1.5 text-[12px]",
                step.includes("ADS")
                  ? "border-lime/40 bg-lime/10 text-lime-soft"
                  : "border-border bg-bg-elevated text-white",
              ].join(" ")}
            >
              {step}
            </span>
            {index < steps.length - 1 ? (
              <span className="text-text-muted" aria-hidden>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-3 text-[13px] text-text-muted">
        ADS owns the experience. Partners own the workshops.
      </p>
    </div>
  );
}

export function GulfMapVisual() {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-5">
      <div className="relative mx-auto h-40 max-w-sm rounded-2xl border border-border bg-[radial-gradient(circle_at_40%_55%,rgba(189,255,0,0.18),transparent_28%),linear-gradient(160deg,#0a1614,#010001)]">
        <div className="absolute top-[48%] left-[42%] -translate-x-1/2 -translate-y-1/2">
          <span className="absolute inset-0 animate-ping rounded-full bg-lime/30" />
          <span className="relative inline-flex size-3 rounded-full bg-lime" />
        </div>
        <p className="absolute bottom-3 left-3 text-[12px] text-lime-soft">
          Dubai · already here
        </p>
      </div>
      <p className="mt-3 text-[13px] text-text-muted">
        Now: relationships. Later: presence.
      </p>
    </div>
  );
}

export function ConsignmentFlow() {
  const steps = [
    "ADS stock at client site",
    "Usage detected",
    "Automatic invoice",
    "Replenishment trigger",
    "Stock restored",
  ];
  return (
    <div className="rounded-xl border border-border bg-bg-card p-4">
      <ol className="space-y-2">
        {steps.map((step, index) => (
          <li
            key={step}
            className="flex items-center gap-3 rounded-lg border border-border bg-bg-elevated px-3 py-2 text-[13px] text-white"
          >
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-lime/15 text-[11px] text-lime">
              {index + 1}
            </span>
            {step}
          </li>
        ))}
      </ol>
      <p className="mt-3 text-[13px] text-text-muted">
        The client never runs out. ADS never chases the order.
      </p>
    </div>
  );
}

export function TechEdgeTiles() {
  return (
    <div className="rounded-xl border border-border bg-bg-card p-4">
      <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {techEdgeTiles.map((tile) => (
          <div
            key={tile.id}
            className="rounded-xl border border-border bg-bg-elevated px-3 py-3"
          >
            <p className="text-[13px] font-semibold text-white">{tile.label}</p>
            <p className="mt-1 text-[12px] text-text-muted">{tile.line}</p>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[12px] text-text-muted">Industry today: none of these.</p>
    </div>
  );
}
