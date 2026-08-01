import { Reveal } from "./Reveal";

const frames = [
  { title: "Search results", detail: "Availability, condition, lead time" },
  { title: "Part page", detail: "Cross-refs, docs, request quote" },
  { title: "Order tracking", detail: "Live status without the phone call" },
];

export function PortalFrames() {
  return (
    <Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {frames.map((frame, index) => (
          <div
            key={frame.title}
            className="rounded-2xl border border-border bg-bg-elevated p-4"
            style={{ transform: `translateY(${index * 8}px)` }}
          >
            <div className="mb-3 flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
              <span className="size-2 rounded-full bg-white/20" />
            </div>
            <div className="rounded-xl border border-border bg-black/50 p-4">
              <p className="text-[12px] uppercase tracking-[0.14em] text-lime-soft">
                Portal
              </p>
              <p className="mt-3 text-[18px] font-semibold text-white">{frame.title}</p>
              <p className="mt-2 text-[14px] text-text-muted">{frame.detail}</p>
              <div className="mt-5 space-y-2">
                <div className="h-2 w-[80%] rounded bg-white/10" />
                <div className="h-2 w-[60%] rounded bg-white/10" />
                <div className="h-8 rounded-lg bg-lime/20" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Reveal>
  );
}
