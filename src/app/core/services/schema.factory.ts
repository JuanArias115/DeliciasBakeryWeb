import { siteConfig } from '../config/site.config';
import { getMinPrice } from '../helpers/product-pricing.helper';

import { PRODUCT_CATEGORY_LABELS } from '../../data/products.mock';
import { cldImage } from '../../lib/cloudinary';
import { Product } from '../../models/product.model';

export function createLocalBusinessSchema(siteUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    description: siteConfig.tagline,
    image: cldImage('deliciasbakery/brand/logo-round', { width: 600 }),
    url: siteUrl,
    telephone: siteConfig.whatsappDisplay,
    areaServed: siteConfig.serviceAreas,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chia',
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.country
    },
    sameAs: [siteConfig.instagramUrl, siteConfig.tiktokUrl].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.whatsappDisplay,
      contactType: 'customer service',
      areaServed: 'CO',
      availableLanguage: ['es']
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00'
      }
    ]
  };
}

export function createProductSchema(product: Product, canonicalUrl: string): Record<string, unknown> {
  const price = getMinPrice(product);

  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.images,
    sku: product.slug,
    category: PRODUCT_CATEGORY_LABELS[product.category],
    brand: {
      '@type': 'Brand',
      name: siteConfig.brandName
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'COP',
      price,
      availability: 'https://schema.org/InStock',
      url: canonicalUrl
    }
  };
}
