import React from 'react';
import Link from 'next/link';

// styles
import styles from './MobileNav.module.scss';

// Icons
import { Linkedin } from 'react-feather';

// utils
import { NAVLINKS } from '@/utils/constants';

// components
import Logo from '@/components/Logo/Logo';
import VisuallyHidden from '@/components/VisuallyHidden/VisuallyHidden';

function MobileNav() {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <nav className={styles.mobile_nav}>
      <Logo width={80} height={85} />
      <button
        className={` ${styles.hamburger} ${styles.hamburger_collapse} ${
          styles.front_position
        } ${isOpen ? styles.is_active : ''}`}
        type="button"
        aria-label="Menu"
        onClick={() => setOpen(!isOpen)}
      >
        <span className={styles.hamburger_box}>
          <span className={styles.hamburger_inner}></span>
        </span>
      </button>
      <div className={`${styles.sidenav} ${isOpen ? styles.show_sidenav : ''}`}>
        <Logo
          theme="light"
          width={110}
          height={110}
          className={styles.sidenav_logo}
        />
        <ul>
          {NAVLINKS.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={styles.sidenav_link}
                  onClick={() => setOpen(!isOpen)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.social_wrapper}>
          <div className={styles.social_links_sidenav}>
            <Link
              href="https://www.linkedin.com/in/corine-pesier-73975a5b/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pre_nav_link}
            >
              <Linkedin size={32} />
              <VisuallyHidden>Linkedin profile </VisuallyHidden>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MobileNav;
