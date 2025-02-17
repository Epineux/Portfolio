"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import PixelAnimation from "./PixelAnimation";

const PageTransition = ({children}: {children: React.ReactNode}) => {
  const [transitionActive, setTransitionActive] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setTransitionActive(true);
    const timer = setTimeout(() => {
      setTransitionActive(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathName]);

  return (
    <AnimatePresence>
      <div key={pathName}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0,
            transition: {
              duration: 0.7,
              delay: 1,
              ease: "easeInOut"
            }
           }}
           className="fixed top-0 left-0 w-full h-full bg-primary pointer-events-none" />
        <PixelAnimation transitionActive={transitionActive}/>
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
