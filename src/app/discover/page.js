import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const Discover = () => {
  return (
    <div className="bg-discover w-full flex flex-col items-center justify-center px-5 py-16 md:p-24 md:flex-row md:items-start">
      <div className="flex flex-col mb-8 md:mr-16">
        <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
          FROM VISION TO CREATION
        </h2>
        <p className="text-base md:text-lg">
          At Hanazakari, tradition intertwines seamlessly with innovation,
          creating a vibrant tapestry of Japanese flavors. Founded by artist
          Haruka Shiraishi and culinary expert Shizuku Asahina, our brand is a
          celebration of the indomitable spirit of friendship and a testament to
          the harmonious blend of artistry and culinary finesse.
          <br />
          <br />
          Inspired by Kyoto&apos;s cherry blossoms, our journey began during a
          Hanami celebration, culminating in the creation of the first-ever
          sparkling sake infused with Japanese green tea and delicate flowers.
          <br />
          <br />
          Our culture is rooted in a deep appreciation for the ephemeral beauty
          of nature and the transformative power of artistic exploration. We
          embrace a commitment to quality and sustainability, ensuring that
          every ingredient tells a story of its origin. Hanazakari is more than
          a beverage; it&apos;s a celebration where every bubble has a tale to
          tell, and every sip is an ode to tradition and innovation.
          <br />
          <br />
          Currently available at select stockists across Japan, we invite you to
          join us in raising a glass to the unique culture of Hanazakari.
        </p>
      </div>

      <Image
        src="/about.webp"
        alt="People having a banquet"
        width={500}
        height={500}
        className="w-full md:w-1/2"
      />
    </div>
  );
};

export default Discover;
