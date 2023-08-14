'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
// styles
import styles from './Nav.module.scss';

// utils
import { NAVLINKS } from '@/utils/constants';

// components
import Logo from '@/components/Logo/Logo';

function Nav() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_wrapper}>
        <Logo width={80} height={80} className={styles.logo_nav} />
        <div className={styles.navbar_middle}>
          <ul className={styles.nav_list}>
            {NAVLINKS.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <li
                  className={`${styles.nav_link_wrapper} ${
                    isActive ? styles.active : ''
                  } `}
                  key={link.href}
                >
                  <Link href={link.href} className={styles.navbar_link}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
