import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const Matsuri = () => {
  return (
    <div className="bg-matsuri w-full min-h-screen flex flex-col items-center px-5 py-16 md:p-24 md:flex-row md:items-start">
      <Image
        src="/matsuri.webp"
        alt="Matsuri Sparkling Sake"
        width={350}
        height={350}
        className="w-full mb-8 md:mr-64"
      />
      <div className="flex flex-col">
        <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
          MATSURI
        </h2>
        <p className="text-base md:text-lg">
          <i>Matsuri</i> is a harmonious fusion of premium Japanese green tea,
          carefully selected from the foothills of Mount Fuji, enchanting
          Hydrangea (紫陽花; アジサイ; ajisai) flowers, and the finest sake
          rice.
          <br />
          <br />
          This vibrant blend undergoes a unique fermentation process,
          culminating in a lively sparkling sake with an exhilarating{" "}
          <b>8% ABV</b>. Matsuri&apos;s bold floral aromas and crisp green tea
          essence, complemented by the delicate flavors of rice, make it an
          ideal choice for celebratory events or paired with grilled dishes and
          appetizers.
        </p>
      </div>
    </div>
  );
};

export default Matsuri;
