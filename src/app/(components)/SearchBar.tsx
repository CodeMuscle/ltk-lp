"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { products } from "@/app/(data)/products"; // Import your local products data

export const SearchBar = () => {
  const router = useRouter();
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on the search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle product click to navigate and reset search
  const handleProductClick = (productId: number) => {
    setIsExpanded(false);
    setSearchTerm("");
    router.push(`/products/${productId.toString()}`);
  };

  return (
    <div className={`relative ${isExpanded ? "w-full" : "w-auto"}`}>
      {!isExpanded ? (
        <button
          onClick={() => setIsExpanded(true)}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <Search className="w-5 h-5" />
        </button>
      ) : (
        <div className="flex items-center w-full gap-2">
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            autoFocus
          />
          <button
            onClick={() => {
              setIsExpanded(false);
              setSearchTerm("");
            }}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X className="w-5 h-5" />
          </button>

          {searchTerm && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-md border">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="w-full p-2 text-left hover:bg-gray-50"
                >
                  {product.name} - {product.quantity}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// With Supabase //

// "use client";

// import { useState } from "react";
// import { Search, X } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { useProducts } from "@/hooks/useProducts";
// import { useRouter } from "next/navigation";

// export const SearchBar = () => {
//   const router = useRouter();
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const { data: products } = useProducts();

//   const filteredProducts = products?.filter((product) =>
//     product.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleProductClick = (productId: number) => {
//     setIsExpanded(false);
//     setSearchTerm("");
//     router.push(`/products/${productId}`);
//   };

//   return (
//     <div className={`relative ${isExpanded ? "w-full" : "w-auto"}`}>
//       {!isExpanded ? (
//         <button
//           onClick={() => setIsExpanded(true)}
//           className="p-2 hover:bg-gray-100 rounded-full"
//         >
//           <Search className="w-5 h-5" />
//         </button>
//       ) : (
//         <div className="flex items-center w-full gap-2">
//           <Input
//             type="text"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="w-full"
//             autoFocus
//           />
//           <button
//             onClick={() => {
//               setIsExpanded(false);
//               setSearchTerm("");
//             }}
//             className="p-2 hover:bg-gray-100 rounded-full"
//           >
//             <X className="w-5 h-5" />
//           </button>

//           {searchTerm && (
//             <div className="absolute top-full left-0 w-full mt-2 bg-white shadow-lg rounded-md border">
//               {filteredProducts?.map((product) => (
//                 <button
//                   key={product.id}
//                   onClick={() => handleProductClick(product.id)}
//                   className="w-full p-2 text-left hover:bg-gray-50"
//                 >
//                   {product.name} - {product.quantity}
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };
