import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const MenuFooter = () => {
  return (
    <div className="flex h-24 items-center justify-center gap-x-1">
        <Link href={'https://www.linkedin.com/in/sergio-pujol-martorell-0833641ba/'}><AiFillLinkedin size={20} /></Link>
        <Link href={'https://github.com/SergioPujol'}><AiFillGithub size={20} /></Link>
    </div>
  )
}

export default MenuFooter