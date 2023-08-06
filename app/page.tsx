import AboutMe from './sections/AboutMe'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import HomeSection from './sections/HomeSection'
import Projects from './sections/Projects'
import Work from './sections/Work'

export default function Home() {
  return (
    <main className="w-full bg-bg-primary text-t-primary flex flex-col">
      <HomeSection />
      <AboutMe />
      <Work />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
