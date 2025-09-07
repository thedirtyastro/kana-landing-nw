"use client";
import { Rocket } from "lucide-react";
import React, { useEffect, useState } from "react";
import Logo from "../assets/kana_logo.svg";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down -> hide navbar
        setShow(false);
      } else {
        // scrolling up -> show navbar
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={show ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-6 left-0 right-0 flex justify-between items-center py-4 px-6 text-white 
      bg-gradient-to-br from-white/20 to-white/5 border border-white/20 
      w-[95%] mx-auto rounded-lg shadow-lg z-50 backdrop-blur-lg"
    >
      {/* Logo (clickable to home) */}
      <Link href="/">
        <Image src={Logo} alt="Logo" className="cursor-pointer" />
      </Link>

      {/* Nav items */}
      <div className="flex items-center gap-8 text-lg font-medium">
        <Link href="https://medium.com/kana-labs" className="hover:text-primary-300 transition">
          Blog
        </Link>
        <Link href="https://docs.kanalabs.io/" className="hover:text-primary-300 transition">
          Docs
        </Link>

        {/* Button */}
        <Link href="https://www.kana.trade/">
          <button className="group bg-primary-300 rounded border border-primary-500 py-2 px-4 flex items-center gap-2 cursor-pointer font-black uppercase transition text-[#000D15] hover:bg-primary-200">
            <span>Launch App</span>
            <Rocket height={18} width={18} />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
