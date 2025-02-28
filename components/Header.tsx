import Link from "next/link"


import MobileNav from "./MobileNav"
import Nav from "./Nav"
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header className="py-2xl xl:py-3xl">
      <div className="mx-auto px-md flex justify-between items-center container">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Martin<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-2xl">
          <Nav />
          <Link href="/contact">
            <Button>Contact me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header
