import { siteConfig } from '../config/site.config';
import { getMinPrice } from '../helpers/product-pricing.helper';

import { Product } from '../../models/product.model';

export function createLocalBusinessSchema(siteUrl: string): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: siteConfig.brandName,
    legalName: siteConfig.legalName,
    description: siteConfig.tagline,
    image: 'https://picsum.photos/seed/delicias-logo/512/512',
    url: siteUrl,
    telephone: siteConfig.whatsappDisplay,
    areaServed: siteConfig.serviceAreas,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chia',
      addressRegion: siteConfig.addressRegion,
      addressCountry: siteConfig.country
    },
    sameAs: [siteConfig.instagramUrl],
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
    category: product.category,
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
