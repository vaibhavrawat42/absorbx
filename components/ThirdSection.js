'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

const TYPE_OPTIONS = ['All', 'Industrial', 'Artisinal'];
const CARBON_OPTIONS = ['All', '20-40%', '40-60%', '60-80%', '80-90%', '90% +'];

const BIOCHAR_PRODUCTS = [
  { location: 'Yavatmal, Maharashtra', type: 'Industrial', feedstock: 'Cotton', method: 'Kontiki', carbonContent: '40-60%', monthlyTotal: '300 T', availableNow: '100 T', priceYear: '2-3', priceLabel: 'Price (INR/KG)' },
  { location: 'Kutch/Rajkot, Gujarat', type: 'Industrial', feedstock: 'Prosopis', method: 'Kontiki', carbonContent: '40-60%', monthlyTotal: '500 T', availableNow: '200 T', priceYear: '5-6', priceLabel: 'Price (INR/KG)' },
  { location: 'West Bengal', type: 'Artisinal', feedstock: 'Prosopis', method: 'Kontiki', carbonContent: '80-90%', monthlyTotal: '500 T', availableNow: '200 T', priceYear: '20-22', priceLabel: 'Price (INR/KG)' },
  { location: 'Lucknow, Uttar Pradesh', type: 'Industrial', feedstock: 'Prosopis', method: 'Kontiki', carbonContent: '40-60%', monthlyTotal: '300 T', availableNow: '100 T', priceYear: '5-6', priceLabel: 'Price (INR/KG)' },
  { location: 'Karnataka', type: 'Artisinal', feedstock: 'Prosopis', method: 'Kontiki', carbonContent: '40-60%', monthlyTotal: '300 T', availableNow: '100 T', priceYear: '5-6', priceLabel: 'Price (INR/KG)' },
  { location: 'Jalna, Maharashtra', type: 'Artisinal', feedstock: 'Cotton', method: 'Kontiki', carbonContent: '60-80%', monthlyTotal: '150 T', availableNow: '100 T', priceYear: '2-3', priceLabel: 'Price (INR/KG)' },
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

function ProductCard({ product }) {
  const p = product;
  const subject = encodeURIComponent(`Get inquiry about ${p.location} biochar`);
  const mailtoHref = `mailto:contact@absorb-x.com?subject=${subject}`;
  const labelClass = 'text-[12px] font-medium leading-4 text-[#333] md:text-[12px] md:leading-4';
  const valueClass = 'text-sm font-semibold leading-[18px] text-[rgba(81,81,81,0.8)] md:text-[18px] md:leading-5';
  return (
    <article className="flex h-[272px] w-full max-w-[327px] flex-col rounded-[20px] bg-[#efece6] overflow-hidden p-6 box-border md:h-[333px] md:max-w-[400px] md:p-6 md:pt-9">
      {/* Figma mobile: location 20px/24px bold; desktop 28px/32px */}
      <h3 className="font-serif text-[20px] font-bold leading-[24px] text-[#333] mb-5 md:mb-6 md:text-[28px] md:leading-8">
        {p.location}
      </h3>
      {/* Mobile (Figma): row1 Feedstock | Method | Carbon (gap 23px), row2 Monthly total | Available now (gap 16px). Desktop: 3 columns */}
      <div className="flex flex-1 flex-col gap-[18px] min-w-0 md:flex-row md:gap-[44px]">
        {/* Mobile: first row — Feedstock, Method, Carbon Content */}
        <div className="flex gap-[23px] md:hidden">
          <div className="flex flex-col gap-1 w-[88px]">
            <span className={labelClass}>Feedstock</span>
            <span className={valueClass}>{p.feedstock}</span>
          </div>
          <div className="flex flex-col gap-1 w-[59px]">
            <span className={labelClass}>Method</span>
            <span className={valueClass}>{p.method}</span>
          </div>
          <div className="flex flex-col gap-1 w-[88px]">
            <span className={labelClass}>Carbon Content</span>
            <span className={valueClass}>{p.carbonContent}</span>
          </div>
        </div>
        <div className="flex gap-4 md:hidden">
          <div className="flex flex-col gap-1 w-[88px]">
            <span className={labelClass}>Monthly total</span>
            <span className={valueClass}>{p.monthlyTotal}</span>
          </div>
          <div className="flex flex-col gap-1 w-[88px]">
            <span className={labelClass}>Available now</span>
            <span className={valueClass}>{p.availableNow}</span>
          </div>
        </div>
        {/* Desktop: 3-column layout */}
        <div className="hidden md:flex md:flex-row md:gap-[44px] md:flex-1">
          <div className="flex flex-col gap-6 w-[88px]">
            <div className="flex flex-col gap-1">
              <span className={labelClass}>Feedstock</span>
              <span className={valueClass}>{p.feedstock}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className={labelClass}>Monthly total</span>
              <span className={valueClass}>{p.monthlyTotal}</span>
            </div>
          </div>
          <div className="flex flex-col gap-6 w-[88px]">
            <div className="flex flex-col gap-1">
              <span className={labelClass}>Method</span>
              <span className={valueClass}>{p.method}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className={labelClass}>Available now</span>
              <span className={valueClass}>{p.availableNow}</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-[88px]">
            <span className={labelClass}>Carbon Content</span>
            <span className={valueClass}>{p.carbonContent}</span>
          </div>
        </div>
      </div>
      {/* Price + Get Quote: Figma mobile 120×40, 92px price block */}
      <div className="mt-auto flex items-end justify-between pt-6 md:pt-5">
        <div className="flex flex-col gap-0.5 w-[92px] md:w-auto">
          <span className="font-serif text-[20px] font-black leading-[24px] text-[#333] md:text-[28px] md:leading-8">{p.priceYear}</span>
          <span className="text-sm leading-5 text-[#333] md:text-[20px] md:leading-6">
            Price <span className="text-[12px] leading-4 md:text-[14px] md:leading-[18px]">(INR/KG)</span>
          </span>
        </div>
        <a
          href={mailtoHref}
          className="flex h-10 w-[120px] shrink-0 items-center justify-center gap-1 rounded-[32px] border-2 border-[#c65b1d] bg-[#ebddd2] text-[14px] font-bold leading-[18px] text-[#c65b1d] md:h-12 md:w-[160px] md:gap-1 md:text-base"
        >
          Get Quote
          <Image src={ASSETS.arrowRight} alt="" width={16} height={16} className="shrink-0 md:h-6 md:w-6" aria-hidden />
        </a>
      </div>
    </article>
  );
}

export default function ThirdSection() {
  const [typeActive, setTypeActive] = useState('All');
  const [carbonActive, setCarbonActive] = useState('All');

  const filteredProducts = BIOCHAR_PRODUCTS.filter((product) => {
    const matchType = typeActive === 'All' || product.type === typeActive;
    const matchCarbon = carbonActive === 'All' || product.carbonContent === carbonActive;
    return matchType && matchCarbon;
  });

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
          <aside className="mb-6 md:mb-0 md:shrink-0">
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
                    onClick={() => setTypeActive(opt)}
                  />
                ))}
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.24px] text-[#c5c4c4] md:mb-5 md:text-base">
                CARBON CONTENT
              </p>
              <div className="flex flex-wrap gap-3 md:flex md:flex-col md:gap-6">
                <div className="flex flex-wrap gap-3 md:gap-3">
                  {CARBON_OPTIONS.slice(0, 3).map((opt) => (
                    <FilterPill
                      key={opt}
                      label={opt}
                      active={carbonActive === opt}
                      onClick={() => setCarbonActive(opt)}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 md:gap-3">
                  {CARBON_OPTIONS.slice(3, 5).map((opt) => (
                    <FilterPill
                      key={opt}
                      label={opt}
                      active={carbonActive === opt}
                      onClick={() => setCarbonActive(opt)}
                    />
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 md:gap-3">
                  {CARBON_OPTIONS.slice(5).map((opt) => (
                    <FilterPill
                      key={opt}
                      label={opt}
                      active={carbonActive === opt}
                      onClick={() => setCarbonActive(opt)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-col gap-8 md:min-w-0 md:flex-1 md:grid md:grid-cols-2 md:gap-x-[32px] md:gap-y-8 md:content-start">
            {filteredProducts.map((product, i) => (
              <ProductCard key={product.location} product={product} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
