import Header from "../components/Header"
import Title from "../components/Title"
import About from "../components/About"
import TechBanner from "../components/TechStack"

function Home() {
  return (
    <>
      <Header />

      <main>
        <Title />
        <About />
        <TechBanner />
      </main>
    </>
  )
}

export default Home