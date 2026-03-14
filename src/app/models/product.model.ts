export type ProductCategory =
  | 'cheesecakes-tiramisu'
  | 'brownies'
  | 'tortas-mini-cakes'
  | 'postres-detalles'
  | 'fechas-especiales'
  | 'desayunos'
  | 'linea-fit'
  | 'catering';

export interface ProductSizeOption {
  id: string;
  label: string;
  price: number;
  serves?: string;
  note?: string;
}

export interface Product {
  name: string;
  slug: string;
  category: ProductCategory;
  occasion: string[];
  description: string;
  details?: string[];
  priceFrom?: number;
  sizes?: ProductSizeOption[];
  defaultSizeId?: string;
  images: string[];
  tags: string[];
  featured?: boolean;
}
