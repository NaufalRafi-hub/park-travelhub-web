
import Image from "next/image";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuContent,
    // NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    // NavigationMenuViewport,
  } from "../ui/navigation-menu"

export default function NavNew() {
  return (
    <div className="bg-grayie p-4 w-full fixed border-none z-20 top-0 left-0">
        <div className="flex justify-around align-center items-center">
            <Link href="/">
                <Image src="/park-logo.png" className="my-auto" alt="park logo" width="100" height="100"/>
            </Link>
            <ul className="flex flex-col md:flex-row gap-7 h-[25px]">
                <li className="text-white cursor-pointer hover:border-[#8FFF05] hover:border-b-2 hover:">
                    <Link href="/">HOME</Link>
                </li>
                <li className="text-white cursor-pointer hover:border-[#8FFF05] hover:border-b-2 hover:">
                    <Link href="/">ABOUT US</Link>
                </li>
                <li className="text-white cursor-pointer hover:border-[#8FFF05] hover:border-b-2 hover:">
                    <Link href="/">TOUR & TRAVEL</Link>
                </li>
                <li className="text-white cursor-pointer hover:border-[#8FFF05] hover:border-b-2 hover:">
                    <Link href="/">BLOG</Link>
                </li>
            </ul>
            <button className="bg-greenie p-4 text-center font-bold italic hover:bg-grayie hover:text-white">
                CONTACT US
            </button>
        </div>
    </div>
  )
}
