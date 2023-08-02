import React from 'react';
import { Metadata } from 'next';

// styles
import styles from './presentation.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Présentation - C.L.A.S.S.E. Conseil',
  description:
    "Corine Pesier - CLASSE CONSEIL - Présentation de l'entreprise et de ses activités. Développement des compétences, développement personnel, accompagnement collectif et individuel, formations, bilan professionnel, coaching, prévention des RPS, QVT",
};

export default function Presentation() {
  const diplomas = [
    'Maîtrise en sciences économiques',
    'DESS de gestion du personnel',
    'Cursus DEA en économie des Ressources Humaines',
    'DESS de psychologie clinique',
    'Certificat de psychopathologie',
    'Certification A.T.',
    'Habilitation test SOSIE 2nd génération',
  ];

  return (
    <>
      <div
        className={`parallax ${styles.presentation_banner}`}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)), url(https://res.cloudinary.com/dqszntd5j/image/upload/v1594831935/presentation.jpg);',
        }}
      >
        <div className="banner_title_wrapper">
          <h1 className="banner_title">Présentation</h1>
        </div>
      </div>
      <section className="section container">
        <h2 className="section_title">Qui suis-je?</h2>
        <p className="mini_title">Se connaître</p>
        <hr className="separator" />
        <div className={styles.bio}>
          <h2>C.L.A.S.S.E. CONSEIL</h2>
          <p>
            Acronyme désignant l'ensemble des secteurs d'activités couvert par
            l'enseigne commerciale
          </p>
          <ul className={styles.acronym}>
            <li>Collectivité</li>
            <li>Locale</li>
            <li>Administration</li>
            <li>Social</li>
            <li>Sanitaire</li>
            <li>Entreprise</li>
          </ul>
          <h2>Corine Pesier</h2>
          <h3 id={styles.job_title}>
            Psychologue, Consultante et Formatrice Ressources Humaines
            Dirigeante de CLASSE Conseil depuis 1992.
          </h3>
          <p>
            Très sensibilisée aux problématiques de l’optimisation des pratiques
            professionnelles{' '}
            <strong>
              en lien avec le développement personnel des individus en situation
              de travail
            </strong>
            , je milite et m’investis dans{' '}
            <strong>
              le bien-être au travail et la qualité de vie au travail
            </strong>{' '}
            comme principal levier de l’épanouissement personnel et de la
            performance collective.
          </p>
          <div className="separator_gradient margin_50"></div>
          <div className={styles.about_item}>
            <h3 className={styles.about_item_title} id="points-fort">
              Points forts
            </h3>
            <p>
              Une expertise dans les techniques de l’accompagnement individuel
              et/ou collectif construite sur 28 années d’exercice professionnel
              et une connaissance approfondie des problématiques
              professionnelles dans des contextes stables et instables.
            </p>
          </div>
          <div className={styles.about_item} id="missions">
            <h3 className={styles.about_item_title}>Missions majeures</h3>
            <p>
              Spécialisée dans le <strong>développement des compétences</strong>{' '}
              : nos missions consistent à{' '}
              <strong>accompagner, former, conseiller</strong>, soit dans le
              domaine du <strong>développement personnel</strong>, soit dans le
              domaine du <strong>Management hiérarchique</strong>, du{' '}
              <strong>Management transversal</strong> ou du{' '}
              <strong>Management de la transition</strong>.
            </p>
            <p>
              Nous analysons les besoins avec les clients, nous co-construisons
              avec eux des actions individuelles ou collectives adaptées. Nous
              conduisons les actions confiées avec le plus grand soin et la même
              démarche déontologique: une obligation de moyens pour une
              obligation de résultat. Quelque soit le secteur d'activité
              concerné, nous instaurons une relation de confiance avec nos
              clients et nous nous engageons dans une relation partenariale
              durable.
            </p>
          </div>
          <div
            className={`${styles.about_item} ${styles.pratiques_pro}`}
            id="pratiques_pro"
          >
            <h3 className={styles.about_item_title}>
              Pratiques professionnelles
            </h3>
            <div className={styles.services_list_wrapper}>
              <ul>
                <li>Animation de dispositif de formation intéractive</li>
                <li>Animation de séminaire en résidentiel</li>
                <li>Analyse des pratiques professionnelles</li>
                <li>Accompagnement au changement</li>
                <li>Accompagnement à l'élaboration de projets</li>
                <li>
                  Accompagnement à la démarche d'évaluation et de prévention des
                  RPS
                </li>
                <li>Coaching individuel et d'équipe</li>
              </ul>
            </div>
            <p>
              En savoir plus: Rendez-vous sur les pages{' '}
              <Link href="/pratiques_professionnelles">
                Pratiques Professionnelles
              </Link>
              , <Link href="/formations">Formations</Link>,{' '}
              <Link href="/accompagnement">Accompagnement</Link>.
            </p>
          </div>
        </div>
        <div className="separator_gradient margin_50"></div>
        <div className="references" id="diplomas">
          <div className={styles.diploma}>
            <h3 className={styles.about_item_title}>Diplômes & Habilitation</h3>
            <ul className={styles.diploma_list}>
              {diplomas.map((item) => (
                <li key={crypto.randomUUID()}>
                  <Image
                    src="https://res.cloudinary.com/dqszntd5j/image/upload/v1594648782/stamp2.png"
                    alt="Icone diplome"
                    className={styles.stamps}
                    width={50}
                    height={50}
                  />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className={styles.certif_wrapper}>
          <h3 className={styles.about_item_title} id={styles.certif_title}>
            Certifications
          </h3>
          <div className={styles.certif}>
            <div className={styles.datadock}>
              <Image
                src="https://res.cloudinary.com/dqszntd5j/image/upload/v1594648971/datadock-logo.png"
                alt="Datadock - certification logo"
                className={styles.certif_logos}
                width={100}
                height={100}
              />
              <p>DATADOCK</p>
            </div>
            <div className={styles.qualiopi}>
              <Image
                src="https://res.cloudinary.com/dqszntd5j/image/upload/v1594648971/qualiopi-logo.png"
                alt="Qualiopi - certification logo"
                className={styles.certif_logos}
                id={styles.qualiopi_logo}
                width={100}
                height={100}
              />
              <p>
                <Link
                  href="../certificat_qualiopi.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.certif_link}
                >
                  QUALIOPI (voir certificat)
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
