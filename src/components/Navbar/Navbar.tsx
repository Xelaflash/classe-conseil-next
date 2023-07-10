'use client';

// hooks/utils
import useWindowSize from '@/utils/useWindowSize';

// components
import Nav from './Nav/Nav';
import MobileNav from './MobileNav/MobileNav';

export default function Navbar() {
  const { width } = useWindowSize();

  return <>{width > 768 ? <Nav /> : <MobileNav />}</>;
}
