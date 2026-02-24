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
        title: 'Delicias Bakery | Postres y Pasteleria en Chia-Cajica',
        description:
          'Postres, tortas, cajas y catering en Chia-Cajica. Pedidos por encargo con 24 horas de anticipacion por WhatsApp.'
      }
    },
    loadComponent: () => import('./pages/home/home.page')
  },
  {
    path: 'productos',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Catalogo de Productos | Delicias Bakery',
        description:
          'Explora nuestro catalogo de tortas, postres, cajas, detalles y catering para celebraciones en Chia y Cajica.'
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
        description: 'Detalle de producto y cotizacion por WhatsApp.'
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
          'Tortas y postres personalizados para cumpleanos, aniversarios, eventos y fechas especiales en Chia-Cajica.'
      }
    },
    loadComponent: () => import('./pages/celebrations/celebrations.page')
  },
  {
    path: 'galeria',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Galeria de Trabajos | Delicias Bakery',
        description: 'Inspiracion visual estilo Instagram con productos reales de Delicias Bakery.'
      }
    },
    loadComponent: () => import('./pages/gallery/gallery.page')
  },
  {
    path: 'resenas',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Resenas de Clientes | Delicias Bakery',
        description:
          'Conoce opiniones de clientes sobre nuestros postres, tortas y servicio por WhatsApp en Chia y Cajica.'
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
          'Cotiza tu pedido por WhatsApp desde nuestro formulario. Atencion en Chia-Cajica con 24h de anticipacion.'
      }
    },
    loadComponent: () => import('./pages/contact/contact.page')
  },
  {
    path: 'politicas',
    resolve: { seo: seoResolver },
    data: {
      seo: {
        title: 'Politicas de Privacidad y Cookies | Delicias Bakery',
        description: 'Consulta nuestras politicas de privacidad, pedidos por encargo y uso de cookies.'
      }
    },
    loadComponent: () => import('./pages/policies/policies.page')
  },
  {
    path: '**',
    redirectTo: 'inicio'
  }
];
