import React from "react";
import Image from "next/image";
import { Lato } from "next/font/google";
import Button from "../components/Button";

const lato = Lato({ subsets: ["latin"], weight: "900" });

export const metadata = {
  title: "Hanazakari Products - Explore Our Sparkling Sake Collection",
  description:
    "Delve into the exquisite offerings of Hanazakari's sparkling sake collection. From the ethereal Hanami to the vibrant Matsuri, each blend is a celebration of Japanese flavors. Explore our products, pricing, and testimonials.",
  keywords:
    "Hanazakari, Products, Sparkling Sake, Hanami, Matsuri, Japanese Green Tea, Sakura Blossoms, Ajisai Flowers, Testimonials, Pricing",
  author: "Hanazakari",
};

const Products = () => {
  return (
    <>
      <div className="bg-products w-full justify-center flex flex-col items-center px-5 py-16 md:p-24 md:flex-row md:items-start">
        <div className="flex flex-col md:mr-10 gap-5">
          <h2 className={`uppercase text-2xl md:text-4xl ${lato.className}`}>
            Discover Our Exquisite Offerings
          </h2>
          <p className="text-base md:text-lg">
            Welcome to the heart of Hanazakari, where we present an array of
            meticulously crafted products that encapsulate the essence of
            Japanese flavors. Each creation is a testament to our commitment to
            excellence and innovation. Explore our offerings and embark on a
            sensory journey like no other.
          </p>
          <div className="flex flex-col md:flex-row gap-5 border-b-2 border-black py-5">
            <div className="flex flex-col gap-5 md:mr-16">
              <h3 className={`text-xl md:text-2xl ${lato.className}`}>
                Hanami - A Symphony of Sakura and Green Tea:
              </h3>
              <p className="text-base md:text-lg">
                <p className="italic">Ethereal and Enchanting</p>
                Hanami is a natural blend of premium Japanese green tea, sourced
                from the lush fields of Uji, and delicate sakura blossoms from
                the iconic cherry orchards of Kyoto. This exquisite combination
                undergoes a meticulous fermentation process, resulting in a
                sparkling sake with a gentle <b>5% ABV</b>. Hanami&apos;s light
                floral notes and subtle green tea undertones make it the perfect
                companion for a leisurely afternoon or a delightful pairing with
                sushi and light salads.
              </p>
              <p className="font-bold">Tasting Notes:</p>
              <ul>
                <li>Gentle floral aroma</li>
                <li>Subtle green tea undertones</li>
              </ul>

              <p className="font-bold">Pairing Suggestions:</p>
              <ul>
                <li>Sushi</li>
                <li>Light salads</li>
              </ul>

              <p className="font-bold">Pricing:</p>
              <ul>
                <li>¥490 per can (tax not included)</li>
                <li>¥2,890 for a 6-cans bundle (tax not included)</li>
              </ul>
            </div>
            <Image
              src="/hanami.webp"
              alt="Hanami"
              width={350}
              height={350}
              className="w-full md:w-fit object-contain"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-5 md:mr-16">
              <h3 className={`text-xl md:text-2xl ${lato.className}`}>
                Matsuri - Ajisai Elegance with Green Tea Harmony:
              </h3>
              <p className="text-base md:text-lg">
                <p className="italic">Vibrant and Celebratory</p>
                Matsuri is a harmonious fusion of Japanese green tea, carefully
                selected from the foothills of Mount Fuji, and the enchanting
                Hydrangea (ajisai) flowers. This vibrant blend undergoes a
                unique fermentation process, culminating in a lively sparkling
                sake with an exhilarating <b>8% ABV</b>. Matsuri&apos;s bold
                floral aromas and crisp green tea essence make it an ideal
                choice for celebratory events or paired with grilled dishes and
                appetizers.
              </p>
              <p className="font-bold">Tasting Notes:</p>
              <ul>
                <li>Rich honey-vanilla floral aroma</li>
                <li>Crisp green tea essence</li>
              </ul>

              <p className="font-bold">Pairing Suggestions:</p>
              <ul>
                <li>Grilled dishes</li>
                <li>Appetizers</li>
              </ul>

              <p className="font-bold">Pricing:</p>
              <ul>
                <li>¥590 per can (tax not included)</li>
                <li>¥3,490 for a 6-cans bundle (tax not included)</li>
              </ul>
            </div>
            <Image
              src="/matsuri.webp"
              alt="Matsuri"
              width={350}
              height={350}
              className="w-full md:w-fit object-contain"
            />
          </div>
          <Button href="/stockists">
            Explore Availability at Our Stockists
          </Button>
        </div>
      </div>
      <div className="bg-discover w-full flex flex-col gap-12 items-center md:px-24 p-11">
        <h3 className={`text-xl md:text-2xl ${lato.className}`}>Reviews</h3>
        <div className="flex flex-wrap items-center justify-center gap-8 text-center italic">
          <p>
            &ldquo;Hanazakari&apos;s Hanami is a true masterpiece. The sakura
            and green tea infusion takes me on a journey through the cherry
            blossoms with every sip. It&apos;s not just a drink; it&apos;s an
            experience!&rdquo; - Ayato K., Osaka
          </p>
          <p>
            &ldquo;Matsuri by Hanazakari is my top choice for celebrations. The
            combination of ajisai flowers and green tea creates a symphony of
            flavors that elevates any special moment. Truly a delightful and
            unique beverage.&rdquo; - Tsukasa T., Nagoya
          </p>
          <p>
            &ldquo;I&apos;ve never been a sake enthusiast until I tried
            Hanazakari. The quality and craftsmanship in both Hanami and Matsuri
            are unparalleled. The 6-cans bundle is a perfect way to share these
            exquisite flavors with friends.&rdquo; - Mei R., Fukuoka
          </p>
        </div>
        <p className={`text-xl text-center ${lato.className}`}>
          Join our satisfied customers in raising a glass to tradition,
          innovation, and the extraordinary flavors of Hanazakari. Our sparkling
          sake creations are available through select stockists across Japan.
        </p>
      </div>
    </>
  );
};

export default Products;
