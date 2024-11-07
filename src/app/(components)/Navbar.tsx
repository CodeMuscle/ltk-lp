import Link from "next/link";
import React from "react";
import { navIcons, navLinks } from "@/app/(data)/navbar";
import Image from "next/image";

import searchIcon from "../../../public/assets/search.svg";
import profileIcon from "../../../public/assets/profile.svg";
import cartIcon from "../../../public/assets/cart.svg";

const Navbar = () => {
  return (
    <nav className="bg-white w-full py-8 flex flex-row lg:justify-end justify-center items-center">
      <div className="flex max-w-7xl gap-x-16 items-center justify-between">
        {/* Navlinks */}
        <div className="flex flex-row items-center justify-center lg:gap-x-16 gap-x-6 text-black">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className="font-normal lg:text-lg text-base hover:underline hover:underline-offset-2"
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="lg:pl-16 flex flex-row items-center justify-center gap-x-8 text-black lg:mr-12 xl:mr-28">
          <button className="font-normal lg:text-lg text-base">
            <Image src={searchIcon} alt={`Search`} height={25} width={25} />
          </button>
          <button className="font-normal lg:text-lg text-base">
            <Image src={profileIcon} alt={`Profile`} height={20} width={20} />
          </button>
          <button className="font-normal lg:text-lg text-base px-3 py-2 bg-gray-200 rounded-full">
            <Link className="" href={`/cart`}>
              <Image src={cartIcon} alt={`Cart`} height={22} width={22} />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
