'use client';

import React from 'react';
import styles from './PratiquesPro.module.scss';
import classes from '../Accordion.module.scss';
import { motion } from 'framer-motion';

const accordionData = [
  {
    title: "L'analyse Transactionnelle",
    content: `
      <p>Théorie de la personnalité et du comportement relationnel et social, l'Analyse transactionnelle (A.T.) offre un modèle de compréhension fine des relations humaines. Elle est régie par 2 concepts fondamentaux:</p>
      <ul>
        <li>L'individu dispose de ressources et de potentialités qui lui sont propres sur lesquelles il se construit et se développe.</li>
        <li>L'individu est capable de faire des choix et de s'autodéterminer.</li>
      </ul>
      <h4>Bénéfices attendus:</h4>
      <ul>
        <li>Meilleure compréhension de soi et des autres.</li>
        <li>Amélioration de la dynamique interactionnelle et plus globalement du rapport au monde environnant.</li>
        <li>Débloquer des situations jusque-là verrouillées et envisager des perspectives de changement.</li>
      </ul>
      <p>Les outils et concepts sont nombreux, souvent complémentaires et constituent des outils d'analyse puissants.</p>
    `,
  },
  {
    title: 'La théorie Gestalt',
    content: `
      <p>La Gestalt (école allemande de la perception) a une influence considérable sur la psychologie et la philosophie en montrant notamment l'importance de notre subjectivité dans notre perception du monde, influençant par là même les relations que nous entretenons avec lui. Ainsi, c'est en fonction de nos besoins que nous percevons les choses et non en fonction de ce qu'elles sont. Appliquée à la relation d'aide qu'il s'agisse de thérapie ou d'accompagnement type “coaching”, la Gestalt ouvre des perspectives intéressantes en permettant au bénéficiaire de revisiter ses certitudes et croyances et de s'ouvrir à de nouvelles conceptions.</p>
      <h4>Bénéfices attendus de l'orientation Gestalt:</h4>
      <ul>
        <li>Sortir de la relation binaire du “vrai” et du “faux”,</li>
        <li>Arrêter de chercher la “cause” à tout prix,</li>
        <li>Accepter la complexité de la dimension humaine et stopper les dénis relationnels,</li>
        <li>Envisager plusieurs solutions à un même problème,</li>
        <li>Lâcher prise,</li>
        <li>Aller à la rencontre de l'autre,</li>
        <li>Augmenter sa confiance en soi et sa confiance interpersonnelle.</li>
      </ul>
    `,
  },
  {
    title: 'La programmation neuro-linguistique',
    content: `
      <p>La programmation neuro-linguistique (PNL) est un ensemble de techniques de communication et de transformation de soi qui s'intéresse à nos réactions plutôt qu'aux origines de nos comportements.</p>
      <p>Elle privilégie le comment au pourquoi, propose une grille d'observation pour améliorer la perception que nous avons de nous-mêmes et des autres. Elle permet également de se fixer des objectifs et de les réaliser. C'est une boîte à outils, dont la clé réside dans le langage et l'utilisation que chacun de nous fait de ses cinq sens et de son corps.</p>
      <h4>Bénéfices attendus:</h4>
      <ul>
        <li>Permettre de programmer et reproduire ses propres modèles de réussite.</li>
      </ul>
    `,
  },
  {
    title: 'La fenêtre de Johari',
    content: `
      <p>C'est une méthode et un outil qui permet de décrire son mode relationnel ainsi que les déficits de confiance en soi dus à des stratégies d'auto protection contre productives. L'utilisation de la fenêtre de Johari permet d'identifier les zones d'ignorance ou point de cécité qui nous protègent d'avoir à nous remettre en question, également, les zones cachées où sont stockées ce que nous nous interdisons de dire par crainte de déplaire ou de trop se dévoiler. C'est donc un outil très intéressant qui permet de sortir du tout relationnel au profit d'une attitude communicante.</p>
      <h4>Bénéfices attendus:</h4>
      <ul>
        <li>Apprendre à écouter ce que les autres nous renvoient: diminuer notre aire aveugle,</li>
        <li>Oser dire ses besoins, ses désirs: diminuer l'aire cachée,</li>
        <li>Augmenter sa confiance en soi et sa confiance interpersonnelle,</li>
        <li>Apprendre à travailler avec d'autres.</li>
      </ul>
      <h4>La fenêtre de Johari appliquée au Manager et à son équipe :</h4>
      <p>Les managers ont tous une certaine vision de leur équipe. Or, parfois, ils ignorent consciemment ou inconsciemment les véritables ressentis et motivations de leurs collaborateurs. Comment dans ce cas agir sur la motivation et la performance de ces derniers? La fenêtre de Johari révèle l'angle mort dans la connaissance qu'un manager a du fonctionnement de son équipe.</p>
    `,
  },
  {
    title: "L'intelligence émotionnelle",
    content: `
      <p>C'est la capacité à identifier et comprendre ses propres émotions et celles d'autrui, à s'exprimer de façon constructive et recevable, à créer des relations fortes et durables, à prendre des décisions efficaces et à gérer le stress dans toute situation. L'intelligence émotionnelle n'est pas figée dans le temps, elle peut se développer en identifiant ses forces et ses axes de développement.</p>
      <h4>Bénéfices attendus:</h4>
      <ul>
        <li>Créer une meilleure compréhension de soi et des autres,</li>
        <li>Développer des relations plus saines et durables,</li>
        <li>Avoir une communication plus efficace,</li>
        <li>Développer une meilleure résolution de problème et des conflits,</li>
        <li>Gérer son stress,</li>
        <li>Avoir des performances et une productivité accrue.</li>
      </ul>
    `,
  },
  {
    title: 'La relation d’aide',
    content: `
      <p>Elle est un accompagnement de type psychologique (professionnel ou non) de toute personne en demande de soutien fondée sur la centration sur l'autre, l'écoute et le respect de la dignité humaine.</p>
      <h4>Bénéfices attendus:</h4>
      <p>Elle est destinée à ouvrir de nouvelles perspectives à la personne accompagnée par la découverte de ses ressources internes et leur mobilisation autour d'un projet qu'il soit personnel ou professionnel.</p>
    `,
  },
  {
    title: "Outil d'évaluation de la personnalité: Sosie 2nd génération",
    content: `
      <p>C'est un test qui associe les traits de la personnalité avec les valeurs et qui a pour objectif de:</p>
      <ul>
        <li>Prédire les modes de réaction en situation professionnelle</li>
        <li>Pronostiquer la réussite dans un poste ou dans une structure</li>
        <li>Détecter quels types de situations et d'environnements peuvent motiver (ou démotiver) une personne</li>
        <li>Favoriser (ou non) des comportements propres à la réalisation d'une excellente performance</li>
      </ul>
      <h4>Dans quel cadre en avons-nous besoin?</h4>
      <ul>
        <li><u>Recrutement</u>: Comment le candidat aura tendance à se comporter en équipe? Les motivations du candidat correspondent-elles à celles attendues pour le poste</li>
        <li><u>Gestion de carrière, mobilité</u>: Quel aspect de la personnalité de ce collaborateur pourrait-être davantage mis en valeur pour l'entreprise? Y a-t-il un style de management en adéquation avec tel ou tel service?</li>
        <li><u>Bilan de compétences</u>: Quelles sont les valeurs qui comptent pour cette personne? Quelle est sa dynamique personnelle?</li>
        <li><u>Coaching, développement personnel</u>: Quels sont les axes d'amélioration? Comment gère-t-il son activité, ses prises de décision...etc?</li>
      </ul>
    `,
  },
];

export default function ToolsAccordion() {
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
