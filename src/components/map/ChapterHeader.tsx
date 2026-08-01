import { Reveal } from "./Reveal";

type ChapterHeaderProps = {
  id: string;
  number: string;
  title: string;
  statement: string;
  subline: string;
};

export function ChapterHeader({
  id,
  number,
  title,
  statement,
  subline,
}: ChapterHeaderProps) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-lime-soft">
        Chapter {number}
      </p>
      <p className="mb-4 text-[14px] font-medium text-text-muted">{title}</p>
      <h2
        id={`${id}-statement`}
        className="max-w-4xl text-[32px] font-semibold leading-[1.15] text-text md:text-[48px] md:leading-[1.1]"
      >
        {statement}
      </h2>
      <p className="mt-5 max-w-2xl text-[17px] leading-[1.65] text-text-muted">
        {subline}
      </p>
    </Reveal>
  );
}
