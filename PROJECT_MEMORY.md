# Delicias Bakery - Memoria Técnica y Handoff

Última actualización documentada: 2026-07-22

## 1. Propósito de este archivo
Este documento consolida la memoria operativa y técnica del proyecto web `Delicias Bakery` para evitar perder contexto entre cambios futuros. Incluye arquitectura, decisiones de producto, integraciones, despliegue, SEO, analytics, estructura de datos, lógica de personalización y puntos sensibles.

No guarda secretos privados. Solo documenta llaves públicas, identificadores, dominios, variables y convenciones necesarias para operar el proyecto.

## 2. Resumen ejecutivo
- Proyecto: sitio web comercial Angular para `Delicias Bakery`.
- Objetivo principal: conversión a pedidos por WhatsApp.
- Negocio: postres, tortas, detalles y pedidos por encargo.
- Cobertura comunicada: Chía, Cajicá y zonas cercanas / norte de Bogotá.
- CTA principal global: botón flotante de WhatsApp.
- CTA secundario: botones de texto/ícono hacia WhatsApp en hero, navbar y detalle de producto.
- Sitio actual basado en datos mock locales, sin backend propio para catálogo.
- Contacto/pedido: se construye un mensaje y se redirige a `wa.me`.
- Deploy actual: contenedor Docker Nginx sirviendo build Angular.
- Infra adicional: el mismo Nginx también hace proxy a `BakeryFlow` bajo `/bakeryFlow/`.

## 3. Stack técnico
### Framework y lenguaje
- Angular 21 standalone.
- TypeScript 5.9.
- Angular Router con `loadComponent` por página.
- Signals en varias páginas (`signal`, `computed`).
- Formularios reactivos en detalle de producto y contacto.

### UI / librerías
- Sistema de UI propio bajo `src/app/shared/ui`.
- Iconografía estandarizada con FontAwesome encapsulada en `ui-icon`.
- Tipografías desde Google Fonts:
  - `DM Serif Display`
  - `Manrope`

### Build / tooling
- Angular CLI 21.1.5.
- Build con `@angular/build:application`.
- `npm` como package manager.
- `vitest` instalado para tests.

## 4. Estructura principal del repo
### Archivos raíz clave
- `/Users/juanarias/Workspaces/Web/deliciasBakery/package.json`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/angular.json`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/Dockerfile`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/docker-compose.yml`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/nginx.conf`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/PROJECT_MEMORY.md`

### App Angular
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/app.routes.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/app.config.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/layout/`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/shared/ui/`

### Assets públicos SEO
- `/Users/juanarias/Workspaces/Web/deliciasBakery/public/robots.txt`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/public/sitemap.xml`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/public/favicon.ico`

## 5. Scripts disponibles
Definidos en `/Users/juanarias/Workspaces/Web/deliciasBakery/package.json`.

- `npm start`
  - corre `ng serve`
- `npm run build`
  - ejecuta `prebuild` y luego `ng build`
- `npm run build:prod`
  - fuerza `SITE_URL=https://deliciasbakerychia.com` y ejecuta build producción
- `npm run seo:generate`
  - genera `robots.txt` y `sitemap.xml`
- `npm test`
  - ejecuta unit tests

Importante:
- `prebuild` corre automáticamente `seo:generate`, así que cada build regenera sitemap y robots.

## 6. Variables, IDs y llaves públicas documentadas
### Environments
Archivo dev:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/environments/environment.ts`

Archivo prod:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/environments/environment.production.ts`

Valores actuales:
- `production`: `false` en dev, `true` en prod
- `siteUrl` dev: `http://localhost:4200`
- `siteUrl` prod: `https://deliciasbakerychia.com`
- `gaMeasurementId`: `G-ZGWMBNKQLQ`

### Google Analytics 4
Cargado en:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/index.html`

Datos actuales:
- Script `gtag.js` de Google Tag Manager
- Measurement ID: `G-ZGWMBNKQLQ`

### Cloudinary
Helper central:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/lib/cloudinary.ts`

