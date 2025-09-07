"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Background from "../assets/Background.svg";
import { motion, useInView, useAnimation, Variants } from "framer-motion";

// Component for counting numbers with animation
interface CounterProps extends React.HTMLAttributes<HTMLSpanElement> {
  from?: number;
  to: number;
  duration?: number;
  decimals?: number;
}

const Counter = ({
  from = 0,
  to,
  duration = 2,
  decimals = 0,
  ...props
}: CounterProps) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let start = from;
      const increment = (to - from) / (duration * 60); // 60 frames per second

      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          // Handle decimals properly
          if (decimals > 0) {
            setCount(parseFloat(start.toFixed(decimals)));
          } else {
            setCount(Math.floor(start));
          }
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [from, to, duration, isInView, decimals]);

  return (
    <span ref={nodeRef} {...props}>
      {count.toLocaleString()}
    </span>
  );
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants with proper TypeScript typing
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="mt-32 flex flex-col md:flex-row px-4 md:px-10"
    >
      <div className="flex flex-col mt-12 md:mt-24 gap-3 text-[80px] font-black w-full md:w-[60%]">
        <motion.span
          variants={itemVariants}
          className="text-primary-300 leading-4xl"
        >
          Decentralised
          <br />
          trading suite
        </motion.span>
        <motion.span
          variants={itemVariants}
          className="font-normal text-[80px] leading-4xl text-white/90"
        >
          with CEX-like performance
        </motion.span>
        <motion.div
          variants={itemVariants}
          className="mt-8 flex flex-row gap-14 font-poppins font-medium"
        >
          <div className="flex flex-col">
            <span className="text-xl">
              <Counter from={0} to={10} /> Million
            </span>
            <span className="text-sm text-white/80">Transactions</span>
          </div>

          {/* Separator */}
          <div className="w-px bg-white/20"></div>

          <div className="flex flex-col">
            <span className="text-xl">
              <Counter from={0} to={10} /> Billion+
            </span>
            <span className="text-sm text-white/80">
              in overall trading volume
            </span>
          </div>

          {/* Separator */}
          <div className="w-px bg-white/20"></div>

          <div className="flex flex-col">
            <span className="text-xl">
              <Counter from={0} to={1.1} decimals={1} /> Million+
            </span>
            <span className="text-sm text-white/80">Active Wallets</span>
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={imageVariants}
        className="w-full md:w-[40%] flex items-end justify-end mt-10 md:mt-0"
      >
        <Image src={Background} alt="Hero Image" />
      </motion.div>
    </motion.div>
  );
};

export default Hero;
