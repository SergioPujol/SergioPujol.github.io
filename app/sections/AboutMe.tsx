'use client';
import React, { useState } from 'react'
import SectionTitle from '../components/SectionTitle'
import Image from 'next/image';
import Anchor from '../components/Anchor';
import { IconType } from 'react-icons';
import { FaAngular, FaNodeJs, FaReact, FaFolder, FaHtml5 } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoJavascript } from 'react-icons/bi'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import Button from '../components/Button';

interface Language {
  title: string
  icon: IconType
}

const AboutMe = () => {

  const mainLanguages: Array<Language> = [
    { title: 'Javascript', icon: BiLogoJavascript },
    { title: 'React', icon: FaReact },
    { title: 'Angular', icon: FaAngular },
    { title: 'NodeJs', icon: FaNodeJs },
    { title: 'Typescript', icon: BiLogoTypescript },
    { title: 'HTML/CSS', icon: FaHtml5 },
  ];
  const otherLanguages: Array<Language> = [
    { title: 'Javascript 2', icon: BiLogoJavascript },
    { title: 'React 2', icon: FaReact },
    { title: 'Angular 2', icon: FaAngular },
    { title: 'NodeJs 2', icon: FaNodeJs },
    { title: 'Typescript 2', icon: BiLogoTypescript },
  ];

  const [showOthers, setShowOthers] = useState(false);

  const handleOthersOnClick = () => {
    setShowOthers(!showOthers)
  }

  return (
    <section id='aboutme' className='flex flex-col py-24'>
      <SectionTitle title='About Me' />
      <div className='w-full flex py-12'>
        <div className='grow flex flex-col gap-y-4'>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quaerat architecto similique sunt perferendis itaque distinctio nulla obcaecati quo nemo fugit repudiandae autem ipsum fuga nobis? Quia perspiciatis maiores aliquam!</span>
          <span>Lorem ipsum dolor, <Anchor title='test' link='test'/> sit amet consectetur adipisicing elit. Minima cum sequi quisquam amet magnam atque laboriosam, commodi corrupti, reprehenderit eius quam exercitationem mollitia numquam suscipit velit placeat dicta sapiente necessitatibus.</span>
          <span>Technologies used:</span>
          <div className='w-full'>
            <div>
              <ul className='grid grid-cols-3 gap-y-3'>
                { mainLanguages.map((language: Language) => (
                  <li className='flex gap-x-2'>
                    <language.icon className='text-accent' size={20} />
                    <span>{language.title}</span>
                  </li>
                )) }
              </ul>
            </div>
            
          </div>
          <div className='flex items-center gap-x-2'>
            <span>Others</span>
            <div onClick={handleOthersOnClick}>
              {showOthers ? <MdArrowDropUp size={15} /> : <MdArrowDropDown size={15} />}
            </div>
          </div>
          <div className={`overflow-hidden transition-all duration-500 ${
              showOthers ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <ul className='grid grid-cols-3 gap-y-3'>
              {otherLanguages.map((language: Language) => (
                <li className='flex gap-x-2'>
                  <language.icon className='text-accent' size={20} />
                  <span>{language.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='flex items-center justify-center px-10'>
          <div className='relative rounded-md bg-cover bg-[url("/pfp.jpeg")] w-80 h-80'>
            <div className="absolute rounded-md top-0 left-0 w-full h-full bg-accent/50 hover:bg-transparent transition-all duration-500"></div>
          </div>
          {/*<Image 
              height={300}
              width={300}
              alt="pfp"
              src={'/pfp.jpeg'}
              className='rounded-md'
          />*/}
        </div>
      </div>
    </section>
  )
}

export default AboutMe