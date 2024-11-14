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

  return (
    <div className="sticky top-12 space-y-6 pb-6">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <h2 className="font-semibold text-lg lg:text-2xl">Filters</h2>
      <div className="space-y-6 w-full">
        {/* Weight Range Dropdown */}
        <div className="relative">
          <button
            className="w-full border-b border-gray-300 py-2 px-3 text-left uppercase bg-white text-gray-700 cursor-pointer"
            onClick={() => setWeightDropdownOpen(!weightDropdownOpen)}
          >
            Weight
            {/* {filters.weight[0]}g - {filters.weight[1]}g */}
          </button>
          {weightDropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow-lg p-2">
              <select
                value={filters.weight[0]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    weight: [Number(e.target.value), filters.weight[1]],
                  })
                }
                className="w-full bg-transparent p-2 cursor-pointer"
              >
                <option value={0}>0g</option>
                <option value={500}>500g</option>
                <option value={1000}>1000g</option>
              </select>
            </div>
          )}
        </div>

        {/* Price Range Dropdown */}
        <div className="relative">
          <button
            className="w-full border-b border-gray-300 py-2 px-3 text-left uppercase bg-white text-gray-700 cursor-pointer"
            onClick={() => setPriceDropdownOpen(!priceDropdownOpen)}
          >
            Price
            {/* ₹{filters.price[0]} - ₹{filters.price[1]} */}
          </button>
          {priceDropdownOpen && (
            <div className="absolute z-10 bg-white border border-gray-200 w-full mt-1 rounded shadow-lg p-2">
              <select
                value={filters.price[0]}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    price: [Number(e.target.value), filters.price[1]],
                  })
                }
                className="w-full bg-transparent p-2 cursor-pointer"
              >
                <option value={0}>₹0</option>
                <option value={500}>₹500</option>
                <option value={1000}>₹1000</option>
              </select>
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
