"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import SameChain from "../assets/tabler_arrows-split-2.svg";
import DifferentChain from "../assets/tabler_arrows-shuffle.svg";
import Grid from "../assets/grid-02.svg";
import Refresh from "../assets/refresh-ccw-05.svg";
import Settings from "../assets/settings-03.svg";

import Aptos from "../assets/aptos.svg";
import Arbitrum from "../assets/arbitrum (1).svg";
import Avalanche from "../assets/avalanche (1).svg";
import Bsc from "../assets/bsc_2.svg";
import Etherum from "../assets/ethereum.svg";
import Polygon from "../assets/polygon1.svg";
import Solana from "../assets/solana.svg";
import Sui from "../assets/sui-sui-logo (1).svg";
import Zksync from "../assets/zksync.svg";

import AmountInput from "./AmountInput";

import Switch from "../assets/switch-vertical-02.svg";
import KanaButton from "./KanaButton";

const coins = [
  { name: "Aptos", image: Aptos },
  { name: "Arbitrum", image: Arbitrum },
  { name: "Avalanche", image: Avalanche },
  { name: "BSC", image: Bsc },
  { name: "Ethereum", image: Etherum },
  { name: "Polygon", image: Polygon },
  { name: "Solana", image: Solana },
  { name: "Sui", image: Sui },
  { name: "Zksync", image: Zksync },
];

const Swap = () => {
  const [activeCoin, setActiveCoin] = useState<string>("Aptos");
  const [isCrossChain, setIsCrossChain] = useState<boolean>(false);

  return (
    <div className="w-[536px] mx-auto my-10 bg-[#000D15] rounded-xl flex flex-col gap-4 shadow-md">
      {/* Chain Changing Buttons */}
      <div className="flex flex-col">
        {/* toogle  */}
        <div className="flex flex-row justify-between items-center z-10 mb-[-1px] ">
          <div className="flex flex-row text-sm text-tp font-bold mt-[-1px]">
            <div
              className={`flex justify-between items-center flex-row px-6 py-4 border-x border-t border-primary-300 w-fit rounded-t-2xl gap-2 cursor-pointer ${
                !isCrossChain ? "bg-card text-th border-b border-b-card" : "bg-tabs border-b border-primary-300"
              }`}
              onClick={() => setIsCrossChain(false)}
            >
              <Image src={SameChain} alt="Same Chain" />
              <span>Same Chain</span>
            </div>
            <div
              className={`flex justify-between items-center flex-row px-6 py-4 border-x border-t border-primary-300 w-fit rounded-t-2xl gap-2 cursor-pointer ${
                isCrossChain ? "bg-card text-th  border-b border-b-card" : "bg-tabs border-b border-primary-300"
              }`}
              onClick={() => setIsCrossChain(true)}
            >
              <Image src={DifferentChain} alt="Cross-chain" />
              <span>Cross-chain</span>
            </div>
          </div>
          <motion.div
            className="p-2 cursor-pointer rounded-lg"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9, rotate: -5 }}
          >
            <Image src={Grid} alt="Grid" />
          </motion.div>
        </div>

        <div className="bg-card border border-primary-300 rounded-b-2xl rounded-tr-2xl flex flex-col gap-4 p-6">
          {/* Header */}
          <div className="flex flex-row justify-between items-center">
            <span className="text-sm font-bold text-th">
              {isCrossChain ? "Cross-chain Swap" : "Same-chain Swap"}
            </span>
            <div className="flex flex-row gap-2">
              <motion.div
                className="p-2 cursor-pointer rounded-lg"
                whileHover={{ rotate: 180 }}
                whileTap={{ rotate: 360, transition: { duration: 0.6 } }}
              >
                <Image src={Refresh} alt="Refresh" />
              </motion.div>
              <motion.div
                className="p-2 cursor-pointer rounded-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image src={Settings} alt="Settings" />
              </motion.div>
            </div>
          </div>

          {/* Coins Row */}
          <div className="flex flex-row gap-2 overflow-x-auto">
            {coins.map((coin, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg cursor-pointer transition-all duration-300 border ${
                  activeCoin === coin.name
                    ? "border-primary-300 bg-white/[6%]"
                    : "border-transparent"
                } hover:bg-white/6`}
                onClick={() => setActiveCoin(coin.name)}
              >
                <Image src={coin.image} alt={coin.name} />
              </div>
            ))}
          </div>

          <div className="relative flex flex-col items-center gap-4">
            <AmountInput text={isCrossChain ? "Send from" : "Pay from"} />

            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 border border-primary-300 rounded-lg cursor-pointer flex justify-center items-center w-fit bg-card z-10 bg-[#000D15]"
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ rotate: 180, transition: { duration: 0.4 } }}
            >
              <Image src={Switch} alt="Switch" />
            </motion.div>

            <AmountInput text={isCrossChain ? "Receive to" : "Receive to"} />
          </div>

          {/* Swap Button */}
          <KanaButton  href="https://app.kanalabs.io/swap" />
        </div>
      </div>

    </div>
  );
};

export default Swap;
