import { usePathname } from "next/navigation"
import React from 'react'
import ScrollLink from "./ScrollLink"
import Button from "./Button"
import Link from "next/link"

const MenuLinks = () => {

    const pathname = usePathname()

    const links = [
        {name: 'Home', path: 'home'},
        {name: 'About', path: 'aboutme'},
        {name: 'Work', path: 'work'},
        {name: 'Projects', path: 'projects'},
        {name: 'Contact', path: 'contact'}
    ]

    return (
        <div className="flex justify-center items-center text-sm gap-x-4 right">
            {links.map((item) => (
                <ScrollLink
                    to={item.path}
                    key={item.path}
                    link={true}
                    title={item.name}
                    className={`${pathname == item.path ? 'text-accent' : ''} py-2 text-center hover:text-accent cursor-pointer`} />
            ))}
            <Button>
                <Link href={'/cv.pdf'} target="_blank">
                    Resume
                </Link>
            </Button>
        </div>
    )
}

export default MenuLinks