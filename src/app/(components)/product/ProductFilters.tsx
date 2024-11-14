"use client";

import { useState } from "react";

interface Filters {
  weight: [number, number];
  price: [number, number];
  available: boolean;
}

export function ProductFilters({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}) {
  // Manage expanded state for each dropdown
  const [weightDropdownOpen, setWeightDropdownOpen] = useState(false);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);

  // Define improved options for weight and price based on product data
  const weightOptions = [
    [0, 25],
    [25, 50],
    [50, 100],
    [100, 125],
  ];
  const priceOptions = [
    [0, 25],
    [25, 50],
    [50, 100],
    [100, 125],
    [125, 130],
  ];

  // Toggle dropdown state and rotation
  const toggleDropdown = (type: "weight" | "price") => {
    if (type === "weight") {
      setWeightDropdownOpen(!weightDropdownOpen);
      setPriceDropdownOpen(false);
    } else {
      setPriceDropdownOpen(!priceDropdownOpen);
      setWeightDropdownOpen(false);
    }
  };

  // Clear filter for weight
  const clearWeightFilter = () => {
    setFilters({
      ...filters,
      weight: [0, 1000], // Reset weight filter to default
    });
  };

  // Clear filter for price
  const clearPriceFilter = () => {
    setFilters({
      ...filters,
      price: [0, 1000], // Reset price filter to default
    });
  };

  return (
    <div className="sticky top-12 space-y-6 pb-6">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <h2 className="font-semibold text-lg lg:text-2xl">Filters</h2>
      <div className="space-y-6 w-full">
        {/* Weight Range Dropdown */}
        <div className="relative">
          <button
            className="w-full border-b border-gray-300 py-2 px-3 flex justify-between items-center uppercase bg-white text-gray-700 cursor-pointer"
            onClick={() => toggleDropdown("weight")}
          >
            {filters.weight[0] === 0 && filters.weight[1] === 1000
              ? "WEIGHT"
              : `${filters.weight[0]}g - ${filters.weight[1]}g`}
            {/* Clear Button (X) for weight filter */}
            {/* <button
              onClick={clearWeightFilter}
              className="transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${
                weightDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {weightDropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow-lg p-2">
              {weightOptions.map(([minWeight, maxWeight], index) => (
                <button
                  key={index}
                  className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setFilters({
                      ...filters,
                      weight: [minWeight, maxWeight],
                    });
                    setWeightDropdownOpen(false);
                  }}
                >
                  {minWeight}g - {maxWeight}g
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Price Range Dropdown */}
        <div className="relative">
          <button
            className="w-full border-b border-gray-300 py-2 px-3 flex justify-between items-center uppercase bg-white text-gray-700 cursor-pointer"
            onClick={() => toggleDropdown("price")}
          >
            {filters.price[0] === 0 && filters.price[1] === 1000
              ? "PRICE"
              : `₹${filters.price[0]} - ₹${filters.price[1]}`}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`ml-2 w-4 h-4 transform transition-transform duration-300 ${
                priceDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {priceDropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow-lg p-2">
              {priceOptions.map(([minPrice, maxPrice], index) => (
                <button
                  key={index}
                  className="block w-full text-left px-2 py-1 text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setFilters({
                      ...filters,
                      price: [minPrice, maxPrice],
                    });
                    setPriceDropdownOpen(false);
                  }}
                >
                  ₹{minPrice} - ₹{maxPrice}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* In Stock Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="available"
          checked={filters.available}
          onChange={(e) =>
            setFilters({ ...filters, available: e.target.checked })
          }
        />
        <label htmlFor="available">In Stock</label>
      </div>
    </div>
  );
}
