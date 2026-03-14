import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo">
          Absorb<span className="logo-accent">X.</span>
        </Link>
        <span className="header-gauri">G.A.U.R.I.</span>
        <nav className="nav-links">
          <span className="nav-divider" aria-hidden="true" />
          <Link href="#buyers">For Buyers</Link>
          <Link href="#suppliers">For Suppliers</Link>
        </nav>
        <div className="header-actions">
          <Link href="#login" className="link-login">Login</Link>
          <Link href="#contact" className="btn btn-primary">Contact us</Link>
        </div>
      </div>
      <div className="header-divider" />
    </header>
  );
}
