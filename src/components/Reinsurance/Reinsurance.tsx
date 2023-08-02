import React from 'react';

// styles
import styles from './Reinsurance.module.scss';
import { Briefcase, Award, Users, Smile } from 'react-feather';

export default function Reinsurance() {
  const items = [
    {
      icon: 'briefcase',
      nbr: '28',
      text: `Années d'expériences`,
    },
    {
      icon: 'certif',
      nbr: '2',
      text: 'Certifications',
    },
    {
      icon: 'hands',
      nbr: '50+',
      text: 'Clients',
    },
    {
      icon: 'smiley',
      nbr: '100%',
      text: 'Satisfaction',
    },
  ];

  const iconMap: Record<string, React.ElementType> = {
    briefcase: Briefcase,
    certif: Award,
    hands: Users,
    smiley: Smile,
  };

  return items.map((item) => {
    const IconComponent = iconMap[item.icon] || null;
    if (!IconComponent) {
      // Handle the case when an icon name is not recognized or missing
      return null;
    }

    return (
      <div className={styles.reinsurance_items} key={crypto.randomUUID()}>
        <div className={styles.reinsurance_pastille}>
          <IconComponent size={30} color="white" className={styles.icons} />
        </div>
        <div className={styles.reinsurance_items_inner}>
          <p className={styles.nbr}>{item.nbr}</p>
          <p className={styles.reinsurance_text}>{item.text}</p>
        </div>
      </div>
    );
  });
}
