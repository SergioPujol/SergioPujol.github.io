'use client';
import React from 'react'
import Button from './Button';

interface ScrollLinkProps {
    to: string
    className?: string
    title: string
    link: boolean
}

const ScrollLink: React.FC<ScrollLinkProps> = ({
    to, className, link, title
}) => {

    const handleScrollClick = () => {
        const sectionElement = document.getElementById(to)
        if(!sectionElement) return
        sectionElement.scrollIntoView({ behavior: 'smooth' })
    }

  return (
    <>
        {!link && title ? 
            <Button onClickEvent={handleScrollClick} title={title}/>
            :
            <a
                onClick={handleScrollClick}
                className={className}
            >{title}</a> 
        }
    </>
    
  )
}

export default ScrollLink