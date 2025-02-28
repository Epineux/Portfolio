import { FileDown } from 'lucide-react'
import { Button } from '../ui/button'
import Socials from './Socials'

const HomeText = () => {
  return (
    <div className="text-center lg:text-left order-2 lg:order-none">
        <span className="text-xl">Frontend Engineer</span>
        <h1 className="h1 mb-xl">
          Hello I&apos;m <br />{' '}
          <span className="text-accent">
            Martin L<span className="text-secondary">.</span>
          </span>
        </h1>
        <p className="max-w-[500px] mb-2xl text-white/80">
          I focus on creating intuitive, high-performance interfaces that
          deliver seamless experiences across all devices and platforms.
        </p>
        {/* CV and Socials */}
        <div className="flex flex-col lg:flex-row items-center gap-2xl">
          <Button className="w-fit">
            <span>Download CV</span>
            <FileDown className="ml-xs" />
          </Button>
          <div className="mb-2xl lg:mb-0">
            <Socials />
          </div>
        </div>
    </div>
  )
}

export default HomeText
