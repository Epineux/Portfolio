'use client'

import { LINKS } from "@/constants/links";
import clsx from "clsx";
import { Menu } from 'lucide-react';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const links = LINKS;
const MobileNav = () => {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="h-8 w-8 text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary border-none">
        <div className="mt-24 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl font-semibold">
              Martin<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col flex-1 gap-2xl justify-center items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={clsx("hover:text-accent capitalize font-medium transition-all", pathName === link.path && "text-accent border-b-2 border-accent")}>
              {link.name}
            </Link>
            )
          )}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
