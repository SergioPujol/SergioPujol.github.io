import { usePathname } from "next/navigation"
import React, { useEffect, useState } from 'react'
import ScrollLink from "./ScrollLink"
import Button from "./Button"
import Link from "next/link"
import { BiMenuAltRight } from "react-icons/bi"
import { IoMdClose } from "react-icons/io"

interface MobileMenuAsideProps {
    isOpen: boolean
    onClose: any
    links: Array<{ name: string, path: string }>
}

const MobileMenuAside: React.FC<MobileMenuAsideProps> = ({ isOpen, onClose, links }) => {

    const pathname = usePathname();

    return (
        <aside className={`sm:hidden fixed inset-y-0 right-0 ${isOpen ? 'translate-x-0' : 'translate-x-full'} bg-bg-secondary w-3/4 max-w-[400px] z-20 px-10 transition-all duration-500`}>
            <div className="flex justify-end py-3 items-center hover:text-accent">
                <IoMdClose size={40} onClick={onClose}/>
            </div>
            <div className="flex flex-col gap-y-4">
                {links.map((item) => (
                    <ScrollLink
                        key={item.path}
                        to={item.path}
                        link={true}
                        title={item.name}
                        className={`${pathname == item.path ? 'text-accent' : ''} py-2 text-center hover:text-accent cursor-pointer`} />
                ))}
                <Button>
                    <Link href={'/CV.pdf'} target="_blank">
                        Resume
                    </Link>
                </Button>
            </div>
        </aside>
    );
}

const MenuLinks = () => {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        {name: 'Home', path: 'home'},
        {name: 'About', path: 'aboutme'},
        {name: 'Experience', path: 'work'},
        {name: 'Projects', path: 'projects'},
        {name: 'Contact', path: 'contact'}
    ];

    const handleOpenMenu = () => {
        setIsMenuOpen(true);
    }

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    }

    useEffect(() => {
        const main = document.querySelector('main');
        if(isMenuOpen) main?.classList.add('blur', 'pointer-events-none')
        else main?.classList.remove('blur', 'pointer-events-none')

        const handleResize = () => {
            if (window.innerWidth >= 640 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen])

    return (
        <>
            <div className="hidden sm:flex justify-center items-center text-sm gap-x-4 right">
                {links.map((item) => (
                    <ScrollLink
                        to={item.path}
                        key={item.path}
                        link={true}
                        title={item.name}
                        className={`${pathname == item.path ? 'text-accent' : ''} py-2 text-center hover:text-accent cursor-pointer`} />
                ))}
                <Button>
                    <Link href={'/CV.pdf'} target="_blank">
                        Resume
                    </Link>
                </Button>
            </div>
            <div className="flex sm:hidden justify-center items-center hover:text-accent">
                <BiMenuAltRight size={40} onClick={handleOpenMenu}/>
            </div>
            <MobileMenuAside isOpen={isMenuOpen} onClose={handleCloseMenu} links={links} />
        </>
    );
}

export default MenuLinks;
