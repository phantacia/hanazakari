import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const Made = () => {
  return (
    <div className="bg-made w-full min-h-screen flex flex-col items-center px-5 py-16 md:p-24 md:flex-row md:items-start">
      <Image
        src="/made.webp"
        alt="Excited Girls in a party"
        width={500}
        height={500}
        className="w-full mb-8 md:mr-10"
      />
      <div className="flex flex-col">
        <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
          HOW IT&apos;S MADE
        </h2>
        <p className="text-base md:text-lg">
          Drawing from ancient traditions in the heart of Nada, Hanazakari
          introduces a contemporary take on sake-making. During the late autumn
          to winter brewing season, echoing the rhythm of the four seasons, our
          process harmonizes age-old methods with modern techniques, embracing
          the essence of time. Employing multiple parallel fermentation, our
          approach, influenced by factors such as water hardness, rice variety,
          milling rate, koji, and yeast, infuses our sake with a nuanced flavor
          profile. Delicately combining Japanese green tea sourced from Mount
          Fuji&apos;s foothills with enchanting Hydrangea flowers for Matsuri
          and delicate sakura blossoms from Kyoto&apos;s cherry orchards for
          Hanami, we craft our unique beverages. The winter brewing phase
          witnesses the meticulous fusion of these elements, ensuring a
          low-alcohol sparkling beverage that transcends expectations.
          <br />
          <br />
          Hanazakari&apos;s commitment to this intricate process results in
          libations that embody the heritage of sake-making, perfect for
          elevating your festivities.
        </p>
      </div>
    </div>
  );
};

export default Made;
