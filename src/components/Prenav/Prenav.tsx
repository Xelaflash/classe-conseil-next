import Link from 'next/link';

// styles
import styles from './Prenav.module.scss';

// Icons
import { Mail, Smartphone, Phone, Linkedin } from 'react-feather';

// components
import VisuallyHidden from '@/components/VisuallyHidden/VisuallyHidden';

function Prenav() {
  return (
    <section className={`${styles.pre_navbar}`}>
      <ul className={styles.pre_nav_links}>
        <li>
          <Mail size={18} color="white" />
          <Link
            href="mailto:clconseil@aol.com"
            arial-label="email"
            className={styles.pre_nav_link}
          >
            clconseil@aol.com
          </Link>
        </li>
        <li>
          <Smartphone size={18} color="white" />
          <Link
            href="tel:+33680749913"
            arial-label="telephone"
            className={styles.pre_nav_link}
          >
            + 33 6 80 74 99 13
          </Link>
        </li>
        <li>
          <Phone size={18} />
          <Link
            href="tel:+33556755866"
            arial-label="telephone"
            className={styles.pre_nav_link}
          >
            + 33 5 56 75 58 66
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/corine-pesier-73975a5b/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.pre_nav_link}
          >
            <Linkedin size={22} />
            <VisuallyHidden>Linkedin profile </VisuallyHidden>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default Prenav;
