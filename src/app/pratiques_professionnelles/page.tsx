import React from 'react';
import { Metadata } from 'next';

// styles
import styles from './PratiquesPro.module.scss';

// component
import DemarcheAccordion from './DemarcheAccordion';
import ToolsAccordion from './ToolsAccordion';

export const metadata: Metadata = {
  title: 'Pratiques Professionnelles - C.L.A.S.S.E. Conseil',
  description:
    "Corine Pesier - classNameE CONSEIL - Présentation de l'entreprise et de ses activités. Développement des compétences, développement personnel, accompagnement collectif et individuel, formations, bilan professionnel, coaching, prévention des RPS, QVT",
};

export default function PratiquesPro() {
  return (
    <>
      <div
        className={`parallax ${styles.pratique_pro_banner}`}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)), url(https://res.cloudinary.com/dqszntd5j/image/upload/v1594826702/pratiquepro.jpg)',
        }}
      >
        <div className="banner_title_wrapper">
          <h1 className="banner_title">Pratiques Professionnelles</h1>
        </div>
      </div>

      <section className={`${styles.pratique_pro_page} section container`}>
        <h2 className="section_title">Pratiques Professionnelles</h2>
        <p className="mini_title">Optimiser votre potentiel</p>
        <hr className="separator"></hr>

        <div
          className={`${styles.analysis_wrapper} padding_50`}
          id="analysis-anchor"
        >
          <h3 className={styles.pratique_pro_title}>Analyse des besoins</h3>
          <ul>
            <li>Mieux se connaître</li>
            <li>Développer sa confiance en soi</li>
            <li>Se préparer aux entretiens de recrutement</li>
            <li>Se préparer à l&apos;oral des concours</li>
            <li>Construire son projet professionnel</li>
            <li>Susciter l&apos;attention de son auditoire</li>
            <li>Asseoir sa posture professionnelle</li>
            <li>Prendre position et s&apos;affirmer</li>
            <li>Construire son équipe</li>
          </ul>
        </div>

        <div className="separator_gradient margin_50"></div>
        <div
          className={`${styles.process_wrapper} padding_50`}
          id="process-anchor"
        >
          <h3 className={styles.pratique_pro_title}>
            Définition de la démarche
          </h3>
          <DemarcheAccordion />
        </div>
        <div className="separator_gradient margin_50"></div>
        <div className={`${styles.tools_wrapper} padding_50`} id="tools-anchor">
          <h3 className={styles.pratique_pro_title}>Les outils</h3>
          <ToolsAccordion />
        </div>
      </section>
    </>
  );
}
