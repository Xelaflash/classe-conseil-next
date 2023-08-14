import Link from 'next/link';

// icons
import { Check } from 'react-feather';

// styles
import styles from './page.module.scss';
import Logo from '@/components/Logo/Logo';

// Components
import HomeCard from '@/components/HomeCard/HomeCard';
import Reinsurance from '@/components/Reinsurance/Reinsurance';
import HomeCarousel from '@/components/HomeCarousel/HomeCarousel';

export default function Home() {
  return (
    <main>
      <section className={styles.banner}>
        <div className={`${styles.banner_text}`}>
          <div className={styles.page_title}>
            <h1>C.L.A.S.S.E.</h1>
            <span id={styles.conseil}>CONSEIL</span>
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

      <div className="separator_gradient"></div>

      <section className="section container">
        <p className="mini_title">Services</p>
        <h2 className="section_title">Processus</h2>
        <div className={styles.services_cards_wrapper}>
          <HomeCard
            href="/pratiques_professionnelles.html#analysis-anchor"
            header="Analyser vos besoins"
            body="Pour comprendre la demande et se fixer un but"
            icon="TrendingUp"
          />
          <HomeCard
            href="/pratiques_professionnelles.html#process-anchor"
            header="Définir la démarche"
            body="Écrire les objectifs et poser le cadre"
            icon="Cogs"
          />
          <HomeCard
            href="/pratiques_professionnelles.html#tools-anchor"
            header="Choisir les outils"
            body="En fonction des objectifs et des situations traitées"
            icon="Tool"
          />
        </div>
      </section>

      <div className="separator_gradient"></div>

      <section className="section container">
        <p className="mini_title">Expertise</p>
        <h2 className="section_title">Travailler ensemble</h2>
        <div className={styles.reinsurance_wrapper}>
          <Reinsurance />
        </div>

        <div className={styles.cta_catalogue}>
          <p>
            Consulter le{' '}
            <Link href="/formations" className={styles.cta_catalogue_link}>
              catalogue de formations
            </Link>{' '}
            pour plus d&apos;informations.
          </p>
        </div>
      </section>

      <div className="separator_gradient"></div>

      <section className="section container">
        <p className="mini_title">Clients</p>
        <h2 className="section_title">Ils nous font confiance</h2>
        <HomeCarousel />
      </section>
    </main>
  );
}
