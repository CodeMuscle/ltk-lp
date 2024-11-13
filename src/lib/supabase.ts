// lib/supabase.ts
import { createClient } from "@supabase/supabase-js";
import { Database } from "@/types/database";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_URL");
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY");
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

// types/database.ts
// export type Database = {
//   public: {
//     Tables: {
//       products: {
//         Row: {
//           id: number;
//           name: string;
//           image_url: string;
//           discount_price: number;
//           mrp: number;
//           quantity: string;
//           weight: number;
//           available: boolean;
//           created_at: string;
//         };
//         Insert: Omit<
//           Database["public"]["Tables"]["products"]["Row"],
//           "id" | "created_at"
//         >;
//         Update: Partial<Database["public"]["Tables"]["products"]["Insert"]>;
//       };
//       user_profiles: {
//         Row: {
//           id: string;
//           phone: string;
//           name: string | null;
//           created_at: string;
//         };
//         Insert: Omit<
//           Database["public"]["Tables"]["user_profiles"]["Row"],
//           "created_at"
//         >;
//         Update: Partial<
//           Database["public"]["Tables"]["user_profiles"]["Insert"]
//         >;
//       };
//       cart_items: {
//         Row: {
//           id: number;
//           user_id: string;
//           product_id: number;
//           quantity: number;
//           created_at: string;
//         };
//         Insert: Omit<
//           Database["public"]["Tables"]["cart_items"]["Row"],
//           "id" | "created_at"
//         >;
//         Update: Partial<Database["public"]["Tables"]["cart_items"]["Insert"]>;
//       };
//     };
//   };
// };
