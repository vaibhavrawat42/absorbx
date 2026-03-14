import { Figtree, Source_Serif_4 } from 'next/font/google';
import './globals.css';
import AppWithWelcome from '@/components/AppWithWelcome';

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata = {
  title: 'AbsorbX. – Decarbonise with biochar',
  description: 'Source premium biochar for agriculture and construction.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${figtree.variable} ${sourceSerif.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;0,8..60,700&family=Source+Serif+Pro:ital,wght@0,600;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <AppWithWelcome>{children}</AppWithWelcome>
      </body>
    </html>
  );
}
