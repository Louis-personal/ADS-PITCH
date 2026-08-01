import type { Chapter } from "@/content/opportunity-map";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { ChapterHeader } from "./ChapterHeader";
import { DataTimeline } from "./DataTimeline";
import { DealFunnel } from "./DealFunnel";
import { ExpandableCard } from "./ExpandableCard";
import { HorizonRoadmap } from "./HorizonRoadmap";
import { OrgFlowCompare } from "./OrgFlowCompare";
import { PhaseClose } from "./PhaseClose";
import { PortalFrames } from "./PortalFrames";
import { PortalOrbit } from "./PortalOrbit";
import { PromiseBadge } from "./PromiseBadge";
import { AlertMock } from "./AlertMock";
import { ReportCover } from "./ReportCover";
import { Reveal } from "./Reveal";
import { SeoSearchMock } from "./SeoSearchMock";
import { SpeedTimeline } from "./SpeedTimeline";

type ChapterSectionProps = {
  chapter: Chapter;
};

function BlockVisual({ visual }: { visual: string }) {
  switch (visual) {
    case "before-after":
      return <BeforeAfterSlider />;
    case "portal-frames":
      return <PortalFrames />;
    case "seo-search":
      return <SeoSearchMock />;
    default:
      return null;
  }
}

export function ChapterSection({ chapter }: ChapterSectionProps) {
  const isHorizon = chapter.id === "horizon";
  const isReliable = chapter.id === "reliable";
  const isKnowMore = chapter.id === "know-more";
  const isRunItself = chapter.id === "run-itself";
  const isWinMore = chapter.id === "win-more";
  const isMoveFaster = chapter.id === "move-faster";

  return (
    <section
      id={chapter.id}
      className="scroll-mt-[calc(var(--nav-height)+28px)] border-b border-border/70 py-16 md:py-24"
      aria-labelledby={`${chapter.id}-statement`}
    >
      <ChapterHeader
        id={chapter.id}
        number={chapter.number}
        title={chapter.title}
        statement={chapter.statement}
        subline={chapter.subline}
      />

      {chapter.blocks?.map((block) => (
        <div
          key={block.id}
          id={block.id}
          className="mb-14 scroll-mt-[calc(var(--nav-height)+40px)] last:mb-0"
        >
          <Reveal>
            <h3 className="max-w-3xl text-[26px] font-semibold leading-tight text-white md:text-[32px]">
              {block.headline}
            </h3>
            <p className="mt-4 max-w-2xl text-[16px] leading-[1.7] text-text-muted">
              {block.body}
            </p>
            {block.statCallout ? (
              <p className="mt-5 max-w-2xl text-[15px] font-medium text-lime-soft">
                {block.statCallout}
              </p>
            ) : null}
          </Reveal>
          <div className="mt-8">
            <BlockVisual visual={block.visual} />
          </div>
        </div>
      ))}

      {isWinMore ? (
        <div className="mb-10">
          <DealFunnel />
        </div>
      ) : null}

      {isMoveFaster ? (
        <div className="mb-10">
          <SpeedTimeline />
        </div>
      ) : null}

      {isReliable ? (
        <div className="mb-10 space-y-10">
          <PromiseBadge />
          <PortalOrbit />
        </div>
      ) : null}

      {isKnowMore ? (
        <div className="mb-10 grid gap-4 lg:grid-cols-2">
          <DataTimeline />
          <div className="grid gap-4">
            <AlertMock />
            <ReportCover />
          </div>
        </div>
      ) : null}

      {isRunItself ? (
        <div className="mb-10">
          <OrgFlowCompare />
        </div>
      ) : null}

      {isHorizon ? (
        <HorizonRoadmap />
      ) : chapter.cards?.length ? (
        <div className="grid gap-3">
          {chapter.cards.map((card) => (
            <ExpandableCard key={card.id} card={card} />
          ))}
        </div>
      ) : null}

      {chapter.closing && !isHorizon ? (
        <Reveal className="mt-12">
          <p className="max-w-2xl text-[20px] font-semibold text-white md:text-[24px]">
            {chapter.closing}
          </p>
        </Reveal>
      ) : null}

      {isHorizon ? <PhaseClose /> : null}
    </section>
  );
}
