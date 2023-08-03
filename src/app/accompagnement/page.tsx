import React from 'react';

// styles
import styles from './Accompagnement.module.scss';
import AccompagnementAccordion from './AccompagnementAccordion';

export default function Accompagnement() {
  return (
    <>
      <div
        className={`parallax ${styles.accompagnement_banner}`}
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)), url(https://res.cloudinary.com/dqszntd5j/image/upload/v1594911913/accompagnement.jpg)',
        }}
      >
        <div className="banner_title_wrapper">
          <h1 className="banner_title">Accompagnement</h1>
        </div>
      </div>
      <section className="section container">
        <h2 className="section_title">Offre de prestations d’accompagnement</h2>
        <p className="mini_title">Catalogue</p>
        <hr className="separator"></hr>
        <div
          className={`${styles.accompagnement_wrapper} padding_50`}
          id="accompagnement-anchor"
        >
          <AccompagnementAccordion />
        </div>
      </section>
    </>
  );
}
