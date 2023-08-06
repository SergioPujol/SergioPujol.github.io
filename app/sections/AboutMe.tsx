'use client';
import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Anchor from '../components/Anchor';
import Skills from '../components/Skills';

const AboutMe = () => {

  return (
    <section id='aboutme' className='flex flex-col m-auto max-w-[900px] pt-24 pb-4'>
      <SectionTitle title='About Me' />
      <div className='w-full flex flex-col py-12'>
        <div className='flex lg:flex-row flex-col gap-y-16'>
          <div className='grow flex flex-col gap-y-4 mr-8 text-t-secondary'>
            <span>Hey there, I&apos;m Sergio Pujol, a passionate Software Developer with over 3 years of experience in shaping innovative digital solutions. My journey has guided me through the complexities of web development, covering both front-end and back-end realms.</span>
            <span>My most recent adventure took place at <Anchor title='Infovista' link='https://www.infovista.com/'/> in Italy, stepping beyond my home country for a rewarding experience. This chapter has sparked my interest in pursuing similar adventures in my next role.</span>
            <span>Feel free to <Anchor title='reach out' link='mailto:sergiopujolmartorell@gmail.com'/> if you&apos;d like to get in touch with me. I look forward to new horizons and exciting possibilities.</span>
          </div>
          <div className='flex items-center justify-center'>
            <div className='relative rounded-md bg-cover bg-[url("/pfp.jpeg")] w-80 h-80'>
              <div className="absolute rounded-md top-0 left-0 w-full h-full bg-accent/30 hover:bg-transparent transition-all duration-500"></div>
            </div>
          </div>
        </div>

        <Skills />
      </div>
    </section>
  )
}

export default AboutMe