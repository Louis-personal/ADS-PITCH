import { Reveal } from "./Reveal";

export function SeoSearchMock() {
  return (
    <Reveal>
      <div className="rounded-2xl border border-border bg-white p-5 text-[#202124] md:p-7">
        <div className="flex items-center gap-3 rounded-full border border-[#dfe1e5] px-4 py-3 shadow-sm">
          <span className="text-[#9aa0a6]">⌕</span>
          <span className="text-[15px] font-medium">NAS577-8B</span>
        </div>
        <p className="mt-5 text-[13px] text-[#70757a]">About 1,240 results</p>
        <div className="mt-4 border-l-4 border-lime pl-4">
          <p className="text-[13px] text-[#202124]">adsaviation.com</p>
          <p className="mt-1 text-[20px] font-medium text-[#1a0dab]">
            NAS577-8B | In stock · ADS Aviation
          </p>
          <p className="mt-1 text-[14px] leading-snug text-[#4d5156]">
            Check availability, condition and lead time. Request a quote in two
            clicks. Cross-reference alternatives included.
          </p>
        </div>
        <div className="mt-5 space-y-3 opacity-45">
          <div>
            <p className="text-[13px]">competitor-parts.com</p>
            <p className="text-[16px] text-[#1a0dab]">NAS577-8B catalogue listing</p>
          </div>
          <div>
            <p className="text-[13px]">marketplace.example</p>
            <p className="text-[16px] text-[#1a0dab]">Buy NAS577-8B online</p>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
