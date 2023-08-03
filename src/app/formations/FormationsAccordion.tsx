'use client';
import React from 'react';
import classes from '../Accordion.module.scss';

// styles
import './formations.scss';

import { motion } from 'framer-motion';

const accordionData = [
  {
    title: "Modalités d'accès",
    content: `
        <div class='section_wrapper'>
          <div class='middle_wrapper'>
            <div class='left_first'></div>
            <div class="red_bg_container right">
              <p>Formation intra établissement</p>
              <p><b>Format</b>: présentiel</p>
              <p><b>Rythme</b>: temps plein</p>
            </div>
          </div>
          <div class="middle_wrapper">
            <div class="left">
              <p>Délais d’accès : 3 mois</p>
            </div>
            <div class="red_bg_container right">
              <p>
                <b>Je me renseigne</b>: allez à l’onglet
                <a href="/contact" class="link">prendre contact</a>
              </p>
            </div>
          </div>
          <div class="middle_wrapper">
            <div class="left">
              <p>Accessibilité handicap :</p>
            </div>
            <div class="red_bg_container right">
              <p>
                Les formations sont accessibles aux personnes en situation de
                handicap visible ou non-visible. <br /><br />
                La personne en situation de handicap ou la personne chargée de
                la formation pourra entrer en contact avec le formateur(trice)
                10 à 15 jours avant la formation afin d’envisager les
                modalités d’adaptation nécessaires au bon déroulement de la
                formation.
              </p>
            </div>
          </div>
        </div>
      `,
  },
  {
    title: 'Management (22 formations)',
    content: `
        <ol>
          <li>Utiliser l’intelligence émotionnelle dans le cadre du management des équipes.</li>
          <li>Construire son modèle de management en 6 points clés.</li>
          <li>Renforcer son positionnement et sa posture professionnelle d’encadrant en développant des attitudes assertives.</li>
          <li>Animer et encadrer une équipe (3 programmes).</li>
          <li>Devenir un Manager Coach.</li>
          <li>Déléguer et responsabiliser.</li>
          <li>Arbitrer et prendre des décisions.</li>
          <li>Communiquer et mener des entretiens.</li>
          <li>Faire évoluer et gérer les compétences de son équipe.</li>
          <li>Fixer et évaluer des objectifs.</li>
          <li>GRH et intégration d’un collaborateur.</li>
          <li>Gestion des conflits (2 programmes).</li>
          <li>Mener un entretien professionnel d’évaluation.</li>
          <li>Travailler en mode projet.</li>
          <li>Manager en transversal : Le travail en mode projet dans le service.</li>
          <li>Construire une identité professionnelle pour un collectif de travail.</li>
          <li>Conduite du Changement et Éthique du Changement.</li>
          <li>Réussir ses projets de transformation par le développement de ses compétences managériales et relationnelles.</li>
          <li>Développer une culture commune dans un contexte de changement.</li>
        </ol>
        <div class="catalogue_link_wrapper">
          <a href="/catalogue_formations.pdf" target="_blank" rel="noopener noreferrer" class="catalogue_link">Voir le détail des formations</a>
        </div>
      `,
  },
  {
    title: 'Santé mentale au travail (5 formations)',
    content: `
        <ol>
          <li>Faire face aux situations de stress</li>
          <li>Prévenir la souffrance au travail dans le cadre du management de proximité</li>
          <li>Instaurer une démarche de prévention des RPS</li>
          <li>Encadrement et bien-être au travail</li>
          <li>Accueillir la parole des victimes de violences sur le lieu de travail</li>
        </ol>
        <div class="catalogue_link_wrapper">
          <a href="/catalogue_formations.pdf" target="_blank" rel="noopener noreferrer" class="catalogue_link">Voir le détail des formations</a>
        </div>
      `,
  },
  {
    title: 'Efficience personnelle au poste de travail (16 formations)',
    content: `
        <ol>
          <li>L’entretien professionnel pour les évalués</li>
          <li>S’affirmer dans le cadre de l’exercice professionnel avec les ressources de l’assertivité</li>
          <li>Mieux gérer son quotidien professionnel et augmenter ses compétences de communication avec les ressources de l’A.T. et le modèle PCM</li>
          <li>Développer son empowerment : augmenter sa capacité à influer</li>
          <li>Conduire et animer une réunion</li>
          <li>Organisation du travail et gestion des priorités (2 programmes)</li>
          <li>La prise de parole en public</li>
          <li>Méthodologie de la synthèse écrite et orale</li>
          <li>Prise de parole en public: Argumenter et Convaincre</li>
          <li>Techniques rédactionnelles</li>
          <li>Lecture rapide et efficace</li>
          <li>Constituer son dossier R.A.E.P</li>
          <li>L’entretien avec le jury</li>
          <li>Parcours professionnel pour les secrétaires assistantes</li>
          <li>Gérer les situations professionnelles difficiles</li>
          <li>La gestion des situations d’accueil des publics en détresse psychologique</li>
        </ol>
        <div class="catalogue_link_wrapper">
          <a href="/catalogue_formations.pdf" target="_blank" rel="noopener noreferrer" class="catalogue_link">Voir le détail des formations</a>
        </div>
      `,
  },
  {
    title: 'Analyse des pratiques professionnelles',
    content: `
        <p>Les interventions ont pour objectif la professionnalisation soit par:</p>
        <ul>
          <li>Le renforcement des compétences requises par l’exercice professionnel</li>
          <li>Le renforcement de l’identité professionnelle autour des règles et des valeurs requises par l’exercice professionnel</li>
          <li>L’élucidation des contraintes et des enjeux spécifiques</li>
          <li>Le développement de la compréhension et de l’adaptation à autrui</li>
        </ul>
      `,
  },
  {
    title: 'Documents',
    content: `
        <div class="catalogue_link_wrapper">
          <a href="/reglement_interieur.pdf" target="_blank" rel="noopener noreferrer" class="catalogue_link">Voir le Règlement intérieur</a>
        </div>
        <div class="catalogue_link_wrapper">
          <a href="/formulaire_recla.pdf" target="_blank" rel="noopener noreferrer" class="catalogue_link">Réclamations</a>
        </div>
      `,
  },
];
export default function FormationsAccordion() {
  const [activeIndexes, setActiveIndexes] = React.useState<number[]>([]);

  const handleAccordionClick = (index: number) => {
    setActiveIndexes((prevIndexes) => {
      if (prevIndexes.includes(index)) {
        return prevIndexes.filter((item) => item !== index);
      } else {
        return [...prevIndexes, index];
      }
    });
  };

  const isPanelOpen = (index: number): boolean => {
    return activeIndexes.includes(index);
  };

  return (
    <div className={classes.accordion_wrapper}>
      {accordionData.map((item, index) => (
        <div className={classes.accordion_item} key={index}>
          <button
            className={`${classes.accordion} ${
              index === 0 ? classes.first_child : ''
            } ${index === accordionData.length - 1 ? classes.last_child : ''} ${
              isPanelOpen(index) ? classes.accordion_active : ''
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            {item.title}
          </button>
          <motion.div
            className={`${classes.accordion_panel} ${
              isPanelOpen(index) ? classes.accordion_panel_active : ''
            }`}
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isPanelOpen(index) ? 'auto' : 0,
              opacity: isPanelOpen(index) ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className={classes.contentWrapper}>
              <div dangerouslySetInnerHTML={{ __html: item.content }} />
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
