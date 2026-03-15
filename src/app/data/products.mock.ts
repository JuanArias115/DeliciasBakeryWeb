import { Product } from '../models/product.model';

const PRODUCT_IMAGES = {
  cheesecakeHeart:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484800/cheesecake-frutos-rojos-corazon-01_oabnar.png',
  cheesecakeMedium:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484798/cheesecake-frutos-rojos-mediano-01_nezkdv.png',
  cheesecakeLarge:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484799/cheesecake-maracuya-grande-01_plmfdr.png',
  tiramisu:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484804/postres-tiramisu-01_vmynj7.png',
  brownieRound:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484800/postres-brownie-01_ht1fm1.png',
  brownieHeart:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484803/postres-brownie-corazon-01_ulwsls.png',
  brownieBites:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484802/postres-brownie-Bites-01_s1v38a.png',
  cupcakes:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484805/postres-cupcakes-01_ne1g3b.png',
  cupcakesRedVelvet:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484805/postres-cupcakes-red-velvet-01_codoa5.png',
  cookiesNewYork:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484813/postres-cookies-new-york-01_ketfc6.png',
  cookiesClassic:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484801/postres-cookies-01_eonnr6.png',
  chocoFresas:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484801/postres-choco-fresas-rosas-01_txvvwq.png',
  alfajores:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484799/postres-alfajores-01_lwr6zq.png',
  customCake:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1772967829/44030994-FE0B-4175-9526-D73DEF04F4D7_hcmlti.jpg'
} as const;

export const PRODUCT_CATEGORY_LABELS = {
  'cheesecakes-tiramisu': 'Cheesecakes y tiramisú',
  brownies: 'Brownies',
  'tortas-mini-cakes': 'Tortas y Mini Cakes',
  'postres-detalles': 'Postres y Detalles',
  'fechas-especiales': 'Fechas especiales',
  desayunos: 'Desayunos',
  'linea-fit': 'Línea Fit',
  catering: 'Catering y mesas de postres'
} as const;

export const PRODUCT_CATEGORIES: { value: Product['category']; label: string }[] = [
  { value: 'cheesecakes-tiramisu', label: PRODUCT_CATEGORY_LABELS['cheesecakes-tiramisu'] },
  { value: 'brownies', label: PRODUCT_CATEGORY_LABELS.brownies },
  { value: 'tortas-mini-cakes', label: PRODUCT_CATEGORY_LABELS['tortas-mini-cakes'] },
  { value: 'postres-detalles', label: PRODUCT_CATEGORY_LABELS['postres-detalles'] },
  { value: 'fechas-especiales', label: PRODUCT_CATEGORY_LABELS['fechas-especiales'] },
  { value: 'desayunos', label: PRODUCT_CATEGORY_LABELS.desayunos },
  { value: 'linea-fit', label: PRODUCT_CATEGORY_LABELS['linea-fit'] },
  { value: 'catering', label: PRODUCT_CATEGORY_LABELS.catering }
];

export const OCCASIONS = [
  { value: 'cumpleanos', label: 'Cumpleaños' },
  { value: 'aniversarios', label: 'Aniversarios' },
  { value: 'amor-amistad', label: 'Amor y amistad' },
  { value: 'infantil', label: 'Infantil' },
  { value: 'empresarial-eventos', label: 'Empresarial y eventos' },
  { value: 'fechas-especiales', label: 'Fechas especiales' }
] as const;

export type ProductOccasion = (typeof OCCASIONS)[number]['value'];

