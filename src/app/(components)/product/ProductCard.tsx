// src/app/(components)/product/ProductCard.tsx
"use client";

import { Product } from "@/types/types";
import Image from "next/image";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <Image
        src={product.image_url}
        alt={product.name}
        width={200}
        height={200}
        className="object-cover mx-auto"
      />
      <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
      <div className="text-gray-500 text-sm">Quantity: {product.quantity}</div>
      <div className="text-gray-600 mt-2">Weight: {product.weight}g</div>
      <div className="text-gray-900 mt-2 font-bold">
        ₹{product.discount_price}
      </div>
      {product.discount_price < product.mrp && (
        <div className="text-gray-500 line-through">₹{product.mrp}</div>
      )}
      <button
        className={`mt-4 py-2 px-4 rounded ${
          product.available
            ? "bg-blue-500 text-white"
            : "bg-gray-400 text-gray-200"
        }`}
        disabled={!product.available}
      >
        {product.available ? "Add to Cart" : "Out of Stock"}
      </button>
    </div>
  );
}
