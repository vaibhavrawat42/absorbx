import Link from 'next/link';
import { ASSETS } from '@/lib/assets';

const DEFAULT_PRODUCT = {
  location: 'Yavatmal',
  feedstock: 'Cotton',
  monthlyTotal: '300 T',
  method: 'Kontiki',
  availableNow: '100 T',
  carbonContent: '40-60%',
  priceYear: '22-23',
  priceLabel: 'Price (INR/KG)',
};

export default function ProductCard({ product = DEFAULT_PRODUCT }) {
  const p = { ...DEFAULT_PRODUCT, ...product };
  return (
    <article className="product-card">
      <h3 className="product-card-location">{p.location}</h3>
      <div className="product-card-details">
        <div className="detail-row detail-row--1">
          <div className="detail-item">
            <span className="detail-label">Feedstock</span>
            <span className="detail-value">{p.feedstock}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Method</span>
            <span className="detail-value">{p.method}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Carbon Content</span>
            <span className="detail-value">{p.carbonContent}</span>
          </div>
        </div>
        <div className="detail-row detail-row--2">
          <div className="detail-item">
            <span className="detail-label">Monthly total</span>
            <span className="detail-value">{p.monthlyTotal}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Available now</span>
            <span className="detail-value">{p.availableNow}</span>
          </div>
        </div>
      </div>
      <div className="product-card-footer">
        <div className="price-info">
          <span className="price-year">{p.priceYear}</span>
          <span className="price-label">{p.priceLabel}</span>
        </div>
        <Link href="#quote" className="btn btn-quote">
          Get Quote <img src={ASSETS.arrowRight} alt="" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
