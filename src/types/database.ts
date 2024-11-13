// types/database.ts
export type Database = {
  public: {
    Tables: {
      products: {
        Row: {
          id: number;
          name: string;
          image_url: string | null;
          discount_price: number;
          mrp: number;
          quantity: string;
          weight: number;
          available: boolean;
          created_at: string;
        };
        Insert: {
          name: string;
          image_url?: string | null;
          discount_price: number;
          mrp: number;
          quantity: string;
          weight: number;
          available: boolean;
        };
        Update: {
          id?: number;
          name?: string;
          image_url?: string | null;
          discount_price?: number;
          mrp?: number;
          quantity?: string;
          weight?: number;
          available?: boolean;
          created_at?: string;
        };
      };
      user_profiles: {
        Row: {
          id: string;
          phone: string;
          name: string | null;
          created_at: string;
        };
        Insert: {
          id: string;
          phone: string;
          name?: string | null;
        };
        Update: {
          id?: string;
          phone?: string;
          name?: string | null;
          created_at?: string;
        };
      };
      cart_items: {
        Row: {
          id: number;
          user_id: string;
          product_id: number;
          quantity: number;
          created_at: string;
        };
        Insert: {
          user_id: string;
          product_id: number;
          quantity: number;
        };
        Update: {
          id?: number;
          user_id?: string;
          product_id?: number;
          quantity?: number;
          created_at?: string;
        };
      };
    };
  };
};