Dato público actual:
- `CLOUDINARY_CLOUD_NAME = 'dscih1izv'`

Convención actual de tamaños:
- `thumb = 600`
- `detail = 1400`
- adicionalmente el helper acepta `1200`

### WhatsApp
Configurado en:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/config/site.config.ts`

Datos actuales:
- número crudo: `573122859640`
- formato visible: `+57 312 285 9640`
- links generados con `https://wa.me/<numero>?text=...`

### Angular CLI analytics
En `/Users/juanarias/Workspaces/Web/deliciasBakery/angular.json` aparece:
- `cli.analytics = ef8955c1-19eb-4661-a923-e5d42bf19210`

Esto es del tooling de Angular CLI, no de negocio.

## 7. Dominios y URLs relevantes
### Dominio configurado para SEO en producción
- `https://deliciasbakerychia.com`

### Dominio mencionado en README / proxy BakeryFlow
- `https://deliciasbakery.shop`

### Riesgo actual importante
Hay una inconsistencia documental y posiblemente operativa:
- SEO y `environment.production.ts` apuntan a `deliciasbakerychia.com`
- README y endpoints BakeryFlow públicos apuntan a `deliciasbakery.shop`

Eso impacta:
- canonical
- sitemap
- robots
- Open Graph
- indexación
- trazabilidad de tráfico

Recomendación fuerte:
- unificar un dominio principal de producción y reflejarlo en:
  - `src/environments/environment.production.ts`
  - `package.json` script `build:prod`
  - `public/sitemap.xml`
  - `public/robots.txt`
  - README si el público real es `.shop`

## 8. Navegación y rutas actuales
Definidas en:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/app.routes.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/config/site.config.ts`

### Rutas activas
- `/inicio`
- `/productos`
- `/productos/:slug`
- `/celebraciones`
- `/galeria`
- `/resenas`
- `/reseñas` redirige a `/resenas`
- `/contacto`
- `/politicas`

### Navegación principal visible en header
Actualmente se muestran:
- Inicio
- Productos
- Celebraciones
- Reseñas
- Contacto

Nota:
- `Galería` sigue existiendo como ruta, pero fue ocultada del menú principal.
- Aun así sigue incluida en sitemap y disponible por URL directa.

## 9. Arquitectura funcional de la app
### Layout global
Archivo principal:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/app.html`

Orden actual:
1. skip link
2. header
3. `<main>` con router outlet
4. footer
5. botón flotante de WhatsApp

### Configuración Angular global
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/app.config.ts`

Puntos relevantes:
- `LOCALE_ID = 'es-CO'`
- restauración de scroll y anchor scrolling activados

## 10. Design system / UI base
Componentes compartidos en:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/shared/ui/`

Componentes relevantes:
- `accordion`
- `badge`
- `button`
- `card`
- `icon`
- `input`
- `product-image`
- `section-title`

### Sistema de íconos
La app quedó estandarizada con FontAwesome, encapsulado vía:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/shared/ui/icon/icon.component.ts`

Razón:
- corregir inconsistencia previa de íconos que se veían pequeños, vacíos o deformados.

### Botones relevantes
- CTA de navbar a WhatsApp
- CTA hero a WhatsApp
- CTA detalle de producto a WhatsApp
- FAB global de WhatsApp

## 11. Header, branding y footer
### Header
Archivos:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/layout/header.component.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/layout/header.component.html`

Estado actual:
- logo real cargado por URL Cloudinary
- texto de marca: `Delicias Bakery`
- CTA navbar: `Pedir por WhatsApp` con ícono
- menú móvil con toggle `Menú/Cerrar`

Logo actual:
- `https://res.cloudinary.com/dscih1izv/image/upload/v1772967829/Pastel_Pink_Feminine_Aesthetic_Handwritten_Lifestyle_Blogger_Circle_Logo_-_2_zzyuzs.jpg`

