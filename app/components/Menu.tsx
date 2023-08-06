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
        h-24
        fixed
        z-10
        ${isOnHomeSection ? 'bg-transparent' : 'bg-bg-primary shadow-[0_10px_30px_-10px_rgba(36,43,53,0.6)]'}
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