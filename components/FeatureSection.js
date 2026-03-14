import { ASSETS } from '@/lib/assets';

const SECTIONS = [
  {
    image: ASSETS.image1,
    title: 'Pan India availability',
    description:
      'Access biochar from a growing network of producers across India, ensuring reliable sourcing wherever your operations are based.',
    mobileIntro: 'Why choose our marketplace',
    mobileIntroHighlight: 'marketplace',
    mobileTitle: 'Pan India Availability',
    mobileDescription:
      'Access biochar from a growing network of producers across India for reliable sourcing wherever you operate.',
    isFirst: true,
  },
  {
    image: ASSETS.image2,
    title: 'Competitive Pricing',
    description:
      'Transparent pricing and efficient sourcing help you secure high-quality biochar at competitive market rates.',
  },
  {
    image: ASSETS.image3,
    title: 'Vetted Buyers & Suppliers',
    description:
      'Every participant on the platform is screened to maintain trust and credibility across the marketplace.',
  },
  {
    image: ASSETS.image4,
    title: 'Global Supply Chain',
    description:
      'We connect buyers with trusted suppliers across domestic and international markets.',
  },
];

export function PanIndiaSection() {
  return <FeatureSection {...SECTIONS[0]} />;
}

export function CompetitivePricingSection() {
  return <FeatureSection {...SECTIONS[1]} />;
}

export function VettedSection() {
  return <FeatureSection {...SECTIONS[2]} />;
}

export function GlobalSupplySection() {
  return <FeatureSection {...SECTIONS[3]} />;
}

function FeatureSection({
  image,
  title,
  description,
  mobileIntro,
  mobileIntroHighlight,
  mobileTitle,
  mobileDescription,
  isFirst,
}) {
  const displayTitle = mobileTitle ?? title;
  const displayDesc = mobileDescription ?? description;

  return (
    <section
      className={`content-section ${isFirst ? 'content-section--first-mobile' : ''}`}
    >
      {isFirst && mobileIntro && (
        <div className="section-mobile-intro">
          <h2 className="section-mobile-intro-heading">
            Why choose our
            <br />
            <span className="section-mobile-intro-highlight">marketplace</span>
          </h2>
        </div>
      )}
      <div className="content-container content-container--image content-container--mobile-box">
        <img src={image} alt="" className="feature-section-img" />
      </div>
      <div className="section-content">
        <h2 className="section-title">{displayTitle}</h2>
        <p className="section-desc">{displayDesc}</p>
      </div>
    </section>
  );
}
