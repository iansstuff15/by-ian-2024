import HeroSplash from "@/components/splash/hero-splash";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [showSplash, setShowSplash] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 4500);
  }, []);
  return <section className={"min-h-screen overflow-hidden"}>
    <HeroSplash display={showSplash} />

  </section>;
};

export default HeroSection;