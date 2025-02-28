import { shuffle } from "@/utils/shuffle";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// Define variants with an exit state
const anim = {
  initial: {
    opacity: 0,
  },
  open: (delay: number) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: delay * 0.008,
    },
  }),
  closed: (delay: number) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: delay * 0.008,
    },
  }),
};

const PixelAnimation = ({ transitionActive }: { transitionActive: boolean }) => {
  // Verify client side to avoid hydration issues
  const [isClient, setIsClient] = useState(false);
  const [columns, setColumns] = useState(40);

  useEffect(() => {
    setIsClient(true);

    const checkScreenSize = () => {
      setColumns(window.innerWidth < 960 ? 20 : 40);
    };

    checkScreenSize(); // Initial check
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const getBlocks = (columnIndex: number) => {
    if (!isClient) return [];

    const { innerWidth, innerHeight } = window;


    const blockSize = innerWidth / columns;
    const blockAmount = Math.ceil(innerHeight / blockSize);
    const delays = shuffle([...Array(blockAmount)].map((_, index) => index));

    return delays.map((randomDelay, index) => (
      <motion.div
        key={index}
        className={clsx('bg-accent', {
          'h-[2.5vw]': columns === 40,
          'h-[5vw]': columns === 20,
        })}
        variants={anim}
        initial="initial"
        animate={transitionActive ? 'open' : 'closed'}
        exit="closed"
        custom={randomDelay + columnIndex + index}
      />
    ));
  };

  return (
    <div className="fixed top-0 w-full h-full pointer-events-none">
      <div className="flex h-full">
        {[...Array(columns)].map((_, index) => (
          <div
            className={clsx("h-full", {
              "w-[2.5vw]": columns === 40,
              "w-[5vw]": columns === 20
            }
            )}
            key={index}
          >
            {/* Wrap each column’s blocks in AnimatePresence */}
            <AnimatePresence>
              {/* Only render blocks when transitionActive is true */}
              {transitionActive && getBlocks(index)}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PixelAnimation;
