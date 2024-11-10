import Link from "next/link";
import React from "react";
import { navLinks } from "@/app/(data)/navbar";
import Image from "next/image";

import searchIcon from "../../../public/assets/search.svg";
import profileIcon from "../../../public/assets/profile.svg";
import cartIcon from "../../../public/assets/cart.svg";
import logo from "../../../public/assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-white w-full py-8 flex flex-row lg:justify-end justify-center items-center">
      <div className="flex max-w-[90%] w-full lg:max-w-7xl gap-x-16 items-center justify-between">
        {/* Logo */}
        <div className="logo hidden lg:block">
          <Image src={logo} alt="ltk-logo" width={100} height={100} />
        </div>

        {/* Navlinks */}
        <div className="hidden lg:flex flex-row items-center lg:justify-center justify-between lg:gap-x-16 gap-x-6 text-black">
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

        {/* Mobile View */}
        <div className="logo lg:hidden">
          <Image src={logo} alt="ltk-logo" width={80} height={80} />
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
