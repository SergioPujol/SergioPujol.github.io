'use client';
import React, { useState } from 'react'
import { IconType } from 'react-icons'
import IconLink, { IconLinkProps } from './IconLink';

export interface ProjectProps {
    title: string
    description: string
    image: string
    techs: Array<string>
    links: Array<IconLinkProps>
}

const ProjectContainer: React.FC<ProjectProps> = ({
    title, description, image, techs, links
}) => {

    const [showInfo, setShowInfo] = useState<boolean>(false);

    const handleMouseOver = () => {
        setShowInfo(true);
    }

    const handleMouseLeave = () => {
        setShowInfo(false);
    }

    return (
    <div className={`relative m-4 h-96 flex flex-col rounded-md bg-[url("/test.png")] bg-cover`} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>

        <div className={`absolute top-0 left-0 w-full h-full bg-bg-secondary ${showInfo ? 'opacity-0' : 'opacity-50'} transition-all duration-1000`}></div> {/* Background cover */}
        
        <div className={`absolute top-[10%] left-0 w-full h-4/5 text-center flex flex-col`}> {/* Line dividers */}
            <div className={`absolute w-12 h-[1px] bg-white left-0 right-0 top-0 mx-auto ${showInfo ? 'scale-x-150 opacity-50' : 'opacity-25'} transition-transform duration-1000`}></div>
            <div className={`absolute w-12 h-[1px] bg-white left-0 right-0 bottom-0 mx-auto ${showInfo ? 'scale-x-150 opacity-50' : 'opacity-25'} transition-transform duration-1000`}></div>
        </div>
                
        <div className={`${showInfo ? '-translate-y-1/4' : 'translate-y-0'} duration-1000 flex flex-col absolute top-3/4 left-0 w-full items-center`}>
            <span className={`text-t-primary text-2xl`}>{title}</span>
            <ul className={`${showInfo ? 'opacity-100' : 'opacity-0'} flex transition-opacity duration-500 list-none text-t-secondary`}>
                {links.map((link: { href: string, icon: IconType }) => (
                    <li key={link.href}>
                        <IconLink {...link}/>
                    </li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default ProjectContainer