### Footer
Archivos:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/layout/footer.component.html`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/layout/footer.component.ts`

Contenido actual:
- ubicación
- aviso de pedidos por encargo
- disponibilidad
- redes
- WhatsApp
- links útiles

## 12. Página Home: contenido actual
Archivos:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/home/home.page.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/home/home.page.html`

### Hero actual
- eyebrow: `Pastelería por encargo`
- h1 en tres líneas:
  - `Delicias Bakery:`
  - `detalles que elevan`
  - `cada celebración`
- párrafo enfocado en Chía/Cajicá, detalles personalizados y experiencia cercana
- CTA principal: `Pedir por WhatsApp`
- CTA secundario: `Ver catálogo`
- aviso: mínimo 24 horas

### Tarjeta lateral del hero
- título `Chía-Cajicá` con ícono de ubicación
- bullets:
  - entregas a domicilio bajo encargo
  - personalización de diseño
  - respuesta rápida por WhatsApp

### Secciones home actuales
- Destacados de la semana
- Cómo pedir
- Pedidos y disponibilidad
- Reseñas
- Preguntas frecuentes

## 13. Catálogo y modelo de producto
### Tipos y modelo
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/models/product.model.ts`

### Categorías permitidas
- `cheesecakes-tiramisu`
- `brownies`
- `tortas-mini-cakes`
- `postres-detalles`
- `fechas-especiales`
- `desayunos`
- `linea-fit`
- `catering`

### Campos principales del producto
- `name`
- `slug`
- `category`
- `occasion`
- `description`
- `details?`
- `images`
- `tags`
- `featured?`
- `priceFrom?`
- `sizes?`
- `defaultSizeId?`
- `flavorOptions?`
- `defaultFlavorId?`
- `coatingOptions?`
- `defaultCoatingId?`
- `toppingOptions?`
- `defaultToppingId?`
- `mixOptions?`
- `mixTotal?`
- `mixLabel?`
- `priceLabelMode?`
- `autoRotateImages?`

### Helpers de pricing
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/helpers/product-pricing.helper.ts`

Funciones:
- `getMinPrice(product)`
- `getDefaultSize(product)`
- `getSelectedSize(product, sizeId)`

## 14. Catálogo: comportamiento actual
Archivos:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/products/products.page.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/products/products.page.html`

### Filtros
- búsqueda por texto
- categoría
- ocasión

### Lógica visual
- muestra skeleton loader inicial
- precio en cards: siempre `Desde` con `getMinPrice(product)`
- no hay botón WhatsApp por card
- CTA por card: `Ver detalle`

### Regla UX actual
Se evitó saturar el grid con íconos de WhatsApp. La conversión fuerte vive en:
- FAB global
- CTA del hero
- CTA de detalle de producto

