import HeroSplash from "@/components/splash/hero-splash";
import React, { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

const HeroSection = () => {
  const [showSplash, setShowSplash] = useState(true);
  const { scrollYProgress } = useScroll();
  useEffect(() => {
    console.log("scrollYProgress");
    console.log(scrollYProgress);
    setTimeout(() => {
      setShowSplash(false);
    }, 4500);
  }, []);
  return <motion.section
    className={"z-0 sticky min-h-screen overflow-hidden bg-[url('')]"}>
    <HeroSplash display={showSplash} />

  </motion.section>;
};

export default HeroSection;