import { Product, ProductSizeOption } from '../../models/product.model';

export function getMinPrice(product: Product): number {
  if (product.sizes?.length) {
    return Math.min(...product.sizes.map((size) => size.price));
  }

  return product.priceFrom ?? 0;
}

export function getDefaultSize(product: Product): ProductSizeOption | undefined {
  if (!product.sizes?.length) {
    return undefined;
  }

  if (product.defaultSizeId) {
    const explicit = product.sizes.find((size) => size.id === product.defaultSizeId);
    if (explicit) {
      return explicit;
    }
  }

  return product.sizes[0];
}

export function getSelectedSize(product: Product, sizeId: string | null | undefined): ProductSizeOption | undefined {
  if (!product.sizes?.length) {
    return undefined;
  }

  if (!sizeId) {
    return getDefaultSize(product);
  }

  return product.sizes.find((size) => size.id === sizeId) ?? getDefaultSize(product);
}
