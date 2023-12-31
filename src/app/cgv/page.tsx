import * as React from 'react';
import { Metadata } from 'next';

// styles
import styles from './Cgv.module.scss';

export const metadata: Metadata = {
  title: 'CGV - C.L.A.S.S.E. Conseil',
  description:
    'Corine Pesier - CLASSE CONSEIL - Développement des compétences, développement personnel, accompagnement collectif et individuel, formations, bilan professionnel, coaching, prévention des RPS, QVT',
};

export default function Cgv() {
  return (
    <section className="section container">
      <h1 className="section_title">Conditions Générales de vente</h1>
      <hr className="separator" />
      <div className={styles.cgv}>
        <h2 className={styles.sub_section_title}>
          Conditions générales de vente Formation professionnelle continue
        </h2>
        <p>
          Désignation :
          <br />
          C.L.A.S.S.E. Conseil, représentée par Corine Pesier est une enseigne
          commerciale destinée à la vente de prestations de service dans le
          domaine de la formation professionnelle, immatriculé à l’INSEE sous le
          numéro SIRET : 38783280100022, et déclaré auprès du service de
          contrôle de la formation professionnelle de la DIRECCTE Nouvelle
          Aquitaine sous le numéro de déclaration d’activité : 72330233733
          depuis 1992.
          <br />
          L’établissement principal est situé au 48, rue de la Mauguette, 33170
          Gradignan.
          <br />
          Tel : 05 56 75 58 66 / 06 8 74 99 13
          <br />
          Clconseil@aol.com
          <br />
          C.L.A.S.S.E. Conseil, conçoit, élabore et dispense des formations
          intra-entreprises pour son propre compte ou pour le compte d’autres
          organismes de formation sur l’ensemble du territoire national.
          <br />
          Les secteurs d’activité de C.L.A.S.S.E. Conseil sont les collectivités
          territoriales, l’Administration, le secteur sanitaire et social, les
          entreprises.
          <br />
        </p>
        <p>
          Objet :
          <br />
          Les présentes conditions générales de vente, (CGV) s’appliquent à
          l’ensemble des prestations de formation engagé par C.L.A.S.S.E.
          Conseil pour le compte d’un client.
          <br />
          Le fait de passer commande implique l’adhésion entière et sans réserve
          du client aux présentes conditions de vente prévalant sur tout autre
          document du client et en particulier sur toutes les conditions
          générales d’achat du client.
          <br />
          S’entend par client, toute personne physique ou morale qui passe
          commande d’une formation auprès de C.L.A.S.S.E. Conseil.
          <br />
        </p>
        <p>
          Devis et attestation :
          <br />
          Pour chaque action de formation un devis est adressé par C.L.A.S.S.E.
          Conseil au client. Un exemplaire dûment renseigné, daté, signé et
          revêtu de la mention « Bon pour accord » doit être retourné à
          C.L.A.S.S.E. Conseil par courrier postal ou mail.
          <br />
          Le cas échéant, une convention particulière pourra être établie entre
          C.L.A.S.S.E. Conseil et le client ou l’organisme paritaire collecteur
          agrée (OPCA)
          <br />
          Une attestation de présence ou fin de formation établie en conformité
          avec les feuilles d’émargement est fournie au client, par participant.
          <br />
        </p>
        <p>
          Conditions financières, règlements et modalités de paiement :
          <br />
          Tous les prix sont indiqués en euros et hors taxes. Les prestations
          sont facturées hors taxes, étant entendu que les activités de
          formation continue sont exclues du champ de la TVA.
          <br />
          Le règlement du prix de la formation est à effectuer à l’issue de la
          formation, à réception de facture, au comptant. Un acompte de 30% peut
          être demandé à la commande.
          <br />
          Toute somme non payée à l’échéance entraine de plein droit et sans
          mise en demeure préalable, l’application de pénalités d’un montant
          égal à une fois et demie le taux d’intérêt légal.
          <br />
          C.L.A.S.S.E. Conseil aura la faculté d’obtenir le règlement par voie
          contentieuse aux frais du client sans préjudice des autres dommages et
          intérêts qui pourraient être dus à C.L.A.S.S.E. Conseil.
          <br />
          En cas de règlement par l’OPCA dont dépend le client, il appartient à
          ce dernier d’en effectuer la demande de prise en charge avant le début
          de la formation. L’accord de financement doit être communiqué au
          moment de la commande définitive.
          <br />
          En cas de prise en charge partielle par l’OPCA, la différence sera
          directement facturée par C.L.A.S.S.E. Conseil au client.
          <br />
          Si l’accord de prise en charge du client ne parvient pas à
          C.L.A.S.S.E. Conseil au plus tard un jour ouvrable avant le démarrage
          de la formation, C.L.A.S.S.E. Conseil se réserve la possibilité de
          refuser de dispenser la formation ou de facturer la totalité des frais
          de formation engagés auprès du client. Dans des situations
          particulières, il peut être procédé à un paiement échelonné à
          condition que les modalités aient été formalisées en amont du
          démarrage de la formation.
          <br />
          Le règlement du prix de la formation est effectué soit par chèque
          libellé à l’ordre de C.L.A.S.S.E. Conseil, Corine Pesier ou virement
          bancaire en précisant le numéro de facture, le nom de l’entreprise et
          son numéro SIREN/SIRET.
          <br />
        </p>
        <p>
          Conditions d’annulation et de report :
          <br />
          Toute annulation par le client doit faire l’objet d’une notification
          écrite (mail ou courrier) au plus tard 15 jours ouvrables avant le
          début de la formation.
          <br />
          Si l’annulation intervient dans un délai compris entre 15 jours et 10
          ouvrables avant le démarrage de la formation, les frais d’annulation
          sont égaux à 50% du prix total de la formation.
          <br />
          Si l’annulation intervient moins de 10 jours ouvrables avant le
          démarrage de la formation, les frais d’annulation sont égaux à 100% du
          prix total de la formation.
          <br />
          Une fois la formation commencée, toute annulation ou interruption de
          la formation donne lieu au paiement de la totalité de la formation.
          <br />
          C.L.A.S.S.E. Conseil ne pourra être tenu responsable à l’égard de ses
          clients en cas d’inexécution de ses obligations résultant d’un
          événement fortuit ou de force majeure.
          <br />
          Sont ici considérés comme cas fortuit ou de force majeure, outre ceux
          habituellement reconnus par la jurisprudence : la maladie ou
          l’accident d’un intervenant, les grèves ou conflits sociaux externes,
          les désastres naturels, les incendies, l’interruption des
          télécommunications, de l’approvisionnement en énergie, ou des
          transports de tous types, ou toute autre circonstance échappant au
          contrôle raisonnable de C.L.A.S.S.E. Conseil. Le client en est informé
          par mail, aucune indemnité n’est due en raison d’une annulation du
          fait de C.L.A.S.S.E. Conseil pour les raisons évoquées ci-dessus.
          <br />
          En cas d’annulation définitive par C.L.A.S.S.E. Conseil, il est
          procédé au remboursement des acomptes perçus le cas échéant.
          <br />
          En cas de réalisation partielle de la formation, seul le prix de la
          prestation réalisée sera facturé au titre de la formation.
          <br />
        </p>
        <p>
          Propriété intellectuelle et copyright :
          <br />
          L’ensemble des fiches de présentation, contenus et supports
          pédagogiques quelle qu’en soit la forme (papier, électronique,
          numérique, orale…) utilisées par C.L.A.S.S.E. Conseil pour assurer ses
          formations ou remis aux stagiaires constituent des œuvres originales
          et à ce titre sont protégées par la propriété intellectuelle et le
          copyright.
          <br />
          A ce titre, le client et le stagiaire s’interdisent d’utiliser,
          transmettre, reproduire exploiter ou transformer tout ou partie de ces
          documents, sans un accord express de C.L.A.S.S.E. Conseil. Cette
          interdiction porte en particulier sur toute utilisation faite par le
          client et le stagiaire en vue de l’organisation ou l’animation de
          formation.
          <br />
        </p>
        <p>
          Descriptif et programme des formations :
          <br />
          Les contenus des programmes tels qu’ils figurent sur les fiches de
          présentation des formations sont fournis à titre indicatif ;
          l’intervenant se réserve le droit de les modifier en fonction de
          l’actualité, du niveau des participants ou de la dynamique de groupe.
          <br />
        </p>
        <p>
          Confidentialité et communication :
          <br />
          C.L.A.S.S.E. Conseil, le client et le stagiaire s’engagent à garder
          confidentiel les documents et les informations auxquelles ils
          pourraient avoir accès au cours de la prestation de formation ou à
          l’occasion des échanges intervenus antérieurement à l’inscription,
          notamment l’ensemble des éléments figurant dans la proposition remise
          par C.L.A.S.S.E. Conseil au client.
          <br />
          C.L.A.S.S.E. Conseil s’engage à ne pas communiquer à des tiers autres
          que des partenaires avec lesquels sont organisées les formations et
          aux OPCA, les informations transmises par le client y compris les
          informations concernant les stagiaires.
          <br />
          Cependant, le client accepte d’être cité par C.L.A.S.S.E. Conseil
          comme client de ses formations.
          <br />
          A cet effet, le client autorise C.L.A.S.S.E Conseil à mentionner son
          nom ainsi qu’une description objective de la nature des prestations de
          formation dans ses listes de références et proposition à l’attention
          de ses prospects et de sa clientèle, entretiens avec des tiers,
          rapport d’activité ainsi qu’en cas de dispositions légales,
          réglementaires ou comptables l’exigeant. Les parties s’engagent
          réciproquement à garder confidentiels les documents et informations
          les concernant, quelle que soit leur nature, qu’ils soient économiques
          ou commerciaux, auxquels elles pourraient avoir eu accès au cours de
          l’exécution de la prestation ou à l’occasion des échanges intervenus
          antérieurement à la conclusion du contrat.
          <br />
        </p>
        <p>
          Protection et accès aux informations à caractère personnel :
          <br />
          Les données à caractère personnel sont collectées afin de répondre à
          la demande du client et de le tenir informé des offres de services de
          C.L.A.S.S.E. Conseil.
          <br />
          Conformément à la loi n° 78-17 du 6 janvier 1978, le stagiaire dispose
          d’un droit d’accès, de modification, de rectification des données à
          caractère personnel le concernant. Aucune information personnelle
          n’est cédée à des tiers. C.L.A.S.S.E. Conseil s’engage à effacer à
          l’issue des prestations toutes images qui auraient été prise par tout
          moyen de vidéo lors de travaux pratiques ou de simulations.
          <br />
        </p>
        <p>
          Droit applicable et juridiction compétente :
          <br />
          Les conditions générales détaillées dans le présent document sont
          régies par le droit français. En cas de litige survenant entre le
          client et C.L.A.S.S.E. Conseil à l’occasion de l’interprétation des
          présentes ou de l’exécution du contrat, il sera recherché une solution
          à l’amiable. A défaut, les tribunaux de Bordeaux seront seuls
          compétents pour régler le litige.
          <br />
        </p>
      </div>
      <div className="separator_gradient"></div>
      <div className={styles.cgv}>
        <h2 className={styles.sub_section_title}>
          Conditions générales de vente Bilans de compétences
        </h2>
        <p>
          Désignation :
          <br />
          C.L.A.S.S.E. Conseil, représentée par Corine Pesier est une enseigne
          commerciale destinée à la vente de prestations de service dans le
          domaine de la formation professionnelle dont les bilans de
          compétences. L’établissement principal est situé au 48, rue de la
          Mauguette, 33170 Gradignan. Tel : 05 56 75 58 66 / 06 8 74 99 13
          Clconseil@aol.com
          <br />
          C.L.A.S.S.E. Conseil, réalise des bilans de compétences pour son
          propre compte ou pour le compte d’autres organismes de formation sur
          l’ensemble du territoire national.
          <br />
          Les demandes de bilans de compétences sont à l’initiative des
          entreprises, de l’administration, des collectivités locales, des
          associations pour le compte de leurs salariés ou des salariés
          eux-mêmes pour leur propre compte dans le cadre de leur CPF (depuis le
          1er janvier 2017)
        </p>
        <p>
          Objet :
          <br />
          Les présentes conditions générales de vente (CGV) des prestations de
          services ont pour objet de préciser l’organisation des relations
          contractuelles entre le Prestataire et le Client, pour la prestation
          concernée : Bilan de compétences.
          <br />
          Le terme « Prestataire » désigne le Cabinet CLASSE Conseil représentée
          par Corine Pesier immatriculé à l’INSEE sous le numéro SIRET :
          38783280100022, et déclaré auprès du service de contrôle de la
          formation professionnelle de la DIRECCTE Nouvelle Aquitaine sous le
          numéro de déclaration d’activité : 72330233733 depuis 1992.
          <br />
          Le terme « Client » désigne la personne morale signataire de
          convention de formation (au sens de l’article L.6353-2 du Code du
          Travail), ou la personne physique signataire de contrat de formation
          (au sens de l’article L.6353-3 du Code du Travail) et acceptant les
          présentes conditions générales, ou encore les signataires de
          convention de formation tripartite dans le cadre de bilan de
          compétences dans le cadre d’un congé de bilan de compétences (article
          R. 6322-32 du Code du Travail).
          <br />
          Le terme de « Bilan de compétences » est une action d’évaluation des
          compétences qui permet à chacun d’analyser ses compétences
          professionnelles et personnelles, ses aptitudes et ses motivations en
          appui d’un projet d’évolution professionnelle et, le cas échéant, de
          formation.
          <br />
          Nature et caractérisation de l’action « Bilan de compétences » : Le
          Bilan de compétence rentre dans le champ d’application des
          dispositions relatives à la formation professionnelle continue
          (article L6130-1 du code du travail) et la catégorie des actions
          d’adaptation et de développement des compétences du salarié prévue par
          l’article L6313-3 du code du travail.
        </p>
        <p>
          Champ d’application :
          <br />
          Toute validation de devis implique l’acceptation sans réserve par
          l’acheteur et son adhésion pleine et entière aux présentes conditions
          générales de vente qui prévalent sur tout autre document de
          l’acheteur, et notamment sur toutes conditions générales d’achat.
        </p>
        <p>
          Documents contractuels :
          <br />
          1°) Dans le cas d’un congé bilan de compétences : A l’issue d’un
          rendez-vous d’information gratuit et sans engagement réciproque
          sollicité par le bénéficiaire, celui-ci contacte son OPACIF pour
          récupérer le dossier de demande de prise en charge. Si le bénéficiaire
          souhaite retenir  C.L.A.S.S.E. Conseil comme prestataire, un deuxième
          rendez-vous est organisé au cours duquel C.L.A.S.S.E. Conseil remplit
          la partie devis de l’organisme figurant dans le dossier de demande du
          congé bilan de compétences. Il appartient au bénéficiaire de renvoyer
          le dossier complet à son OPACIF. Le bénéficiaire confirme ainsi
          l’aspect volontaire de sa démarche.
          <br />
          2°) Dans le cas du Plan de Formation : A l’issue d’un rendez-vous
          d’information, gratuit et sans engagement mutuel, sollicité par le
          bénéficiaire, celui-ci reçoit de la part de C.L.A.S.S.E. Conseil un
          devis et un programme de formation détaillé avec un planning
          prévisionnel de rendez-vous. Le bénéficiaire confirme l’aspect
          volontaire de sa démarche.
          <br />
          Par la suite, il appartient à ce dernier de faire la demande
          d’acceptation auprès de son employeur par lettre recommandée avec AR.
          Dans les 30 jours suivant la réception de la demande, l’employeur doit
          faire connaître par écrit à l’intéressé son accord. Il s’engage à
          retourner à C.L.A.S.S.E. Conseil  un exemplaire daté, signé et portant
          le cachet de l’entreprise. L’absence de réponse de l’employeur vaut
          acceptation de la prestation. C.L.A.S.S.E. Conseil fait parvenir au
          bénéficiaire une Convention tripartite en 3 exemplaires précisant les
          conditions de prise en charge du financement de sa formation dans le
          cadre du Plan de formation. Le bénéficiaire et son employeur signent
          les trois exemplaires de la convention tripartite.
          <br />
          3°) Pour les demandeurs d’emploi : Pôle Emploi se substitue à
          l’employeur ; la demande est formulée au référent de Pôle Emploi et
          ensuite à l’OPCA concerné. La personne peut aussi solliciter un
          financement dans le cadre du CPF.
          <br />
          4°) Lorsqu’une personne physique entreprend une formation à titre
          individuel et à ses frais, le contrat est réputé formé lors de sa
          signature ; il est soumis aux dispositions des articles L.6353-3 à
          L.6353-9 du Code du Travail. L’élaboration de la convention tripartite
          est à la charge de C.L.A.S.S.E. Conseil
          <br />
        </p>
        <p>
          Prix, facturation et règlement :
          <br />
          C.L.A.S.S.E. Conseil est un organisme de formation non assujetti à la
          TVA. A ce titre, et conformément à l’article 261 du Code Général des
          Impôts, les prix indiqués sont nets de taxes et en euros pour
          l’ensemble des prestations entrant dans le champ d’application des
          dispositions relatives à la formation professionnelle continue, dont
          les Bilans de compétences.
          <br />
          Les paiements ont lieu à réception de la facture, sans escompte, ni
          ristourne ou remise sauf accord particulier. Les dates de paiement
          convenues contractuellement ne peuvent être remises en cause
          unilatéralement par le Client sous quelque prétexte que ce soit, y
          compris en cas de litige.
          <br />
        </p>
        <p>
          Subrogation :
          <br />
          En cas de subrogation de paiement conclu entre le Client et l’OPCA, ou
          tout autre organisme, les factures seront transmises par le
          Prestataire à l’OPCA, ou tout autre organisme, qui informe celui-ci
          des modalités spécifiques de règlement.
          <br />
          Le Prestataire s’engage également à faire parvenir les attestations de
          présence aux OPCA, ou tout autre organisme qui prennent en charge le
          financement de la dite formation à la fin de celle-ci.
          <br />
        </p>
        <p>
          Règlement par un OPCA :
          <br />
          Lorsque le règlement de la prestation est pris en charge par un OPCA,
          il appartient au bénéficiaire du bilan de compétences de faire la
          demande de prise en charge avant le début de l’action, de s’assurer de
          l’acceptation de sa demande, de l’indiquer explicitement sur la
          convention et de joindre à C.L.A.S.S.E. Conseil une copie de l’accord
          de prise en charge et de s’assurer de la bonne fin du paiement.
          <br />
          En cas de paiement partiel de la formation par l’OPCA, le solde sera
          facturé au bénéficiaire du bilan de compétences.
          <br />
          En cas de non réception de l’accord de prise en charge par l’OPCA au
          1er jour de la formation, le client sera facturé de l’intégralité de
          son coût. <br />
          Le règlement du prix de la prestation de bilan de compétences est
          effectué soit par chèque libellé à l’ordre de C.L.A.S.S.E. Conseil /
          Corine Pesier, ou virement bancaire en précisant le numéro de facture,
          le nom de l’entreprise et son numéro SIREN/SIRET.
          <br />
        </p>
        <p>
          Pénalité de retard et conditions de report :
          <br />
          1°) En cas de retard de paiement, seront exigibles, conformément à
          l’article L 441-6 du code du commerce, une indemnité calculée sur la
          base de trois fois le taux de l’intérêt légal en vigueur ainsi qu’une
          indemnité forfaitaire pour frais de recouvrement de 40 euros. Ces
          pénalités seront exigibles de plein droit, dès réception de l’avis
          informant le client qu’elles ont été portées à son débit.
          <br />
          2°) Lorsque le bénéficiaire ne se présente pas au RDV planifié avec le
          consultant sans l’avoir prévenu dans un délai de 3 jours ouvrés, la
          séance sera facturée sauf impossibilité de se déplacer pour cas de
          force majeure.
          <br />
          3°) Lorsque le bénéficiaire ne se présente pas au RDV planifié avec le
          consultant et qu’il a prévenu de son absence, la session sera reportée
          ultérieurement.
          <br />
        </p>
        <p>
          Force majeure :
          <br />
          C.L.A.S.S.E. Conseil ne pourra être tenu responsable à l’égard de ses
          clients en cas d’inexécution de ses obligations résultant d’un
          événement fortuit ou de force majeure.
          <br />
          Sont ici considérés comme cas fortuit ou de force majeure, outre ceux
          habituellement reconnus par la jurisprudence : la maladie ou
          l’accident d’un intervenant, les grèves ou conflits sociaux externes,
          les désastres naturels, les incendies, l’interruption des
          télécommunications, de l’approvisionnement en énergie, ou des
          transports de tous types, ou toute autre circonstance échappant au
          contrôle raisonnable de C.L.A.S.S.E. Conseil. Le client en est informé
          par mail, aucune indemnité n’est due en raison d’une annulation du
          fait de C.L.A.S.S.E. Conseil pour les raisons évoquées ci-dessus.
          <br />
          En cas d’annulation définitive par C.L.A.S.S.E. Conseil, il est
          procédé au remboursement des acomptes perçus le cas échéant. <br />
          En cas de réalisation partielle de la formation, seul le prix de la
          prestation réalisée sera facturé au titre de la formation.
          <br />
        </p>
        <p>
          Propriété intellectuelle et copyright :
          <br />
          L’ensemble des fiches de présentation, contenus et supports
          pédagogiques quelle qu’en soit la forme (papier, électronique,
          numérique, orale…) utilisées par C.L.A.S.S.E. Conseil pour assurer ses
          formations ou remis aux bénéficiaires constituent des œuvres
          originales et à ce titre sont protégées par la propriété
          intellectuelle et le copyright.
          <br />
          A ce titre, le client et/ou le bénéficiaire s’interdisent d’utiliser,
          transmettre, reproduire exploiter ou transformer tout ou partie de ces
          documents, sans un accord express de C.L.A.S.S.E. Conseil.
          <br />
        </p>
        <p>
          Descriptif et programme des prestations de Bilan de compétences :
          <br />
          Les contenus des programmes tels qu’ils figurent sur les fiches de
          présentation des bilans de compétences (12H, 16H, 24H) sont fournis à
          titre indicatif ; le consultant se réserve le droit de les modifier en
          fonction de l’actualité et de la dynamique d’évolution du
          bénéficiaire.
          <br />
        </p>
        <p>
          Confidentialité et communication :
          <br />
          C.L.A.S.S.E. Conseil, le client et/ou le bénéficiaire s’engagent à
          garder confidentiel les documents et les informations auxquelles ils
          pourraient avoir accès au cours de la prestation de bilan ou à
          l’occasion des échanges intervenus antérieurement à l’inscription,
          notamment l’ensemble des éléments figurant dans la proposition remise
          par C.L.A.S.S.E. Conseil au client.
          <br />
          C.L.A.S.S.E. Conseil s’engage à ne pas communiquer à des tiers autres
          que des partenaires avec lesquels sont organisées les prestations de
          bilan et aux OPCA, les informations transmises par le client y compris
          les informations concernant les bénéficiaires.
          <br />
          Cependant, le client accepte d’être cité par C.L.A.S.S.E. Conseil
          comme client de ses prestations de bilans de compétences.
          <br />
        </p>
        <p>
          Protection et accès aux informations à caractère personnel :
          <br />
          Les données à caractère personnel sont collectées afin de répondre à
          la demande du client et de le tenir informé des offres de services de
          C.L.A.S.S.E. Conseil.
          <br />
          Conformément à la loi n° 78-17 du 6 janvier 1978, le bénéficiaire
          dispose d’un droit d’accès, de modification, de rectification des
          données à caractère personnel le concernant. Aucune information
          personnelle n’est cédée à des tiers. C.L.A.S.S.E. Conseil s’engage à
          effacer à l’issue des prestations toutes images qui auraient été prise
          par tout moyen de vidéo lors de travaux pratiques ou de simulations.
          <br />
        </p>
        <p>
          Droit applicable et juridiction compétente :
          <br />
          Les conditions générales détaillées dans le présent document sont
          régies par le droit français. En cas de litige survenant entre le
          client et C.L.A.S.S.E. Conseil à l’occasion de l’interprétation des
          présentes ou de l’exécution du contrat, il sera recherché une solution
          à l’amiable. A défaut, les tribunaux de Bordeaux seront seuls
          compétents pour régler le litige.
          <br />
        </p>
      </div>
    </section>
  );
}
