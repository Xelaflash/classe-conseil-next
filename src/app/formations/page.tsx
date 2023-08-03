import React from 'react';
import { Metadata } from 'next';

// component
import FormationsAccordion from './FormationsAccordion';

export const metadata: Metadata = {
  title: 'Formations - C.L.A.S.S.E. Conseil',
  description:
    'Corine Pesier - CLASSE CONSEIL - Offres de prestations de formations en Management, Santé mentale au travail, Efficience au poste de travail et analyse des pratiques professionnelles',
};

export default function Formations() {
  return (
    <>
      <div
        className="parallax formations_banner"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.2)), url(https://res.cloudinary.com/dqszntd5j/image/upload/v1594825524/formation.jpg)',
        }}
      >
        <div className="banner_title_wrapper">
          <h1 className="banner_title">Formations</h1>
        </div>
      </div>

      <section className="section container">
        <h2 className="section_title">Offre de prestations de formation</h2>
        <p className="mini_title">Catalogue</p>
        <hr className="separator"></hr>
        <div className="catalogue_wrapper padding_50" id="analysis-anchor">
          <FormationsAccordion />
        </div>
      </section>
    </>
  );
}
