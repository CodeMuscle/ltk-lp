// src/app/products.tsx
import { ProductsList } from "@/app/(components)/product/ProductsList";
import { ProductFilters } from "@/app/(components)/product/ProductFilters";

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="flex gap-8">
        <div className="w-64 shrink-0">
          <ProductFilters />
        </div>
        <div className="flex-1">
          <ProductsList />
        </div>
      </div>
    </div>
  );
}
