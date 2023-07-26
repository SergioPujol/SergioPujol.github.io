import React from 'react'
import Skill from '../components/Skill'

const Skills = () => {
  return (
    <section id='skills' className='p-10 bg-bg-primary'>
      <div className='flex'>
        <h1 className='text-accent'>//</h1><h1>Skills</h1>
      </div>
      <div className='flex gap-x-4 content-center'>
        <Skill name={'NodeJS'} percentage={75}/>
        <Skill name={'NodeJS'} percentage={75}/>
        <Skill name={'NodeJS'} percentage={75}/>
        <Skill name={'NodeJS'} percentage={75}/>
        <Skill name={'NodeJS'} percentage={75}/>
      </div>
    </section>
  )
}

export default Skills