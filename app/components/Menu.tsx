'use client';
import Link from "next/link"
import MenuLinks from "./MenuLinks";
import MenuFooter from "./MenuFooter";
import Image from 'next/image';

const Menu = () => {

  return (
    <div className="
        h-full
        bg-bg-main
        w-32
        text-t-primary
        border-r-[0.5px]
        border-t-secondary
        flex
        flex-col
    ">
        <div className="flex h-24 items-center self-center">
            <Image 
                height={45}
                width={45}
                alt="pfp"
                src={'/slogo.png'}
            />
        </div>
        <MenuLinks />
        <MenuFooter />
    </div>
  )
}

export default Menu