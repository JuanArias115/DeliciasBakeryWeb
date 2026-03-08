import { CLOUDINARY_WIDTHS, cldImage } from '../lib/cloudinary';
import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    name: 'Alfajor Arequipe',
    slug: 'alfajor-arequipe',
    category: 'postres',
    occasion: ['detalle', 'regalo'],
    description: 'Alfajor suave relleno de arequipe, ideal para antojo o detalle.',
    priceFrom: 18000,
    sizes: [
      { id: 'unidad', label: 'Unidad', price: 18000 },
      { id: 'x4', label: 'Pack x4', price: 62000 },
      { id: 'x8', label: 'Pack x8', price: 112000 }
    ],
    defaultSizeId: 'unidad',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967830/B9FBA254-1DFE-4084-8880-F2C30690F972_vbbrw9.jpg'],
    tags: ['Regalo', 'Dulce']
  },
  {
    name: 'Cheesecake Frutos Rojos',
    slug: 'cheesecake-frutos-rojos',
    category: 'postres',
    occasion: ['cumpleanos', 'brunch'],
    description: 'Base crocante, crema suave y topping de frutos rojos.',
    priceFrom: 78000,
    sizes: [
      { id: 'mini', label: 'Mini (4 porciones)', price: 78000, serves: '4 porciones' },
      { id: 'mediana', label: 'Mediana (8 porciones)', price: 112000, serves: '8 porciones' },
      { id: 'grande', label: 'Grande (12 porciones)', price: 148000, serves: '12 porciones' }
    ],
    defaultSizeId: 'mini',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967830/77767B31-248E-4947-BB0E-6415F7E6859E_xpi9ak.jpg'],
    tags: ['Clasico', 'Sin fondant'],
    featured: true
  },
  {
    name: 'Box Regalo Amor',
    slug: 'box-regalo-amor',
    category: 'detalles',
    occasion: ['romantico', 'aniversario', 'detalle'],
    description: 'Detalle tipo box ideal para sorprender en fechas especiales.',
    priceFrom: 65000,
    sizes: [
      { id: 'mini', label: 'Mini', price: 65000 },
      { id: 'standard', label: 'Standard', price: 89000 },
      { id: 'premium', label: 'Premium', price: 125000, note: 'Incluye tarjeta personalizada' }
    ],
    defaultSizeId: 'standard',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967830/Amor_c3owyt.jpg'],
    tags: ['Romantico', 'Regalo'],
    featured: true
  },
  {
    name: 'Galletas Decoradas',
    slug: 'galletas-decoradas',
    category: 'detalles',
    occasion: ['detalle', 'evento'],
    description: 'Galletas decoradas perfectas para regalos, eventos y recuerdos.',
    priceFrom: 55000,
    sizes: [
      { id: 'x10', label: 'Caja x10', price: 55000 },
      { id: 'x20', label: 'Caja x20', price: 99000, note: 'Ideal souvenirs' }
    ],
    defaultSizeId: 'x10',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967829/Amor_epvu2z.jpg'],
    tags: ['Personalizable', 'Detalle']
  },
  {
    name: 'Caja Brownies (Cuadrícula)',
    slug: 'caja-brownies-cuadricula',
    category: 'cajas',
    occasion: ['regalo', 'empresarial'],
    description: 'Caja surtida de brownies, ideal para oficina o regalo.',
    priceFrom: 68000,
    sizes: [
      { id: 'x8', label: 'Caja x8', price: 52000 },
      { id: 'x12', label: 'Caja x12', price: 68000 },
      { id: 'x20', label: 'Caja x20', price: 105000, note: 'Incluye tarjeta personalizada' }
    ],
    defaultSizeId: 'x12',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967829/Amor_fad3s5.jpg'],
    tags: ['Ideal oficina', 'Entrega rapida'],
    featured: true
  },
  {
    name: 'Torta Red Velvet',
    slug: 'torta-red-velvet',
    category: 'tortas',
    occasion: ['cumpleanos', 'familiar'],
    description: 'Torta red velvet con acabado elegante en buttercream.',
    priceFrom: 145000,
    sizes: [
      { id: '8p', label: '8 porciones', price: 145000, serves: '8 porciones' },
      { id: '12p', label: '12 porciones', price: 185000, serves: '12 porciones' },
      { id: '18p', label: '18 porciones', price: 245000, note: 'Incluye figura basica' }
    ],
    defaultSizeId: '8p',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967829/44030994-FE0B-4175-9526-D73DEF04F4D7_hcmlti.jpg'],
    tags: ['Favorita', 'Suave']
  },
  {
    name: 'Tarta Frutos Rojos (Amor)',
    slug: 'tarta-frutos-rojos-amor',
    category: 'postres',
    occasion: ['romantico', 'aniversario', 'detalle'],
    description: 'Tarta con frutas frescas, perfecta para fechas especiales.',
    priceFrom: 52000,
    sizes: [
      { id: 'mini', label: 'Mini', price: 52000 },
      { id: 'mediana', label: 'Mediana', price: 79000 },
      { id: 'grande', label: 'Grande', price: 112000 }
    ],
    defaultSizeId: 'mini',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967829/Amor_fanewu.jpg'],
    tags: ['Romantico', 'Tendencia']
  },
  {
    name: 'Galletas Chips',
    slug: 'galletas-chips',
    category: 'postres',
    occasion: ['snack', 'regalo'],
    description: 'Galletas tipo cookie con chips, perfectas para compartir.',
    priceFrom: 46000,
    sizes: [
      { id: 'x8', label: 'Caja x8', price: 46000 },
      { id: 'x12', label: 'Caja x12', price: 64000 },
      { id: 'x20', label: 'Caja x20', price: 98000 }
    ],
    defaultSizeId: 'x8',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967828/Amor_ov2ddl.jpg'],
    tags: ['Recien horneadas', 'Crunchy']
  },
  {
    name: 'Box Regalo Amor (Variante)',
    slug: 'box-regalo-amor-2',
    category: 'detalles',
    occasion: ['romantico', 'detalle'],
    description: 'Variante de box para regalo, ideal para sorprender.',
    priceFrom: 65000,
    sizes: [
      { id: 'mini', label: 'Mini', price: 65000 },
      { id: 'standard', label: 'Standard', price: 89000 }
    ],
    defaultSizeId: 'standard',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967828/Amor_mgvfpq.jpg'],
    tags: ['Regalo', 'Amor']
  },
  {
    name: 'Torta Corazón San Valentín',
    slug: 'torta-corazon-san-valentin',
    category: 'tortas',
    occasion: ['romantico', 'san-valentin'],
    description: 'Torta en forma de corazon con mensaje personalizado.',
    priceFrom: 118000,
    sizes: [
      { id: '6p', label: '6 porciones', price: 118000 },
      { id: '10p', label: '10 porciones', price: 156000 },
      { id: '14p', label: '14 porciones', price: 199000, note: 'Incluye caja premium' }
    ],
    defaultSizeId: '6p',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967828/ChatGPT_Image_1_mar_2026_09_01_32_p.m._vnz10u.jpg'],
    tags: ['Edicion especial', 'Romantica'],
    featured: true
  },
  {
    name: 'Rosas Rojas (Detalle)',
    slug: 'rosas-rojas',
    category: 'detalles',
    occasion: ['romantico', 'aniversario'],
    description: 'Detalle floral para complementar tus regalos y celebraciones.',
    priceFrom: 0,
    sizes: [{ id: 'detalle', label: 'Detalle', price: 0 }],
    defaultSizeId: 'detalle',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967828/Amor_ydpcfp.jpg'],
    tags: ['Romantico']
  },
  {
    name: 'Tarta Limón',
    slug: 'tarta-limon',
    category: 'postres',
    occasion: ['familiar', 'domingo'],
    description: 'Tarta de limón con base suave y sabor fresco.',
    priceFrom: 52000,
    sizes: [
      { id: 'familiar', label: 'Familiar', price: 52000, serves: '6 porciones' },
      { id: 'grande', label: 'Grande', price: 74000, serves: '10 porciones' }
    ],
    defaultSizeId: 'familiar',
    images: ['https://res.cloudinary.com/dscih1izv/image/upload/v1772967828/12C7669D-9EAB-4330-80F4-4B451C6209F1_rtzsut.jpg'],
    tags: ['Fresco', 'Acido dulce']
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