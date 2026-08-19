import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import "../styles/Projects.css"

import video1 from "../assets/videos/video1.mp4"
import video2 from "../assets/videos/video2.mp4"
import video3 from "../assets/videos/video3.mp4"
import video4 from "../assets/videos/video4.mp4"

function Projects() {

  const texte1Court = (
    <>
    <br></br><br></br><br></br>
     Ce projet a été réalisé dans le cadre de mon{" "}
    <strong>stage de fin d'études</strong> pour l'obtention de mon{" "}
    <strong>Titre Professionnel DWWM</strong>. Il s'agit d'un{" "}
    <strong>site vitrine pour une entreprise de transport</strong>,
    développé avec React et Node.js.
    </>
  )

  const texte1 = 
  (
    <>
    <br></br><br></br><br></br>
      <p>
        Ce projet a été réalisé dans le cadre de mon{" "}
        <strong>stage de fin d'études</strong>, effectué pour l'obtention de
        mon{" "}
        <strong>
          Titre Professionnel Développeur Web et Web Mobile (DWWM)
        </strong>.
      </p>

      <p>
        L'objectif était de concevoir et développer un{" "}
        <strong>
          site vitrine pour une entreprise spécialisée dans le transport de
          marchandises
        </strong>
        , avec une interface moderne, claire et facilement accessible.
      </p>
      <h3>Conception</h3>

      <p>
        J'ai commencé le projet par la{" "}
        <strong>conception des maquettes sur Penpot</strong>, en échangeant
        directement avec le gérant de l'entreprise afin d'identifier ses
        besoins et de valider les différentes propositions avant le
        développement.
      </p>

      <p>
        Le choix graphique et ergonomique a été volontairement orienté vers une
        interface <strong>simple, épurée et intuitive</strong>, afin de
        permettre aux visiteurs d'accéder rapidement aux informations
        essentielles et de contacter l'entreprise facilement.
      </p>

      <h3>Développement frontend & backend</h3>
       <p>
        Pour le développement, j'ai utilisé{" "}
        <strong>React pour le frontend</strong> et{" "}
        <strong>Node.js avec Express pour le backend</strong>.
      </p>

      <p>
        Le backend permet notamment de gérer le formulaire de contact et de
        transmettre les demandes directement à l'adresse e-mail professionnelle
        de l'entreprise grâce à <strong>Nodemailer</strong>.
      </p>

      <p>
        J'ai également mis en place plusieurs mécanismes permettant de
        sécuriser et fiabiliser le traitement des données :
      </p>

      <ul>
        <li>
          <strong>Validation des données côté serveur</strong>, afin de
          vérifier la présence des champs obligatoires avant leur traitement.
        </li>

        <li>
          <strong>Validation du format des adresses e-mail</strong> grâce à une
          expression régulière.
        </li>
<li>
          <strong>Configuration de CORS</strong>, afin de contrôler les
          origines autorisées à communiquer avec l'API.
        </li>

        <li>
          <strong>Utilisation de variables d'environnement</strong> pour
          protéger les informations sensibles liées à l'authentification du
          service e-mail.
        </li>

        <li>
          <strong>Gestion des erreurs côté serveur</strong>, avec des réponses
          HTTP adaptées en cas de requête invalide ou d'échec lors de l'envoi.
        </li>

        <li>
          <strong>Gestion de la réponse API</strong>, permettant au frontend
          d'informer clairement l'utilisateur du succès ou de l'échec de sa
          demande.
        </li>
      </ul>
<p>
        Une attention particulière a également été portée à la fiabilité du
        formulaire de contact. J'ai réalisé des{" "}
        <strong>tests du backend et du système d'envoi d'e-mails</strong> afin
        de vérifier le bon fonctionnement de l'API et de m'assurer que les
        messages étaient correctement transmis.
      </p>

      <h3>Travail en équipe et autonomie</h3>

      <p>
        Le projet a été réalisé en équipe de deux stagiaires, avec
        l'accompagnement de notre maître de stage.
      </p>
 <p>
        Nous avons bénéficié d'une{" "}
        <strong>
          grande autonomie dans la conception et le développement du projet
        </strong>
        , tout en pouvant solliciter notre encadrement lorsque nous
        rencontrions une difficulté technique ou avions besoin de valider une
        décision.
      </p>

      <p>
        Cette expérience m'a permis de travailler dans des conditions proches
        d'un environnement professionnel, depuis la{" "}
        <strong>
          conception de l'interface jusqu'au développement, aux tests et à la
          préparation du projet pour son déploiement
        </strong>
        .
      </p>

      <h3>État du projet</h3>
 <p>
        Le site est <strong>fonctionnel et prêt à être déployé</strong>. Sa
        mise en ligne n'a cependant pas pu être réalisée dans le cadre de mon
        stage.
      </p>

      <p>
        L'intégralité du projet est disponible sur{" "}
        <strong>GitHub</strong>, comprenant le frontend, le backend ainsi que
        les différents éléments nécessaires à son fonctionnement.
      </p>

      <h3>Technologies utilisées</h3>

      <p>
        <strong>
          React · JavaScript · Node.js · Express · Nodemailer · CORS · REST API
          · Penpot · Git · GitHub
        </strong>
      </p>

      <h3>Compétences mises en œuvre</h3>
       <p>
        <strong>
          Conception UI/UX · Développement frontend · Développement backend ·
          API REST · Validation des données · Sécurisation des échanges ·
          Gestion des variables d'environnement · Tests · Git/GitHub
        </strong>
      </p>
    </>
  )
  
  const texte2 = "Voici le site interne que j'ai développé pour l'entreprise BA Aquitaine. Il permet aux employés de gérer les commandes, les clients et les livraisons. J'ai utilisé React pour le frontend et Node.js & express.js pour le backend."
  const texte3 = "Voici un jeu de shifumi que j'ai développé pour un projet personnel. Il permet aux utilisateurs de jouer au shifumi à 2. J'ai utilisé JavaScript pour le développement du jeu."
  const texte4 = "Voici un projet que j'ai développé en exercice pour la wild school. Il s'agit d'un site de blagues carambar, avec une API pour récupérer les blagues. J'ai utilisé React pour le frontend et Node.js pour le backend."
  return (
    <>
      <Header />

      <section className="projects">
        <h1>Mes projets</h1>
        <p>Voici une sélection de mes projets récents :</p>

        <ProjectCard
          title="Site vitrine — Entreprise de transport de marchandises"
          video={video1}
          description={texte1}
          shortDescription={texte1Court}
        />

        <ProjectCard
          title="BA Aquitaine - Site interne"
          video={video2}
          description={texte2}
        />

        <ProjectCard
          title="Shifumi"
          video={video3}
          description={texte3}
        />

        <ProjectCard
          title="Carambar API"
          video={video4}
          description={texte4}
        />

      </section>

      <Footer />
    </>
  )
}

export default Projects