## 15. Detalle de producto: comportamiento actual
Archivos:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/product-detail/product-detail.page.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/product-detail/product-detail.page.html`

### Form controls usados
- `quantity`
- `date`
- `address`
- `note`
- `sizeId`
- `flavorId`
- `coatingId`
- `toppingId`
- `mixCounts` manual para cajas combinables

### Lógica implementada
- selecciona tamaño
- recalcula precio visual
- agrega selección al mensaje de WhatsApp
- soporta sabores con recargo
- soporta toppings/cobertura
- soporta mezcla de sabores con cantidades
- bloquea pedido si una mezcla obligatoria no está completa

### CTA final
- botón `Pedir por WhatsApp`
- abre link construido por `WhatsAppService`

## 16. Personalizaciones por tipo de producto
### Cheesecakes
Soporte actual:
- selector de sabor
- sabores clásicos y premium
- sabores premium con recargo de `$7.000`
- cambio de imagen según tamaño en ciertos cheesecakes mediante `size.image`

Sabores clásicos documentados:
- Frutos Rojos
- Maracuyá
- Fresa
- Mora
- Limón
- Arequipe
- Nutella
- Lulo
- Mango
- Durazno
- Oreo

Sabores premium documentados:
- Arándanos
- Milo
- Chocoramo
- Mix (Hershey’s, M&M, Oreo o Milo)

### Brownies
Soporte actual:
- selector de topping

Brownie Bites / Brownie Redondo:
- Azúcar pulverizada (clásico)
- Arequipe y Oreo
- Chocolate blanco + chispas de corazón
- Chocolate oscuro + chispas de corazón
- Chocolate rojo + chispas de corazón

Brownie Corazón:
- Azúcar pulverizada (clásico)
- Chocolate rojo + chispas de corazón

### Trufas
Soporte actual:
- selector de cobertura
- selector de topping

Coberturas:
- Chocolate blanco
- Chocolate oscuro
- Mixto (chocolate blanco y oscuro)

Toppings:
- Chispas de corazón
- Glitter comestible dorado
- Glitter comestible plateado
- Chispas de colores

### Cookies estilo New York
Soporte actual:
- mezcla personalizable de sabores
- `mixTotal = 4`
- permite elegir combinaciones como `1 de un sabor, 2 de otro, etc.`
- el pedido se bloquea hasta completar las 4 unidades

Sabores disponibles:
- Chocochips
- Nutella
- Oreo
- Galleta Milo
- Hershey’s Blanca
- Pistacho
- Birthday Cake
- Red Velvet
- Nueces y Almendras

### Tortas personalizadas y mini cakes
Soporte actual:
- producto priorizado como primero del catálogo
- `priceLabelMode = 'from'`
- precio visible desde `$36.000`
- carrusel automático con controles manuales izquierda/derecha
- layout vertical para fotos retrato
- primera imagen actual del carrusel: `postres_cakes_10_v3dsyg.jpg`

## 17. Orden actual del catálogo y notas importantes
El arreglo de productos vive en:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/products.mock.ts`

Nota importante:
- `Tortas personalizadas y mini cakes` fue movido al primer lugar del arreglo para que aparezca primero en catálogo.

También hubo limpieza del carrusel:
- se quitó una imagen final que no existía del carrusel de cakes.

## 18. Imágenes y Cloudinary
### Helper
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/lib/cloudinary.ts`

Funciones:
- `cldImage(publicId, { width })`
- `cldSized(imageOrPublicId, width)`

Características:
- construye URLs con `f_auto,q_auto,w_<width>`
- soporta pasar `publicId` o URL Cloudinary ya completa
- extrae el public ID automáticamente si recibe URL completa

### Anchos estándar actuales
- catálogo/cards: `600`
- detalle: `1400`

### Componente de imagen
Archivos:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/shared/ui/product-image/product-image.component.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/shared/ui/product-image/product-image.component.css`

Inputs relevantes:
- `variant: 'card' | 'detail'`
- `frame: 'default' | 'portrait'`
- `forceCover`
- `width`
- `height`
- `loading`
- `fetchpriority`

Comportamiento:
- detecta orientación al cargar (`portrait`, `landscape`, `square`)
- cards usan `cover`
- detalle usa fondo suave y puede entrar en `contain` o `cover` según reglas
- carrusel de cakes usa `frame='portrait'` y `forceCover=true`

## 19. Reseñas y FAQs
### Reseñas reales
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/reviews.mock.ts`

Actualmente se cargan 8 reseñas reales con nombre, rating, texto y fecha.

### FAQs
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/faqs.mock.ts`

Temas cubiertos:
- anticipación del pedido
- domicilios en Chía y Cajicá
- personalización
- medios de pago
- eventos empresariales

## 20. SEO implementado
### Servicio central
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/seo.service.ts`

Hace:
- `title`
- `meta description`
- `robots`
- Open Graph
- Twitter cards
- canonical
- JSON-LD

### JSON-LD
Factory:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/schema.factory.ts`

Schemas actuales:
- `Bakery` / LocalBusiness-like para marca
- `Product` para detalle de producto

