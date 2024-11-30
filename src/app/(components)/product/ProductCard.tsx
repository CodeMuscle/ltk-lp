// src/app/(components)/product/ProductCard.tsx
"use client";

import { Product } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="">
      <div className="border rounded-lg p-4 shadow-md flex flex-col items-start justify-between h-full">
        <div className="w-full">
          {product.image_url ? (
            <Image
              src={product.image_url}
              alt={product.name}
              width={200}
              height={200}
              className="object-cover mx-auto lg:min-h-[20rem] min-h-[10rem]"
            />
          ) : (
            <div className="w-200 h-200 bg-gray-200 flex items-center justify-center">
              {/* Placeholder for the missing image */}
              <span>No image available</span>
            </div>
          )}
          <h3 className="text-lg font-semibold mt-4">{product.name}</h3>
          {/* <div className="text-gray-500 text-sm">
            Quantity: {product.quantity}
          </div>
          <div className="text-gray-600 mt-2">Weight: {product.weight}g</div> */}
          <div className="flex flex-row gap-2 items-center justify-start">
            <p className="text-black font-normal text-lg">
              ₹{product.discount_price}
            </p>
            {product.discount_price < product.mrp && (
              <p className="text-gray-400 line-through text-lg">
                ₹{product.mrp}
              </p>
            )}
          </div>
          <div className="rounded-full px-4 py-1 bg-black text-white w-fit my-2">
            <p className="text-base font-medium">{product.weight}g</p>
          </div>
        </div>
        {product.available ? (
          <div className="flex flex-col gap-3 items-center justify-center w-full">
            {product.available && (
              <button
                className={`mt-4 py-2 px-4 w-full rounded-full ${
                  product.available
                    ? "border border-[#84160A] text-white bg-[#84160A]"
                    : "bg-gray-400 text-gray-200"
                }`}
                disabled={!product.available}
              >
                {product.available ? "Bulk Order" : "Out of Stock"}
              </button>
            )}
            <button
              className={`py-2 px-4 w-full rounded-full ${
                product.available
                  ? "border border-black text-black bg-white hover:bg-gray-100"
                  : "bg-gray-400 text-gray-200"
              }`}
              disabled={!product.available}
            >
              {product.available ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ) : (
          <button
            className={`py-2 px-4 w-full rounded-full bg-gray-400 text-gray-200`}
            disabled
          >
            {"Out of Stock"}
          </button>
        )}
      </div>
    </Link>
  );
}
