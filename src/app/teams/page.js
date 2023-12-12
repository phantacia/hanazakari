"use client";

import React, { useEffect, useState } from "react";
import { Lato } from "next/font/google";
import Image from "next/image";

const lato = Lato({ subsets: ["latin"], weight: "900" });

async function getEmployees() {
  const res = await fetch("https://randomuser.me/api/?results=5", {
    next: {
      revalidate: 30,
    },
  });
  const data = await res.json();
  return data.results || [];
}

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

const jobTitles = [
  "Quality Assurance Specialist",
  "Marketing",
  "Finance",
  "Social Media Manager",
  "Logistics and Distribution Manager",
];

export default function Teams() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployees();
      setEmployees(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-team w-full flex flex-col items-center justify-center gap-10 px-5 py-16 md:p-24 md:items-center md:justify-center">
      <div className="text-center">
        <h2 className={`text-2xl md:text-4xl ${lato.className} mb-10`}>
          MEET OUR TEAM
        </h2>
        <p className="text-base md:text-lg">
          Meet the passionate individuals behind Hanazakari, dedicated to
          crafting and delivering the most delightful sparkling sake
          experiences.
        </p>
      </div>

      <div className="text-center">
        <h2 className={`text-xl md:text-2xl ${lato.className} mb-10`}>
          Co-Founders
        </h2>
        <div className="flex flex-col items-center justify-center md:flex-row gap-5">
          <div className="bg-white w-64 rounded-md overflow-hidden text-center flex flex-col justify-center items-center gap-5 p-5">
            <div className=" border-nav border-4 rounded-full overflow-hidden w-44 h-44">
              <Image
                src="/haruka.webp"
                width={100}
                height={100}
                alt="Haruka Shiraishi"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className={`${lato.className} uppercase`}>Haruka Shiraishi</p>
              <p className="italic">Co-Founder & Chief Creative Officer</p>
              <p className="font-bold">Connect with Haruka:</p>
              <p>Email: haruka@hanazakari.com</p>
              <p>Phone: +81 90 1234 5678</p>
            </div>
          </div>

          <div className="bg-white w-64 rounded-md overflow-hidden text-center flex flex-col justify-center items-center gap-5 p-5">
            <div className=" border-nav border-4 rounded-full overflow-hidden w-44 h-44">
              <Image
                src="/shizuku.webp"
                width={100}
                height={100}
                alt="Shizuku Asahina"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-2">
              <p className={`${lato.className} uppercase`}>Shizuku Asahina</p>
              <p className="italic">Co-Founder & Master Mixologist</p>
              <p className="font-bold">Connect with Shizuku:</p>
              <p>Email: shizuku@hanazakari.com</p>
              <p>Phone: +81 80 9876 5432</p>
            </div>
          </div>
        </div>

        <h2 className={`text-xl md:text-2xl ${lato.className} mt-10 mb-10`}>
          The Creative Minds
        </h2>

        <div className="flex flex-col justify-center md:flex-row gap-5">
          {employees.slice(0, 5).map((employee, index) => (
            <div
              key={index}
              className="bg-white w-64 rounded-md overflow-hidden text-center flex flex-col justify-between items-center gap-5 p-5"
            >
              <div className="border-nav border-4 rounded-full overflow-hidden w-44 h-44">
                <Image
                  src={employee.picture.medium}
                  width={100}
                  height={100}
                  alt={employee.name.first}
                  className="rounded-full w-44 h-44"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p
                  className={`${lato.className} uppercase`}
                >{`${employee.name.first} ${employee.name.last}`}</p>
                <p className="italic">{jobTitles.random()}</p>
                <p className="font-bold">Connect with {employee.name.first}:</p>
                <p>Email: {employee.email}</p>
                <p>Phone: {employee.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
