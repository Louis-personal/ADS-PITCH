import { hero } from "@/content/opportunity-map";

export function Hero() {
  return (
    <section
      id={hero.id}
      className="relative scroll-mt-[var(--nav-height)] overflow-hidden border-b border-border"
    >
      <div className="agency-hero-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-5 py-20 md:px-12 md:py-28 xl:px-[72px]">
        <p className="animate-fade-up text-[13px] font-semibold uppercase tracking-[0.18em] text-lime-soft">
          {hero.eyebrow}
        </p>
        <h1 className="animate-fade-up mt-5 max-w-4xl text-[44px] font-semibold leading-[1.05] text-white md:text-[68px]">
          {hero.headline}
        </h1>
        <p className="animate-fade-up-delay mt-6 max-w-2xl text-[19px] leading-[1.6] text-text-muted">
          {hero.subheadline}
        </p>
        <p className="animate-fade-up-delay mt-4 max-w-xl text-[15px] text-text-soft">
          {hero.support}
        </p>
        <a
          href="#foundation"
          className="animate-fade-up-delay mt-10 inline-flex items-center gap-2 text-[15px] font-medium text-lime transition-colors hover:text-lime-soft"
        >
          <span aria-hidden>↓</span>
          {hero.scrollCue}
        </a>
      </div>
    </section>
  );
}
