export const siteConfig = {
  brandName: 'Delicias Bakery',
  legalName: 'Delicias Bakery',
  tagline: 'Postres y pasteleria por encargo en Chia-Cajica',
  location: 'Chia-Cajica, Cundinamarca, Colombia',
  serviceAreas: ['Chia', 'Cajica', 'Norte de Bogota'],
  addressRegion: 'Cundinamarca',
  country: 'CO',
  whatsappNumber: '573001112233',
  whatsappDisplay: '+57 300 111 2233',
  instagramUrl: 'https://www.instagram.com/deliciasbakery.chia/',
  baseOrderNotice: 'Pedidos por encargo con minimo 24 horas de anticipacion.',
  orderSteps: ['Elige tu producto o inspiracion', 'Escribenos por WhatsApp', 'Confirmas fecha, direccion y pago'],
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
  { label: 'Galeria', path: '/galeria' },
  { label: 'Resenas', path: '/resenas' },
  { label: 'Contacto', path: '/contacto' }
] as const;
