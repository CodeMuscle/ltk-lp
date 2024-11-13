// src/app/(components)/product/ProductsList.tsx
"use client";

import { products } from "@/app/(data)/products"; // Import the data
import { ProductCard } from "./ProductCard";

export function ProductsList() {
  // No need to use hooks for fetching, directly use the products data
  if (!products.length) {
    return <div>No products available</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
