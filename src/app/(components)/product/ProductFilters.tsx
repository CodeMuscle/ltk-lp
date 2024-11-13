// src/app/(components)/product/ProductFilters.tsx
"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function ProductFilters() {
  const [filters, setFilters] = useState({
    weight: [0, 1000],
    price: [0, 1000],
    available: true,
  });

  return (
    <div className="sticky top-24 space-y-6">
      <div>
        <h3 className="font-semibold mb-2">Weight Range</h3>
        <Slider
          value={filters.weight}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, weight: value }))
          }
          min={0}
          max={1000}
          step={10}
        />
        <div className="text-sm text-gray-500 mt-1">
          {filters.weight[0]}g - {filters.weight[1]}g
        </div>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Price Range</h3>
        <Slider
          value={filters.price}
          onValueChange={(value) =>
            setFilters((prev) => ({ ...prev, price: value }))
          }
          min={0}
          max={1000}
          step={10}
        />
        <div className="text-sm text-gray-500 mt-1">
          ₹{filters.price[0]} - ₹{filters.price[1]}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="available"
          checked={filters.available}
          onCheckedChange={(checked) =>
            setFilters((prev) => ({ ...prev, available: checked as boolean }))
          }
        />
        <Label htmlFor="available">In Stock Only</Label>
      </div>
    </div>
  );
}
