"use client";
import React from "react";
import Image from "next/image";

import P1 from '../assets/Ethosx-DPqKtty4.png';
import P2 from '../assets/Twallet-Bol6fuUB.png';
import P3 from '../assets/chinagri 1.png';
import P4 from '../assets/coinstore-CIMxfRgY.png';
import P5 from '../assets/econia 1.png';
import P6 from '../assets/eragon1-BtC2FOvQ.png';
import P7 from '../assets/petralayer-DMTotr3R.png';
import P8 from '../assets/tradeview-C4A4VaqI.png';
import P9 from '../assets/pontemnetwork-BjqjOfsg.png';

const Partners = () => {
  // Replace with your actual partner logos (inside public/images/)
  const partners = [
    P1, P2, P3, P4, P5, P6, P7, P8, P9
  ];

  return (
    <section className="w-full py-16 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-12 text-center text-primary-300">
        With partners like
      </h2>

      {/* Logos */}
      <div className="flex flex-col gap-10">
        {/* First row - 5 logos */}
        <div className="flex justify-center gap-12 flex-wrap">
          {partners.slice(0, 5).map((logo, index) => (
            <div key={index} className="w-28 h-16 relative">
              <Image
                src={logo}
                alt={`Partner ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second row - 4 logos */}
        <div className="flex justify-center gap-12 flex-wrap">
          {partners.slice(5, 9).map((logo, index) => (
            <div key={index} className="w-28 h-16 relative">
              <Image
                src={logo}
                alt={`Partner ${index + 6}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
