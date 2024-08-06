'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import { links } from "./links"
import { useState, useEffect } from "react"



const Header = () => {
    const pathName = usePathname();
    const [color, setColor] = useState(false);

    const handlScroll = () => {
      if (window.scrollY > 100) {
        setColor(true)
      } else {
        setColor(false)
      }
    }
    useEffect(() => {
      window.addEventListener("scroll", handlScroll);
      return () => {
        window.removeEventListener("scroll", handlScroll);
      }
    },[])

  return (
    <div className={`h-16 z-10 fixed w-full flex justify-center items-center gap-2 transition-all duration-700 ${color ? "bg-green-400 bg-opacity-5" : "bg-[#465e674d] bg-opacity-100"} `}>
        {links.map((link) => (
            <li key={link.title} className={`bg-transparent transition-all duration-700 ${color ? "translate-x-[30rem]" : "translate-x-0"} `}>
                <Link  className={`bg-transparent text-white pb-1 px-2 ${pathName === link.href ? 'border rounded-sm ' : ''} `} href={link.href} >{link.title} </Link>
            </li>
        ))}
    </div>
  )
}

export default Header
