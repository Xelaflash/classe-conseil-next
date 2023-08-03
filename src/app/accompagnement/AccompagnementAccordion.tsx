'use client';
import React from 'react';
// styles
import classes from '../Accordion.module.scss';
import '../formations/formations.scss';
import { motion } from 'framer-motion';

const accordionData = [
  {
    title: 'Accompagnement individuel',
    content: `
      <ul>
        <li>Renforcement personnalisé en management</li>
        <li>Développement de l’empowerment</li>
        <li>Accompagnement à une nouvelle prise de fonction</li>
        <li>Accompagnement personnalisé en management</li>
        <li>Développement de l'empowerment</li>
        <li>Accompagnement à la prise de fonction</li>
        <li>Connaissance de soi</li>
        <li>Développement de ses capacités de communicant</li>
      </ul>
    `,
  },
  {
    title: 'Accompagnement collectif',
    content: `
      <ul>
        <li>Coaching d’équipe pour la construction d’un collectif de travail</li>
        <li>Coaching d'équipe pour un collectif de travail: Vision et Stratégie</li>
        <li>Coaching d'intégration du changement</li>
        <li>Séminaire de Team Building</li>
      </ul>
    `,
  },
  {
    title: 'Bilan de compétences',
    content: `
      <ul>
        <li>Évaluation des compétences et orientation professionnelle à partir de la mise en adéquation des intérêts professionnels avec les composantes de la personnalité</li>
        <li>Test SOSIE 2nd génération : inventaire des comportements au travail, des besoins et des motivations professionnels</li>
        <li>Programmes : 12H 16H 24H</li>
      </ul>
      <div class="catalogue_link_wrapper">
        <a href="/programme_bilan_de_competences.pdf" target="_blank" rel="noopener noreferrer" class="catalogue_link">Consulter pour exemple la fiche bilan de compétences 16H</a>
      </div>
    `,
  },
];

export default function AccompagnementAccordion() {
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
