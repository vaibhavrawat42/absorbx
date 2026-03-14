import Link from 'next/link';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

function ChevronDown({ className = '' }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={className} aria-hidden>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function FooterSection() {
  return (
    <footer className="w-full bg-[#2e2e2e] px-6 pt-16 pb-12 md:px-[96px] md:pt-[120px] md:pb-20">
      <div className="mx-auto max-w-[327px] md:max-w-[1248px]">
        {/* CTA – Figma FOOTER/footer: "Do you have biochar to supply?" + Contact Us / Book a free call */}
        <div className="mb-16 flex flex-col gap-4 md:mb-[120px] md:max-w-[662px] md:mx-auto md:items-center md:text-center md:gap-[60px]">
          <h2 className="font-serif text-[40px] font-semibold leading-[46px] text-[#efece6] md:text-[56px] md:leading-[70px] md:tracking-[-0.56px] md:text-[#e7e6e2]">
            Do you have biochar to supply?
          </h2>
          <Link
            href="https://absorb-x.com/call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-[183px] items-center justify-center gap-1 rounded-[50px] bg-[#c65b1d] px-6 text-base font-semibold leading-5 text-white md:h-[76px] md:w-[285px] md:rounded-[40px] md:px-10 md:py-5 md:gap-2 md:text-[32px] md:leading-9"
          >
            <span className="md:hidden">Book a free call</span>
            <span className="hidden md:inline">Contact Us</span>
            <span className="shrink-0 text-white" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="h-5 w-5 md:h-8 md:w-8" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        {/* Divider – Figma #555 */}
        <div className="h-px w-full bg-[#555] md:mb-[81px]" />

        {/* Lower section: brand + columns – Figma FOOTER grid */}
        <div className="flex flex-col py-8 md:grid md:grid-cols-[1fr_144px_120px_152px] md:gap-20 md:items-start md:py-0">
          {/* Brand + contact column – Figma left column */}
          <div className="flex flex-col gap-6">
            <Link
              href="/"
              className="font-serif text-2xl font-bold leading-7 text-white md:text-[48px] md:leading-[52px]"
            >
              Absorb<span className="text-[#c65b1d]">X.</span>
            </Link>
            <div className="flex flex-wrap items-center gap-2 text-base leading-5 text-[#e7e6e2] md:text-[24px] md:leading-7">
              <a href="mailto:contact@absorb-x.com" className="hover:underline">
                contact@absorb-x.com
              </a>
              <span className="h-5 w-px bg-[#888]" aria-hidden />
              <a href="tel:+919258455991" className="hover:underline">
                +91 9258 455 991
              </a>
            </div>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block h-6 w-6 md:h-10 md:w-10"
              aria-label="LinkedIn"
            >
              <Image src={ASSETS.linkedIn} alt="" width={24} height={24} className="h-6 w-6 md:h-10 md:w-10" />
            </a>
            <div className="flex flex-col gap-2 text-[#bbb9b7] md:text-[24px] md:leading-7">
              <p className="text-base leading-5 md:leading-[28px]">
                <span className="md:hidden">Based in Bengaluru, India.</span>
                <span className="hidden md:inline">Based in Gurgaon, India.</span>
              </p>
              <p className="text-xs leading-4 md:text-base md:leading-5">
                <span className="md:hidden">©2025-Absorbx</span>
                <span className="hidden md:inline">©2026-Absorbx</span>
              </p>
            </div>
          </div>

          {/* Resources – Figma column */}
          <div className="flex flex-col border-t border-[#444] pt-4 md:border-0 md:pt-0 md:gap-8">
            <div className="flex items-center justify-between py-4 md:py-0 md:block">
              <span className="text-sm font-bold leading-[18px] text-[#bbb9b7] md:text-[24px] md:leading-7 md:font-semibold">
                Resources
              </span>
              <ChevronDown className="h-6 w-6 shrink-0 text-[#bbb9b7] md:hidden" />
            </div>
            <div className="flex flex-col gap-4 md:gap-6 font-semibold text-[#e7e6e2] md:text-[24px] md:leading-7">
              <Link href="#buyers" className="text-sm hover:underline md:text-base">
                For Buyers
              </Link>
              <Link href="#suppliers" className="text-sm hover:underline md:text-base">
                For Suppliers
              </Link>
              <Link href="#gauri" className="text-sm hover:underline md:text-base">
                G.A.U.R.I.
              </Link>
            </div>
          </div>

          {/* Help – Figma column */}
          <div className="flex flex-col border-t border-[#444] pt-4 md:border-0 md:pt-0 md:gap-8">
            <div className="flex items-center justify-between py-4 md:py-0 md:block">
              <span className="text-sm font-bold leading-[18px] text-[#bbb9b7] md:text-[24px] md:leading-7 md:font-semibold">
                Help
              </span>
              <ChevronDown className="h-6 w-6 shrink-0 text-[#bbb9b7] md:hidden" />
            </div>
            <div className="flex flex-col md:gap-6">
              <Link
                href="#contact"
                className="text-sm font-semibold leading-[18px] text-[#e7e6e2] hover:underline md:text-[24px] md:leading-7"
              >
                Contact us
              </Link>
            </div>
          </div>

          {/* Legal – Figma column */}
          <div className="flex flex-col border-t border-[#444] pt-4 md:border-0 md:pt-0 md:gap-8">
            <div className="flex items-center justify-between py-4 md:py-0 md:block">
              <span className="text-sm font-bold leading-[18px] text-[#bbb9b7] md:text-[24px] md:leading-7 md:font-semibold">
                Legal
              </span>
              <ChevronDown className="h-6 w-6 shrink-0 text-[#bbb9b7] md:hidden" />
            </div>
            <div className="flex flex-col md:gap-6">
              <Link
                href="#privacy"
                className="text-sm font-semibold leading-[18px] text-[#e7e6e2] hover:underline md:text-[24px] md:leading-7"
              >
                Privacy policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
