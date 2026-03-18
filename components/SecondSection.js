import Image from 'next/image';
import { ASSETS } from '@/lib/assets';

const SECTIONS = [
  {
    image: ASSETS.indiaweb,
    imageMobile: ASSETS.indiamobile,
    title: 'Pan India availability',
    description:
      'Access biochar from a growing network of producers across India, ensuring reliable sourcing wherever your operations are based.',
  },
  {
    image: ASSETS.ruppyweb,
    imageMobile: ASSETS.ruppymobile,
    title: 'Competitive Pricing',
    description:
      'Transparent pricing and efficient sourcing help you secure high-quality biochar at competitive market rates.',
  },
  {
    image: ASSETS.supplierweb,
    imageMobile: ASSETS.suppliermobile,
    title: 'Vetted Buyers & Suppliers',
    description:
      'Every participant on the platform is screened to maintain trust and credibility across the marketplace.',
  },
  {
    image: ASSETS.dollarweb,
    imageMobile: ASSETS.dollarmobile,
    title: 'Global Supply Chain',
    description:
      'We connect buyers with trusted suppliers across domestic and international markets.',
  },
];

export default function SecondSection() {
  return (
    <section className="w-full bg-[#100f0f] px-6 pt-[60px] pb-12 md:px-20 md:pt-[120px] md:pb-20 md:px-[96px] md:pt-[120px] md:pb-[120px]">
      <div className="mx-auto max-w-[327px] w-full md:max-w-[1248px] md:max-w-[1248px]">
        <h2 className="mb-10 text-left font-serif text-[32px] leading-[38px] text-[#e7e6e2] md:mb-[80px] md:text-[56px] md:leading-[60px]">
          Why choose our <span className="font-bold text-[#c65b1d]">marketplace</span>
        </h2>

        <div className="flex flex-col gap-[40px] md:gap-12 md:gap-[140px]">
          {SECTIONS.map((item, i) => (
            <div
              key={i}
              className="flex flex-col gap-6 md:flex-row md:items-center md:gap-12 md:max-w-[929px] md:max-w-none md:flex-row md:items-end md:gap-[29px]"
            >
              <div className="relative h-[300px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#efece6] md:h-[400px] md:max-w-[504px] md:h-[560px] md:max-w-[504px] md:rounded-[40px]">
                {item.imageMobile ? (
                  <>
                    <Image
                      src={item.imageMobile}
                      alt=""
                      fill
                      className="object-cover md:hidden"
                      sizes="327px"
                    />
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="hidden object-cover md:block"
                      sizes="504px"
                    />
                  </>
                ) : (
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 327px, (max-width: 1280px) 504px, 504px"
                  />
                )}
              </div>
              <div className="flex flex-col gap-3 md:max-w-[400px] md:max-w-[715px] md:gap-6 md:pb-[44px]">
                <h3 className="font-serif text-[32px] font-bold leading-10 text-[#e7e6e2] md:text-[56px] md:leading-[60px] md:text-[#efece6]">
                  {item.title}
                </h3>
                <p className="text-lg leading-6 text-[#c1bcb8] md:text-[28px] md:leading-[36px] md:font-medium md:text-[#c5c4c4]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
