'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

const TYPE_OPTIONS = ['All', 'Industrial', 'Artisanal'];
const ALL_METHODS = ['All', 'Kontiki', 'Soil pit', 'Gasifier', 'Pyrolysis'];
const METHOD_BY_TYPE = {
  All: ALL_METHODS,
  Industrial: ['All', 'Gasifier', 'Pyrolysis'],
  Artisanal: ['All', 'Kontiki', 'Soil pit'],
};

const BIOCHAR_PRODUCTS = [
  { location: 'Yavatmal, Maharashtra', type: 'Industrial', feedstock: 'Cotton', method: 'Gasifier', monthlyTotal: '3,000 T', availableNow: '10,000 T' },
  { location: 'Kutch/Rajkot, Gujarat', type: 'Industrial', feedstock: 'Prosopis', method: 'Pyrolysis', monthlyTotal: '200 T', availableNow: '500 T' },
  { location: 'West Bengal', type: 'Artisanal', feedstock: 'Prosopis/wood', method: 'Kontiki', monthlyTotal: '200 T', availableNow: '500 T' },
  { location: 'Lucknow, Uttar Pradesh', type: 'Industrial', feedstock: 'Prosopis', method: 'Gasifier', monthlyTotal: '100 T', availableNow: '300 T' },
  { location: 'Karnataka', type: 'Artisanal', feedstock: 'Prosopis', method: 'Kontiki', monthlyTotal: '100 T', availableNow: '300 T' },
  { location: 'Jalna, Maharashtra', type: 'Artisanal', feedstock: 'Cotton', method: 'Kontiki', monthlyTotal: '100 T', availableNow: '150 T' },
];

