'use client';
import MenuLinks from "./MenuLinks";
import Image from 'next/image';

const Menu = () => {

  return (
    <header className="
        w-full
        text-t-primary
        bg-bg-primary
        flex
        px-10
        h-24
        fixed
        z-10
    ">
        <div className="flex items-center self-center gap-x-3 grow">
            <Image 
                height={35}
                width={35}
                alt="pfp"
                src={'/slogo.png'}
            />
        </div>
        <MenuLinks />
    </header>
  )
}

export default Menu