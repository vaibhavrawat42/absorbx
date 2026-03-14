'use client';

import { useState } from 'react';

const TYPE_OPTIONS = ['All', 'Industrial', 'Artisinal'];
const CARBON_OPTIONS = ['All', '20-40%', '40-60%', '60-80%', '80-90%', '90% +'];

export default function Filters() {
  const [typeActive, setTypeActive] = useState('All');
  const [carbonActive, setCarbonActive] = useState('All');

  return (
    <aside className="filters">
      <div className="filter-group">
        <p className="filter-label">TYPE OF BIOCHAR</p>
        <div className="filter-options">
          {TYPE_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`filter-btn ${typeActive === opt ? 'filter-btn--active' : ''}`}
              onClick={() => setTypeActive(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
      <div className="filter-group">
        <p className="filter-label">CARBON CONTENT</p>
        <div className="filter-options filter-options--grid">
          {CARBON_OPTIONS.map((opt) => (
            <button
              key={opt}
              type="button"
              className={`filter-btn ${carbonActive === opt ? 'filter-btn--active' : ''}`}
              onClick={() => setCarbonActive(opt)}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
