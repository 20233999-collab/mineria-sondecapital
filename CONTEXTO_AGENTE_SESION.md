# Contexto Maestro del Proyecto & Bitácora de Sesión: Sonde Capital

> **Propósito del Documento:** Servir como fuente única de verdad (Single Source of Truth) para cualquier agente de IA o desarrollador que trabaje en este repositorio. Proporciona el contexto global del negocio, la arquitectura técnica, las directrices de diseño, el estado de cada uno de los 3 proyectos mineros y la hoja de ruta de tareas para la sesión actual.

---

## 1. Identidad Corporativa & Modelo de Negocio

* **Empresa:** **Sonde Capital** (Firma de Inversión Privada / *Private Equity* & Desarrollo de Activos Mineros Estratégicos).
* **Sedes Operativas:** 
  * Allen, Texas, EE.UU.
  * San Isidro, Lima, Perú.
* **Propósito de la Plataforma:** Canal digital institucional de alto nivel orientado a comités de inversión, fondos soberanos de países de la OCDE, agencias de defensa (EE.UU./OTAN), procesadores industriales y corporaciones mineras Tier-1.
* **Modalidades de Transacción:** Venta total de activos (*M&A*), esquemas de *Joint Venture* (JV), contratos de suministro a largo plazo (*Offtake*) y levantamiento de capital institucional.

---

## 2. Stack Tecnológico & Infraestructura

