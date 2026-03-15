import { Routes } from '@angular/router';

import { productResolver } from './core/resolvers/product.resolver';
import { seoResolver } from './core/resolvers/seo.resolver';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Delicias Bakery | Postres y Pastelería en Chía-Cajicá',
        description:
          'Postres, tortas, cajas y catering en Chía-Cajicá. Pedidos por encargo con 24 horas de anticipación por WhatsApp.'
      }
    },
    loadComponent: () => import('./pages/home/home.page')
  },
  {
    path: 'productos',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Catálogo de Productos | Delicias Bakery',
        description:
          'Explora nuestro catálogo de tortas, postres, cajas, detalles y catering para celebraciones en Chía y Cajicá.'
      }
    },
    loadComponent: () => import('./pages/products/products.page')
  },
  {
    path: 'productos/:slug',
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    resolve: {
      product: productResolver,
      seo: seoResolver
    },
    data: {
      seo: {
        title: 'Producto | Delicias Bakery',
        description: 'Detalle de producto y cotización por WhatsApp.'
      }
    },
    loadComponent: () => import('./pages/product-detail/product-detail.page')
  },
  {
    path: 'celebraciones',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Celebraciones y Tortas Personalizadas | Delicias Bakery',
        description:
          'Tortas y postres personalizados para cumpleaños, aniversarios, eventos y fechas especiales en Chía-Cajicá.'
      }
    },
    loadComponent: () => import('./pages/celebrations/celebrations.page')
  },
  {
    path: 'galeria',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Galería de Trabajos | Delicias Bakery',
        description: 'Inspiración visual estilo Instagram con productos reales de Delicias Bakery.'
      }
    },
    loadComponent: () => import('./pages/gallery/gallery.page')
  },
  {
    path: 'resenas',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Reseñas de Clientes | Delicias Bakery',
        description:
          'Conoce opiniones de clientes sobre nuestros postres, tortas y servicio por WhatsApp en Chía y Cajicá.'
      }
    },
    loadComponent: () => import('./pages/reviews/reviews.page')
  },
  {
    path: 'reseñas',
    redirectTo: 'resenas'
  },
  {
    path: 'contacto',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Contacto y Pedidos por WhatsApp | Delicias Bakery',
        description:
          'Cotiza tu pedido por WhatsApp desde nuestro formulario. Atención en Chía-Cajicá con 24h de anticipación.'
      }
    },
    loadComponent: () => import('./pages/contact/contact.page')
  },
  {
    path: 'politicas',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Políticas de Privacidad y Cookies | Delicias Bakery',
        description: 'Consulta nuestras políticas de privacidad, pedidos por encargo y uso de cookies.'
      }
    },
    loadComponent: () => import('./pages/policies/policies.page')
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
