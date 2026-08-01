"use client";

import { useEffect, useRef, useState } from "react";
import { contactDetails } from "@/content/opportunity-map";

export function ContactMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 items-center justify-center rounded-full bg-gradient-to-b from-white to-[#c7c7c7] px-5 text-[15px] font-semibold text-ink transition-transform hover:scale-[1.02] md:h-[52px] md:px-7 md:text-[18px]"
        aria-expanded={open}
        aria-haspopup="dialog"
      >
        Contact
      </button>
      {open ? (
        <div
          role="dialog"
          aria-label="Contact details"
          className="absolute top-[calc(100%+10px)] right-0 z-50 w-[280px] rounded-2xl border border-border bg-bg-elevated p-5 shadow-[0_16px_40px_rgba(0,0,0,0.45)]"
        >
          <p className="text-[16px] font-semibold text-white">{contactDetails.name}</p>
          <ul className="mt-4 space-y-2 text-[14px] text-text-soft">
            <li>{contactDetails.phone}</li>
            <li>
              <a
                href={
                  contactDetails.email.startsWith("[")
                    ? "#"
                    : `mailto:${contactDetails.email}`
                }
                className="transition-colors hover:text-lime"
              >
                {contactDetails.email}
              </a>
            </li>
            <li>
              <a
                href={
                  contactDetails.linkedIn.startsWith("[")
                    ? "#"
                    : contactDetails.linkedIn
                }
                className="transition-colors hover:text-lime"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <p className="mt-4 border-t border-border pt-3 text-[13px] leading-relaxed text-text-muted">
            {contactDetails.note}
          </p>
        </div>
      ) : null}
    </div>
  );
}
