import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Founders from "@/app/founders/page";

const lato = Lato({ subsets: ["latin"], weight: "900" });

export const metadata = {
  title: "About Us - Hanazakari",
  description:
    "Explore the convergence of tradition and innovation at Hanazakari, where every bubble tells a story and every sip is a celebration. Discover our rich history, meet the team, and explore the unique culture that defines us.",
  keywords:
    "Hanazakari, About Us, Company History, Our Team, Culture, Tradition, Innovation, Japanese Sake, Sparkling Sake, Green Tea, Sakura Blossoms",
  author: "Hanazakari",
};

const About = () => {
  return (
    <>
      <div className="bg-about w-full justify-center flex flex-col items-center px-5 py-16 md:p-24 md:flex-row md:items-start">
        <div className="flex flex-col md:mr-10 gap-5">
          <h2 className={`text-2xl md:text-4xl ${lato.className}`}>
            WELCOME TO HANAZAKARI
          </h2>
          <p className="text-base md:text-lg">
            At Hanazakari, we invite you to explore the convergence of tradition
            and innovation, where every bubble tells a story and every sip is a
            celebration. Discover the essence of our brand through our rich
            history, the talented individuals who make up our team, and the
            unique culture that defines us.
          </p>
          <h3 className={`text-xl md:text-2xl ${lato.className}`}>
            Company History
          </h3>
          <p className="text-base md:text-lg">
            Our journey began during an enchanting Hanami celebration in Kyoto,
            where artist Haruka Shiraishi and culinary expert Shizuku Asahina
            discovered the extraordinary fusion of sakura blossoms, green tea,
            and sake. This serendipitous encounter led to the birth of
            Hanazakari, the first-ever sparkling sake infused with the soul of
            Japanese flavors. From that moment, our brand embarked on a
            transformative odyssey, mastering the sacred art of sake-making in
            Nada and evolving into a symbol of artistic exploration and culinary
            finesse.
          </p>
          <h3 className={`text-xl md:text-2xl ${lato.className}`}>
            Our Culture
          </h3>
          <p className="text-base md:text-lg">
            Hanazakari&apos;s culture is a tapestry woven with threads of
            innovation, collaboration, and a deep reverence for nature&apos;s
            beauty. We embrace the fleeting moments, echoing the transience of
            cherry blossoms, and channel them into our creations. Our commitment
            to quality and sustainability ensures that each ingredient carries
            the essence of its origin. We invite you to explore a workplace
            where every idea is a stroke on our canvas, and every member is an
            integral note in our culinary symphony. Join us on this journey, as
            we raise a glass to tradition, innovation, and the indomitable
            spirit of friendship. Welcome to Hanazakari, where every sip is a
            celebration.
          </p>
        </div>

        <Image
          src="/viewing.webp"
          alt="Two women enjoying tea in a teahouse"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
      <div className="bg-founders w-full flex flex-col gap-5 items-start px-5 py-16 md:p-24">
        <h3 className={`text-xl md:text-2xl ${lato.className}`}>
          The People behind Hanazakari
        </h3>
        <p className="text-base md:text-lg">
          Meet the creative minds behind Hanazakari, the individuals who infuse
          their passion into every bubble.
        </p>
      </div>
      <Founders />
    </>
  );
};

export default About;
