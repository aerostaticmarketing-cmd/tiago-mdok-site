# Tiago Mdok — Sitio Web Oficial

Sitio web profesional de **Tiago Mdok**, productor musical, sound engineer y director musical de **Miracali Records**, radicado en Cali, Colombia.

## 🚀 Características

- **Portafolio profesional** con reproductor de audio interactivo (WaveSurfer.js)
- **Tienda digital** para vender beats e instrumentales (integración con Stripe)
- **Calculadora de servicios** para cotizaciones automáticas
- **Formulario de contacto** con integración Resend
- **Diseño orgánico** con paleta de colores personalizada
- **Responsive** en todos los dispositivos
- **SEO optimizado** con metadata y structured data

## 📦 Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS + CSS personalizado
- **Audio:** WaveSurfer.js v7
- **Formularios:** React Hook Form + Zod
- **Pagos:** Stripe Checkout (integración pendiente)
- **Email:** Resend (integración pendiente)
- **Storage:** Cloudflare R2 (integración pendiente)
- **Deploy:** Vercel

## 🛠️ Instalación y Desarrollo

### Ejecutar servidor de desarrollo
```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Compilar para producción
```bash
npm run build
npm run start
```

## 📁 Estructura del Proyecto

```
tiago-mdok-site/
├── app/
│   ├── globals.css          # Sistema de diseño y variables CSS
│   ├── layout.tsx           # Layout raíz
│   ├── page.tsx             # Home page
│   └── ...
├── components/
│   ├── Navigation/          # Navbar
│   ├── Footer/              # Footer
│   ├── AudioPlayer/         # Reproductor con WaveSurfer.js
│   └── ...
├── data/
│   └── tracks.ts            # Mock data
└── ...
```

## 📄 Páginas Implementadas

- ✅ `/` - Home page completa con todas las secciones
- 📝 `/portfolio` - Por implementar
- 📝 `/store` - Por implementar
- 📝 `/services` - Por implementar
- 📝 `/contact` - Por implementar

## 🎨 Sistema de Diseño

Paleta orgánica de colores:
- **Verdes:** Oscuro (#3D5A3E), Medio, Claro, Polvo
- **Beiges:** Grano de cine (#F5F0E8)
- **Cafés:** Textura de madera (#8B6F47)

Tipografía:
- **Títulos:** DM Serif Display
- **Cuerpo:** DM Sans

## ✅ Estado Actual

- ✅ Setup Next.js + Tailwind + Google Fonts
- ✅ Sistema de diseño (variables CSS y texturas)
- ✅ Componentes: Navigation, Footer, AudioPlayer
- ✅ Home page completa (todas las secciones)
- ✅ Reproductor de audio con WaveSurfer.js
- ✅ Data structure (tracks y productos)
- 📝 Integración Stripe (checkout y webhook)
- 📝 Integración Resend (emails)
- 📝 Integración Cloudflare R2 (storage)
- 📝 Páginas adicionales (portfolio, store, services, contact)

## 🚀 Próximos Pasos

1. Implementar páginas adicionales (portfolio, store, services, contact)
2. Integrar API de Stripe para pagos
3. Integrar Resend para emails
4. Integrar Cloudflare R2 para almacenamiento
5. Crear base de datos (Prisma + PostgreSQL)
6. Dashboard de administración
7. Deployment en Vercel

## 📝 Notas para Desarrollo

### Placeholders
- **Audio:** Usando SoundHelix como placeholder → Reemplazar con URLs de R2
- **Imágenes:** Usando gradientes CSS → Reemplazar con fotos reales
- **Precios:** Ver comentarios `PRECIO_REFERENCIA` → Actualizar con valores finales

## 📧 Contacto

- Email: booking@tiagomdok.com
- Instagram: @tiagomdok

---

**Hecho con ❤️ en Cali, Colombia**
