'use client';
import Link from "next/link"
import MenuLinks from "./MenuLinks";
import MenuFooter from "./MenuFooter";
import Image from 'next/image';

const Menu = () => {

  return (
    <div className="
        w-full
        text-t-primary
        bg-bg-primary
        flex
        px-10
        h-20
        fixed
    ">
        <div className="flex items-center self-center gap-x-3 grow">
            <Image 
                height={25}
                width={25}
                alt="pfp"
                src={'/slogo.png'}
            />
            <h1 className="text-lg">Developer SPM</h1>
        </div>
        <MenuLinks />
    </div>
  )
}

export default Menu