import React from "react";
import { Lato } from "next/font/google";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const Footer = () => {
  return (
    <div className="w-full min-h-[40vh] bg-footer flex flex-col justify-center p-5 md:px-20">
      <div
        className={`${lato.className} uppercase text-sm text-black text-center`}
      >
        <p>
          Illustration by{" "}
          <a href="https://loosedrawing.com/" className="hover:underline">
            Loose Drawing{" "}
          </a>
          ｜無料で商用利用可能なフリーイラスト
        </p>
        <p>
          Photo by{" "}
          <a
            href="https://unsplash.com/@maartendeckers?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="hover:underline"
          >
            Maarten Deckers
          </a>
          ,{" "}
          <a
            href="https://unsplash.com/@cceee?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="hover:underline"
          >
            Cody Chan
          </a>
          ,{" "}
          <a
            href="https://unsplash.com/@dropfastcollective?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="hover:underline"
          >
            Frederick Shaw
          </a>
          ,{" "}
          <a
            href="https://unsplash.com/@matt909?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="hover:underline"
          >
            Alex Shaw
          </a>{" "}
          and{" "}
          <a
            href="https://unsplash.com/@tronle_sg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
            className="hover:underline"
          >
            Tron Le
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/" className="hover:underline">
            Unsplash
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
