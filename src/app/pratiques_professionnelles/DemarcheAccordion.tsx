'use client';
import React, { useState } from 'react';
import styles from './PratiquesPro.module.scss';
import { motion } from 'framer-motion';

const accordionData = [
  {
    title: 'Accompagnement individuel',
    content: [
      'Bilan de compétences',
      'Coaching connaissance de soi',
      'Coaching affirmation de soi',
      "Coaching d'entraînement",
      "Coaching d'accompagnement à la prise de fonction",
    ],
  },
  {
    title: 'Accompagnement collectif',
    content: [
      'Team Building',
      'Intégration du changement',
      'Analyse de pratiques professionnelles',
      'Co-développement',
      'Séminaire de cohésion',
    ],
  },
  {
    title: 'Formation',
    content: [
      'Management',
      'Santé mentale au travail',
      'Efficience personnelle au poste de travail',
    ],
  },
];

export default function DemarcheAccordion() {
  const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

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
    <div className={styles.accordion_wrapper}>
      {accordionData.map((item, index) => (
        <div className={styles.accordion_item} key={index}>
          <button
            className={`${styles.accordion} ${
              index === 0 ? styles.first_child : ''
            } ${index === accordionData.length - 1 ? styles.last_child : ''} ${
              isPanelOpen(index) ? styles.accordion_active : ''
            }`}
            onClick={() => handleAccordionClick(index)}
          >
            {item.title}
          </button>
          <motion.div // Wrap the panel div with motion.div
            className={`${styles.accordion_panel} ${
              isPanelOpen(index) ? styles.accordion_panel_active : ''
            }`}
            initial={{ height: 0, opacity: 0 }} // Set initial height to 0 and opacity to 0
            animate={{
              height: isPanelOpen(index) ? 'auto' : 0,
              opacity: isPanelOpen(index) ? 1 : 0,
            }} // Animate height and opacity based on the panel state
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <ul>
              {item.content.map((contentItem, i) => (
                <li key={i}>{contentItem}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
