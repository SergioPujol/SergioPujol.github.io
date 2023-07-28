import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import IconLink from '../components/IconLink'
import ScrollLink from '../components/ScrollLink'
import Anchor from '../components/Anchor'

const HomeSection = () => {

  return (
    <section id='home' className='flex h-screen'>
        <div className='flex flex-col w-full gap-y-4 justify-center relative'>
          {/*<hr className='h-1 bg-t-primary w-1/2 rounded-sm' />*/}
          <span className='font-bold text-5xl text-t-primary'>Sergio Pujol Martorell</span>
          <span className='font-semibold text-3xl text-t-secondary'>Full-Stack Developer</span>
          <p className='font-semibold text-md text-t-secondary w-2/3'>
            Lorem ipsum dolor sit, amet <Anchor title='consectetur adipisicin' link='test' /> consectetur adipisicing elit. Nulla cumque ipsa, quia odio voluptatum cupiditate libero aspernatur quibusdam eligendi minima voluptates aliquam quasi obcaecati eveniet, temporibus dolor, assumenda nam aut.
          </p>
          <div className='w-1/3 mt-4'><ScrollLink to={'aboutme'} title='Read about me' link={false} /></div>          
        </div>
    </section>
  )
}

export default HomeSection