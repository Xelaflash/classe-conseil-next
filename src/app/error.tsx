'use client';
import * as React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oops... Erreur 404 - C.L.A.S.S.E. CONSEIL',
  description:
    'Corine Pesier - CLASSE CONSEIL - Développement des compétences, développement personnel, accompagnement collectif et individuel, formations, bilan professionnel, coaching, prévention des RPS, QVT',
};

export default function Error() {
  return (
    <div className="error-page-wrapper">
      <div className="error">
        <div className="notfound">
          <h1>Oops!</h1>
          <h2>Une erreur est survenue</h2>
        </div>
        <Link href="/">Retour sur le site</Link>
      </div>
    </div>
  );
}
