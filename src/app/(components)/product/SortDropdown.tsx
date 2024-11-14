"use client";

import { useEffect, useRef, useState } from "react";

export function SortDropdown({
  productCount,
  sortOrder,
  setSortOrder,
}: {
  productCount: number;
  sortOrder: string;
  setSortOrder: (order: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => setIsOpen(!isOpen);

  // Handle outside click to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle option selection
  const handleOptionSelect = (option: string) => {
    setSortOrder(option);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full border border-gray-200 px-4 py-8 flex flex-row gap-3 items-center justify-end">
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="font-normal text-base text-gray-500">Sort by:</p>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="cursor-pointer rounded-full px-4 py-1 border border-gray-200 bg-transparent lg:min-w-64 flex justify-between items-center"
          >
            <span className="text-gray-700 capitalize">
              {sortOrder.replace("_", " ")}
            </span>
            <svg
              className={`w-4 h-4 ml-2 transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          {isOpen && (
            <div
              className="absolute mt-2 rounded-md shadow-lg bg-white border border-gray-200 w-full z-10 transition-opacity duration-200 ease-out"
              style={{ opacity: isOpen ? 1 : 0 }}
            >
              <ul className="py-2">
                {[
                  { label: "Price (Low to High)", value: "price_asc" },
                  { label: "Price (High to Low)", value: "price_desc" },
                  { label: "Weight (Low to High)", value: "weight_asc" },
                  { label: "Weight (High to Low)", value: "weight_desc" },
                  { label: "Name (A-Z)", value: "name_asc" },
                  { label: "Name (Z-A)", value: "name_desc" },
                  { label: "Newest First", value: "newest" },
                ].map((option) => (
                  <li
                    key={option.value}
                    onClick={() => handleOptionSelect(option.value)}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  >
                    {option.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      <p className="font-normal text-base text-gray-500">
        {`${productCount} ${productCount === 1 ? "Product" : "Products"}`}
      </p>
    </div>
  );
}
