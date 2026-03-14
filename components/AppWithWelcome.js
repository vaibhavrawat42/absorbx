'use client';

import { useState } from 'react';
import WelcomeScreen from './WelcomeScreen';

export default function AppWithWelcome({ children }) {
  const [showWelcome, setShowWelcome] = useState(true);

  if (showWelcome) {
    return <WelcomeScreen onComplete={() => setShowWelcome(false)} />;
  }

  return children;
}
