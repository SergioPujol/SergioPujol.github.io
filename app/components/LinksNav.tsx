import React from 'react'
import { IconType } from 'react-icons'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import IconLink from './IconLink'

interface LinksNavProps {
    footer?: boolean
}

const LinksNav: React.FC<LinksNavProps> = ({ footer }) => {

    const links: Array<{ href: string, icon: IconType }> = [
        {href: 'https://github.com/SergioPujol', icon: FiGithub },
        {href: 'https://www.linkedin.com/in/sergio-pujol-martorell-0833641ba/', icon: FiLinkedin },
        {href: 'https://twitter.com/SergioPuj', icon: FiTwitter },
        {href: 'mailto:sergiopujolmartorell@gmail.com', icon: FiMail }
    ]

  return (
     footer ? 
        <div className='sm:hidden flex text-t-secondary'>
            <ul className='flex items-center m-0 p-0 list-none gap-x-3'>
                {links.map((link: { href: string, icon: IconType }) => (
                    <li key={link.href}>
                        <IconLink {...link}/>
                    </li>
                ))}
            </ul>
        </div>
            :
        <div className='hidden sm:block fixed bottom-0 right-3 sm:right-10 w-10 text-t-secondary z-10'>
            <ul className='links-nav flex flex-col items-center m-0 p-0 list-none'>
                {links.map((link: { href: string, icon: IconType }) => (
                    <li key={link.href}>
                        <IconLink {...link}/>
                    </li>
                ))}
            </ul>
        </div>
    
  )
}

export default LinksNav