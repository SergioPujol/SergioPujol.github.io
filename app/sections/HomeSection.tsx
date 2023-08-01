import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import ScrollLink from '../components/ScrollLink'
import Anchor from '../components/Anchor'

const HomeSection = () => {

  return (
    <section id='home' className='flex h-screen'>
      <div className='h-screen w-full absolute top-0 left-0 bg-[url("/dev-back.jpeg")] bg-cover bg-center'></div> 
      <div className='w-full flex flex-col gap-y-3 relative justify-center'>
        {/*<hr className='h-1 bg-t-primary w-1/2 rounded-sm' />*/}
        <span className='font-semibold text-3xl text-t-primary'>Hi, I am</span>
        <span className='font-bold text-5xl text-t-primary'>Sergio Pujol Martorell</span>
        <span className='font-semibold text-3xl text-t-secondary'>Full-Stack Developer</span>
        <div className='w-1/3 mt-4 flex'><ScrollLink to={'aboutme'} title='Read about me' link={false} /></div>       
      </div>
    </section>
  )
}

export default HomeSection