import Footer from "../components/Footer"
import Header from "../components/Header"
import ProjectCard from "../components/ProjectCard"

import video1 from "../assets/videos/video1.mp4"

function Projects() {

  const texte1 = "Voici un projet fait lors de mon stage de fin d'étude pour passer mon titre professionnel DWWM. C'est un site vitrine pour une entreprise de transport de marchandises. J'ai utilisé React pour le frontend et Node.js pour le backend."
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

      </section>

      <Footer />
    </>
  )
}

export default Projects