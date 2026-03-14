import Link from 'next/link';
import { ASSETS } from '@/lib/assets';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-cta">
        <h2 className="cta-title">Do you want to supply biochar?</h2>
        <Link href="#contact" className="btn btn-cta">
          Contact Us{' '}
          <img src={ASSETS.arrowRight} alt="" aria-hidden="true" />
        </Link>
      </div>
      <div className="footer-divider" />
      <div className="footer-inner">
        <div className="footer-brand">
          <Link href="/" className="logo logo--footer">
            Absorb<span className="logo-accent">X.</span>
          </Link>
          <a href="mailto:contact@absorbx.com" className="footer-email">
            contact@absorbx.com
          </a>
          <a
            href="https://linkedin.com"
            className="footer-linkedin"
            aria-label="LinkedIn"
          >
            <img src={ASSETS.linkedIn} alt="" />
          </a>
          <p className="footer-location">Based in Gurgaon, India.</p>
          <p className="footer-copy">©2026-Absorbx</p>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Resources</p>
          <Link href="#buyers">For Buyers</Link>
          <Link href="#suppliers">For Suppliers</Link>
          <Link href="#gauri">G.A.U.R.I.</Link>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Help</p>
          <Link href="#contact">Contact us</Link>
        </div>
        <div className="footer-col">
          <p className="footer-heading">Legal</p>
          <Link href="#privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  );
}
