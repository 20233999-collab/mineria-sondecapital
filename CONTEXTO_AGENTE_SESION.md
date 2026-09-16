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
  2. *Magnetita Masiva:* 700,000,000,000 TM (700 mil millones de toneladas métricas inferidas, ~USD $700,000,000,000 in-situ para la industria global de acero verde).
  3. *Elementos Críticos de Defensa:* Monacita (tierras raras pesadas), Hafnio (reactores navales/nucleares) y Escandio (superaleaciones para cazas F-35 y misiles hipersónicos).
* **Eje Geopolítico:** Centrado en el **Memorándum de Entendimiento sobre Cooperación en Minerales Críticos Perú-EE.UU. (Febrero 2026)**.
* **Componentes Destacados:** Módulos en [`src/components/santa/`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/):
  * [`SantaHero.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaHero.astro): Fotografía real de terreno visible con gradiente de alta fidelidad, entrada secuencial escalonada en 4 fases, CTAs concisos y botón primario con animación de loop continuo.
  * [`SantaKpiRibbon.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaKpiRibbon.astro): Bento grid de métricas duras con recurso de magnetita calibrado a 700,000,000,000 TM / USD $700B y bucle de resplandor continuo en la tarjeta principal de $690 MM USD.
  * [`SantaGeopoliticsUsa.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaGeopoliticsUsa.astro): Marco del Tratado Bilateral Perú-EE.UU. con animación continua de haz líquido en la tarjeta de ajuste estratégico de defensa.
  * [`SantaAnchorAssets.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaAnchorAssets.astro): Oro Nativo ($86.6B) con pulso perimetral ámbar y destello continuo, más Magnetita unificada a 700B TM.
  * [`SantaSpecialMinerals.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaSpecialMinerals.astro): Los 7 minerales especiales con bucle continuo de resplandor en Monacita (vector geopolítico maestro).
  * [`SantaElementsMatrix.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaElementsMatrix.astro): Matriz interactiva de los 32 elementos certificados por ALS (2026) con bucle continuo en el botón de expansión interactiva.
  * [`SantaGeologyLogistics.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaGeologyLogistics.astro): Ficha geológica, 41 calicatas, radar de prospección pulsante y bucle continuo en la tarjeta del Megapuerto de Chancay.
  * [`SantaInvestmentRoom.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaInvestmentRoom.astro): Estructura de inversión con bucle continuo en la Opción 1 ($690 MM USD) y en el botón de solicitud de NDA, conectado al endpoint `/api/contact`.
  * [`SantaFooter.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/santa/SantaFooter.astro): Footer exclusivo con oficinas en Allen (TX) y San Isidro (Lima), canalización a `miguel.ampuero@sondecapital.com` y línea directa telefónica/WhatsApp institucional `+51 968899700`.

---

## 6. Estado Actual del Repositorio

* **Rama:** `main` (sincronizada y desplegada en `origin/main` en GitHub).
* **Últimos Commits Clave:**
  * `fe586c2`: *feat(santa): entrance animations across all sections and continuous attention loops on star elements*.
  * `b60dc8e`: *feat(santa): revamp hero with real photo background, 4-phase sequential stagger, redesigned loop CTAs, and update magnetite KPI to 700B TM*.
* **Salud de Compilación:** Verificada exitosamente con `npm run build` (10 páginas generadas estáticamente en 2.05s, 0 errores).
* **Despliegue Automático:** Sincronizado en producción con Vercel para `sondecapital.com`, `borboyona.sondecapital.com`, `adriano.sondecapital.com` y `santa.sondecapital.com`.

---

## 7. Plan de Trabajo & Bitácora de Sesiones

### 7.1. Objetivo General de la Sesión Actual
* Perfeccionar y dinamizar integralmente la plataforma satélite de **Las Arenas del Santa** (`santa.sondecapital.com`): visibilidad de fotografía real, animaciones secuenciales en Hero, actualización de escala geológica de magnetita, animaciones de entrada en todas las secciones (`data-animate="fade-up"`), bucles continuos en elementos estrella y actualización de datos de contacto institucional en el footer.

### 7.2. Registro de Avances & Decisiones Tomadas
* **2026-09-10 / 2026-09-11:**
  * **Contextualización & Documentación:** Sincronización del contexto global del portafolio y creación de [`CONTEXTO_AGENTE_SESION.md`](./CONTEXTO_AGENTE_SESION.md), referenciado en [`AGENTS.md`](./AGENTS.md) y [`CLAUDE.md`](./CLAUDE.md).
  * **Integración de Formularios a `miguel.ampuero@sondecapital.com`:**
    * **Landing Corporativa (`index.astro`):** Formulario conectado con asunto `[Sonde Capital] Nueva Solicitud de Inversión / Data Room General`.
    * **Mina Borboyona (`borboyona-mina.astro`):** Formulario conectado con asunto `[Sonde Capital - Borboyona] Solicitud de Data Room & Acceso a Mina`.
    * **Metales Adriano (`AdrianoDataRoomContact.astro`):** Formulario de NDA conectado con asunto `[Sonde Capital - Adriano] Solicitud de Data Room & NDA`.
    * **Mina Santa (`SantaInvestmentRoom.astro`):** Formulario de NDA conectado con asunto `[Sonde Capital - Las Arenas del Santa] Nueva Solicitud de Data Room & NDA`.
  * **Mecanismo de Resiliencia (Doble Capa):**
    1. *Capa Primaria:* `fetch` asíncrono a FormSubmit en formato JSON estructurado.
    2. *Capa Secundaria / Fallback:* En caso de bloqueo o fallo de red, alerta institucional con enlace directo `mailto:miguel.ampuero@sondecapital.com`.
  * **Compilación & Despliegue:** `npm run build` verificado con éxito (0 errores).

* **2026-09-16 (Sesión de Infraestructura Transaccional: Serverless + Resend API):**
  * **Arquitectura Transaccional:** Creación del endpoint serverless [`api/contact.js`](./api/contact.js) para procesar solicitudes de leads institucionales con plantilla HTML ejecutiva (branding Sonde Capital, modo Navy & Gold, metadatos y botón de respuesta directa).
  * **Variables de Entorno:**
    * Inyectadas en `.env.local` (protegido por `.gitignore`, sin exposición en git).
    * Inyectadas en Vercel vía CLI para `Production`, `Preview` y `Development`: `RESEND_API_KEY`, `LEADS_EMAIL_PRIMARY` (`miguel.ampuero333@gmail.com`), `LEADS_EMAIL_SECONDARY` (`miguel.ampuero@sondecapital.com`).
  * **Conexión de Formularios:** Actualizados los 4 formularios para despachar hacia `/api/contact`.
  * **Middleware Local:** Añadido plugin `devApiPlugin` en [`astro.config.mjs`](./astro.config.mjs) para habilitar pruebas completas en entorno local (`astro dev`).
  * **Pruebas en Vivo en Producción:** Verificadas exitosamente en los tres subdominios con IDs de entrega confirmados en Resend y despacho simultáneo a FormSubmit como respaldo.

* **2026-09-16 (Sesión de Rediseño & Dinamización de Las Arenas del Santa - `santa.sondecapital.com`):**
  * **Rediseño del Hero (`SantaHero.astro`):**
    * *Fondo Fotográfico:* Ajuste de opacidad y degradados radiales para que la fotografía real de la mina en las playas del Río Santa sea nítida y visible manteniendo legibilidad AAA.
    * *Animación de Entrada en 4 Fases:* Título institucional (Fase 1: 0ms) -> Descripción de valor (Fase 2: 150ms) -> CTAs principales (Fase 3: 300ms) -> Bloque de activos ancla y píldoras clave (Fase 4: 450ms).
    * *Optimización de Textos:* Eliminación de la frase "Depósito de placer..." por un encabezado ejecutivo conciso de alta gama; bloque "Mayor concentración..." potenciado con métricas doradas y píldoras de activos.
    * *CTAs Más Cortos & Dinámicos:* Rediseño a "Solicitar Data Room" y "Explorar 32 Elementos".
    * *Animación en Loop en CTA Primario:* Implementación de clase `.santa-cta-primary-loop` con resplandor dorado perimetral oscilante y haz de luz líquida en ángulo continuo (`santaCtaSheen`).
  * **Calibración de Escala Geológica (`SantaKpiRibbon.astro` & `SantaAnchorAssets.astro`):**
    * Ajuste del recurso de Magnetita a la cifra oficial de **`700,000,000,000 TM`** (700 mil millones de TM) con una valorización estimada in-situ de **`USD $700,000,000,000`**, unificada en toda la plataforma.
    * Incorporación de animación en bucle continuo (`kpi-primary-loop`) en la tarjeta de adquisición de **USD $690 MM+**.
  * **Sistema de Animaciones de Entrada On-Scroll:**
    * Estandarización de directiva `data-animate="fade-up"` con retardos progresivos (`data-delay` de 0ms a 500ms) observados por `IntersectionObserver` acelerado por GPU en todas las secciones (Sec 1 a Sec 8).
  * **Diseño de Animaciones Continuas en Bucle (Star Elements Loops):**
    * *Sec. 3 (Geopolítica):* Haz continuo de luz líquida (`usa-sweep-sheen`) recorriendo la tarjeta del marco bilateral de defensa EE.UU.
    * *Sec. 4 (Activos Ancla):* Pulso continuo ámbar y destello transversal (`gold-card-loop` / `gold-sheen-sweep`) en la tarjeta de Oro Nativo ($86.6B USD).
    * *Sec. 5 (Minerales Especiales):* Resplandor oscilante y destello en la tarjeta de Monacita / Tierras Raras (`monacita-card-loop`).
    * *Sec. 6 (Matriz de 32 Elementos):* Pulso dorado perimetral continuo en el botón interactivo de despliegue (`expand-btn-loop`).
    * *Sec. 7 (Geología & Conectividad):* Pulso perimetral esmeralda/turquesa en la tarjeta del Megapuerto de Chancay (`chancay-card-loop`) y radar de campo pulsante.
    * *Sec. 8 (Estructura de Inversión):* Bucle continuo de resplandor perimetral en la Opción 1 de Compra Total USD $690,000,000 (`investment-card-loop`) y pulso continuo con haz de luz en el botón de envío de NDA (`santa-btn-pulse-loop`).
  * **Footer Dedicado Santa (`SantaFooter.astro`):**
    * Inclusión de la línea de contacto institucional y WhatsApp: **`+51 968899700`**, junto con la dirección de correo del Director de Inversiones `miguel.ampuero@sondecapital.com` y las oficinas corporativas en Texas y Lima.
  * **Verificación & Despliegue en Producción:**
    * Compilación con 0 errores mediante `npm run build`.
    * Push a GitHub `main` y despliegue exitoso en producción en Vercel con alias activo en **`https://santa.sondecapital.com`**.
