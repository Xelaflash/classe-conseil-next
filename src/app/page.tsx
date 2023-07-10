import Image from 'next/image';
import Link from 'next/link';

// icons
import { Check } from 'react-feather';

// styles
import styles from './page.module.scss';
import Logo from '@/components/Logo/Logo';

export default function Home() {
  return (
    <main>
      <section className={styles.banner}>
        <div className={styles.banner_text}>
          <div className={styles.page_title}>
            <h1>C.L.A.S.S.E.</h1>
            <span>CONSEIL</span>
          </div>
          <h2>Corine Pesier</h2>
          <h3>Psychologue, Consultante et Formatrice R.H. indépendante</h3>

          <Link href="/presentation" className={styles.btn_flat_outline}>
            En savoir plus
          </Link>
        </div>
        <div className={styles.icon_scroll}></div>
      </section>
      <section className={`section container`}>
        <p className="mini_title">Bienvenue</p>
        <h2 className="section_title">Grandir et s&lsquo;agrandir</h2>
        <div className={styles.introduction}>
          <div className={styles.wrapper_left}>
            <Logo width={140} height={140} />
          </div>
          <div>
            <h2 className={`section_title ${styles.sub_banner_title}`}>
              28 années d&lsquo;expertise dans:
            </h2>
            <div className={styles.xp}>
              <p>
                <Check size={22} color="#4f4f4f" strokeWidth={3} />
                <Link href="/pratiques_professionnelles#process-anchor">
                  L’accompagnement individuel et collectif
                </Link>
              </p>
              <p>
                <Check size={22} color="#4f4f4f" strokeWidth={3} />
                <Link href="/formations">La formation</Link>
              </p>
              <p>
                <Check size={22} color="#4f4f4f" strokeWidth={3} />
                <Link href="/accompagnement">Le bilan de compétences</Link>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.quote}>
          <div className={styles.quote_wrapper}>
            <div className={styles.quote_text}>
              <blockquote className={styles.blockquote}>
                <p>
                  Développer les compétences, c&lsquo;est créer de la valeur
                  ajoutée, augmenter l&lsquo;efficience, participer au
                  développement personnel et susciter la motivation sous
                  jacente.
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
