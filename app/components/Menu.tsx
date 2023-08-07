'use client';
import { useEffect, useState } from "react";
import MenuLinks from "./MenuLinks";
import Image from 'next/image';

const Menu = () => {

  const [isOnHomeSection, setIsOnHomeSection] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const firstSection = document.getElementById('home');
      if (firstSection) setIsOnHomeSection(window.scrollY < firstSection.clientHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`
        w-full
        text-t-primary
        flex
        px-10
        py-3
        sm:py-6
        fixed
        z-10
        ${isOnHomeSection ? 'bg-transparent' : 'bg-bg-primary shadow-md'}
    `}>
        <div className="flex items-center self-center gap-x-3 grow">
            <Image 
                height={35}
                width={35}
                alt="logo"
                src={'/slogo.png'}
            />
        </div>
        <MenuLinks />
    </header>
  )
}

export default Menu