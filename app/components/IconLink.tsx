import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons';

export interface IconLinkProps {
    href: any
    icon: IconType
}

const IconLink: React.FC<IconLinkProps> = ({ href, icon: Icon }) => {
  return (
    <Link href={href} target='_blank' className='transition-all duration-500 hover:-translate-y-[3px] hover:text-accent p-2'><Icon size={20} /></Link>
  )
}

export default IconLink