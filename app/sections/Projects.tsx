'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectContainer, { ProjectProps } from '../components/ProjectContainer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Projects = () => {

  const projects: Array<ProjectProps> = [
    {
      title: 'CandlV App',
      description: '',
      image: 'CandlV_App.png',
      techs: ['JavaScript', 'Node.js', 'Electron', 'HTML/CSS', 'Typescript', 'MongoDB', 'Mongoose'],
      links: [{ href: 'https://github.com/SergioPujol/CandlV-App', icon: FiGithub }]
    },{
      title: 'CandlV Web',
      description: '',
      image: 'CandlV_Web.png',
      techs: ['JavaScript', 'Node.js', 'HTML/CSS', 'Typescript', 'MongoDB', 'Mongoose'],
      links: [{ href: 'https://github.com/SergioPujol/CandlV-Web', icon: FiGithub }]
    },{
      title: 'NextJS Auth Template',
      description: '',
      image: 'NextAuthTemplate.png',
      techs: ['NextJS', 'React', 'TypeScript', 'PostgreSQL', 'MongoDB'],
      links: [{ href: 'https://github.com/SergioPujol/nextjs-auth-routing', icon: FiGithub }, { href: 'https://github.com/SergioPujol/nextjs-auth-navbar', icon: FiGithub }],
    },{
      title: 'Lets Lock',
      description: '',
      image: 'LetsLock.png',
      techs: ['Java', 'C++', 'Arduino', 'NoSQL'],
      links: [{ href: 'https://github.com/SergioPujol/LetsLock', icon: FiGithub }],
    },{
      title: 'Track Air',
      description: '',
      image: 'TrackAir.png',
      techs: ['Java', 'Javascript', 'C++', 'Arduino', 'HTML/CSS', 'SQL'],
      links: [{ href: 'https://github.com/SergioPujol/TrackAir', icon: FiGithub }],
    },{
      title: 'Rito',
      description: '',
      image: 'Rito.png',
      techs: ['Python', 'CMake', 'ROS', 'JavaScript', 'HTMl/CSS'],
      links: [{ href: 'https://github.com/SergioPujol/rito', icon: FiGithub }],
    },{
      title: '[margaritaSL]',
      description: '',
      image: 'WebSL.png',
      techs: ['Javascript', 'HTML/CSS', 'PHP', 'MySQL'],
      links: [{ href: '', icon: FiExternalLink }],
    },{
      title: 'In Dreams Videogame',
      description: '',
      image: 'InDreams.png',
      techs: ['C#', 'Unity'],
      links: [{ href: 'https://do-videogames.webs.upv.es/juegos/in-dreams/', icon: FiExternalLink }],
    },{
      title: 'UMMO',
      description: '',
      image: 'UMMO.png',
      techs: ['C#', 'Unity'],
      links: [{ href: '', icon: FiExternalLink }],
    }
    

  ]

  return (
    <section id='projects' className='flex flex-col py-24'>
      <SectionTitle title='Projects' />
      <div className='grid lg:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-y-7 py-12'>
        {projects.map((project: ProjectProps) => (
          <ProjectContainer key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects