import { mapMeta } from "@/content/opportunity-map";

export function Footer() {
  return (
    <footer className="border-t border-border bg-black">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-5 py-10 md:px-12 xl:px-[72px]">
        <p className="text-[15px] text-text-soft">{mapMeta.footerNote}</p>
        <p className="text-[13px] text-text-muted">
          {mapMeta.projectName} · Prepared by {mapMeta.preparedBy}
        </p>
      </div>
    </footer>
  );
}
