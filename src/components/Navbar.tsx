import Image from "next/image";
import { ContactMenu } from "@/components/ContactMenu";
import { mapMeta, navLinks } from "@/content/opportunity-map";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur-md">
      <div className="mx-auto flex h-[var(--nav-height)] max-w-[1440px] items-center justify-between gap-6 px-5 md:px-12 xl:px-[72px]">
        <a
          href="#start-here"
          className="relative h-12 w-[180px] shrink-0 md:h-[56px] md:w-[220px]"
          aria-label="THE AGNTCY"
        >
          <Image
            src="/brand/logo.svg"
            alt="THE AGNTCY"
            fill
            className="object-contain object-left"
            priority
          />
        </a>

        <div className="flex items-center gap-4 md:gap-6">
          <nav className="hidden items-center gap-5 sm:flex">
            {navLinks.map((link) => {
              const isPlaceholder = link.href.startsWith("[");
              return (
                <a
                  key={link.label}
                  href={isPlaceholder ? "#" : link.href}
                  className="text-[14px] text-white transition-colors hover:text-lime-soft"
                  target={isPlaceholder ? undefined : "_blank"}
                  rel={isPlaceholder ? undefined : "noopener noreferrer"}
                  title={isPlaceholder ? mapMeta.adsSiteUrl : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <ContactMenu />
        </div>
      </div>
    </header>
  );
}
