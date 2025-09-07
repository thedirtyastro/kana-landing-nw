"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

import Logo from "../assets/kana_logo.svg";
import LogoB from "../assets/logo-f.png";

const Footer = () => {
  const links = {
    company: [{ name: "Blog", href: "https://medium.com/kana-labs" }],
    main: [
      { name: "Documentation", href: "https://docs.kanalabs.io/" },
      { name: "Perps", href: "https://app.kanalabs.io/" },
      { name: "Swap", href: "https://app.kanalabs.io/swap" },
    ],
    social: [
      { name: "Telegram", href: "https://t.me/kanalabsofficial" },
      { name: "X (Twitter)", href: "https://x.com/kanalabs" },
      { name: "Discord", href: "https://discord.com/invite/CrqCaQ45kZ" },
      { name: "Medium", href: "https://medium.com/kana-labs" },
    ],
  };

  return (
    <div className="py-12 px-20 flex flex-col gap-44 border-t border-white/10 bg-gradient-to-b from-[#000D15] to-primary-300/20">
      {/* Top section */}
      <div className="flex flex-row justify-between items-start">
        <div className="flex flex-col gap-2">
          <Image src={Logo} alt="Kana Logo" />
        </div>

        <div className="flex gap-20">
          {/* Company */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-white/50">Company</span>
            <div className="flex flex-col gap-2">
              {links.company.map((link, i) => (
                <FooterLink key={i} {...link} />
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-white/50">Links</span>
            <div className="flex flex-col gap-2">
              {links.main.map((link, i) => (
                <FooterLink key={i} {...link} />
              ))}
            </div>
          </div>

          {/* Social */}
          <div className="flex flex-col gap-4">
            <span className="font-bold text-white/50">Follow Us</span>
            <div className="flex flex-col gap-2">
              {links.social.map((link, i) => (
                <FooterLink key={i} {...link} external />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-row justify-between items-end">
        <Image src={LogoB} alt="Kana Small Logo" />
        <div className="flex flex-col gap-2 items-end">
          <span>Mail: hello@kanalabs.io</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const FooterLink = ({
  name,
  href,
  external = false,
}: {
  name: string;
  href: string;
  external?: boolean;
}) => {
  return (
    <Link
      href={href}
      target={external ? "_blank" : "_self"}
      rel={external ? "noopener noreferrer" : undefined}
      className="relative w-fit group text-white"
    >
      {/* Text */}
      <span className="transition-colors duration-300 group-hover:text-primary-300">
        {name}
      </span>

      {/* Animated underline */}
      <motion.span
        className="absolute left-0 -bottom-1 h-[1.5px] bg-primary-300"
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </Link>
  );
};
