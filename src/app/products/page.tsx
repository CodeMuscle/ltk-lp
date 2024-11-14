// src/app/products.tsx
import { ProductsList } from "@/app/(components)/product/ProductsList";

export default function ProductsPage() {
  return (
    <div className="mx-auto py-8 lg:max-w-7xl max-w-[90%]">
      <div className="flex-1">
        <ProductsList />
      </div>
    </div>
  );
}
