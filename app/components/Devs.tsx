import Image from "next/image";
import React from "react";
import DevsBg from "../assets/devs.png";
import Link from "next/link";

const Devs = () => {
  return (
    <div className="relative w-full  ">
      <Image src={DevsBg} alt="swap" className="w-full h-auto" priority />
      <div className="absolute top-48 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
        <div className="flex flex-col gap-16 items-center">
          <div className="text-5xl font-black text-primary-300">
            For the Developers
          </div>
          <div className="max-w-[70%] text-center text-4xl font-black">
            Explore Kana Build for cutting-edge blockchain integration
          </div>
          <Link href="https://www.kanalabs.build/">
            <button className="bg-[#000D15] rounded border border-primary-500 py-2 px-6 flex items-center gap-2 cursor-pointer font-black uppercase transition text-white hover:gap-4">
              <span>Learn More</span>
              <span className="text-xl">&#8594;</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Devs;
