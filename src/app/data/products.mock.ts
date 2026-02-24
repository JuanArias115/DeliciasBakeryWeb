import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    name: 'Torta Vintage Rosas',
    slug: 'torta-vintage-rosas',
    category: 'tortas',
    occasion: ['cumpleanos', 'aniversario'],
    description: 'Torta alta decorada con piping vintage y tonos rosa pastel.',
    priceFrom: 125000,
    images: ['https://picsum.photos/seed/torta-vintage/1200/900'],
    tags: ['Mas vendida', 'Personalizable'],
    featured: true
  },
  {
    name: 'Mini Cake Bento',
    slug: 'mini-cake-bento',
    category: 'postres',
    occasion: ['detalle', 'cumpleanos'],
    description: 'Mini torta individual ideal para sorprender con mensaje corto.',
    priceFrom: 28000,
    images: ['https://picsum.photos/seed/bento/1200/900'],
    tags: ['Regalo', 'Tendencia'],
    featured: true
  },
  {
    name: 'Caja Brownies Deluxe x12',
    slug: 'caja-brownies-deluxe-12',
    category: 'cajas',
    occasion: ['regalo', 'empresarial'],
    description: 'Brownies fudgy con toppings surtidos y empaque premium.',
    priceFrom: 68000,
    images: ['https://picsum.photos/seed/brownies/1200/900'],
    tags: ['Entrega rapida', 'Ideal oficina'],
    featured: true
  },
  {
    name: 'Cheesecake Frutos Rojos',
    slug: 'cheesecake-frutos-rojos',
    category: 'postres',
    occasion: ['cumpleanos', 'brunch'],
    description: 'Base crocante, crema suave y coulis natural de frutos rojos.',
    priceFrom: 78000,
    images: ['https://picsum.photos/seed/cheesecake/1200/900'],
    tags: ['Sin fondant', 'Clasico']
  },
  {
    name: 'Torta Tres Leches Premium',
    slug: 'torta-tres-leches-premium',
    category: 'tortas',
    occasion: ['cumpleanos', 'familiar'],
    description: 'Bizcocho humedo con crema batida y fruta fresca.',
    priceFrom: 98000,
    images: ['https://picsum.photos/seed/tresleches/1200/900'],
    tags: ['Suave', 'Favorita']
  },
  {
    name: 'Caja de Fresas con Chocolate',
    slug: 'caja-fresas-chocolate',
    category: 'detalles',
    occasion: ['romantico', 'aniversario'],
    description: 'Fresas seleccionadas cubiertas con chocolate semiamargo.',
    priceFrom: 59000,
    images: ['https://picsum.photos/seed/fresas/1200/900'],
    tags: ['Entrega en frio', 'Elegante'],
    featured: true
  },
  {
    name: 'Cupcakes Surtidos x6',
    slug: 'cupcakes-surtidos-6',
    category: 'postres',
    occasion: ['cumpleanos', 'oficina'],
    description: 'Seis cupcakes con sabores de vainilla, chocolate y red velvet.',
    priceFrom: 38000,
    images: ['https://picsum.photos/seed/cupcakes6/1200/900'],
    tags: ['Porcion individual', 'Colores a eleccion']
  },
  {
    name: 'Cupcakes Surtidos x12',
    slug: 'cupcakes-surtidos-12',
    category: 'postres',
    occasion: ['cumpleanos', 'evento'],
    description: 'Caja para celebraciones con decoracion tematica a tu gusto.',
    priceFrom: 69000,
    images: ['https://picsum.photos/seed/cupcakes12/1200/900'],
    tags: ['Eventos', 'Personalizable']
  },
  {
    name: 'Caja Desayuno Dulce',
    slug: 'caja-desayuno-dulce',
    category: 'cajas',
    occasion: ['sorpresa', 'cumpleanos'],
    description: 'Incluye mini postres, bebida y tarjeta personalizada.',
    priceFrom: 95000,
    images: ['https://picsum.photos/seed/desayuno/1200/900'],
    tags: ['Con mensaje', 'Sorpresa']
  },
  {
    name: 'Mesa Dulce para 30 personas',
    slug: 'mesa-dulce-30-personas',
    category: 'catering',
    occasion: ['boda', 'evento-corporativo'],
    description: 'Montaje de mesa dulce con postres variados y decoracion.',
    priceFrom: 420000,
    images: ['https://picsum.photos/seed/mesadulce/1200/900'],
    tags: ['Catering', 'Incluye montaje']
  },
  {
    name: 'Torta Infantil Tema Unicornio',
    slug: 'torta-infantil-unicornio',
    category: 'tortas',
    occasion: ['infantil', 'cumpleanos'],
    description: 'Torta decorada en buttercream con detalles de unicornio.',
    priceFrom: 145000,
    images: ['https://picsum.photos/seed/unicornio/1200/900'],
    tags: ['Infantil', 'Colorida']
  },
  {
    name: 'Cookies Rellenas x8',
    slug: 'cookies-rellenas-8',
    category: 'postres',
    occasion: ['snack', 'regalo'],
    description: 'Galletas grandes con rellenos de nutella, arequipe y lotus.',
    priceFrom: 46000,
    images: ['https://picsum.photos/seed/cookies8/1200/900'],
    tags: ['Recien horneadas', 'Crunchy']
  },
  {
    name: 'Torta Corazon San Valentin',
    slug: 'torta-corazon-san-valentin',
    category: 'tortas',
    occasion: ['romantico', 'san-valentin'],
    description: 'Torta en forma de corazon con mensaje personalizado.',
    priceFrom: 118000,
    images: ['https://picsum.photos/seed/corazon/1200/900'],
    tags: ['Edicion especial', 'Romantica']
  },
  {
    name: 'Box Galletas Decoradas x10',
    slug: 'box-galletas-decoradas-10',
    category: 'detalles',
    occasion: ['detalle', 'evento'],
    description: 'Galletas de mantequilla decoradas por tematica y colores.',
    priceFrom: 55000,
    images: ['https://picsum.photos/seed/galletasdecoradas/1200/900'],
    tags: ['Corporativo', 'Souvenir']
  },
  {
    name: 'Postre de Maracuya Familiar',
    slug: 'postre-maracuya-familiar',
    category: 'postres',
    occasion: ['familiar', 'domingo'],
    description: 'Postre frio en bandeja familiar con capa de merengue.',
    priceFrom: 52000,
    images: ['https://picsum.photos/seed/maracuya/1200/900'],
    tags: ['Fresco', 'Acido dulce']
  },
  {
    name: 'Catering Coffee Break Premium',
    slug: 'catering-coffee-break-premium',
    category: 'catering',
    occasion: ['corporativo', 'reunion'],
    description: 'Servicio de coffee break con pasteleria fina para equipos.',
    priceFrom: 320000,
    images: ['https://picsum.photos/seed/coffeebreak/1200/900'],
    tags: ['Empresas', 'Incluye logistica']
  }
];

export const PRODUCT_CATEGORIES: { value: Product['category']; label: string }[] = [
  { value: 'postres', label: 'Postres' },
  { value: 'tortas', label: 'Tortas' },
  { value: 'cajas', label: 'Cajas' },
  { value: 'detalles', label: 'Detalles' },
  { value: 'catering', label: 'Catering' }
];

export const OCCASIONS = [
  'cumpleanos',
  'aniversario',
  'detalle',
  'romantico',
  'empresarial',
  'evento',
  'infantil',
  'boda',
  'corporativo'
] as const;
