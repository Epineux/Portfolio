"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const Photo = () => {
  return (
    <div className="w-full h-full relative">
      {/* motion when page loads */}
      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.5, ease: "easeInOut" }}
          className="w-60 h-60 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px]"
      >
        <Image
          src='/images/Moebius_alice.png'
          alt="home-image"
          priority
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-full z-10"
        />
        </motion.div>
        {/* motion for effect */}
        <motion.svg
          className="absolute inset-0 overflow-visible"
          fill='transparent'
          viewBox="0 0 400 400"
          xmlns='http://www.w3.org/2000/svg'
          transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
         <motion.circle
          cx="200"
          cy="200"
          r="200"
          stroke="var(--accent-color)"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{strokeDasharray: "24 10 0 0"}}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
            transition: {
              duration: 20,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        />
        </motion.svg>
    </div>
  )
}

export default Photo
