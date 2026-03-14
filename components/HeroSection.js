import Image from 'next/image';
import Link from 'next/link';
import { ASSETS } from '@/lib/assets';

function ArrowIcon({ className = '' }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * WEB-FIRST from Figma: full-bleed hero 709px, centered block 929px,
 * title, subtitle, CTA "Know more" with arrow.
 */
export default function HeroSection() {
  return (
    <section className="relative h-[560px] w-full overflow-hidden bg-[#100f0f] md:h-[709px]">
      <div className="absolute inset-0">
        <Image
          src={ASSETS.heroBackground}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>
      <div className="absolute left-1/2 top-1/2 w-full max-w-[327px] -translate-x-1/2 -translate-y-1/2 px-6 md:left-1/2 md:top-1/2 md:flex md:max-w-[929px] md:-translate-x-1/2 md:-translate-y-1/2 md:flex-col md:items-center md:justify-center md:gap-[56px] md:px-0">
        <div className="md:flex md:flex-col md:items-center md:gap-[26px]">
          <h1 className="hero-reveal font-serif text-[40px] font-bold leading-[46px] text-[#e7e6e2] md:whitespace-nowrap md:text-center md:text-[78px] md:leading-[82px] md:text-[#ebebeb]">
            <span className="block md:inline">Decarbonise</span>{' '}
            <span className="block md:inline">with biochar</span>
          </h1>
          <p className="hero-reveal-delay-1 mt-4 text-lg leading-[26px] text-[#c7c6c2] md:mt-0 md:text-center md:text-[32px] md:leading-[36px] md:font-medium md:text-[#ebebeb]">
            Source premium biochar for agriculture and construction
          </p>
        </div>
        <Link
          href="https://absorb-x.com/call"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-reveal-delay-2 mt-6 inline-flex h-12 min-w-[183px] items-center justify-center gap-2 rounded-[40px] bg-white px-6 py-3 text-base font-semibold leading-9 text-black md:mt-0 md:h-[76px] md:min-w-[286px] md:gap-2 md:px-10 md:text-[32px] md:leading-9"
        >
          Know more
          <ArrowIcon className="h-5 w-5 shrink-0 md:h-8 md:w-8" />
        </Link>
      </div>
    </section>
  );
}
