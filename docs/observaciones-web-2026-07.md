# Observaciones Web 2026-07-22

## Fuente analizada
- Documento: `/Users/juanarias/Downloads/Observaciones web.docx`
- Zips analizados:
  - `/Users/juanarias/Downloads/cupcakes.zip`
  - `/Users/juanarias/Downloads/Carrusel para trufas.zip`
  - `/Users/juanarias/Downloads/galletas.zip`
  - `/Users/juanarias/Downloads/Desayunos.zip`
  - `/Users/juanarias/Downloads/Eventos & catering.zip`
  - `/Users/juanarias/Downloads/fechas especiales.zip`
  - `/Users/juanarias/Downloads/navidad.zip`

## Resumen de lo solicitado por cliente
### Tarea 1
Agregar al producto `Cupcakes personalizados` un desplegable `Sabores` con estas opciones:
- vanilla
- red velvet
- chocolate

### Tarea 2
Agregar producto nuevo `Tabla de quesos`:
- categoría: `fechas especiales`
- precio: `$89.000`
- descripción con lista fija de incluidos
- foto de portada
- fotos para carrusel

Agregar producto/categoría `Desayuno`:
- categoría: `desayunos`
- precio base: `$52.000`
- incluye lista fija
- desplegable `Huevos al gusto`
- desplegable `Pancakes o waffles`
- subdesplegable `Topping`
- extras fit
- adiciones extras
- foto principal y carrusel para desayunos

### Tarea 3
Rehacer sección `Celebraciones` para que muestre subcategorías con texto + carrusel + CTA WhatsApp:
- Eventos & catering
- Navidad
- Fechas especiales

### Tarea 4
Cambiar la primera foto de `Tortas personalizadas y mini cakes` por una que ya estaba al final del carrusel.

## Estado actual de la web frente a esas tareas
### Ya resuelto
- La tarea 4 ya está aplicada.
- En `Tortas personalizadas y mini cakes`, la primera imagen del carrusel ya es `postres_cakes_10_v3dsyg`.

### Falta implementar
1. `Cupcakes personalizados` aún no tiene desplegable de sabores.
2. `Tabla de quesos` aún no existe en `products.mock.ts`.
3. `Desayuno` aún no existe como producto estructurado con sus opciones.
4. La página `Celebraciones` sigue siendo básica; no tiene carruseles ni subcategorías visuales con imágenes.
5. Las nuevas imágenes ya están subidas, pero todavía no están conectadas a la UI.

## Hallazgos importantes
### 1. Falta asset identificado para Tabla de quesos
En los zips entregados no encontré una carpeta o archivo claramente asociado a `Tabla de quesos`.

Conclusión:
- puedo crear el producto y su estructura de opciones,
- pero falta confirmar cuál imagen usar como portada y cuáles como carrusel para ese producto.

### 2. Desayunos parece funcionar mejor como producto + bloque visual de categoría
El documento mezcla dos necesidades:
- un producto `Desayuno` con lógica compleja de selección,
- y una sección visual/carrusel para la categoría `Desayunos`.

Recomendación:
- usar las imágenes subidas de `desayunos` para la sección visual y para la portada del producto,
- pero mantener el producto `Desayuno` como entidad propia dentro del catálogo.

### 3. Celebraciones debe pasar de lista estática a layout editorial
La implementación actual de `src/app/pages/celebrations/celebrations.page.*` es demasiado simple para el requerimiento actual.

Recomendación:
- convertirla en una página con 3 bloques de subcategoría,
- cada bloque con:
  - título
  - mini descripción
  - CTA WhatsApp
  - carrusel lateral o superior según breakpoint