* **Framework:** [Astro](https://astro.build) (v7.2.6) en modo generación estática (`output: "static"`).
* **Motor de Estilos:** [Tailwind CSS v4](https://tailwindcss.com) integrado mediante `@tailwindcss/vite` (`src/styles/global.css`).
* **Visualización de Datos:** Chart.js (`^4.5.1`) para gráficos financieros y comparativas.
* **Hosting & Despliegue:** [Vercel](https://vercel.com) con reescrituras de dominio basadas en cabeceras de host configuradas en [`vercel.json`](file:///home/laptop/Documentos/mineria-sondecapital/vercel.json).
* **Comandos Clave:**
  * Servidor de desarrollo: `npm run dev` (o en background según AGENTS.md: `astro dev --background`).
  * Compilación de producción: `npm run build`.
  * Vista previa local: `npm run preview`.

---

## 3. Arquitectura de Rutas & Subdominios Oficiales

El repositorio unifica la web corporativa principal y tres plataformas satélites independientes:

| Proyecto | Subdominio de Producción | Ruta en Astro | Archivo Fuente Principal |
| :--- | :--- | :--- | :--- |
| **Corporativo Sonde Capital** | `sondecapital.com` | `/` | [`src/pages/index.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/pages/index.astro) |
| **Mina Polimetálica Borboyona** | `borboyona.sondecapital.com` | `/proyectos/borboyona-mina` | [`src/pages/proyectos/borboyona-mina.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/pages/proyectos/borboyona-mina.astro) |
| **Metales Estratégicos Adriano** | `adriano.sondecapital.com` | `/proyectos/metales-adriano` | [`src/pages/proyectos/metales-adriano.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/pages/proyectos/metales-adriano.astro) |
| **Las Arenas del Santa** | `santa.sondecapital.com` | `/proyectos/arenas-del-santa` | [`src/pages/proyectos/arenas-del-santa.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/pages/proyectos/arenas-del-santa.astro) |

*Nota de redirecciones:* Existen rutas cortas de conveniencia en `src/pages/` (`borboyona.astro`, `arenas-del-santa.astro`, `metales-adriano.astro`, `mina-borboyona.astro`) que ejecutan `Astro.redirect()` a su ruta definitiva bajo `/proyectos/`.

---

## 4. Filosofía Visual y Reglas de Diseño ([`design.md`](file:///home/laptop/Documentos/mineria-sondecapital/design.md))

Cualquier agente debe cumplir estrictamente las directrices del sistema de diseño para mantener la coherencia institucional:

1. **Estética de Banca Privada / Private Equity:** Fondos luminosos (*Clean White* `#FFFFFF` / *Slate* `#F8FAFC`), estructuras de alto contraste en *Navy Deep* (`#090D16`, `#0F172A`) y acentos de valor en *Oro / Ámbar* (`#F59E0B`, `#D97706`).
2. **Prohibición Cromática Estricta:** Quedan terminantemente prohibidos colores no corporativos como morados, fucsias o turquesas estridentes.
3. **Rigor Técnico sin Clichés:** Cero ilustraciones genéricas de IA o proyecciones financieras infladas. Todo se fundamenta en leyes certificadas de laboratorio (ALS, etc.), cubicación geológica, mapas de infraestructura real y fotografías del yacimiento.
4. **Tipografía:**
   * Títulos / Encabezados: `Plus Jakarta Sans` (pesos 600, 700 y 800).
   * Contenido, Tablas y Cifras: `Inter` con propiedad obligatoria `tabular-nums` (`font-feature-settings: "tnum" 1`) para alineamiento vertical estricto de números.
5. **Dinamismo & Motion:** Animaciones sutiles on-scroll (`animation-on-scroll`), micro-interacciones suaves en tarjetas interactivas y modales descriptivos sin recarga de página.

---

## 5. Resumen Técnico del Portafolio Minero

### A. Proyecto Borboyona & Tocllano (Huancavelica)
* **Tipo:** Depósito Skarn Polimetálico masivo (Cobre, Plata, Plomo, Zinc, Oro).
* **Magnitud:** Potencial inferido de +3,000 millones de toneladas métricas (3.01 BT).
* **Validación Científica:** Evaluado y catalogado como "Monstruo Geológico" por el Dr. Marco Einaudi (Profesor Emérito de Geología Económica de Stanford University).
* **Hitos:** Estructura mineralizada continua *El Tesoro* de 6 km de longitud con leyes de hasta 333 oz/t Ag. 13 concesiones tituladas.
* **Componentes Destacados:** [`BorboyonaGalleryCarousel.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/BorboyonaGalleryCarousel.astro) (galería HD), [`BorboyonaAltitudeViewer.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/BorboyonaAltitudeViewer.astro), [`TesoroStructureExplorer.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/TesoroStructureExplorer.astro) y [`ChancayLogisticsCorridor.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/ChancayLogisticsCorridor.astro).

### B. Strategic Metals & Rare Earths Adriano (Sur del Perú)
* **Tipo:** Depósito de 1,200 hectáreas en bloque continuo de metales estratégicos y tierras raras.
* **Documento Rector:** [`PRD_REDISENO_ADRIANO.md`](file:///home/laptop/Documentos/mineria-sondecapital/PRD_REDISENO_ADRIANO.md) (Versión 2.0).
* **Mineralogía:** Matriz interactiva de **41 elementos certificados** (Hafnio, Circonio, Titanio, Lantánidos) en 15 ensayos de laboratorio.
* **Tesis Geopolítica:** Soberanía en la cadena de suministro occidental ante la restricción de exportación de China. Benchmarking frente a Serra Verde (Brasil) y Mountain Pass (EE.UU.).
* **Componentes Destacados:** Módulos Bento en [`src/components/adriano/`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/adriano/), incluyendo [`AdrianoElementsMatrix.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/adriano/AdrianoElementsMatrix.astro), [`AdrianoGeopolitics.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/adriano/AdrianoGeopolitics.astro) y [`AdrianoBenchmarking.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/adriano/AdrianoBenchmarking.astro).

### C. Mina Las Arenas del Santa (Áncash)
* **Tipo:** Yacimiento aluvial de placer costero en la cuenca del Río Santa (2,100 hectáreas tituladas).
* **Documento Rector:** [`PRD_MINA_SANTA.md`](file:///home/laptop/Documentos/mineria-sondecapital/PRD_MINA_SANTA.md) (Versión 2.0).
* **Valorización & Salida:** Precio de adquisición total del activo establecido en **$690 MM USD** (o esquemas de Joint Venture / Offtake).
* **Doble Motor de Valorización:**
  1. *Oro Aluvial:* 20 millones de onzas de potencial (~USD 86.6B a precio récord actual), extracción gravimétrica limpia sin cianuro.
  2. *Magnetita Masiva:* 700 millones de toneladas métricas (~USD 70B para la industria global de acero verde).
  3. *Elementos Críticos de Defensa:* Monacita, Hafnio (reactores navales/nucleares) y Escandio (superaleaciones para cazas F-35 y misiles hipersónicos).
* **Eje Geopolítico:** Centrado en el **Memorándum de Entendimiento sobre Cooperación en Minerales Críticos Perú-EE.UU. (Febrero 2026)**.
* **Componentes Destacados:** Módulos en [`src/components/santa/`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/), destacando [`SantaAnchorAssets.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaAnchorAssets.astro), [`SantaElementsMatrix.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaElementsMatrix.astro) (32 minerales certificados por ALS) y [`SantaGeopoliticsUsa.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaGeopoliticsUsa.astro).

---

## 6. Estado Actual del Repositorio

* **Rama:** `main` (sincronizada y desplegada en `origin/main` en GitHub).
* **Último Commit:** `58aa631` (*feat(forms): canalizar respuestas de todos los formularios a miguel.ampuero@sondecapital.com y documento de contexto de sesion*).
* **Salud de Compilación:** Verificada exitosamente con `npm run build` (10 páginas generadas estáticamente en 1.6 segundos, 0 errores).
* **Despliegue Automático:** Sincronizado con Vercel para `sondecapital.com`, `borboyona.sondecapital.com`, `adriano.sondecapital.com` y `santa.sondecapital.com`.

---

## 7. Plan de Trabajo de la Sesión Actual (Sesión: 2026-09-10 / 2026-09-11)

### 7.1. Objetivo General de la Sesión
* Conectar e integrar todos los formularios y puntos de contacto del ecosistema Sonde Capital para que las respuestas y solicitudes institucionales se canalicen directamente al correo del Director de Inversiones: **`miguel.ampuero@sondecapital.com`**, y desplegar a producción en GitHub.

### 7.2. Tareas en Cola / Backlog Inmediato
- [x] **Tarea 1:** Auditoría de formularios en las 4 páginas principales (`index.astro`, `borboyona-mina.astro`, `AdrianoDataRoomContact.astro`, `SantaInvestmentRoom.astro`).
- [x] **Tarea 2:** Implementar captura y transmisión automática de datos mediante servicio de reenvío seguro (*FormSubmit AJAX + Fallback Mailto*) hacia `miguel.ampuero@sondecapital.com`.
- [x] **Tarea 3:** Añadir estados de carga con spinners dinámicos, alertas de confirmación institucional y campos anti-spam (*honeypot* + sin captchas intrusivos).
- [x] **Tarea 4:** Reemplazar todas las menciones y enlaces directos de `inversiones@sondecapital.com` por `miguel.ampuero@sondecapital.com` en footers y barras de contacto.
- [x] **Tarea 5:** Pruebas funcionales de compilación, commit (`58aa631`) y push exitoso al repositorio remoto de GitHub (`origin/main`).
- [ ] **Tarea 6:** Confirmación de activación de FormSubmit por parte de Miguel Ampuero en su bandeja de entrada.

### 7.3. Registro de Avances & Decisiones Tomadas
* **2026-09-10 / 2026-09-11:**
  * **Contextualización & Documentación:** Sincronización del contexto global del portafolio y creación de [`CONTEXTO_AGENTE_SESION.md`](./CONTEXTO_AGENTE_SESION.md), referenciado en [`AGENTS.md`](./AGENTS.md) y [`CLAUDE.md`](./CLAUDE.md).
  * **Integración de Formularios a `miguel.ampuero@sondecapital.com`:**
    * **Landing Corporativa (`index.astro`):** Formulario conectado con asunto `[Sonde Capital] Nueva Solicitud de Inversión / Data Room General`.
    * **Mina Borboyona (`borboyona-mina.astro`):** Formulario conectado con asunto `[Sonde Capital - Borboyona] Solicitud de Data Room & Acceso a Mina`.
    * **Metales Adriano (`AdrianoDataRoomContact.astro`):** Formulario de NDA conectado con asunto `[Sonde Capital - Adriano] Solicitud de Data Room & NDA`.
    * **Mina Santa (`SantaInvestmentRoom.astro`):** Formulario de NDA conectado con asunto `[Sonde Capital - Las Arenas del Santa] Nueva Solicitud de Data Room & NDA`.
  * **Mecanismo de Resiliencia (Doble Capa):**
    1. *Capa Primaria:* `fetch` asíncrono a `https://formsubmit.co/ajax/miguel.ampuero@sondecapital.com` en formato JSON estructurado tipo tabla, sin recarga de pantalla.
    2. *Capa Secundaria / Fallback:* En caso de adblockers o fallo de red, se muestra una alerta con enlace directo `mailto:miguel.ampuero@sondecapital.com` pre-rellenado con todos los datos ingresados por el inversionista.
  * **Activación de FormSubmit:** Se disparó la solicitud de activación inicial hacia `miguel.ampuero@sondecapital.com`. Una vez que Miguel pulse el botón "Activate Form" en su bandeja de entrada, todos los envíos llegarán de forma automática.
  * **Compilación & Despliegue:** `npm run build` verificado con éxito (0 errores). Commit `58aa631` subido exitosamente a la rama `main` en GitHub.

* **2026-09-16 (Implementación Opción B: Serverless + Resend API):**
  * **Arquitectura Transaccional:** Se creó el endpoint serverless [`api/contact.js`](./api/contact.js) para procesar solicitudes de leads institucionales con plantilla HTML ejecutiva (branding Sonde Capital, modo Navy & Gold, metadatos y botón de respuesta directa).
  * **Variables de Entorno:**
    * Inyectadas en `.env.local` (protegido por `.gitignore`, sin exposición en git).
    * Inyectadas en Vercel vía CLI para `Production`, `Preview` y `Development`: `RESEND_API_KEY`, `LEADS_EMAIL_PRIMARY` (`miguel.ampuero333@gmail.com`), `LEADS_EMAIL_SECONDARY` (`miguel.ampuero@sondecapital.com`).
  * **Conexión de Formularios:** Actualizados los 4 formularios ([`index.astro`](./src/pages/index.astro), [`borboyona-mina.astro`](./src/pages/proyectos/borboyona-mina.astro), [`AdrianoDataRoomContact.astro`](./src/components/adriano/AdrianoDataRoomContact.astro), [`SantaInvestmentRoom.astro`](./src/components/santa/SantaInvestmentRoom.astro)) para despachar hacia `/api/contact`.
  * **Middleware Local:** Añadido plugin `devApiPlugin` en [`astro.config.mjs`](./astro.config.mjs) para habilitar pruebas completas en entorno local (`astro dev`).
  * **Verificación de Entrega:** Se actualizó la API Key vinculada directamente a la cuenta titular `miguel.ampuero333@gmail.com` (`re_QuykMgQh...`), permitiendo la recepción inmediata de leads en dicha bandeja sin restricciones DNS de sandbox.
  * **Pruebas en Vivo en Producción:** Verificadas exitosamente en los tres subdominios con IDs de entrega:
    * Santa: `9835178c-5328-4e74-953d-ba2c81fb279e`
    * Borboyona: `01a0aae5-00cc-75bd-9e87-c7a71fb5a66b`
    * Adriano: `01a0aae5-04d0-70cb-94a5-d38d0b8ffe7f`
  * **Doble Respaldo:** Mecanismo híbrido que despacha por Resend directo a `miguel.ampuero333@gmail.com` y simultáneamente activa respaldo FormSubmit hacia ambas cuentas solicitadas (`miguel.ampuero333@gmail.com` y `miguel.ampuero@sondecapital.com`).