function FilterPill({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex h-10 min-h-[40px] shrink-0 items-center justify-center rounded-[32px] px-4 text-sm font-semibold
        md:h-12 md:min-h-[48px] md:px-7 md:text-base md:font-bold
        ${active
          ? 'border-2 border-[#c65b1d] bg-[#ebddd2] text-[#c65b1d]'
          : 'bg-[#282828] text-white md:text-lg'
        }
      `}
    >
      {label}
    </button>
  );
}

/** Card layout and content match Figma BIOCHAR BOX: 3-col grid so Type & Available now align in column 2. */
function ProductCard({ product }) {
  const p = product;
  const subject = encodeURIComponent(`Get inquiry about ${p.location} biochar`);
  const mailtoHref = `mailto:contact@absorb-x.com?subject=${subject}`;
  const labelClass = 'font-medium text-[12px] leading-4 text-[#333]';
  const valueClass = 'font-semibold text-[14px] leading-[18px] text-[rgba(81,81,81,0.8)] md:text-[18px] md:leading-5';
  const feedstockParts = p.feedstock.includes('/') ? p.feedstock.split('/') : null;
  return (
    <article className="relative flex h-[272px] w-full max-w-[327px] flex-col rounded-[20px] bg-[#efece6] overflow-hidden p-6 md:h-[333px] md:max-w-[400px] md:pt-9 md:pb-6">
      <h3 className="font-serif text-[20px] font-bold leading-[24px] text-[#333] mb-5 md:mb-6 md:text-[28px] md:leading-8">
        {p.location}
      </h3>
      {/* Single 3-col grid so column 2 (Type & Available now) align */}
      <div className="grid grid-cols-3 gap-x-6 gap-y-5 mb-auto">
        <div className="flex flex-col gap-1 min-w-0">
          <span className={labelClass}>Feedstock</span>
          {feedstockParts ? (
            <span className={valueClass}>
              {feedstockParts[0]}/
              <br />
              {feedstockParts.slice(1).join('/')}
            </span>
          ) : (
            <span className={valueClass}>{p.feedstock}</span>
          )}
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={labelClass}>Type</span>
          <span className={valueClass}>{p.type}</span>
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={labelClass}>Method</span>
          <span className={valueClass}>{p.method}</span>
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={labelClass}>
            Monthly total
            <br />
            (tonnes)
          </span>
          <span className={valueClass}>{p.monthlyTotal}</span>
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={labelClass}>
            Available now
            <br />
            (tonnes)
          </span>
          <span className={valueClass}>{p.availableNow}</span>
        </div>
      </div>
      <a
        href={mailtoHref}
        className="mt-auto flex h-10 w-[120px] shrink-0 items-center justify-center gap-1 rounded-[32px] border-2 border-[#c65b1d] bg-[#ebddd2] text-[14px] font-bold leading-[18px] text-[#c65b1d] md:h-12 md:w-[160px] md:gap-1 md:text-base"
      >
        Get Quote
        <Image src={ASSETS.arrowRight} alt="" width={16} height={16} className="shrink-0 md:h-6 md:w-6" aria-hidden />
      </a>
    </article>
  );
}

export default function ThirdSection() {
  const [typeActive, setTypeActive] = useState('All');
  const [methodActive, setMethodActive] = useState('All');

  const methodOptions = METHOD_BY_TYPE[typeActive] || ALL_METHODS;
  const methodActiveValid = methodOptions.includes(methodActive);
  const effectiveMethod = methodActiveValid ? methodActive : 'All';

  const filteredProducts = BIOCHAR_PRODUCTS.filter((product) => {
    const matchType = typeActive === 'All' || product.type === typeActive;
    const matchMethod = effectiveMethod === 'All' || product.method === effectiveMethod;
    return matchType && matchMethod;
  });

  function handleTypeClick(opt) {
    setTypeActive(opt);
    const nextMethods = METHOD_BY_TYPE[opt] || ALL_METHODS;
    if (!nextMethods.includes(methodActive)) setMethodActive('All');
  }

  return (
    <section className="w-full bg-[#100f0f] px-6 pt-20 pb-16 md:px-20 md:pt-[80px] md:pb-[180px] md:px-[96px] md:pt-[120px] md:pb-[180px]">
      <div className="mx-auto w-full max-w-[327px] md:max-w-[1248px]">
        {/* Main heading at top, then vertical gap, then content area */}
        <h2 className="mb-8 font-serif text-[32px] font-bold leading-[40px] text-[#e7e6e2] md:mb-[80px] md:text-[56px] md:leading-[60px] md:font-bold md:text-[#e7e7e7]">
          <span className="md:hidden">Explore our available biochar</span>
          <span className="hidden md:inline">Explore available biochar</span>
        </h2>
        {/* Content area: left = filter panel, right = grid of cards */}
        <div className="md:grid md:grid-cols-[359px_1fr] md:gap-[41px] md:items-start">
          <aside className="mb-12 md:mb-0 md:shrink-0">
            <p className="mb-8 text-base font-medium uppercase tracking-[0.32px] text-[#c5c4c4] md:mb-8 md:text-base">
              FILTERS
            </p>
            <div className="mb-14 md:mb-14">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24px] text-[#c5c4c4] md:mb-5 md:text-base">
                TYPE OF BIOCHAR
              </p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                {TYPE_OPTIONS.map((opt) => (
                  <FilterPill
                    key={opt}
                    label={opt}
                    active={typeActive === opt}
                    onClick={() => handleTypeClick(opt)}
                  />
                ))}
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24px] text-[#c5c4c4] md:mb-5 md:text-base">
                METHOD USED
              </p>
              <div className="flex flex-wrap gap-3 md:gap-3">
                {methodOptions.map((opt) => (
                  <FilterPill
                    key={opt}
                    label={opt}
                    active={effectiveMethod === opt}
                    onClick={() => setMethodActive(opt)}
                  />
                ))}
              </div>
            </div>
          </aside>
          <div className="flex flex-col gap-8 md:min-w-0 md:flex-1 md:grid md:grid-cols-2 md:gap-x-[32px] md:gap-y-8 md:content-start">
            {filteredProducts.length === 0 ? (
              <p className="text-[#c5c4c4] text-lg md:text-xl">No biochar supply available</p>
            ) : (
              filteredProducts.map((product) => (
                <ProductCard key={product.location} product={product} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
