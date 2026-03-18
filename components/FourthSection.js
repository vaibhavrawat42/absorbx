import Image from 'next/image';

/**
 * NEW: FOURTH WEB / NEW: FOURTH MOBILE from Figma – “In Partnership with” + logo.
 * Web: max-w 1248px, rounded-[40px], h 416. Mobile: max-w 327px, rounded-[20px], min height for content.
 */
const PARTNERSHIP_LOGO_SRC =
  'https://www.figma.com/api/mcp/asset/3cf7dc9e-6314-46c9-bdee-383ae185617a';

export default function FourthSection() {
  return (
    <section className="w-full bg-[#100f0f] px-6 py-16 md:px-[96px] md:py-[120px]">
      <div className="mx-auto w-full max-w-[327px] md:max-w-[1248px]">
        <div className="flex flex-col items-center justify-center rounded-[20px] bg-[#efece6] px-6 py-10 md:min-h-[416px] md:rounded-[40px] md:py-16 md:px-12">
          <h2 className="text-center font-serif text-[20px] font-semibold leading-[24px] tracking-[0.4px] text-[#333] md:text-[48px] md:leading-[52px] md:tracking-[0.96px]">
            In Partnership with
          </h2>
          <div className="relative mt-6 h-[55px] w-[140px] md:mt-10 md:h-[118px] md:w-[303px]">
            <Image
              src={PARTNERSHIP_LOGO_SRC}
              alt="Arka Climate"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 140px, 303px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
