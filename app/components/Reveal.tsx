"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, // animate every time
    threshold: 0.010,   // trigger when 2.5% visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // reset when out of view
    }
  }, [controls, inView]);

  const variants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.90 }, // slightly smaller when hidden
    visible: {
      opacity: 1,
      y: 0,
      scale: 1, // full size when visible
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
