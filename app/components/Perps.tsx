import Image from "next/image";
import React from "react";
import PerpsIcon from "../assets/perps.png";
import PerpsBg from "../assets/perps_bg.png";
import Link from "next/link";

const Perps = () => {
  return (
    <div className="flex flex-col gap-12 items-center pb-48 relative z-10">
      <div className="flex flex-col gap-8 items-center z-10">
        <div className="text-5xl font-black text-primary-300">
          Where DeFi Meets Pro-Grade Perpetuals
        </div>
        <div className="max-w-[60%] text-center text-white/70 font-medium leading-relaxed">
          Experience the future of trading with Kana Perps — the first
          CLOB-based perpetual futures DEX on Aptos. Enjoy seamless, gas-free,
          and secure trading with deep liquidity, minimal fees, and a Web2-like
          user experience. No seed phrases, no counterparty risk — just pure
          decentralized trading.
        </div>
      </div>
      {/* Buttons */}
      <div className="flex flex-row gap-10 z-10">

<Link href="https://www.kana.trade/?market=BTC-PERP">
  <button className="bg-primary-300 rounded border border-primary-500 py-2 px-6 flex items-center gap-2 cursor-pointer font-black uppercase transition text-[#000D15] hover:bg-primary-200 group hover:gap-4">
    <span>Start Trading Now</span>
  </button>
</Link>

<Link href="https://testnet.kana.trade/?market=BTC-PERP">
  <button className="rounded border border-primary-300 py-2 px-6 flex items-center gap-2 cursor-pointer font-black uppercase transition text-primary-300 hover:text-primary-200 group hover:gap-4">
    <span>Try on Testnet</span>
  </button>
</Link>

      </div>

      {/* Images */}
      <div className="m-[-130px] relative w-full z-0">
        <Image src={PerpsBg} alt="Perps" className="w-full rounded-xl" />
        <Image
          src={PerpsIcon}
          alt="Perps"
          className="absolute top-56 rounded-xl left-1/2 -translate-x-1/2 w-[80%] shadow-xl"
        />
      </div>
    </div>
  );
};

export default Perps;
