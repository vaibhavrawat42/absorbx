'use client';

import { useEffect } from 'react';

const DURATION_MS = 2100; // 0.3s delay + 0.5s fade in + ~1s hold + 0.4s exit

export default function WelcomeScreen({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(() => {
      onComplete?.();
    }, DURATION_MS);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <div className="welcome-screen" aria-live="polite">
      <div className="welcome-screen-bg" />
      <div className="welcome-screen-overlay" />
      <div className="welcome-screen-inner">
        <p className="welcome-screen-text">Welcome to G.A.U.R.I.</p>
      </div>
    </div>
  );
}
