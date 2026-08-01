"use client";

import { useEffect, useMemo, useState } from "react";
import type { TocItem } from "@/content/opportunity-map";

type SideOutlineProps = {
  items: TocItem[];
};

export function SideOutline({ items }: SideOutlineProps) {
  const flatIds = useMemo(
    () =>
      items.flatMap((item) => [
        item.id,
        ...(item.children?.map((child) => child.id) ?? []),
      ]),
    [items],
  );
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    const nodes = flatIds
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-18% 0px -62% 0px",
        threshold: [0.08, 0.2, 0.4],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [flatIds]);

  const activeChapterId =
    items.find(
      (item) =>
        item.id === activeId ||
        item.children?.some((child) => child.id === activeId),
    )?.id ?? items[0]?.id;

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-[calc(var(--nav-height)+40px)] max-h-[calc(100vh-var(--nav-height)-72px)] overflow-y-auto pr-2">
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-lime-soft">
          On this page
        </p>
        <nav aria-label="Opportunity map outline">
          <ol className="space-y-1 border-l border-border">
            {items.map((item) => {
              const chapterActive = item.id === activeChapterId;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={[
                      "relative -ml-px block border-l-2 py-2 pl-4 text-[13px] transition-all duration-200",
                      item.id === activeId || chapterActive
                        ? "border-lime text-white"
                        : "border-transparent text-text-muted hover:border-white/30 hover:text-white",
                    ].join(" ")}
                    aria-current={item.id === activeId ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                  {item.children?.length && chapterActive ? (
                    <ol className="mb-2 ml-4 mt-1 space-y-0.5 border-l border-border/70">
                      {item.children.map((child) => (
                        <li key={child.id}>
                          <a
                            href={`#${child.id}`}
                            className={[
                              "block border-l-2 py-1.5 pl-3 text-[12px] transition-colors",
                              child.id === activeId
                                ? "border-lime text-lime-soft"
                                : "border-transparent text-text-muted hover:text-white",
                            ].join(" ")}
                            aria-current={
                              child.id === activeId ? "location" : undefined
                            }
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ol>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </aside>
  );
}
