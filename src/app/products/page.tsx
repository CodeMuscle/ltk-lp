// src/app/products.tsx
import { ProductsList } from "@/app/(components)/product/ProductsList";
import { ProductFilters } from "@/app/(components)/product/ProductFilters";

export default function ProductsPage() {
  return (
    <div className="mx-auto py-8 lg:max-w-7xl max-w-[90%]">
      <h1 className="text-2xl font-bold mb-6">All Products</h1>
      <div className="flex-1">
        <ProductsList />
      </div>
    </div>
  );
}
