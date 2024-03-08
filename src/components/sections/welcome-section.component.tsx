import React, { MutableRefObject, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const WelcomeSection = () => {
  const [showSplash, setShowSplash] = useState(true);
  const container: MutableRefObject<any> = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const motionValue = useTransform(scrollYProgress, [0, 1], [0, -250]);

  return <motion.section style={{ y: motionValue }}
                         className={"z-10 bg-slate-800 h-screen overflow-hidden sticky top-0 flex flex-col place-content-center"}>

    <p ref={container} className={"px-20 text-white text-center text-6xl"}>Welcome to my digital sanctuary! Join
      me on this
      immersive journey
      where each line
      of code is
      a brushstroke,
      shaping the canvas of the
      digital frontier. {"Let\'s"} transcend boundaries, break molds, and create a symphony of innovation together.</p>
  </motion.section>;
};

export default WelcomeSection;