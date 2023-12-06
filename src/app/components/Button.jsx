import React from "react";
import Link from "next/link";

const Button = ({ children, href }) => {
  return (
    <Link
      href={href}
      passHref
      className="w-fit px-8 py-3 my-8 bg-black rounded-md text-white"
    >
      {children}
    </Link>
  );
};

export default Button;
