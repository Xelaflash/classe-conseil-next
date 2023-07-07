'use client';

import Link from 'next/link';
import { useState } from 'react';

// styles
import styles from './Nav.module.scss';

// components
import Logo from '@/components/Logo/Logo';

function Nav() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<String>('');

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <Logo />

        <div className={styles.navbar_middle}>
          <div className={styles.nav_list}>
            <div className={styles.nav_link_wrapper}>
              <Link
                href="/presentation"
                className={`${styles.navbar_link} ${
                  activeLink === 'presentation' ? 'active' : undefined
                }`}
                onClick={() => setActiveLink('presentation')}
              >
                Présentation
              </Link>
            </div>
            <div className={styles.nav_link_wrapper}>
              <Link
                href="/pratiques_professionnelles"
                className={`${styles.navbar_link} ${
                  activeLink === 'pratiques_professionnelles'
                    ? 'active'
                    : undefined
                }`}
                onClick={() => setActiveLink('pratiques_professionnelles')}
              >
                Pratiques Professionnelles
              </Link>
            </div>
            <div className={styles.nav_link_wrapper}>
              <Link
                href="/formations"
                className={`${styles.navbar_link} ${
                  activeLink === 'formations' ? 'active' : undefined
                }`}
                onClick={() => setActiveLink('formations')}
              >
                Formations
              </Link>
            </div>
            <div className={styles.nav_link_wrapper}>
              <Link
                href="/accompagnement"
                className={`${styles.navbar_link} ${
                  activeLink === 'accompagnement' ? 'active' : undefined
                }`}
                onClick={() => setActiveLink('accompagnement')}
              >
                Accompagnement
              </Link>
            </div>
            <div className={styles.nav_link_wrapper}>
              <Link
                href="/contact"
                className={`${styles.navbar_link} ${
                  activeLink === 'contact' ? 'active' : undefined
                }`}
                onClick={() => setActiveLink('contact')}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
