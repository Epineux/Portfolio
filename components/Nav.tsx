'use client'

import { LINKS } from "@/constants/links"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"


const links = LINKS;
const Nav = () => {
  const pathName = usePathname()
  return (
    <nav className="flex items-center gap-2xl">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={clsx("hover:text-accent capitalize font-medium transition-all", pathName === link.path && "text-accent border-b-2 border-accent")}>
          {link.name}
        </Link>
      ))}
    </nav>
  )
}

export default Nav
