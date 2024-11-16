// src/app/products.tsx
import { ProductsList } from "@/app/(components)/product/ProductsList";
import nextIcon from '../../../public/assets/next.svg';
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="mx-auto py-8 lg:max-w-7xl max-w-[90%] flex flex-col items-start gap-6">
      <div className="flex flex-row gap-4 justify-start">
        <Link href="/" className="font-normal text-base hover:underline">Home</Link>
        <Image src={nextIcon} alt="icon" width={8} height={8} />
        <p className="font-normal text-base">Products</p>
      </div>
      <div className="w-full">
        <ProductsList />
      </div>
    </div>
  );
}
