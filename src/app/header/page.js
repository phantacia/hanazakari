import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-header bg-cover bg-center bg-no-repeat flex flex-col justify-center p-5 md:items-start md:px-20">
        <div className="max-w-2xl">
          <Image
            src="/logo.webp"
            alt="Hanazakari Logo"
            width={900}
            height={500}
            className="mx-auto"
            priority
          />
        </div>
        <p className="text-xl text-white text-center mt-4">
          Where every bubble tells a story and every sip is a celebration.
        </p>
      </div>
    </>
  );
};

export default Header;
