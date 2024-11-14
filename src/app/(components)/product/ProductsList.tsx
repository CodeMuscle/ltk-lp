"use client";

import { useState, useEffect } from "react";
import { products } from "@/app/(data)/products";
import { ProductCard } from "./ProductCard";
import { ProductFilters } from "./ProductFilters";
import { SortDropdown } from "./SortDropdown";
import { motion, AnimatePresence } from "framer-motion";

interface Filters {
  weight: [number, number];
  price: [number, number];
  available: boolean;
}

export function ProductsList() {
  const [filters, setFilters] = useState<Filters>({
    weight: [0, 1000],
    price: [0, 1000],
    available: true,
  });

  const [sortOrder, setSortOrder] = useState("price");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [isFiltering, setIsFiltering] = useState(false); // New state to manage filtering process

  useEffect(() => {
    setIsFiltering(true); // Set filtering state to true when filters are applied

    const newFilteredProducts = products
      .filter((product) => {
        const isWithinWeightRange =
          product.weight >= filters.weight[0] &&
          product.weight <= filters.weight[1];
        const isWithinPriceRange =
          product.discount_price >= filters.price[0] &&
          product.discount_price <= filters.price[1];
        const isAvailable = filters.available ? product.available : true;
        return isWithinWeightRange && isWithinPriceRange && isAvailable;
      })
      .sort((a, b) => {
        switch (sortOrder) {
          case "price_asc":
            return a.discount_price - b.discount_price;
          case "price_desc":
            return b.discount_price - a.discount_price;
          case "weight_asc":
            return a.weight - b.weight;
          case "weight_desc":
            return b.weight - a.weight;
          case "name_asc":
            return a.name.localeCompare(b.name);
          case "name_desc":
            return b.name.localeCompare(a.name);
          case "newest":
            return (
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
            );
          default:
            return 0;
        }
      });

    // Simulate a small delay before showing the products list
    setTimeout(() => {
      setFilteredProducts(newFilteredProducts);
      setIsFiltering(false); // Set filtering to false once filtering is done
    }, 300); // Adjust the delay as needed for smooth transition
  }, [filters, sortOrder]);


  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-64 shrink-0">
        <ProductFilters filters={filters} setFilters={setFilters} />
      </div>
      <div className="flex flex-col gap-4 items-center justify-start w-full">
        <SortDropdown
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          productCount={filteredProducts.length}
        />
        {filteredProducts.length > 1 ? (
          <motion.div
            className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: isFiltering ? 0 : 1 }} // Animate opacity based on filtering state
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence>
              {!isFiltering &&
                filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full">
            <p className="text-xl font-medium text-gray-500">
              No products available
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
