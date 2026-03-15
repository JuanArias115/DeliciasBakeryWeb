export const siteConfig = {
  brandName: 'Delicias Bakery',
  legalName: 'Delicias Bakery',
  tagline: 'Detalles, postres y pastelería por encargo en Chía y Cajicá',
  location: 'Chía - Cajicá, Cundinamarca, Colombia',
  serviceAreas: ['Chía', 'Cajicá', 'Norte de Bogotá'],
  addressRegion: 'Cundinamarca',
  country: 'CO',
  whatsappNumber: '573122859640',
  whatsappDisplay: '+57 312 285 9640',
  instagramUrl: 'https://www.instagram.com/deliciasbakery.chia/',
  tiktokUrl: 'https://www.tiktok.com/@deliciasbakery.chia',
  baseOrderNotice: 'Pedidos 100% por encargo. Agenda con mínimo 24 horas de anticipación.',
  orderSteps: ['Elige tu producto o inspiración', 'Escríbenos por WhatsApp', 'Confirmas fecha, dirección y pago'],
  businessHours: [
    'Lunes a viernes: 8:00 a.m. - 6:00 p.m.',
    'Sabados: 9:00 a.m. - 5:00 p.m.',
    'Domingos y festivos: sujeto a agenda'
  ]
} as const;

export const navigationLinks = [
  { label: 'Inicio', path: '/inicio' },
  { label: 'Productos', path: '/productos' },
  { label: 'Celebraciones', path: '/celebraciones' },
  { label: 'Galería', path: '/galeria' },
  { label: 'Reseñas', path: '/resenas' },
  { label: 'Contacto', path: '/contacto' }
] as const;
