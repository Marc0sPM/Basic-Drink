# BASIC DRINK · Web del proyecto

Web estática moderna del proyecto BASIC DRINK, con el mismo estilo visual de la presentación final (negro + naranja, tipografía Bricolage Grotesque) e implementaciones del plan de negocio:

- ✅ **The Hub** — Sistema de reservas online del VIP Pool Room con selección de Packs de Tiempo
- ✅ **Democracia Musical Tutelada** — Votación de canciones de la Master Playlist con QR
- ✅ **Ligas Amateurs** — Inscripción a Liga de Billar (martes) y Liga de Futbolín (miércoles)
- ✅ **La Porra Basic Drink** — Pronósticos para grandes eventos deportivos (Mundial 2026)
- ✅ **Tokens** — Compra de packs de Tokens (1€/6€/15€)
- ✅ **Carta Smart-Low** con Combos (Primera Sangre, Cubo Gamer, Pack Sótano All-In)
- ✅ Equipo, ubicación en La Latina, mapa, agenda semanal

## Estructura

```
basic-drink-web/
├── index.html        ← Página principal (landing)
├── reservas.html     ← Sistema de reservas (The Hub)
├── the-hub.html      ← App con Música, Ligas, Porra y Tokens
├── style.css         ← Sistema de diseño completo
├── script.js         ← Interactividad compartida
└── README.md         ← Este archivo
```

---

## 🚀 Cómo subir la web a internet GRATIS

Tienes **4 opciones gratuitas**, ordenadas de más fácil a más profesional:

### 🥇 OPCIÓN 1 — Netlify Drop (lo más fácil, 1 minuto)

**No necesitas cuenta ni nada técnico.** Es literalmente arrastrar y soltar.

1. Entra en 👉 **https://app.netlify.com/drop**
2. Arrastra la carpeta `basic-drink-web` entera al recuadro
3. ¡Listo! En 10 segundos te dan una URL del tipo `https://random-name-12345.netlify.app`
4. (Opcional) Crea cuenta gratis para personalizar la URL → `basicdrink.netlify.app`

**Ventajas:** instantáneo, HTTPS gratis, CDN global.

---

### 🥈 OPCIÓN 2 — Vercel (también muy fácil)

1. Entra en 👉 **https://vercel.com/new**
2. Crea cuenta gratis (con Google o GitHub vale)
3. Click en "Upload Folder" → sube la carpeta
4. Te dan URL `basicdrink.vercel.app`

**Ventajas:** súper rápido, dashboard limpio.

---

### 🥉 OPCIÓN 3 — GitHub Pages (más permanente)

Ideal si quieres tener control de versiones del código.

1. Crea cuenta gratis en **https://github.com**
2. Click en "New repository" → ponle de nombre `basic-drink`
3. Marca como **Public** y crea
4. En la nueva página, click en "uploading an existing file" y sube todos los ficheros de la carpeta
5. Ve a **Settings → Pages** (menú lateral)
6. En "Source" selecciona **Deploy from branch** → branch `main` → carpeta `/ (root)` → Save
7. Espera 1-2 minutos. Tu web estará en `https://tu-usuario.github.io/basic-drink/`

**Ventajas:** gratis para siempre, control de versiones, profesional.

---

### 🏆 OPCIÓN 4 — Cloudflare Pages (la más rápida del mundo)

1. Entra en 👉 **https://pages.cloudflare.com**
2. Crea cuenta gratis
3. "Create a project" → "Direct Upload" → arrastra la carpeta
4. Te dan URL `basicdrink.pages.dev`

**Ventajas:** la red más rápida del planeta, ancho de banda ilimitado gratis.

---

## 🌐 Conectar un dominio propio (ej. `basicdrink.es`)

Si quieres comprar un dominio propio (cuesta unos **8-12 €/año** en Namecheap, IONOS o Hostinger), todas las plataformas anteriores te dejan conectarlo gratis:

1. Compra el dominio en cualquier proveedor (recomendado: **Namecheap** o **Porkbun**)
2. En el panel de Netlify/Vercel/Cloudflare, ve a "Domain settings" → "Add custom domain"
3. Te darán unos registros DNS (tipo CNAME/A) que tienes que pegar en tu proveedor del dominio
4. En 1-24h tu web estará en `basicdrink.es` con HTTPS automático

---

## 🎨 Personalización rápida

- **Cambiar el color naranja:** en `style.css` línea ~12, edita `--orange: #FF6B1A;`
- **Cambiar logo/marca:** busca `BASIC<span style="color:var(--orange)">·</span>DRINK` en los HTMLs
- **Añadir fotos reales del local:** dentro de `assets/` y reemplaza los placeholders
- **Cambiar mapa:** en `index.html`, busca el `<iframe>` y modifica las coordenadas del bbox

## 📝 Notas técnicas

- 100% web estática (HTML + CSS + JS vanilla, sin dependencias)
- Responsive (mobile, tablet, desktop)
- Optimizada para velocidad (sin frameworks pesados)
- Tipografías cargadas desde Google Fonts (Bricolage Grotesque + Manrope)
- Mapa de OpenStreetMap (gratis, sin API key)

---

**¿Dudas?** Cualquier modificación o nueva sección, abre el HTML correspondiente y edita. La estructura está pensada para que sea fácil de mantener.
