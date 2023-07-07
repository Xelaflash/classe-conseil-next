// next react
import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';

// styles
import './globals.css';

// components
import Prenav from '@/components/Prenav/Prenav';

const openSans = Open_Sans({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
});
const poppins = Poppins({
  weight: ['400', '500', '600', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'C.L.A.S.S.E. Conseil (Formation & Bilan de compétences)',
  description:
    'Corine Pesier - CLASSE CONSEIL - Développement des compétences, développement personnel, accompagnement collectif et individuel, formations, bilan professionnel, coaching, prévention des RPS, QVT',
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      style={{
        '--font-openSans': openSans.style.fontFamily,
        '--font-poppins': poppins.style.fontFamily,
      }}
    >
      <></>
      <body className={openSans.className}>
        <Prenav />
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
