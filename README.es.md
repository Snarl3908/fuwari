# 🍥Fuwari

Un tema estático para blogs construido con [Astro](https://astro.build).

[**🖥️ Demostración en Vivo (Vercel)**](https://fuwari.vercel.app)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;
[**📦 Versión Antigua de Hexo**](https://github.com/saicaca/hexo-theme-vivia)&nbsp;&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;

> Versión del README: `2024-04-07`

![Imagen de Vista Previa](https://raw.githubusercontent.com/saicaca/resource/main/fuwari/home.png)

## ✨ Características

- [x] Construido con [Astro](https://astro.build) y [Tailwind CSS](https://tailwindcss.com)
- [x] Animaciones suaves y transiciones de página
- [x] Modo claro / oscuro
- [x] Colores del tema y banner personalizables
- [x] Diseño responsivo
- [ ] Comentarios
- [x] Búsqueda
- [ ] Tabla de contenidos
- [x] Integración con Google Analytics 4

## 🚀 Cómo Usar

1. [Genera un nuevo repositorio](https://github.com/saicaca/fuwari/generate) desde esta plantilla o haz un fork de este repositorio.
2. Para editar tu blog localmente, clona tu repositorio, ejecuta `pnpm install` y `pnpm add sharp` para instalar las dependencias.
   - Instala [pnpm](https://pnpm.io) `npm install -g pnpm` si aún no lo tienes.
3. Edita el archivo de configuración `src/config.ts` para personalizar tu blog.
4. Ejecuta `pnpm new-post <nombre-de-archivo>` para crear una nueva entrada y edítala en `src/content/posts/`.
5. Despliega tu blog en Vercel, Netlify, GitHub Pages, etc., siguiendo [las guías](https://docs.astro.build/en/guides/deploy/). Necesitas editar la configuración del sitio en `astro.config.mjs` antes del despliegue.

## ⚙️ Cabecera de las Entradas

```yaml
---
title: Mi Primer Post en el Blog
published: 2023-09-09
description: Esta es la primera entrada de mi nuevo blog con Astro.
image: /images/cover.jpg
tags: [Foo, Bar]
category: Front-end
draft: false
---
```

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde una terminal:

| Comando                             | Acción                                            |
|:------------------------------------|:--------------------------------------------------|
| `pnpm install` y `pnpm add sharp`   | Instala las dependencias                          |
| `pnpm dev`                          | Inicia el servidor de desarrollo local en `localhost:4321` |
| `pnpm build`                        | Compila tu web para producción en `./dist/`     |
| `pnpm preview`                      | Previsualiza la web localmente, antes del despliegue |
| `pnpm new-post <nombre-de-archivo>` | Crea una nueva entrada                            |
| `pnpm astro ...`                    | Ejecuta comandos CLI como `astro add`, `astro check` |
| `pnpm astro --help`                 | Obtén ayuda para usar el CLI de Astro             |

## 🚀 Google Analytics 4

> Fecha de adición: 2023-11-28

Fuwari admite la integración con Google Analytics 4, que está desactivada por defecto. Para habilitar el seguimiento de GA4:

1. Obtén tu ID de medición de GA4 (formato: G-XXXXXXXXXX) desde tu cuenta de Google Analytics
2. Abre `src/config.ts`
3. Encuentra la sección `analytics` y actualiza la configuración:
```typescript
analytics: {
  ga4: {
    enable: true,                    // Establece como true para habilitar GA4
    measurementId: 'G-XXXXXXXXXX',   // Reemplaza con tu ID de medición de GA4
  }
}
```

El código de seguimiento de GA4 solo se incluirá en la compilación cuando `enable` esté establecido como `true` y se proporcione un `measurementId` válido. Esto asegura un rendimiento óptimo cuando GA4 no está en uso.

Características principales de la integración con GA4:
- 🔒 Desactivado por defecto para privacidad y rendimiento
- 🔄 Fácil de activar/desactivar mediante configuración
- 🚀 Sin impacto en el tamaño de compilación cuando está desactivado
- 📊 Soporta todas las funciones estándar de seguimiento de GA4
- 🛠 Configuración basada en archivos sin modificación de código
