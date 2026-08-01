import { MobileOutline } from "@/components/MobileOutline";
import { SideOutline } from "@/components/SideOutline";
import { ChapterSection } from "@/components/map/ChapterSection";
import { Hero } from "@/components/map/Hero";
import { ScrollProgress } from "@/components/map/ScrollProgress";
import { chapters, getOutlineItems } from "@/content/opportunity-map";

export default function Home() {
  const outline = getOutlineItems();

  return (
    <main>
      <ScrollProgress />
      <Hero />
      <MobileOutline items={outline} />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 md:px-12 xl:grid-cols-[260px_minmax(0,1fr)] xl:gap-14 xl:px-[72px]">
        <SideOutline items={outline} />
        <div>
          {chapters.map((chapter) => (
            <ChapterSection key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </div>
    </main>
  );
}
