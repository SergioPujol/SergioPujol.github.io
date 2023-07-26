import AboutMe from './sections/AboutMe'
import Skills from './sections/skills'
import Projects from './sections/projects'
import HomeSection from './sections/HomeSection'
import Work from './sections/work'

export default function Home() {
  return (
    <main className="w-full bg-bg-primary text-t-primary flex flex-col">
      <HomeSection />
      <AboutMe />
      <Skills />
      <Work />
      <Projects />
    </main>
  )
}
