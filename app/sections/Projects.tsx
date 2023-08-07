'use client'
import React from 'react'
import SectionTitle from '../components/SectionTitle'
import ProjectContainer, { ProjectProps } from '../components/ProjectContainer'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { FaGoogleDrive } from 'react-icons/fa'

const Projects = () => {

  const projects: Array<ProjectProps> = [
    {
      title: 'CandlV App',
      image: 'CandlV_App.png',
      techs: ['JavaScript', 'Node.js', 'Electron', 'HTML/CSS', 'Typescript', 'MongoDB', 'Mongoose'],
      links: [{ href: 'https://github.com/SergioPujol/CandlV-App', icon: FiGithub }]
    },{
      title: 'CandlV Web',
      image: 'CandlV_Web.png',
      techs: ['JavaScript', 'Node.js', 'HTML/CSS', 'Typescript', 'MongoDB', 'Mongoose'],
      links: [{ href: 'https://github.com/SergioPujol/CandlV-Web', icon: FiGithub }]
    },{
      title: 'NextJS Auth Template',
      image: 'NextAuthTemplate.png',
      techs: ['NextJS', 'React', 'TypeScript', 'PostgreSQL', 'MongoDB'],
      links: [{ href: 'https://github.com/SergioPujol/nextjs-auth-routing', icon: FiGithub }, { href: 'https://github.com/SergioPujol/nextjs-auth-navbar', icon: FiGithub }],
    },{
      title: 'Lets Lock',
      image: 'LetsLock_temp.png',
      techs: ['Java', 'C++', 'Arduino', 'NoSQL'],
      links: [{ href: 'https://github.com/SergioPujol/LetsLock', icon: FiGithub }],
    },{
      title: 'Track Air',
      image: 'TrackAir_temp.png',
      techs: ['Java', 'Javascript', 'C++', 'Arduino', 'HTML/CSS', 'SQL'],
      links: [{ href: 'https://github.com/SergioPujol/TrackAir', icon: FiGithub }],
    },{
      title: 'Rito',
      image: 'Rito.png',
      techs: ['Python', 'CMake', 'ROS', 'JavaScript', 'HTMl/CSS'],
      links: [{ href: 'https://github.com/SergioPujol/rito', icon: FiGithub }],
    },{
      title: 'Feed',
      image: 'Feed.png',
      techs: ['Javascript', 'HTML/CSS', 'PHP', 'MySQL'],
      links: [{ href: 'https://github.com/SergioPujol/margaritasl', icon: FiGithub }],
    },{
      title: 'In Dreams Videogame',
      image: 'InDreams.png',
      techs: ['C#', 'Unity'],
      links: [{ href: 'https://do-videogames.webs.upv.es/juegos/in-dreams/', icon: FiExternalLink }],
    },{
      title: 'UMMO',
      image: 'UMMO.png',
      techs: ['C#', 'Unity'],
      links: [{ href: 'https://drive.google.com/drive/folders/199Jctdt-u-GhjPv1DKWwmaIEkKTxm0zQ', icon: FaGoogleDrive }],
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