"use client";

export function SortDropdown({
  productCount,
  sortOrder,
  setSortOrder,
}: {
  productCount: number;
  sortOrder: string;
  setSortOrder: (order: string) => void;
}) {
  return (
    <div className="w-full border border-gray-200 px-4 py-8 flex flex-row gap-3 items-center justify-end">
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="font-normal text-base text-gray-500">Sort by:</p>
        <div className="rounded-full px-4 py-1 border border-gray-200">
          <select
            className="bg-transparent lg:min-w-40"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="price">Price</option>
            <option value="weight">Weight</option>
          </select>
        </div>
      </div>
      <p className="font-normal text-base text-gray-500">
        {`${productCount} ${productCount === 1 ? "Product" : "Products"}`}
      </p>
    </div>
  );
}
