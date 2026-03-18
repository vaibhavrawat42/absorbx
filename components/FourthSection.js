import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

/**
 * Frame: NEW: FOURTH MOBILE – uses arka mobile from assets (mobile + desktop).
 */
export default function FourthSection() {
  return (
    <section className="w-full bg-[#100f0f] px-6 py-16 pb-[120px] md:px-[96px] md:py-[120px] md:pb-[120px]">
      <div className="mx-auto w-full max-w-[327px] md:max-w-[1248px]">
        <div className="flex min-h-[220px] flex-col items-center justify-center gap-[32px] rounded-[20px] bg-[#efece6] px-6 py-10 md:min-h-[416px] md:gap-10 md:rounded-[40px] md:py-16 md:px-12">
          <h2 className="text-center font-serif text-[20px] font-bold leading-[24px] tracking-[0.4px] text-[#333] md:text-[48px] md:leading-[52px] md:font-semibold md:tracking-[0.96px]">
            In Partnership with
          </h2>
          <div className="relative h-[62px] w-[159px] shrink-0 md:h-[118px] md:w-[303px]">
            <Image
              src={ASSETS.arkamobile}
              alt="Arka Climate"
              fill
              className="object-contain object-center"
              sizes="(max-width: 768px) 159px, 303px"
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
