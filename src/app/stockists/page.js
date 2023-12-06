import React from "react";
import { Lato } from "next/font/google";
import Link from "next/link";

const lato = Lato({ subsets: ["latin"], weight: "900" });

export const metadata = {
  title: "Hanazakari Stockists - Find Our Sparkling Sake Near You",
  description:
    "Discover Hanazakari at your favorite sake shops and minimarkets throughout Japan. Explore our list of stockists categorized by prefecture/area and bring the celebration closer to you.",
  keywords:
    "Hanazakari, Stockists, Sake Shops, Minimarkets, Japan, Sparkling Sake, Find Hanazakari",
  author: "Hanazakari",
};

const Stockists = () => {
  return (
    <div className="bg-stockists w-full min-h-screen flex flex-col items-center gap-10 px-5 py-16 md:p-24 md:items-center">
      <div className="flex flex-col mb-8 text-center">
        <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
          STOCKISTS
        </h2>
        <p className="text-base md:text-lg">
          Hanazakari can be found at some of our favorite sake shops and
          minimarkets across Japan. Explore the list below to discover the
          nearest stores categorized by their respective prefectures or areas:
        </p>
      </div>
      <div
        className={`${lato.className} uppercase text-sm text-center flex flex-col items-center gap-10`}
      >
        <div className="flex flex-col md:flex-row gap-12">
          <ul>
            <li className="underline">TOKYO</li>
            <li>Nihon Sake House - Shibuya</li>
            <li>Harmony Sake Corner - Ginza</li>
            <li>Urban Spirits Marketplace - Roppongi</li>
          </ul>

          <ul>
            <li className="underline">OSAKA</li>
            <li>Sake Crafters Haven - Namba</li>
            <li>Epicurean Nihon - Umeda</li>
            <li>Osaka Sake Delights - Osaka Castle</li>
          </ul>

          <ul>
            <li className="underline">KYOTO</li>
            <li>Tranquil Sake Cellars - Gion District</li>
            <li>Nihon Brews Oasis - Fushimi Inari</li>
            <li>Serene Sake Boutique - Arashiyama</li>
          </ul>
        </div>
        <div className="flex flex-col md:flex-row gap-12">
          <ul>
            <li className="underline">HOKKAIDO</li>
            <li>Snowy Peaks Sake Haven - Sapporo</li>
            <li>Northern Nihon Liquor - Otaru</li>
            <li>Sake Sanctuary Hokkaido - Asahikawa</li>
          </ul>

          <ul>
            <li className="underline">FUKUOKA</li>
            <li>Sparkling Sake Oasis - Hakata</li>
            <li>Flavorful Sake Marketplace - Tenjin</li>
            <li>Harmony Sips & Bites - Fukuoka Tower</li>
          </ul>
        </div>
      </div>
      <p className="mt-10 text-center">
        Please note that availability may vary, and it&apos;s always a good idea
        to check with the stores directly for the latest offerings. If
        you&apos;re a store interested in carrying Hanazakari, feel free to
        <Link href="/contact" className="underline">
          contact us
        </Link>
        for wholesale inquiries.
      </p>
    </div>
  );
};

export default Stockists;
