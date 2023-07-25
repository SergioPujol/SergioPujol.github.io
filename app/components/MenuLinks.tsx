import { Link, animateScroll } from 'react-scroll'
import { usePathname } from "next/navigation"
import React from 'react'

const MenuLinks = () => {

    const pathname = usePathname()

    const links = [
        {name: 'About me', path: 'aboutme'},
        {name: 'My Skills', path: 'skills'},
        {name: 'Work', path: 'work'},
        {name: 'Projects', path: 'projects'},
        {name: 'Contact', path: 'contact'}
    ]

    return (
        <div className="flex justify-center items-center text-sm gap-x-4 right">
            {links.map((item) => (
                <Link
                    key={item.name}
                    to={item.path}
                    activeClass='active'
                    spy={true}
                    smooth={true}
                    duration={500}
                    className={`${pathname == item.path ? 'text-accent' : ''} py-2 text-center hover:text-accent cursor-pointer`}>
                    {item.name}
                </Link>
            ))}
            <div>MENU LINKS?</div>
        </div>
    )
}

export default MenuLinks