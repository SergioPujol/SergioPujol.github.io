'use client';
import React, { useState } from 'react'
import { IconType } from 'react-icons';
import { FaAngular, FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaChevronDown, FaChevronUp, FaSass, FaDocker, FaPython, FaJava } from 'react-icons/fa';
import { BiLogoTypescript, BiLogoJavascript, BiLogoMongodb } from 'react-icons/bi';
import { SiMysql, SiCsharp } from 'react-icons/si';

interface Language {
  title: string
  icon: IconType
}

const Skills = () => {

    const mainTechs: Array<Language> = [
        { title: 'Javascript', icon: BiLogoJavascript },
        { title: 'React', icon: FaReact },
        { title: 'Angular', icon: FaAngular },
        { title: 'NodeJs', icon: FaNodeJs },
        { title: 'Typescript', icon: BiLogoTypescript },
        { title: 'HTML', icon: FaHtml5 },
        { title: 'CSS', icon: FaCss3Alt },
    ];

    const otherTechs: Array<Language> = [
        { title: 'Sass', icon: FaSass },
        { title: 'Docker', icon: FaDocker },
        { title: 'C#', icon: SiCsharp },
        { title: 'Python', icon: FaPython },
        { title: 'MongoDB', icon: BiLogoMongodb },
        { title: 'MySQL', icon: SiMysql },
        { title: 'Java', icon: FaJava }
    ]

    const [showOthers, setShowOthers] = useState<boolean>(false);

  return (
    <div className='flex flex-col mt-16 p-8 pb-4 rounded-md bg-bg-secondary mb-24 items-center'>
        <div className={`flex grow items-center`}>
            <ul className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
                { mainTechs.map((language: Language) => (
                    <li className='flex flex-col gap-y-2 items-center' key={language.title}>
                        <language.icon className='text-accent' size={70} />
                        <span className='text-sm'>{language.title}</span>
                    </li>
                )) }
            </ul>
        </div>
        <div className={`overflow-hidden transition-all duration-1000 border-t-[1px] border-accent ${showOthers ? 'max-h-full pt-8 mt-8' : 'max-h-0 opacity-0'}`}>
            <ul className='flex flex-wrap gap-x-8 gap-y-4 justify-center'>
                { otherTechs.map((language: Language) => (
                    <li className='flex flex-col gap-y-2 items-center' key={language.title}>
                        <language.icon className='text-accent' size={70} />
                        <span className='text-sm'>{language.title}</span>
                    </li>
                )) }
            </ul>
        </div>

        <button className={`mt-4 transition-all duration-1000 hover:${showOthers ? '-translate-y-[3px]' : 'translate-y-[3px]'} hover:text-accent`} onClick={() => setShowOthers(!showOthers)}>
            {showOthers ? <FaChevronUp size={30} /> : <FaChevronDown size={30} />}
        </button>
    </div>
  )
}

export default Skills