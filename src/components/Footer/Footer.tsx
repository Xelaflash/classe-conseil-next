import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// styles
import styles from './Footer.module.scss';

// components
import { Linkedin } from 'react-feather';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import Logo from '../Logo/Logo';

const footerLinks = [
  {
    label: 'Présentation',
    links: [
      {
        label: 'Points forts',
        url: '/presentation#points-fort',
        id: crypto.randomUUID(),
      },
      {
        label: 'Missions majeures',
        url: '/presentation#missions',
        id: crypto.randomUUID(),
      },
      {
        label: 'Pratiques Professionnelles',
        url: '/presentation.html#pratiques_pro',
        id: crypto.randomUUID(),
      },
      {
        label: 'Certifications & Diplômes',
        url: '/presentation#diplomas',
        id: crypto.randomUUID(),
      },
    ],
  },
  {
    label: 'Pratiques Professionnelles',
    links: [
      {
        label: 'Analyse des besoins',
        url: '/pratiques_professionnelles#analysis-anchor',
        id: crypto.randomUUID(),
      },
      {
        label: 'Définition de la démarche',
        url: '/pratiques_professionnelles#process-anchor',
        id: crypto.randomUUID(),
      },
      {
        label: 'Les outils',
        url: '/pratiques_professionnelles#tools-anchor',
        id: crypto.randomUUID(),
      },
    ],
  },
  {
    label: 'Formations',
    links: [
      {
        label: 'Management',
        url: 'formations#formations-list',
        id: crypto.randomUUID(),
      },
      {
        label: 'Santé mentale au travail',
        url: '/formations#formations-list',
        id: crypto.randomUUID(),
      },
      {
        label: 'Efficience personnelle au poste de travail',
        url: '/formations#formations-list',
        id: crypto.randomUUID(),
      },
      {
        label: 'Analyse des pratiques professionnelles',
        url: '/formations#formations-list',
        id: crypto.randomUUID(),
      },
    ],
  },
  {
    label: 'Accompagnement',
    links: [
      {
        label: 'Accompagnement individuel',
        url: '/accompagnement#accompagnement-anchor',
        id: crypto.randomUUID(),
      },
      {
        label: 'Accompagnement collectif',
        url: '/accompagnement#accompagnement-anchor',
        id: crypto.randomUUID(),
      },
      {
        label: 'Bilan de compétences',
        url: '/accompagnement#accompagnement-anchor',
        id: crypto.randomUUID(),
      },
    ],
  },
  {
    label: 'Légal',
    links: [
      {
        label: 'Mentions Légales',
        url: '/mentions_legales',
        id: crypto.randomUUID(),
      },
      {
        label: 'CGV',
        url: '/cgv',
        id: crypto.randomUUID(),
      },
    ],
  },
];

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_logo_container}>
          <Logo theme="light" width={100} height={100} />
        </div>
        <div className={styles.footer_menu}>
          <div className={styles.footer_info}>
            {footerLinks.map((link) => (
              <div className={styles.footer_lists} key={link.label}>
                <div key={link.label}>
                  <p className={styles.footer_list_title}>{link.label}</p>
                  <ul className={styles.footer_list}>
                    {link.links.map((item) => (
                      <li key={item.id}>
                        <Link href={item.url} className={styles.footer_link}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.separator_gradient_footer}></div>
        <div className={styles.footer_copyright}>
          <p>
            © C.L.A.S.S.E. CONSEIL {new Date().getFullYear()}. Tous droits
            réservés
          </p>
          <div className={styles.footer_link}>
            <Link
              href="https://www.linkedin.com/in/corine-pesier-73975a5b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={32} color="white" />
              <VisuallyHidden>Linkedin profile</VisuallyHidden>
            </Link>
          </div>
        </div>
      </footer>
      <div className={styles.colophon}>
        <div className={styles.credits}>
          <p>Site réalisé par </p>
          <Link
            href="https://www.alexgwebdev.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/dqszntd5j/image/upload/v1594649389/logo-alex.png"
              width={40}
              height={40}
              alt="Alex G - Web developer"
              className={`${styles.logo_dev} ${styles.flip} `}
            />
          </Link>
          et
          <Link
            href="https://www.linkedin.com/in/florian-dublanc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://res.cloudinary.com/dqszntd5j/image/upload/v1593638356/floppy_logo_white.png"
              width={40}
              height={40}
              alt="Florian Dublanc - Web developer"
              className={`${styles.logo_dev} ${styles.flip} `}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
