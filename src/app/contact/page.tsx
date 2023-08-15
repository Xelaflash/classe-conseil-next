import * as React from 'react';
import { Metadata } from 'next';

// styles
import styles from './Contact.module.scss';

// icons
import { Mail, Phone } from 'react-feather';

//  components
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact - C.L.A.S.S.E. Conseil',
  description:
    'Corine Pesier - CLASSE CONSEIL - Développement des compétences, développement personnel, accompagnement collectif et individuel, formations, bilan professionnel, coaching, prévention des RPS, QVT',
};

export default function Contact() {
  return (
    <>
      <section className="section container">
        <h1 className="section_title">Prendre Contact</h1>
        <p className="mini_title">Envoyer un message</p>
        <hr className="separator"></hr>
        <div className={styles.contact_details_wrapper}>
          <div className={styles.contact_items}>
            <div className={styles.contact_items_icon}>
              <Phone size={42} color="var(--color-dark-red)" />
            </div>
            <div className={styles.contact_items_content}>
              <h3>Téléphone</h3>
              <p>
                <a href="tel:+33680749913">+33 6 80 74 99 13</a>
              </p>
              <p>
                <a href="tel:+33556755866">+33 5 56 75 58 66</a>
              </p>
            </div>
          </div>
          <div className={styles.contact_items}>
            <div className={styles.contact_items_icon}>
              <Mail size={42} color="var(--color-dark-red)" />
            </div>
            <div className={styles.contact_items_content}>
              <h3>Email</h3>
              <p>
                <a href="mailto:clconseil@aol.com">clconseil@aol.com</a>
              </p>
            </div>
          </div>
        </div>
        <div className={styles.contact_form_wrapper}>
          <div className={styles.contact1}>
            <div className={styles.container_contact1}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
