'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectContainer, { ProjectProps } from '../components/ProjectContainer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {

  const projects: Array<ProjectProps> = [
    {
      title: 'test1',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur hic sapiente corrupti. Autem asperiores repellat ipsum repellendus sint sit illum consequuntur',
      image: 'candlv.png',
      techs: ['Node.js', 'Angular', 'HTML'],
      links: [{ href: 'test', icon: FiGithub }, { href: 'test2', icon: FiExternalLink }],
    },{
      title: 'test2',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur hic sapiente corrupti. Autem asperiores repellat ipsum repellendus sint sit illum consequuntur',
      image: 'candlv.png',
      techs: ['Node.js', 'Angular', 'HTML'],
      links: [],
    }

  ]

  return (
    <section id='projects' className='flex flex-col py-24'>
      <SectionTitle title='Projects' />
      <div className='grid grid-cols-3 gap-y-7 py-12'>
        {projects.map((project: ProjectProps) => (
          <ProjectContainer key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects