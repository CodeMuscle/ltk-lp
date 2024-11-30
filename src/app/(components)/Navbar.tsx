"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { navLinks } from "@/app/(data)/navbar";
import Image from "next/image";
import { products } from "@/app/(data)/products"; // Importing products data

import searchIcon from "../../../public/assets/search.svg";
import profileIcon from "../../../public/assets/profile.svg";
import cartIcon from "../../../public/assets/cart.svg";
import logo from "../../../public/assets/logo.svg";

// Define the type for a product
type Product = {
  id: number;
  name: string;
  slug: string;
  description: string;
  reviews: {
    id: string;
    name: string;
    description: string;
  }[];
  image_url: string;
  discount_price: number;
  mrp: number;
  quantity: string[]; // Change this to match your products array
  weight: number;
  available: boolean;
  created_at: string;
}

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);

  // Handle outside click to close the search bar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
        setSearchTerm("");
        setFilteredProducts([]);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchRef]);

  // Filter products based on search term
  useEffect(() => {
    if (searchTerm) {
      setFilteredProducts(
        products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([]);
    }
  }, [searchTerm]);

  return (
    <nav className="bg-white w-full py-8 flex flex-row justify-center items-center relative">
      <div className="flex max-w-[90%] w-full lg:max-w-7xl gap-x-16 items-center justify-between">
        {/* Logo */}
        <Link href={`/`} className="logo hidden lg:block">
          <Image src={logo} alt="ltk-logo" width={100} height={100} />
        </Link>

        {/* Navlinks */}
        {!isSearchOpen && (
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
        )}

        {/* Mobile Logo */}
        {!isSearchOpen && (
          <Link href={`/`} className="logo lg:hidden">
            <Image src={logo} alt="ltk-logo" width={80} height={80} />
          </Link>
        )}

        {/* Right-side Icons */}
        <div className="lg:pl-16 flex flex-row items-center justify-center gap-x-8 text-black">
          {!isSearchOpen ? (
            <>
              <button
                className="font-normal lg:text-lg text-base"
                onClick={() => setIsSearchOpen(true)}
              >
                <Image src={searchIcon} alt={`Search`} height={25} width={25} />
              </button>
              <Link
                href={`/login`}
                className="font-normal lg:text-lg text-base"
              >
                <Image
                  src={profileIcon}
                  alt={`Profile`}
                  height={20}
                  width={20}
                />
              </Link>
              <Link
                href={`/cart`}
                className="font-normal lg:text-lg text-base px-3 py-2 bg-gray-200 rounded-full"
              >
                <Image src={cartIcon} alt={`Cart`} height={22} width={22} />
              </Link>
            </>
          ) : (
            // Search Input
            <div
              ref={searchRef}
              className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-white z-50"
            >
              <input
                type="text"
                className="w-[80%] lg:w-[60%] p-3 border rounded-md text-lg"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchTerm("");
                  setFilteredProducts([]);
                }}
                className="ml-2 text-gray-600"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Darkened Background */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
      )}

      {/* Search Dropdown */}
      {isSearchOpen && searchTerm && (
        <div className="absolute top-24 left-1/2 transform -translate-x-[28.2rem] w-[80%] lg:w-[60%] max-h-60 overflow-y-auto bg-white border rounded-lg shadow-lg z-50 p-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="flex items-center px-4 py-2 hover:bg-gray-100 transition-all"
              >
                <Image
                  src={product.image_url}
                  alt={product.name}
                  width={40}
                  height={40}
                  className="mr-3 rounded"
                />
                <div>
                  <p className="text-sm font-medium">{product.name}</p>
                  <p className="text-xs text-gray-500">
                    ${product.discount_price} (MRP: ${product.mrp})
                  </p>
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-gray-600">No results found.</p>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
