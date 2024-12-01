export type Product = {
  id: number;
  name: string;
  slug: string;
  image_url: string | null;
  discount_price: number;
  mrp: number;
  quantity: string[];
  weight: number;
  available: boolean;
  created_at: string;
};

export type Data = {
  id: number;
  image: string | undefined;
  name: string;
  slug: string;
  discount: string;
  mrp: string;
  quantity: string;
}
