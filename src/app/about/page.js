import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Button from "../components/Button";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const About = () => {
  return (
    <div className="bg-about w-full justify-center flex flex-col items-center px-5 py-16 md:p-24 md:flex-row md:items-start">
      <div className="flex flex-col mb-8 md:mr-10">
        <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
          OUR STORY
        </h2>
        <p className="text-base md:text-lg">
          Meet Haruka and Shizuku, the dynamic duo behind Hanazakari. Friends
          since time immemorial, their journey into the world of sparkling sake
          began on a breezy spring day during their annual Hanami. A chance gust
          of wind turned a serene picnic into a flurry of sakura petals, leading
          to a serendipitous discovery - the captivating fusion of sakura and
          sake.
          <br />
          <br />A whimsical experiment led to an unexpected harmony, as
          sakura&apos;s fragrance danced with the lightness of green tea. A
          shared laughter, a toast with a newfound elixir, and the idea of
          Hanazakari was born. Determined to perfect their creation, Haruka and
          Shizuku ventured to Nada (Hyogo prefecture), learning the sacred art
          of sake-making from craftsmen who have perfected the craft for
          generations.
          <br />
          <br />
          Six months later, Hanazakari emerged, a bubbly masterpiece that
          captures the essence of Japan&apos;s seasons. Now, the joyous
          culmination of their friendship and passion is yours to savor.
        </p>
        <Button href="/about/more">More about us</Button>
      </div>

      <Image
        src="/viewing.webp"
        alt="Two women enjoying tea in a teahouse"
        width={500}
        height={500}
        className="w-full"
      />
    </div>
  );
};

export default About;
