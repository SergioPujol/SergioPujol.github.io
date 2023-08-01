import AboutMe from './sections/AboutMe'
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
    </main>
  )
}
