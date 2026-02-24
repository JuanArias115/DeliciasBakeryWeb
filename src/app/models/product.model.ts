export type ProductCategory = 'postres' | 'tortas' | 'cajas' | 'detalles' | 'catering';

export interface Product {
  name: string;
  slug: string;
  category: ProductCategory;
  occasion: string[];
  description: string;
  priceFrom: number;
  images: string[];
  tags: string[];
  featured?: boolean;
}
