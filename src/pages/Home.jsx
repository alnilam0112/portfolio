import Header from "../components/Header"
import Title from "../components/Title"
import About from "../components/About"
import TechBanner from "../components/TechStack"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

function Home() {
  return (
    <>
      <Header />

      <main>
        <Title />
        <About />
        <TechBanner />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home