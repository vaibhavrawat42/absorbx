import Filters from './Filters';
import ProductCard from './ProductCard';

const BIOCHAR_PRODUCTS = [
  {
    location: 'Yavatmal',
    feedstock: 'Cotton',
    method: 'Kontiki',
    carbonContent: '60-80%',
    monthlyTotal: '10,000 T',
    availableNow: '1,000 T',
    priceYear: '2-3',
    priceLabel: 'Price (INR/KG)',
  },
  {
    location: 'Kutch/Rajkot, Gujarat',
    feedstock: 'Prosopis',
    method: 'Kontiki',
    carbonContent: '40-60%',
    monthlyTotal: '500 T',
    availableNow: '200 T',
    priceYear: '5-6',
    priceLabel: 'Price (INR/KG)',
  },
  {
    location: 'West Bengal',
    feedstock: 'Prosopis/WoodGasifier',
    method: 'Kontiki',
    carbonContent: '80-90%',
    monthlyTotal: '500 T',
    availableNow: '200 T',
    priceYear: '20-22',
    priceLabel: 'Price (INR/KG)',
  },
  {
    location: 'Lucknow, UP',
    feedstock: 'Prosopis',
    method: 'Kontiki',
    carbonContent: '40-60%',
    monthlyTotal: '300 T',
    availableNow: '100 T',
    priceYear: '5-6',
    priceLabel: 'Price (INR/KG)',
  },
  {
    location: 'Karnataka',
    feedstock: 'Prosopis',
    method: 'Kontiki',
    carbonContent: '40-60%',
    monthlyTotal: '300 T',
    availableNow: '100 T',
    priceYear: '5-6',
    priceLabel: 'Price (INR/KG)',
  },
  {
    location: 'Jalna, Maharashtra',
    feedstock: 'Cotton',
    method: 'Kontiki',
    carbonContent: '60-80%',
    monthlyTotal: '150 T',
    availableNow: '100 T',
    priceYear: '2-3',
    priceLabel: 'Price (INR/KG)',
  },
];

export default function ExploreSection() {
  return (
    <section className="explore-section">
      <h2 className="explore-title">Explore our available biochar</h2>
      <div className="explore-layout">
        <Filters />
        <div className="product-grid">
          {BIOCHAR_PRODUCTS.map((product, i) => (
            <ProductCard key={i} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
