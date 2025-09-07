import Image from "next/image";
import React from "react";
import SwapIcon from "../assets/swap.svg";
import Swap from "./Swap";

const SwapSection = () => {
  return (
    <div className="relative justify-center items-center flex flex-col my-20">
      <div className="flex flex-col gap-8 items-center">
        <div className="text-5xl font-black text-primary-300">
          Effortless Same & Cross-Chain Swapping
        </div>
        <div className="max-w-[60%] text-center text-white/70 font-medium leading-relaxed">
          Swap tokens instantly within the same chain or across multiple
          blockchains with ease. Powered by deep liquidity and smart routing,
          Kana Swap delivers the best prices, faster settlements, and a seamless
          experience for every user.
        </div>
      </div>

      {/* Full-width image */}
      <div className="relative w-full m-[-80px] ">
        <Image
          src={SwapIcon}
          alt="swap"
          className="w-full h-auto"
          priority
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center">
          <Swap />
        </div>
      </div>
    </div>
  );
};

export default SwapSection;
