import Link from 'next/link';
import { usePathname } from "next/navigation"
import React from 'react'

const MenuLinks = () => {

    const pathname = usePathname()

    const links = [
        {name: 'About me', path: '/'},
        {name: 'My Skills', path: '/skills'},
        {name: 'Work', path: '/work'},
        {name: 'Projects', path: '/projects'},
        {name: 'Contact', path: '/contact'}
    ]

    return (
        <div className="grow flex flex-col justify-center text-sm">
            <ul className="">
                {links.map((item) => (
                    <li className={`${pathname == item.path ? 'text-accent' : ''} py-2 text-center hover:text-accent`}>
                        <Link href={item.path}>{item.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuLinks