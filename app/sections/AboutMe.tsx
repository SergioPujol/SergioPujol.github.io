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
import Skills from '../components/Skills';

interface Language {
  title: string
  icon: IconType
}

const AboutMe = () => {

  return (
    <section id='aboutme' className='flex flex-col m-auto max-w-[900px] pt-24 pb-4'>
      <SectionTitle title='About Me' />
      <div className='w-full flex flex-col py-12'>
        <div className='flex lg:flex-row flex-col gap-y-16'>
          <div className='grow flex flex-col gap-y-4 mr-8 text-justify'>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, quaerat architecto similique sunt perferendis itaque distinctio nulla obcaecati quo nemo fugit repudiandae autem ipsum fuga nobis? Quia perspiciatis maiores aliquam!</span>
            <span>Lorem ipsum dolor, <Anchor title='test' link='test'/> sit amet consectetur adipisicing elit. Minima cum sequi quisquam amet magnam atque laboriosam, commodi corrupti, reprehenderit eius quam exercitationem mollitia numquam suscipit velit placeat dicta sapiente necessitatibus.</span>
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