import {
  chapters,
  horizonBands,
  type ExpandableCard,
} from "@/content/opportunity-map";
import { ExpandableCard as Card } from "./ExpandableCard";
import { Reveal } from "./Reveal";

const horizonChapter = chapters.find((chapter) => chapter.id === "horizon");

function cardsFor(ids: readonly string[]): ExpandableCard[] {
  const all = horizonChapter?.cards ?? [];
  return ids
    .map((id) => all.find((card) => card.id === id))
    .filter((card): card is ExpandableCard => Boolean(card));
}

const bands = [
  { key: "now" as const, label: "Now", tint: "border-lime/35" },
  { key: "next" as const, label: "Next", tint: "border-border" },
  { key: "later" as const, label: "Later", tint: "border-border" },
];

export function HorizonRoadmap() {
  return (
    <div className="space-y-10">
      {bands.map((band) => (
        <Reveal key={band.key}>
          <div className={`rounded-2xl border ${band.tint} bg-bg-elevated/80 p-5 md:p-7`}>
            <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] text-lime-soft">
              {band.label}
            </p>
            <div className="grid gap-4">
              {cardsFor(horizonBands[band.key]).map((card) => (
                <Card key={card.id} card={card} />
              ))}
            </div>
          </div>
        </Reveal>
      ))}
      {horizonChapter?.closing ? (
        <Reveal>
          <p className="rounded-2xl border border-border bg-bg-card px-5 py-4 text-[16px] leading-relaxed text-text-soft">
            {horizonChapter.closing}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
