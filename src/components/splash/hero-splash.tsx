"use client";
import { animate, AnimatePresence, motion } from "framer-motion";
import { MutableRefObject, useEffect, useRef, useState } from "react";

const HeroSplash = ({ display }: SplashProps) => {
  const counterRef: MutableRefObject<any> = useRef();
  const [showCounter, setShowCounter] = useState(true);
  useEffect(() => {
    const node = counterRef.current;

    const controls = animate(0, [40, 50, 60, 65, 80, 100], {
      duration: 5.5,
      ease: "easeIn",
      onUpdate(value) {
        if (node) {
          node.textContent = value.toFixed(0) + "%";
        }
        if (value == 100) {
          setShowCounter(false);
        }
      },
    });


    return () => controls.stop();
  }, []);
  return <div className={"z-0"}><AnimatePresence mode={"wait"} initial={false}>
    {
      display ?
        <motion.div
          key={"hero-splash"}
          exit={{
            y: "-100vh", transition: {
              ease: "easeOut",
              duration: 0.45,
            },
          }}
          className="fixed flex-col h-screen w-screen bg-blue-700 text-white font-bold text-[70px] px-24">
        </motion.div> : null
    }
  </AnimatePresence>
    <motion.div
      layout={true}
      initial={{ y: "60vh", color: "#fff" }}
      animate={{
        y: ["60vh", "50vh", "40vh", "35vh", "20vh", "0vh"],
        color: ["#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#fff", "#1f4cd1", "#03154a", "#000"],
        className: "mix-blend-difference",
      }}
      transition={{ duration: 5.5, ease: "easeIn" }}
      className={"z-10 my-[80%] lg:my-[15%] fixed flex-col h-screen w-screen bg-transparent text-white font-bold text-[30px] sm:text-[50px] lg:text-[70px] px-4 lg:px-24 "}>
      <AnimatePresence>
        {showCounter ? <motion.div initial={{ opacity: 1 }} exit={{
          opacity: 0, y: -400, transition: {
            ease: "easeOut",
            duration: 1.15,
          },
        }}>
          <motion.h1 ref={counterRef}>0%
          </motion.h1>
          <motion.div className="w-full bg-gray-200 rounded-full h-1 lg:h-2.5 dark:bg-gray-700">
            <motion.div

              initial={{ width: 0 }}
              animate={{ width: ["10%", "40%", "70%", "100%"] }}
              transition={{ duration: 5.5, ease: "easeIn" }}
              className="bg-blue-300 h-1 lg:h-2.5 " style={{ width: "50%" }}></motion.div>
          </motion.div>
        </motion.div> : null}
      </AnimatePresence>


      <motion.h1>Continuous Growth,</motion.h1>
      <motion.h1>Journey to</motion.h1>
      <motion.h1>Crafting Perfection</motion.h1>

    </motion.div>
  </div>;
};
export default HeroSplash;
