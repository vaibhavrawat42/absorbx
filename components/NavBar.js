'use client';

/**
 * NavBar – from Figma WEB-NAV BAR (1440×99).
 * Logo → www.absorb-x.com; G.A.U.R.I. → refresh page.
 */
export default function NavBar() {
  const handleGauriClick = () => window.location.reload();

  return (
    <header className="w-full bg-[#100f0f]">
      <div className="flex h-[60px] w-full items-center justify-between bg-[#100f0f] px-6 md:px-10 md:h-[99px] md:max-w-[1440px] md:mx-auto md:justify-start md:gap-0 md:px-[96px]">
        {/* Mobile: logo + 8px + separator (16px height) + 8px + G.A.U.R.I. (Source Serif Pro) */}
        <div className="flex items-center gap-2 md:contents">
          <a
            href="https://www.absorb-x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-serif text-lg font-bold leading-[22px] text-white md:mr-6 md:text-[32px] md:leading-[36px]"
          >
            Absorb<span className="text-[#c65b1d]">X.</span>
          </a>
          <div className="h-4 w-px shrink-0 bg-[#b3b2b2] md:hidden" aria-hidden />
          <button
            type="button"
            onClick={handleGauriClick}
            className="font-source-serif-pro text-sm font-semibold leading-[14px] text-[#e7e5de] md:hidden"
          >
            G.A.U.R.I.
          </button>
        </div>
        {/* Desktop: logo + divider + G.A.U.R.I. (click = refresh) */}
        <div className="hidden md:flex md:items-center md:gap-6">
          <div className="h-[38px] w-px shrink-0 rounded-[2px] bg-[#b3b2b2]" aria-hidden />
          <button
            type="button"
            onClick={handleGauriClick}
            className="font-source-serif-pro font-semibold text-[22px] leading-[26px] tracking-[-0.22px] text-white"
          >
            G.A.U.R.I.
          </button>
        </div>
        <button
          type="button"
          className="flex h-6 w-6 items-center justify-center text-[#676665] md:hidden"
          aria-label="Open menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      <div className="hidden h-px w-full bg-[#cfcfcf] md:block" aria-hidden />
    </header>
  );
}
