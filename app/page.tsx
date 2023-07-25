import Image from 'next/image'
import AboutMe from './sections/AboutMe'
import Skills from './sections/skills'
import Projects from './sections/projects'
import Work from './sections/work'

export default function Home() {
  return (
    <main className="w-full bg-bg-primary flex flex-col">
      <AboutMe />
      <Skills />
      <Work />
      <Projects />
    </main>
  )
}
