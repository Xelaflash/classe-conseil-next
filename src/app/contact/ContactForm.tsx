'use client';
import * as React from 'react';

import styles from './Contact.module.scss';

import { Send } from 'react-feather';

import { useForm } from '@formspree/react';

export default function ContactForm() {
  const [formData, setFormData] = React.useState({
    nom: '',
    telephone: '',
    email: '',
    sujet: '',
    message: '',
    rgpd: false,
  });

  const [validationErrors, setValidationErrors] = React.useState({
    nom: null,
    telephone: null,
    email: null,
    sujet: null,
    message: null,
    rgpd: null,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;
    const inputValue =
      type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: inputValue,
    }));

    hideValidate(name as keyof typeof formData);
  };

  const [state, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_ID || ''
  );

  const customHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform form validation here
    const isValid = validateForm();
    if (isValid) {
      handleSubmit(formData);
    }
  };

  const showValidate = (inputName: keyof typeof formData) => {
    setValidationErrors((prevValidationErrors) => ({
      ...prevValidationErrors,
      [inputName]: true,
    }));
  };

  const hideValidate = (inputName: keyof typeof formData) => {
    setValidationErrors((prevValidationErrors) => ({
      ...prevValidationErrors,
      [inputName]: false,
    }));
  };

  const validateForm = () => {
    const mailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let check = true;

    const phoneNumberRegex = /^((\+)33|0)[1-9](\d{2}){4}$/;

    if (formData.nom.trim() === '') {
      showValidate('nom');
      check = false;
    }
    if (mailRegex.test(formData.email) === false) {
      showValidate('email');
      check = false;
    }
    if (phoneNumberRegex.test(formData.telephone) === false) {
      showValidate('telephone');
      check = false;
    }
    if (formData.sujet.trim() === '') {
      showValidate('sujet');
      check = false;
    }
    if (formData.message.trim() === '') {
      showValidate('message');
      check = false;
    }

    if (!formData.rgpd) {
      showValidate('rgpd');
      check = false;
    }

    return check;
  };

  return (
    <form
      className={`${styles.contact1_form} ${styles.validate_form}`}
      onSubmit={customHandleSubmit}
    >
      <div className={styles.row}>
        <div
          className={`${styles.wrap_input1} ${styles.validate_input} ${
            validationErrors.nom ? styles.alert_validate : ''
          }`}
          data-validate="Nom est obligatoire"
        >
          <label htmlFor="form-name" className={styles.sr_only}>
            Nom
          </label>
          <input
            className={`${styles.input1} ${styles.input}`}
            id="form-name"
            type="text"
            name="nom"
            placeholder="Nom"
            onChange={handleChange}
          />
        </div>
        <div
          className={`${styles.wrap_input1} ${styles.validate_input} ${
            validationErrors.telephone ? styles.alert_validate : ''
          }`}
          data-validate="Téléphone est obligatoire"
        >
          <label htmlFor="form-phone" className={styles.sr_only}>
            Téléphone (ex: 0612345678)
          </label>
          <input
            className={`${styles.input1} ${styles.input} `}
            id="form-phone"
            type="tel"
            placeholder="Numéro de téléphone (ex: 0612345678)"
            name="telephone"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.row}>
        <div
          className={`${styles.wrap_input1} ${styles.validate_input} ${
            validationErrors.email ? styles.alert_validate : ''
          }`}
          data-validate="Un email valide est obligatoire: ex@abc.xyz"
        >
          <label htmlFor="form-email" className={styles.sr_only}>
            Email
          </label>
          <input
            className={`${styles.input1} ${styles.input}`}
            id="form-email"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
        <div
          className={`${styles.wrap_input1} ${styles.validate_input} ${
            validationErrors.sujet ? styles.alert_validate : ''
          }`}
          data-validate="Sujet est obligatoire"
        >
          <label htmlFor="form-subject" className={styles.sr_only}>
            Sujet
          </label>
          <input
            className={`${styles.input1} ${styles.input}`}
            id="form-subject"
            type="text"
            name="sujet"
            placeholder="Sujet"
            onChange={handleChange}
          />
        </div>
      </div>
      <div
        className={` ${styles.validate_input} ${
          validationErrors.message ? styles.alert_validate : ''
        }`}
        data-validate="Un message est obligatoire"
        id={styles.message_area}
      >
        <label htmlFor="form-message" className={styles.sr_only}>
          Message
        </label>
        <textarea
          className={`${styles.input1} ${styles.textarea}`}
          id={styles.form_message}
          name="message"
          placeholder="Message"
          onChange={handleChange}
        />
      </div>
      <div
        className={`${styles.validate_input} ${
          validationErrors.rgpd ? styles.alert_validate : ''
        }`}
        data-validate="Merci de cocher la case avant envoi du formulaire"
        id={styles.checkbox_rgpd}
      >
        <input
          name="rgpd"
          type="checkbox"
          className={styles.checkbox_input}
          checked={formData.rgpd}
          onChange={handleChange}
        />
        <label htmlFor="rgpd" className={styles.checkbox_label}>
          J’ai pris connaissance que les données collectées ne seront pas
          diffusées mais utilisées exclusivement dans le cadre de la formation
          avec CLASSE CONSEIL.
        </label>
      </div>
      <div className={styles.container_contact1_form_btn}>
        <button
          className={styles.contact1_form_btn}
          type="submit"
          disabled={state.submitting}
        >
          Envoyer
          <span>
            <Send size={20} />
          </span>
        </button>
      </div>
      {state.succeeded && (
        <p className={styles.msg_success}>Message envoyé avec succès ✅</p>
      )}
      {state.errors && (
        <p className={styles.msg_error}>
          Une erreur est survenu. Merci de réessayer 🛑
        </p>
      )}
    </form>
  );
}
