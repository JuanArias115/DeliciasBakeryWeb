import { ResolveFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { Product } from '../../models/product.model';
import { PRODUCTS } from '../../data/products.mock';

export const productResolver: ResolveFn<Product | null> = (route) => {
  const router = inject(Router);
  const slug = route.paramMap.get('slug');

  if (!slug) {
    void router.navigate(['/productos']);
    return null;
  }

  const product = PRODUCTS.find((item) => item.slug === slug);

  if (!product) {
    void router.navigate(['/productos']);
    return null;
  }

  return product;
};