## Cloudinary: assets ya subidos
Se dejó script reutilizable:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/scripts/cloudinary_batch_upload.py`

Se dejó manifiesto generado:
- `/Users/juanarias/Workspaces/Web/deliciasBakery/docs/cloudinary-assets-2026-07.json`

## Estructura de carpetas usada en Cloudinary
- `deliciasbakery/web/productos/cupcakes-personalizados`
- `deliciasbakery/web/productos/trufas`
- `deliciasbakery/web/productos/galletas`
- `deliciasbakery/web/categorias/desayunos`
- `deliciasbakery/web/categorias/celebraciones/eventos-catering`
- `deliciasbakery/web/categorias/celebraciones/fechas-especiales`
- `deliciasbakery/web/categorias/celebraciones/navidad`

## Conteo de assets subidos
- cupcakes: 6
- trufas: 2
- galletas: 7
- desayunos: 3
- eventos-catering: 18
- fechas-especiales: 11
- navidad: 12

## URLs de referencia rápida
### Cupcakes personalizados
- `https://res.cloudinary.com/dscih1izv/image/upload/v1784736450/deliciasbakery/web/productos/cupcakes-personalizados/cupcakes-01.jpg`
- `https://res.cloudinary.com/dscih1izv/image/upload/v1784736454/deliciasbakery/web/productos/cupcakes-personalizados/cupcakes-02.jpg`
- `https://res.cloudinary.com/dscih1izv/image/upload/v1784736457/deliciasbakery/web/productos/cupcakes-personalizados/cupcakes-03.jpg`

### Desayunos
- `https://res.cloudinary.com/dscih1izv/image/upload/v1784736548/deliciasbakery/web/categorias/desayunos/desayunos-portada.png`
- `https://res.cloudinary.com/dscih1izv/image/upload/v1784736557/deliciasbakery/web/categorias/desayunos/desayunos-01.jpg`
- `https://res.cloudinary.com/dscih1izv/image/upload/v1784736567/deliciasbakery/web/categorias/desayunos/desayunos-02.jpg`

### Eventos & catering
Ver manifiesto JSON. Carpeta:
- `deliciasbakery/web/categorias/celebraciones/eventos-catering`

### Fechas especiales
Ver manifiesto JSON. Carpeta:
- `deliciasbakery/web/categorias/celebraciones/fechas-especiales`

### Navidad
Ver manifiesto JSON. Carpeta:
- `deliciasbakery/web/categorias/celebraciones/navidad`

## Re-prompt operativo recomendado
Usar este prompt como base para la siguiente ejecución:

> Ajusta la web Angular 21 de Delicias Bakery usando la estructura actual, sin reescribir desde cero. Implementa los cambios solicitados en `docs/observaciones-web-2026-07.md` usando como fuente de assets `docs/cloudinary-assets-2026-07.json`. Tareas obligatorias: 1) en `Cupcakes personalizados`, agrega selector de sabor con opciones `vanilla`, `red velvet`, `chocolate`, y que el sabor viaje al mensaje de WhatsApp; 2) crea el producto `Desayuno` en `products.mock.ts` con precio base `$52.000`, descripción fija, opciones `Huevos al gusto`, `Pancakes o waffles`, `Topping`, extras fit y adiciones, todo seleccionable desde la página de detalle y enviado al mensaje de WhatsApp; 3) crea el producto `Tabla de quesos` en categoría `fechas-especiales` con precio `$89.000`, descripción y lista de incluidos, dejando comentado o documentado que falta confirmación de imágenes si no están definidas; 4) rehace la página `Celebraciones` para mostrar tres bloques editoriales con carrusel e hipervínculo a WhatsApp: `Eventos & catering`, `Navidad` y `Fechas especiales`, usando las imágenes ya subidas a Cloudinary; 5) reutiliza la lógica existente de carrusel del detalle donde convenga, pero sin romper responsive ni accesibilidad; 6) mantén TypeScript limpio, sin romper el build. Al final entrega archivos modificados, decisiones tomadas y cualquier asset faltante que deba confirmar el cliente.

## Recomendación de implementación
Orden sugerido para la próxima pasada:
1. Extender modelo de producto si hace falta soportar nuevas opciones complejas para `Desayuno`.
2. Crear/actualizar datos en `products.mock.ts`.
3. Extender `product-detail.page.ts/html` para nuevas variantes de selección.
4. Rehacer `celebrations.page.ts/html/css` con data estructurada y carruseles.
5. Conectar nuevas imágenes Cloudinary.
6. Ejecutar build y validar.
