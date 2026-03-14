import { ASSETS } from '@/lib/assets';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src={ASSETS.heroBackground} alt="" />
      </div>
      <div className="hero-content">
        <h1 className="hero-title">Decarbonise with biochar</h1>
        <p className="hero-subtitle">
          Source premium biochar for agriculture and construction.
        </p>
      </div>
    </section>
  );
}
