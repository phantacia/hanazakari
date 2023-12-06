import React from "react";
import Image from "next/image";

const Testimonials = () => {
  return (
    <div className="bg-testimonials w-full min-h-screen flex flex-col md:flex-row items-center gap-8 px-5 py-16 md:p-24">
      <div className="flex flex-col items-center gap-5">
        <p className="text-md text-center italic">
          &ldquo;Hanazakari&apos;s sparkling sake is a sensory masterpiece. The
          fusion of sakura and green tea in Hanami creates an ethereal
          experience, captivating the essence of Japanese traditions. A must-try
          for those seeking sophistication in every sip.&rdquo;
        </p>
        <Image
          src="/vogue-3.webp"
          alt="Vogue Japan logo"
          width={150}
          height={150}
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <p className="text-md text-center italic">
          &ldquo;In the realm of sparkling sake, Hanazakari stands out as a
          symbol of innovation. Matsuri&apos;s ajisai and green tea infusion is
          a celebration of flavors, reflecting the vibrancy of Japanese culture.
          A true delight for the discerning palate.&rdquo;
        </p>
        <Image
          src="/thejapantimes.webp"
          alt="The Japan Times logo"
          width={250}
          height={150}
        />
      </div>

      <div className="flex flex-col items-center gap-5">
        <p className="text-md text-center italic">
          &ldquo;Hanazakari has redefined the sparkling sake landscape, offering
          a unique blend that marries tradition with contemporary elegance. The
          combination of delicate sakura and premium green tea in Hanami is an
          ode to Japan&apos;s rich culinary heritage.&rdquo;
        </p>
        <Image
          src="/tweekender.webp"
          alt="Tokyo Weekender logo"
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};

export default Testimonials;
