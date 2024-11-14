"use client";

import { products } from "@/app/(data)/products";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { useState, useEffect } from "react";
import { SortDropdown } from "./SortDropdown";

export function ProductsList() {
  const [filters, setFilters] = useState({
    weight: [0, 1000] as [number, number], // specify as tuple
    price: [0, 1000] as [number, number],  // specify as tuple
    available: true,
  });
  const [sortOrder, setSortOrder] = useState("price");
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const newFilteredProducts = products
      .filter((product) => {
        const isWithinWeightRange = product.weight >= filters.weight[0] && product.weight <= filters.weight[1];
        const isWithinPriceRange = product.discount_price >= filters.price[0] && product.discount_price <= filters.price[1];
        const isAvailable = filters.available ? product.available : true;
        return isWithinWeightRange && isWithinPriceRange && isAvailable;
      })
      .sort((a, b) => {
        if (sortOrder === "price") return a.discount_price - b.discount_price;
        if (sortOrder === "weight") return a.weight - b.weight;
        return 0;
      });

    setFilteredProducts(newFilteredProducts);
  }, [filters, sortOrder]);

  if (!filteredProducts.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="flex gap-8">
      <div className="w-64 shrink-0">
        <ProductFilters filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex flex-col gap-4 items-center justify-end w-full">
        <SortDropdown sortOrder={sortOrder} setSortOrder={setSortOrder} />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
