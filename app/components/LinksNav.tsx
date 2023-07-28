import React from 'react'
import { IconType } from 'react-icons'
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'
import IconLink from './IconLink'

const LinksNav = () => {

    const links: Array<{ href: string, icon: IconType }> = [
        {href: 'https://github.com/SergioPujol', icon: FiGithub },
        {href: 'https://www.linkedin.com/in/sergio-pujol-martorell-0833641ba/', icon: FiLinkedin },
        {href: 'https://twitter.com/SergioPuj', icon: FiTwitter },
        {href: 'mailto:sergiopujolmartorell@gmail.com', icon: FiMail }
    ]

  return (
    <div className='fixed bottom-0 right-10 w-10 text-t-secondary z-10'>
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