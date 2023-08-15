import * as React from 'react';
import Link from 'next/link';
// icons
import { ArrowRight, Settings, Tool, TrendingUp } from 'react-feather';

import styles from './HomeCard.module.scss';

interface HomeCardProps {
  header: string;
  body: string;
  href: string;
  icon: string;
}

const HomeCard: React.FC<HomeCardProps> = ({ header, body, href, icon }) => {
  return (
    <Link href={href} className={styles.card_full_link}>
      <div className={styles.services_card}>
        <div className={styles.icons_wrapper}>
          {icon === 'TrendingUp' && (
            <TrendingUp size={32} color="white" className={styles.icons} />
          )}
          {icon === 'Cogs' && (
            <Settings size={32} color="white" className={styles.icons} />
          )}
          {icon === 'Tool' && (
            <Tool size={32} color="white" className={styles.icons} />
          )}
        </div>
        <h3>{header}</h3>
        <p className={styles.card_text}>{body}</p>
        <hr className={styles.sep_card} />
        <span className={styles.card_links}>
          En savoir plus
          <ArrowRight size={20} color="#4f4f4f" />
        </span>
      </div>
    </Link>
  );
};

export default HomeCard;
