export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  inStock: boolean;
  imageURL: string;
};

export type filterOptions = {
  price: [number, number];
  category: string;
  inStock?: boolean;
  sort: 'asc' | 'desc';
};
