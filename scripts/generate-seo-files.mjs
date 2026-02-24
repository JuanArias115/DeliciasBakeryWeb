import { writeFileSync } from 'node:fs';

const siteUrl = (process.env.SITE_URL || 'https://deliciasbakerychia.com').replace(/\/$/, '');
const today = new Date().toISOString().split('T')[0];

const routes = [
  '/inicio',
  '/productos',
  '/celebraciones',
  '/galeria',
  '/resenas',
  '/contacto',
  '/politicas'
];

const sitemapEntries = routes
  .map(
    (path) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/inicio' ? '1.0' : '0.8'}</priority>\n  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`;

const robots = `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;

writeFileSync('public/sitemap.xml', sitemap, 'utf8');
writeFileSync('public/robots.txt', robots, 'utf8');

console.log(`Generated sitemap.xml and robots.txt for ${siteUrl}`);
