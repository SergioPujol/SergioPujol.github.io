import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const HomeSection = () => {
  return (
    <section id='home' className='p-10 flex'>
        <div className='flex flex-col gap-y-4 w-2/3 justify-center'>
          <hr className='h-1 bg-t-primary w-1/2 rounded-sm' />
          <h1 className='text-xl'>Full-Stack Developer</h1>
        </div>
        <div className='flex flex-col w-1/3 gap-y-4'>
          <div className='flex flex-col gap-y-2 h-2/5'>
            <h2 className='text-lg'>About me</h2>
            <p className='text-sm text-t-secondary'>Software Developer passionate about creating innovative solutions in the digital world, with experience in web development encompassing both front-end and back-end.</p>
            <Link href={''}>More ?</Link>
          </div>
          <div className='flex flex-col gap-y-2 h-2/5'>
            <h2 className='text-lg'>My Experience</h2>
            <p className='text-sm text-t-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non tenetur qui sint laborum modi laudantium soluta est quo maiores.</p>
            <Link href={''}>More ?</Link>
          </div>
          <div className='flex flex-col gap-y-2 h-1/5'>
            <h2 className='text-lg'>Links</h2>
            <div className="flex items-center justify-center gap-x-1">
                <Link href={'https://www.linkedin.com/in/sergio-pujol-martorell-0833641ba/'}><AiFillLinkedin size={20} /></Link>
                <Link href={'https://github.com/SergioPujol'}><AiFillGithub size={20} /></Link>
            </div>
          </div>
        </div>
    </section>
  )
}

export default HomeSection