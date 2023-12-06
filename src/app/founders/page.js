import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Button from "../components/Button";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const Founders = () => {
  return (
    <div className="bg-founders w-full min-h-screen flex flex-col gap-5 items-center px-5 py-16 md:p-24 md:items-start">
      <div className="flex flex-col md:flex-row border-b-2 border-black mb-3 overflow-hidden">
        <Image
          src="/haruka.webp"
          alt="Haruka Shiraishi, co-founder of Hanazakari"
          width={500}
          height={500}
          className="w-full md:w-1/4 mb-8 md:mr-10"
        />
        <div className="flex flex-col">
          <h3 className={`text-2xl md:text-xl ${lato.className} mb-10`}>
            HARUKA SHIRAISHI
          </h3>
          <p className="text-base md:text-lg mb-5">
            The visionary force behind Hanazakari, is a luminary in the world of
            Japanese contemporary art. Born and raised in Kyoto, Haruka&apos;s
            early years were steeped in the rich cultural tapestry of her
            surroundings. Drawing inspiration from the iconic cherry blossoms
            that adorned her hometown every spring, she developed a deep
            appreciation for the ephemeral beauty of nature. Haruka pursued her
            passion for visual arts, earning acclaim for her avant-garde
            creations that seamlessly melded tradition with modernity. Several
            of her works, a testament to her innovative approach, have found a
            permanent place in prestigious art galleries across Japan.
            Haruka&apos;s keen eye for detail and her unwavering commitment to
            pushing artistic boundaries are mirrored in every bubble of
            Hanazakari, as she continues to redefine the artistry of flavor.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row overflow-hidden">
        <Image
          src="/shizuku.webp"
          alt="Shizuku Asahina, co-founder of Hanazakari"
          width={500}
          height={500}
          className="w-full md:w-1/4 mb-8 md:mr-10"
        />
        <div className="flex flex-col">
          <h3 className={`text-2xl md:text-xl ${lato.className} mb-10`}>
            SHIZUKU ASAHINA
          </h3>
          <p className="text-base md:text-lg">
            The culinary virtuoso and co-founder of Hanazakari. Hailing from a
            family with a rich culinary heritage, Shizuku&apos;s love affair
            with food began in her grandmother&apos;s kitchen, where she was
            introduced to the time-honored traditions of Japanese cuisine.
            Channeling her culinary prowess, Shizuku pursued formal training,
            earning accolades in culinary arts and securing a mixologist
            certification. With an unwavering dedication to mastering the
            alchemy of flavors, Shizuku became renowned for her innovative
            culinary creations that harmoniously blend tradition and modern
            gastronomy. Her expertise as a mixologist adds an extra layer of
            sophistication to Hanazakari, as she orchestrates the delicate dance
            between sakura, ajisai, green tea, and the effervescence of sake.
            Shizuku&apos;s culinary journey has become an integral part of the
            Hanazakari story, transforming each bottle into a culinary
            masterpiece that tantalizes the senses and elevates the art of
            celebration.
          </p>
          <Button href="/team">Meet the rest of Our Team</Button>
        </div>
      </div>
    </div>
  );
};

export default Founders;