export const PRODUCTS: Product[] = [
  {
    name: 'Cheesecake tradicional',
    slug: 'cheesecake-tradicional',
    category: 'cheesecakes-tiramisu',
    occasion: ['cumpleanos', 'aniversarios', 'amor-amistad', 'fechas-especiales'],
    description: 'Ideal para celebrar, compartir o sorprender con un detalle especial.',
    details: [
      'Sabores clásicos: frutos rojos, maracuyá, fresa, mora, limón y arequipe.',
      'Sabores premium (+$7.000): arándanos, Milo, Chocoramo y mix con Hershey’s, M&M, Oreo o Milo.'
    ],
    priceFrom: 30000,
    sizes: [
      { id: 'corazon', label: 'Corazón', price: 30000, serves: '3 porciones aprox.' },
      { id: 'mediano', label: 'Mediano', price: 36000, serves: '16 cm / 8-10 porciones' },
      { id: 'grande', label: 'Grande', price: 45000, serves: '22 cm / 12-14 porciones' }
    ],
    defaultSizeId: 'mediano',
    images: [PRODUCT_IMAGES.cheesecakeMedium, PRODUCT_IMAGES.cheesecakeHeart, PRODUCT_IMAGES.cheesecakeLarge],
    tags: ['Clásico', 'Personalizable'],
    featured: true
  },
  {
    name: 'New York Cheesecake',
    slug: 'new-york-cheesecake',
    category: 'cheesecakes-tiramisu',
    occasion: ['cumpleanos', 'aniversarios', 'fechas-especiales'],
    description: 'Cheesecake más alto y cremoso, con textura densa y horneado clásico.',
    details: ['Decorado con frutos rojos para equilibrar su intensidad y dar un acabado premium.'],
    priceFrom: 46000,
    sizes: [
      { id: '16cm', label: '16 cm', price: 46000, serves: '8 porciones' },
      { id: '22cm', label: '22 cm', price: 68000, serves: '15 porciones' }
    ],
    defaultSizeId: '16cm',
    images: [PRODUCT_IMAGES.cheesecakeMedium],
    tags: ['Horneado clásico', 'Cremoso']
  },
  {
    name: 'Tiramisú',
    slug: 'tiramisu',
    category: 'cheesecakes-tiramisu',
    occasion: ['cumpleanos', 'aniversarios', 'empresarial-eventos'],
    description: 'Postre cremoso y equilibrado para compartir en reuniones o celebraciones.',
    priceFrom: 40000,
    sizes: [
      { id: 'mediano', label: 'Mediano', price: 40000, serves: '16 cm / 8-10 porciones' },
      { id: 'grande', label: 'Grande', price: 50000, serves: '22 cm / 12-14 porciones' }
    ],
    defaultSizeId: 'mediano',
    images: [PRODUCT_IMAGES.tiramisu],
    tags: ['Suave', 'Para compartir'],
    featured: true
  },
  {
    name: 'Brownie redondo',
    slug: 'brownie-redondo',
    category: 'brownies',
    occasion: ['cumpleanos', 'amor-amistad', 'fechas-especiales'],
    description: 'Brownie melcochudo y suave, ideal para compartir o celebrar.',
    details: [
      'Toppings: azúcar pulverizada, arequipe y Oreo, chocolate blanco, oscuro o rojo con chispas de corazón.',
      'Adición personalizada +$5.000: letras en chocolate y mensaje corto de hasta 15 letras.'
    ],
    priceFrom: 36000,
    sizes: [{ id: 'estandar', label: 'Tamaño estándar', price: 36000 }],
    defaultSizeId: 'estandar',
    images: [PRODUCT_IMAGES.brownieRound],
    tags: ['Melcochudo', 'Personalizable']
  },
  {
    name: 'Brownie corazón',
    slug: 'brownie-corazon',
    category: 'brownies',
    occasion: ['amor-amistad', 'aniversarios', 'fechas-especiales'],
    description: 'Brownie en forma de corazón, perfecto para sorprender con un detalle especial.',
    details: [
      'Toppings: azúcar pulverizada o chocolate rojo con chispas de corazón.',
      'Adición personalizada +$5.000: letras en chocolate y mensaje corto de hasta 15 letras.'
    ],
    priceFrom: 36000,
    sizes: [{ id: 'corazon', label: 'Corazón', price: 36000 }],
    defaultSizeId: 'corazon',
    images: [PRODUCT_IMAGES.brownieHeart],
    tags: ['Romantico', 'Especial']
  },
  {
    name: 'Brownie bites',
    slug: 'brownie-bites',
    category: 'brownies',
    occasion: ['cumpleanos', 'empresarial-eventos', 'fechas-especiales'],
    description: 'Brownie en cubos, perfecto para compartir en reuniones o celebraciones.',
    details: [
      '36 unidades aprox.',
      'Toppings: azúcar pulverizada, arequipe y Oreo, chocolate blanco, oscuro o rojo con chispas de corazón.',
      'Adición personalizada +$5.000: letras en chocolate y mensaje corto de hasta 15 letras.'
    ],
    priceFrom: 46000,
    sizes: [{ id: 'x36', label: 'Caja x36', price: 46000, serves: '36 unidades aprox.' }],
    defaultSizeId: 'x36',
    images: [PRODUCT_IMAGES.brownieBites],
    tags: ['Para compartir', 'Eventos'],
    featured: true
  },
  {
    name: 'Tortas personalizadas y mini cakes',
    slug: 'tortas-personalizadas-mini-cakes',
    category: 'tortas-mini-cakes',
    occasion: ['cumpleanos', 'aniversarios', 'infantil', 'fechas-especiales'],
    description: 'Creamos tortas diseñadas especialmente para cada ocasión, según tu idea o referencia.',
    details: [
      'Mini cakes desde $36.000.',
      'Tamaños disponibles: mini cake (1-2 porciones), 4-6, 10-12, 12-15, 20-25 y 30 porciones.',
      'Sabores: vainilla, chocolate y red velvet.',
      'Rellenos: Nutella, arequipe, frutos rojos y maracuyá.',
      'El valor final depende del tamaño, diseño y nivel de decoración.'
    ],
    priceFrom: 36000,
    images: [PRODUCT_IMAGES.customCake],
    tags: ['Personalizadas', 'Sobre pedido'],
    featured: true
  },
  {
    name: 'Cupcakes personalizados',
    slug: 'cupcakes-personalizados',
    category: 'postres-detalles',
    occasion: ['cumpleanos', 'amor-amistad', 'infantil', 'fechas-especiales'],
    description: 'Bizcochos esponjosos con crema chantilly del color que desees.',
    details: [
      'Sabores: vainilla, red velvet, chocolate u otro sabor especial.',
      'También disponibles en amapola, arándanos, naranja y zanahoria.',
      'Puedes indicar el color de la crema y el estilo en el mensaje adicional.'
    ],
    priceFrom: 26000,
    sizes: [
      { id: 'x6', label: 'Caja x6', price: 26000 },
      { id: 'x12', label: 'Caja x12', price: 50000 }
    ],
    defaultSizeId: 'x6',
    images: [PRODUCT_IMAGES.cupcakes, PRODUCT_IMAGES.cupcakesRedVelvet],
    tags: ['Personalizables', 'Detalle'],
    featured: true
  },
  {
    name: 'Cookies estilo New York',
    slug: 'cookies-estilo-new-york',
    category: 'postres-detalles',
    occasion: ['cumpleanos', 'amor-amistad', 'empresarial-eventos'],
    description: 'Cookies gruesas, suaves por dentro y ligeramente crujientes por fuera.',
    details: [
      'Sabores: chocochips, Nutella, Oreo, galleta Milo, Hershey’s blanca, pistacho, birthday cake, red velvet, nueces y almendras.',
      'Tip: caliéntala 10 a 15 segundos antes de comer para que el centro quede más suave.'
    ],
    priceFrom: 36000,
    sizes: [{ id: 'x6', label: 'Caja x6', price: 36000 }],
    defaultSizeId: 'x6',
    images: [PRODUCT_IMAGES.cookiesNewYork],
    tags: ['Recién horneadas', 'Viral']
  },
  {
    name: 'Crookie',
    slug: 'crookie',
    category: 'postres-detalles',
    occasion: ['cumpleanos', 'amor-amistad', 'fechas-especiales'],
    description: 'La mezcla viral entre croissant y cookie, hojaldrado por fuera y suave por dentro.',
    priceFrom: 36000,
    sizes: [{ id: 'x6', label: 'Caja x6', price: 36000 }],
    defaultSizeId: 'x6',
    images: [PRODUCT_IMAGES.cookiesClassic],
    tags: ['Viral', 'Croissant + cookie']
  },
  {
    name: 'Alfajores',
    slug: 'alfajores',
    category: 'postres-detalles',
    occasion: ['amor-amistad', 'aniversarios', 'fechas-especiales'],
    description: 'Galletas suaves rellenas de dulce de leche, ideales para regalo o detalle.',
    priceFrom: 26000,
    sizes: [{ id: 'x12', label: 'Caja x12', price: 26000 }],
    defaultSizeId: 'x12',
    images: [PRODUCT_IMAGES.alfajores],
    tags: ['Detalle', 'Dulce de leche']
  },
  {
    name: 'Chocofresas y rosas',
    slug: 'chocofresas-y-rosas',
    category: 'fechas-especiales',
    occasion: ['amor-amistad', 'aniversarios', 'cumpleanos', 'fechas-especiales'],
    description: 'Bouquet en forma de corazón con fresas cubiertas de chocolate y rosas naturales.',
    details: ['Incluye 12 rosas y 12 chocofresas.'],
    priceFrom: 110000,
    sizes: [{ id: 'bouquet', label: 'Bouquet corazón', price: 110000, note: 'Incluye 12 rosas y 12 chocofresas' }],
    defaultSizeId: 'bouquet',
    images: [PRODUCT_IMAGES.chocoFresas],
    tags: ['Regalo especial', 'Romántico'],
    featured: true
  }
];
