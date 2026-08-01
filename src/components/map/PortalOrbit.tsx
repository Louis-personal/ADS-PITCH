import { Reveal } from "./Reveal";

const chips = [
  "Live tracking",
  "Order history",
  "2-click reorder",
  "Platform lookup",
  "Usage alerts",
];

export function PortalOrbit() {
  return (
    <Reveal>
      <div className="relative mx-auto flex min-h-[320px] max-w-3xl items-center justify-center">
        <div className="absolute inset-0 rounded-full border border-border/70" />
        <div className="absolute inset-8 rounded-full border border-border/40" />
        <div className="relative z-10 w-[220px] rounded-[28px] border border-border bg-bg-elevated p-3 shadow-[0_0_40px_rgba(189,255,0,0.08)] md:w-[260px]">
          <div className="rounded-2xl border border-border bg-black p-4">
            <p className="text-[11px] uppercase tracking-[0.14em] text-lime-soft">
              Client portal
            </p>
            <p className="mt-3 text-[20px] font-semibold text-white">Your orders</p>
            <div className="mt-4 space-y-2">
              <div className="h-8 rounded-lg bg-lime/20" />
              <div className="h-8 rounded-lg bg-white/5" />
              <div className="h-8 rounded-lg bg-white/5" />
            </div>
          </div>
        </div>
        {chips.map((chip, index) => {
          const angle = (index / chips.length) * Math.PI * 2 - Math.PI / 2;
          const x = Math.cos(angle) * 42;
          const y = Math.sin(angle) * 38;
          return (
            <span
              key={chip}
              className="absolute z-20 rounded-full border border-border bg-bg-card px-3 py-1.5 text-[12px] text-white shadow-lg"
              style={{
                left: `calc(50% + ${x}%)`,
                top: `calc(50% + ${y}%)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {chip}
            </span>
          );
        })}
      </div>
    </Reveal>
  );
}