### Imagen OG default
Generada desde Cloudinary con:
- `deliciasbakery/brand/og-default`

### Resolver SEO
Existen resolvers para SEO y producto:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/resolvers/seo.resolver.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/resolvers/product.resolver.ts`

## 21. SEO estático: sitemap y robots
Script:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/scripts/generate-seo-files.mjs`

Comportamiento:
- usa `SITE_URL` si está definida
- si no, cae a `https://deliciasbakerychia.com`
- genera:
  - `/public/sitemap.xml`
  - `/public/robots.txt`

### Rutas incluidas hoy en sitemap
- `/inicio`
- `/productos`
- `/celebraciones`
- `/galeria`
- `/resenas`
- `/contacto`
- `/politicas`

Nota importante:
- aunque `Galería` está oculta del menú, aún sigue en sitemap.

## 22. Analytics implementado
Servicio:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/analytics.service.ts`

### Eventos usados
- `click_whatsapp`
- `view_product`
- `submit_contact` estaba previsto por requerimiento, revisar si se dispara actualmente desde contacto antes de depender de él para reporting

### Cómo funciona
- empuja a `window.dataLayer`
- si `window.gtag` existe y hay `gaMeasurementId`, dispara `gtag('event', ...)`

### Observación operativa
GA4 está cargado globalmente en `index.html`, no lazy.

## 23. WhatsApp: construcción de mensajes
Servicio:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/whatsapp.service.ts`

### Payload soportado
- `product`
- `size`
- `flavor`
- `coating`
- `topping`
- `mix`
- `quantity`
- `date`
- `address`
- `note`

### Formato del mensaje
Empieza con:
- `Hola Delicias Bakery, quiero hacer un pedido:`

Luego agrega líneas según lo seleccionado.

## 24. Infraestructura y despliegue
### Dockerfile
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/Dockerfile`

Stages:
1. `node:20-alpine` para build
2. `nginx:alpine` para servir estáticos

### docker-compose
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/docker-compose.yml`

Servicio actual:
- `web`

Expone:
- `80:80`

Se conecta a redes:
- `default`
- `bakeryflow_internal` externa

### Nginx
Archivo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/nginx.conf`

Comportamiento:
- sirve Angular SPA en `/`
- proxy frontend BakeryFlow en `/bakeryFlow/`
- proxy backend BakeryFlow en `/bakeryFlow/api/`
- redirect de `/bakeryFlow` a `/bakeryFlow/`
- redirect de `/bakeryFlow/api` a `/bakeryFlow/api/`
- usa resolver Docker `127.0.0.11`

### Upstreams BakeryFlow actuales
- frontend: `http://bakeryflow-frontend:8085`
- backend: `http://bakeryflow-backend:8086`

### Punto de sensibilidad
En Nginx, `location /bakeryFlow/api/` debe quedar antes de `location /bakeryFlow/` para que el API no caiga en el frontend.

## 25. Remote Git actual
Remote principal:
- `origin https://github.com/JuanArias115/DeliciasBakeryWeb.git`

## 26. Contenido de negocio centralizado
Archivo principal de config:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/config/site.config.ts`

Valores centrales actuales:
- `brandName = Delicias Bakery`
- `legalName = Delicias Bakery`
- `tagline = Detalles, postres y pastelería por encargo en Chía y Cajicá`
- `location = Chía - Cajicá, Cundinamarca, Colombia`
- `serviceAreas = ['Chía', 'Cajicá', 'Norte de Bogotá']`
- `addressRegion = Cundinamarca`
- `country = CO`
- `instagramUrl = https://www.instagram.com/deliciasbakery.chia/`
- `tiktokUrl = https://www.tiktok.com/@deliciasbakery.chia`
- `baseOrderNotice = Pedidos 100% por encargo. Agenda con mínimo 24 horas de anticipación.`

