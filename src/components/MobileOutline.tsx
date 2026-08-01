"use client";

import { useEffect, useMemo, useState } from "react";
import type { TocItem } from "@/content/opportunity-map";

type MobileOutlineProps = {
  items: TocItem[];
};

export function MobileOutline({ items }: MobileOutlineProps) {
  const [open, setOpen] = useState(false);
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
        if (visible[0]?.target.id) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0.08, 0.25] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [flatIds]);

  const activeIndex = Math.max(
    0,
    items.findIndex(
      (item) =>
        item.id === activeId ||
        item.children?.some((child) => child.id === activeId),
    ),
  );

  return (
    <div className="sticky top-[var(--nav-height)] z-40 border-b border-border bg-bg/95 backdrop-blur-md xl:hidden">
      <div className="flex items-center gap-3 px-5 py-3 md:px-12">
        <div className="flex flex-1 items-center gap-1.5" aria-hidden>
          {items.map((item, index) => (
            <span
              key={item.id}
              className={[
                "h-1.5 flex-1 rounded-full transition-colors",
                index <= activeIndex ? "bg-lime" : "bg-white/15",
              ].join(" ")}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-full border border-border px-3 py-1.5 text-[12px] text-white"
          aria-expanded={open}
        >
          {open ? "Close" : "Contents"}
        </button>
      </div>
      {open ? (
        <nav
          aria-label="Opportunity map outline"
          className="max-h-[55vh] overflow-y-auto border-t border-border px-5 py-3 md:px-12"
        >
          <ul className="space-y-1">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={[
                    "block rounded-lg px-3 py-2 text-[14px] transition-colors",
                    item.id === activeId
                      ? "bg-bg-card text-white"
                      : "text-text-muted hover:bg-bg-card hover:text-white",
                  ].join(" ")}
                >
                  {item.label}
                </a>
                {item.children?.length ? (
                  <ul className="mb-2 ml-3 space-y-0.5">
                    {item.children.map((child) => (
                      <li key={child.id}>
                        <a
                          href={`#${child.id}`}
                          onClick={() => setOpen(false)}
                          className="block rounded-md px-3 py-1.5 text-[12px] text-text-muted hover:text-white"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </div>
  );
}
