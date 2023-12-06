import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const Hanami = () => {
  return (
    <div className="bg-hanami w-full justify-center flex flex-col items-center px-5 py-16 md:p-24 md:flex-row md:items-start">
      <div className="flex flex-col mb-8 md:mr-64">
        <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
          HANAMI
        </h2>
        <p className="text-base md:text-lg">
          <i>Hanami</i> is a harmonious blend of premium Japanese green tea
          sourced from the lush fields of Uji, delicate sakura (桜; さくら)
          blossoms from the iconic cherry orchards of Kyoto, and the finest sake
          rice.
          <br />
          <br />
          This exquisite combination undergoes a meticulous fermentation
          process, resulting in a sparkling sake with a gentle <b>5% ABV</b>.
          Hanami&apos;s light floral notes and subtle green tea undertones make
          it the perfect companion for a leisurely afternoon or a delightful
          pairing with sushi and light salads.
        </p>
      </div>

      <Image
        src="/hanami.webp"
        alt="Hanami Sparkling Sake"
        width={200}
        height={200}
        className="w-full md:w-1/2 lg:w-1/3"
      />
    </div>
  );
};

export default Hanami;
