"use client";

interface Filters {
  weight: [number, number];
  price: [number, number];
  available: boolean;
}

export function ProductFilters({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}) {
  return (
    <div className="sticky top-12 space-y-6">
      <h3 className="font-semibold text-lg lg:text-2xl">Filters</h3>
      {/* Weight Range Dropdown */}
      <div>
        <h3 className="font-semibold mb-2">Weight Range</h3>
        <select
          value={filters.weight[0]}
          onChange={(e) =>
            setFilters({
              ...filters,
              weight: [Number(e.target.value), filters.weight[1]],
            })
          }
        >
          <option value={0}>0g</option>
          <option value={500}>500g</option>
          <option value={1000}>1000g</option>
        </select>
      </div>

      {/* Price Range Dropdown */}
      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <select
          value={filters.price[0]}
          onChange={(e) =>
            setFilters({
              ...filters,
              price: [Number(e.target.value), filters.price[1]],
            })
          }
        >
          <option value={0}>₹0</option>
          <option value={500}>₹500</option>
          <option value={1000}>₹1000</option>
        </select>
      </div>

      {/* In Stock Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="available"
          checked={filters.available}
          onChange={(e) =>
            setFilters({ ...filters, available: e.target.checked })
          }
        />
        <label htmlFor="available">In Stock Only</label>
      </div>
    </div>
  );
}
