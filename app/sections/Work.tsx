'use client';
import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import ExperienceContainer from '../components/ExperienceContainer';

const Work = () => {

  const [selectedExperience, setSelectedExperience] = useState('infovista');

  const handleExperienceChange = (experiencePeriod: string) => {
    setSelectedExperience(experiencePeriod);
  }

  const infovistaElements = {
    mainInfo: { company: 'Infovista', position: 'UI Developer', period: 'Feb 2022 - Apr 2023', techs: ['Angular', 'React', 'Typescript', 'HTML', 'CSS'] },
    description: ['Developed innovative UI components using Angular and React', 'Conducted unit tests and integration tests.', 'Acted as Scrum Master, leading effective communication.', 'Strengthened English communication skills.']
  }
  const ktoolsElements = {
    mainInfo: { company: 'KTools', position: 'Full-Stack Developer', period: 'Aug 2021 - Mar 2022', techs: ['Node.js', 'MongoDB', 'React', 'Typescript', 'HTML', 'CSS'] },
    description: ['Led the development of decentralized applications (DApps) on Ethereum & Solana blockchain', 'Created a CLI tool for direct Ethereum transactions.']
  }
  const astryElements = {
    mainInfo: { company: 'Astry', position: 'Full-Stack Developer', period: 'Jan 2021 - Jan 2022', techs: ['Node.js', 'MongoDB', 'Python', 'Javascript', 'HTML', 'CSS'] },
    description: ['Led the development of a Chrome extension project for automated online purchases', 'Implemented secure user authentication with database integration.', 'Developed a complete control panel with customized profiles and support for proxies.']
  }

  return (
    <section id='work' className='flex flex-col py-24'>
      <SectionTitle title='Experience' />
      <div className='w-full flex flex-col xl:flex-row py-12'>
        <ExperienceContainer {...infovistaElements} isOpen={selectedExperience === 'infovista'} onClickEvent={() => handleExperienceChange('infovista')}/>        
        <ExperienceContainer {...ktoolsElements} isOpen={selectedExperience === 'ktools'} onClickEvent={() => handleExperienceChange('ktools')}/>
        <ExperienceContainer {...astryElements} isOpen={selectedExperience === 'astry'} onClickEvent={() => handleExperienceChange('astry')}/>
      </div>
    </section>
  )
}

export default Work