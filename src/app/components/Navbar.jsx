"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AnimatePresence, easeIn, easeInOut, motion } from "framer-motion";
import { Lato } from "next/font/google";
import { VscMenu, VscChromeClose } from "react-icons/vsc";

const lato = Lato({ subsets: ["latin"], weight: "900" });

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "HOME" },
    { href: "/#discover", label: "DISCOVER" },
    { href: "/#made", label: "HOW IT'S MADE" },
    { href: "/#about", label: "OUR STORY" },
    { href: "/products", label: "PRODUCTS" },
    { href: "/stockists", label: "STOCKISTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  const menuAni = {
    initial: { scaleX: 0 },
    animate: {
      scaleX: 1,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    exit: {
      scaleX: 0,
      transition: {
        delay: 0.5,
        duration: 0.2,
        ease: easeInOut,
      },
    },
  };

  const containerAni = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  return (
    <>
      <header>
        <nav className="container fixed flex justify-end py-8 px-5 md:py-4 md:px-0">
          <div
            className={`${lato.className} md:flex hidden gap-8 text-md text-black`}
          >
            {links.map((link, index) => {
              return (
                <NavLink key={index} label={link.label} href={link.href} />
              );
            })}
          </div>
          <div
            className="text-3xl md:hidden cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            <VscMenu />
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuAni}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed origin-left w-full h-screen bg-nav text-black flex justify-between py-8 px-5"
            >
              <motion.div
                variants={containerAni}
                initial="initial"
                animate="open"
                exit="initial"
                className={`${lato.className} flex flex-col h-full justify-start p-5 text-xl`}
              >
                {links.map((link, index) => {
                  return (
                    <div
                      className="overflow-hidden"
                      key={index}
                      onClick={() => setOpen(!open)}
                    >
                      <NavLink
                        key={index}
                        label={link.label}
                        href={link.href}
                      />
                    </div>
                  );
                })}
              </motion.div>
              <div
                className="text-3xl md:hidden cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                <VscChromeClose />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Navbar;

const navAni = {
  initial: {
    y: "30vh",
    transition: {
      duration: 0.1,
      ease: easeInOut,
    },
  },
  open: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: easeInOut,
    },
  },
};

const NavLink = ({ label, href }) => {
  return (
    <motion.div variants={navAni}>
      <Link className="hover:text-link-hover" href={href}>
        {label}
      </Link>
    </motion.div>
  );
};
