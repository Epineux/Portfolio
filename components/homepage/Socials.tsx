import Link from 'next/link';
import { FaGithub, FaLinkedin } from "react-icons/fa";
const Socials = () => {
  return (
    <div className="flex items-center gap-md">
      <Link href="https://github.com/Epineux">
        <FaGithub className="h-8 w-8 text-white hover:text-accent" />
      </Link>
      <Link href="https://www.linkedin.com/in/martin-l-590b58351/">
        <FaLinkedin className="h-9 w-9 text-white hover:text-accent" />
      </Link>
    </div>
  )
}

export default Socials
