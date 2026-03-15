import { Product } from '../models/product.model';

const PRODUCT_IMAGES = {
  cheesecakeHeart:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484800/cheesecake-frutos-rojos-corazon-01_oabnar.png',
  cheesecakeMedium:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484798/cheesecake-frutos-rojos-mediano-01_nezkdv.png',
  cheesecakeLarge:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484799/cheesecake-maracuya-grande-01_plmfdr.png',
  cheesecakeNewYork:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484799/cheesecake-frutos-rojos-newYork-01_rbfm0s.png',
  tiramisu:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484804/postres-tiramisu-01_vmynj7.png',
  brownieRound:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484800/postres-brownie-01_ht1fm1.png',
  brownieHeart:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484803/postres-brownie-corazon-01_ulwsls.png',
  brownieBites:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484802/postres-brownie-Bites-01_s1v38a.png',
  cupcakes:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773596806/postres-cupcakes-01_dytgoo.jpg',
  cupcakesRedVelvet:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484805/postres-cupcakes-red-velvet-01_codoa5.png',
  cookiesNewYork:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484813/postres-cookies-new-york-01_ketfc6.png',
  cookiesClassic:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484801/postres-cookies-01_eonnr6.png',
  chocoFresas:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484801/postres-choco-fresas-rosas-01_txvvwq.png',
  trufas:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773592957/postres-trufas-01_hjgvlz.png',
  alfajores:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1773484799/postres-alfajores-01_lwr6zq.png',
  customCake:
    'https://res.cloudinary.com/dscih1izv/image/upload/v1772967829/44030994-FE0B-4175-9526-D73DEF04F4D7_hcmlti.jpg',
  customCake02: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593758/postres_cakes_02_k8hom6.jpg',
  customCake03: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593758/postres_cakes_03_n5xbml.jpg',
  customCake04: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593758/postres_cakes_04_pd4tpx.jpg',
  customCake05: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593758/postres_cakes_05_r3pumj.jpg',
  customCake06: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593758/postres_cakes_06_h5riuq.jpg',
  customCake07: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593758/postres_cakes_07_qg4sqd.jpg',
  customCake09: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593759/postres_cakes_09_bogq2x.jpg',
  customCake10: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593759/postres_cakes_10_v3dsyg.jpg',
  customCake11: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593759/postres_cakes_11_bx2sm4.jpg',
  customCake12: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593760/postres_cakes_12_dgusfh.jpg',
  customCake13: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593760/postres_cakes_13_hbrdb3.jpg',
  customCake14: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593760/postres_cakes_14_ywqxv5.jpg',
  customCake15: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593760/postres_cakes_15_twiryz.jpg',
  customCake15b: 'https://res.cloudinary.com/dscih1izv/image/upload/v1773593761/postres_cakes_15_cptnmt.heic'
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

const CHEESECAKE_FLAVORS = [
  { id: 'frutos-rojos', label: 'Frutos Rojos', tier: 'classic' as const },
  { id: 'maracuya', label: 'Maracuyá', tier: 'classic' as const },
  { id: 'fresa', label: 'Fresa', tier: 'classic' as const },
  { id: 'mora', label: 'Mora', tier: 'classic' as const },
  { id: 'limon', label: 'Limón', tier: 'classic' as const },
  { id: 'arequipe', label: 'Arequipe', tier: 'classic' as const },
  { id: 'nutella', label: 'Nutella', tier: 'classic' as const },
  { id: 'lulo', label: 'Lulo', tier: 'classic' as const },
  { id: 'mango', label: 'Mango', tier: 'classic' as const },
  { id: 'durazno', label: 'Durazno', tier: 'classic' as const },
  { id: 'oreo', label: 'Oreo', tier: 'classic' as const },
  { id: 'arandanos', label: 'Arándanos', tier: 'premium' as const, surcharge: 7000 },
  { id: 'milo', label: 'Milo', tier: 'premium' as const, surcharge: 7000 },
  { id: 'chocoramo', label: 'Chocoramo', tier: 'premium' as const, surcharge: 7000 },
  {
    id: 'mix',
    label: 'Mix (Hershey’s, M&M, Oreo o Milo)',
    tier: 'premium' as const,
    surcharge: 7000
  }
];

const BROWNIE_TOPPINGS = [
  { id: 'azucar', label: 'Azúcar pulverizada (clásico)' },
  { id: 'arequipe-oreo', label: 'Arequipe y Oreo' },
  { id: 'chocolate-blanco', label: 'Chocolate blanco + chispas de corazón' },
  { id: 'chocolate-oscuro', label: 'Chocolate oscuro + chispas de corazón' },
  { id: 'chocolate-rojo', label: 'Chocolate rojo + chispas de corazón' }
] as const;

const BROWNIE_HEART_TOPPINGS = [
  { id: 'azucar', label: 'Azúcar pulverizada (clásico)' },
  { id: 'chocolate-rojo', label: 'Chocolate rojo + chispas de corazón' }
] as const;

const COOKIE_MIX_FLAVORS = [
  { id: 'chocochips', label: 'Chocochips' },
  { id: 'nutella', label: 'Nutella' },
  { id: 'oreo', label: 'Oreo' },
  { id: 'galleta-milo', label: 'Galleta Milo' },
  { id: 'hersheys-blanca', label: 'Hershey’s Blanca' },
  { id: 'pistacho', label: 'Pistacho' },
  { id: 'birthday-cake', label: 'Birthday Cake' },
  { id: 'red-velvet', label: 'Red Velvet' },
  { id: 'nueces-almendras', label: 'Nueces y Almendras' }
] as const;

const TRUFFLE_COATINGS = [
  { id: 'blanco', label: 'Chocolate blanco' },
  { id: 'oscuro', label: 'Chocolate oscuro' },
  { id: 'mixto', label: 'Mixto (chocolate blanco y oscuro)' }
] as const;

const TRUFFLE_TOPPINGS = [
  { id: 'corazon', label: 'Chispas de corazón' },
  { id: 'glitter-dorado', label: 'Glitter comestible dorado' },
  { id: 'glitter-plateado', label: 'Glitter comestible plateado' },
  { id: 'colores', label: 'Chispas de colores' }
] as const;

export const PRODUCTS: Product[] = [
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
    autoRotateImages: true,
    priceLabelMode: 'from',
    priceFrom: 36000,
    images: [
      PRODUCT_IMAGES.customCake10,
      PRODUCT_IMAGES.customCake02,
      PRODUCT_IMAGES.customCake03,
      PRODUCT_IMAGES.customCake04,
      PRODUCT_IMAGES.customCake07,
      PRODUCT_IMAGES.customCake05,
      PRODUCT_IMAGES.customCake06,
      PRODUCT_IMAGES.customCake09,
      PRODUCT_IMAGES.customCake11,
      PRODUCT_IMAGES.customCake14,
      PRODUCT_IMAGES.customCake15,
      PRODUCT_IMAGES.customCake13,
      PRODUCT_IMAGES.customCake12,
      PRODUCT_IMAGES.customCake15b,
      PRODUCT_IMAGES.customCake
    ],
    tags: ['Personalizadas', 'Sobre pedido'],
    featured: true
  },
  {
    name: 'Cheesecake tradicional',
    slug: 'cheesecake-tradicional',
    category: 'cheesecakes-tiramisu',
    occasion: ['cumpleanos', 'aniversarios', 'amor-amistad', 'fechas-especiales'],
    description: 'Ideal para celebrar, compartir o sorprender con un detalle especial.',
    details: [
      'Elige el sabor en el desplegable antes de pedir.',
      'Sabores premium con recargo de $7.000.'
    ],
    flavorOptions: CHEESECAKE_FLAVORS,
    defaultFlavorId: 'frutos-rojos',
    priceFrom: 30000,
    sizes: [
      {
        id: 'corazon',
        label: 'Corazón',
        price: 30000,
        serves: '3 porciones aprox.',
        image: PRODUCT_IMAGES.cheesecakeHeart
      },
      {
        id: 'mediano',
        label: 'Mediano',
        price: 36000,
        serves: '16 cm / 8-10 porciones',
        image: PRODUCT_IMAGES.cheesecakeMedium
      },
      {
        id: 'grande',
        label: 'Grande',
        price: 45000,
        serves: '22 cm / 12-14 porciones',
        image: PRODUCT_IMAGES.cheesecakeLarge
      }
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
    details: [
      'Elige el sabor en el desplegable antes de pedir.',
      'Sabores premium con recargo de $7.000.'
    ],
    flavorOptions: CHEESECAKE_FLAVORS,
    defaultFlavorId: 'frutos-rojos',
    priceFrom: 46000,
    sizes: [
      { id: '16cm', label: '16 cm', price: 46000, serves: '8 porciones' },
      { id: '22cm', label: '22 cm', price: 68000, serves: '15 porciones' }
    ],
    defaultSizeId: '16cm',
    images: [PRODUCT_IMAGES.cheesecakeNewYork],
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
      'Elige el topping en el desplegable antes de pedir.',
      'Adición personalizada +$5.000: letras en chocolate y mensaje corto de hasta 15 letras.'
    ],
    toppingOptions: [...BROWNIE_TOPPINGS],
    defaultToppingId: 'azucar',
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
      'Elige el topping en el desplegable antes de pedir.',
      'Adición personalizada +$5.000: letras en chocolate y mensaje corto de hasta 15 letras.'
    ],
    toppingOptions: [...BROWNIE_HEART_TOPPINGS],
    defaultToppingId: 'azucar',
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
      'Elige el topping en el desplegable antes de pedir.',
      'Adición personalizada +$5.000: letras en chocolate y mensaje corto de hasta 15 letras.'
    ],
    toppingOptions: [...BROWNIE_TOPPINGS],
    defaultToppingId: 'azucar',
    priceFrom: 46000,
    sizes: [{ id: 'x36', label: 'Caja x36', price: 46000, serves: '36 unidades aprox.' }],
    defaultSizeId: 'x36',
    images: [PRODUCT_IMAGES.brownieBites],
    tags: ['Para compartir', 'Eventos'],
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
      'Elige 4 galletas y combina los sabores como prefieras.',
      'Tip: caliéntala 10 a 15 segundos antes de comer para que el centro quede más suave.'
    ],
    priceFrom: 36000,
    sizes: [{ id: 'x4', label: 'Caja x4', price: 36000 }],
    defaultSizeId: 'x4',
    mixOptions: [...COOKIE_MIX_FLAVORS],
    mixTotal: 4,
    mixLabel: 'Sabores de tu caja',
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
    name: 'Trufas',
    slug: 'trufas',
    category: 'postres-detalles',
    occasion: ['amor-amistad', 'aniversarios', 'cumpleanos', 'fechas-especiales'],
    description:
      'Bolitas cremosas de Oreo cubiertas con chocolate, perfectas para sorprender, regalar o acompañar cualquier celebración.',
    details: ['Elige cobertura y topping en los desplegables antes de pedir.'],
    priceFrom: 26000,
    sizes: [{ id: 'x12', label: 'Caja x12', price: 26000, serves: '12 unidades' }],
    defaultSizeId: 'x12',
    coatingOptions: [...TRUFFLE_COATINGS],
    defaultCoatingId: 'blanco',
    toppingOptions: [...TRUFFLE_TOPPINGS],
    defaultToppingId: 'corazon',
    images: [PRODUCT_IMAGES.trufas],
    tags: ['Oreo', 'Detalle']
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
