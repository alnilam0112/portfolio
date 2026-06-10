import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"
import "../styles/Projects.css"

import video1 from "../assets/videos/video1.mp4"
import video2 from "../assets/videos/video2.mp4"
import video3 from "../assets/videos/video3.mp4"
import video4 from "../assets/videos/video4.mp4"

function Projects() {

  const texte1 = "Voici un projet fait lors de mon stage de fin d'étude pour passer mon titre professionnel DWWM. C'est un site vitrine pour une entreprise de transport de marchandises. J'ai utilisé React pour le frontend et Node.js pour le backend."
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
          title="BA Aquitaine - Site vitrine"
          video={video1}
          description={texte1}
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