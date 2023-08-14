// next react
import type { Metadata } from 'next';
import { Open_Sans, Poppins } from 'next/font/google';

// styles
import './globals.css';

// components
import Prenav from '@/components/Prenav/Prenav';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const openSans = Open_Sans({
  weight: ['300', '400', '500', '600', '800'],
  subsets: ['latin'],
});
0;
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
  const styles = {
    '--font-openSans': openSans.style.fontFamily,
    '--font-poppins': poppins.style.fontFamily,
  } as React.CSSProperties;

  return (
    <html lang="fr" style={styles}>
      <body className={openSans.className}>
        <Prenav />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