## 27. Estado actual de dominio, marca y SEO: observaciones críticas
1. El sitio mezcla `deliciasbakerychia.com` con `deliciasbakery.shop`.
2. `sitemap.xml` hoy refleja la variante `.com`.
3. README del proxy BakeryFlow habla de `.shop`.
4. Si la web pública principal hoy corre en `.shop`, el SEO está desalineado.
5. Si la web pública principal hoy corre en `.com`, entonces BakeryFlow está documentado sobre otro host y eso también debe aclararse.

Esto debería resolverse antes de seguir invirtiendo en SEO.

## 28. Pendientes recomendados
### Pendientes de alta prioridad
1. Unificar dominio principal real de producción.
2. Revisar si `submit_contact` efectivamente se está disparando desde la página de contacto.
3. Verificar si `Galería` debe seguir indexándose si está oculta del menú.
4. Revisar la URL final pública del favicon, OG image y canónicos en producción real.
5. Confirmar si `tiktokUrl` es la cuenta correcta definitiva.

### Pendientes de mantenimiento
1. Reemplazar cualquier imagen problemática en formatos menos compatibles si aparece un caso real de navegador.
2. Mantener actualizadas reseñas reales cuando cambien.
3. Si se agregan productos nuevos con lógica especial, documentarlos aquí.
4. Si se añade backend CMS o catálogo real, este archivo debe actualizarse.

## 29. Cómo editar el proyecto sin romper la lógica actual
### Si cambias el número de WhatsApp
Editar:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/config/site.config.ts`

### Si cambias dominio real
Editar como mínimo:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/environments/environment.production.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/package.json` si usas `build:prod`
- regenerar sitemap/robots

### Si agregas un producto nuevo
Editar:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/products.mock.ts`
- opcionalmente `src/app/models/product.model.ts` si el producto necesita nueva lógica de personalización

### Si agregas nueva categoría
Editar:
- `ProductCategory` en `product.model.ts`
- `PRODUCT_CATEGORY_LABELS` en `products.mock.ts`
- `PRODUCT_CATEGORIES` en `products.mock.ts`

### Si agregas nuevas ocasiones
Editar:
- `OCCASIONS` en `products.mock.ts`
- las ocasiones por producto en el mismo archivo

### Si agregas un nuevo tipo de personalización
Hoy existen estos patrones reutilizables:
- `sizes`
- `flavorOptions`
- `toppingOptions`
- `coatingOptions`
- `mixOptions`

Si lo nuevo no cabe ahí, probablemente toque extender `Product` y `product-detail.page.ts`.

## 30. Convenciones útiles ya establecidas
- idioma de UI: español Colombia
- moneda: COP
- locale Angular: `es-CO`
- cards de catálogo sin CTA fuerte a WhatsApp
- detalle como centro de conversión por producto
- FAB como CTA global persistente
- rutas limpias y slugs manuales
- Cloudinary como fuente de imágenes

## 31. Archivos clave que conviene leer antes de tocar algo grande
### Negocio y branding
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/config/site.config.ts`

### Catálogo y contenido
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/products.mock.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/reviews.mock.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/data/faqs.mock.ts`

### Conversión y pedido
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/whatsapp.service.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/pages/product-detail/product-detail.page.ts`

### SEO y analytics
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/seo.service.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/schema.factory.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/src/app/core/services/analytics.service.ts`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/scripts/generate-seo-files.mjs`

### Infra
- `/Users/juanarias/Workspaces/Web/deliciasBakery/Dockerfile`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/docker-compose.yml`
- `/Users/juanarias/Workspaces/Web/deliciasBakery/nginx.conf`

## 32. Nota final
Este proyecto ya acumuló varias decisiones comerciales y de UX específicas. La mayor fuente de riesgo ya no es Angular, sino perder trazabilidad de:
- dominio real
- integraciones públicas
- reglas de personalización por producto
- SEO generado
- comportamiento del proxy BakeryFlow

Por eso este archivo debe tratarse como memoria viva. Si se toca alguno de esos frentes, actualizar este documento en el mismo cambio.
