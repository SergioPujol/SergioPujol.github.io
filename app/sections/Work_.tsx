'use client';
import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'

const Work = () => {

  const [selectedExperience, setSelectedExperience] = useState('infovista')

  const astryContent = (
    <>Astry</>
  )

  const ktoolsContent = (
    <>Ktools</>
  )

  const infovistaContent = (
    <>Infovista</>
  )

  const handleExperienceChange = (experiencePeriod: string) => {
    setSelectedExperience(experiencePeriod);
  }

  const getSelectedContent = () => {
    switch(selectedExperience) {
      case 'astry':
        return astryContent;
      case 'ktools': 
        return ktoolsContent;
      default:
        return infovistaContent
    }
  }

  return (
    <section id='work' className='flex flex-col py-24'>
      <SectionTitle title='Experience' />
      <div className='w-full flex flex-col py-12'>
        <div className='grid grid-cols-3 justify-center'>
          <div className={`flex h-12 justify-center items-center border-b-4 hover:bg-accent/[.1] ${selectedExperience == 'astry' ? 'border-accent' : 'border-t-secondary'}`} onClick={() => handleExperienceChange('astry')}>Astry</div>
          <div className={`flex h-12 justify-center items-center border-b-4 hover:bg-accent/[.1] ${selectedExperience == 'ktools' ? 'border-accent' : 'border-t-secondary'}`} onClick={() => handleExperienceChange('ktools')}>KTools</div>
          <div className={`flex h-12 justify-center items-center border-b-4 hover:bg-accent/[.1] ${selectedExperience == 'infovista' ? 'border-accent' : 'border-t-secondary'}`} onClick={() => handleExperienceChange('infovista')}>Infovista</div>
        </div>
        <div className='w-full h-72'>
          {getSelectedContent()}
        </div>
      </div>
    </section>
  )
}

export default Work