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
  image?: string;
}

export interface ProductFlavorOption {
  id: string;
  label: string;
  surcharge?: number;
  tier?: 'classic' | 'premium';
}

export interface ProductToppingOption {
  id: string;
  label: string;
  surcharge?: number;
}

export interface ProductMixOption {
  id: string;
  label: string;
  surcharge?: number;
}

export interface Product {
  name: string;
  slug: string;
  category: ProductCategory;
  occasion: string[];
  description: string;
  details?: string[];
  flavorOptions?: ProductFlavorOption[];
  defaultFlavorId?: string;
  toppingOptions?: ProductToppingOption[];
  defaultToppingId?: string;
  mixOptions?: ProductMixOption[];
  mixTotal?: number;
  mixLabel?: string;
  priceFrom?: number;
  sizes?: ProductSizeOption[];
  defaultSizeId?: string;
  images: string[];
  tags: string[];
  featured?: boolean;
}
