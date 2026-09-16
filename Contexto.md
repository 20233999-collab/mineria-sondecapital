# Documento Maestro de Contexto: Sonde Capital

> **Aviso para Agentes de IA & Desarrolladores:**  
> Este documento es la **Fuente Única de Verdad (Single Source of Truth)** de todo el ecosistema digital de Sonde Capital. Contiene la visión corporativa, el detalle técnico-financiero de los 3 megaproyectos mineros, las directrices de diseño institucional, la infraestructura de hosting/subdominios y el funcionamiento de la canalización de leads mediante funciones serverless.
>
> **Última actualización:** 16 de Septiembre de 2026.

---

## 1. Identidad Corporativa & Modelo de Negocio

* **Nombre:** **Sonde Capital**
* **Giro del Negocio:** Firma de Capital Privado (*Private Equity*) y Desarrollo de Activos Mineros Estratégicos de escala mundial.
* **Sedes Operativas:**
  * **Estados Unidos:** Allen, Texas.
  * **Perú:** San Isidro, Lima.
* **Audiencia Objetivo:** Comités de inversión institucional, fondos soberanos de países de la OCDE, agencias de defensa nacional y seguridad de cadenas de suministro (EE.UU. / OTAN), procesadores industriales globales y corporaciones mineras multinacionales Tier-1.
* **Modalidades Transaccionales:**
  * **M&A (Fusiones y Adquisiciones):** Venta y transferencia del 100% de la titularidad de activos.
  * **Joint Venture (JV):** Asociación estratégica con operadores mineros internacionales calificados.
  * **Contratos Offtake:** Acuerdos de suministro a largo plazo de mineral concentrado o en bruto.
  * **Levantamiento de Capital Institucional:** Rondas para exploración avanzada, cubicación geológica y construcción de plantas.

---

## 2. Portafolio de Megaproyectos Mineros

El ecosistema representa tres activos estratégicos independientes en territorio peruano:

### A. Mina Polimetálica Borboyona & Tocllano (Huancavelica)
* **Subdominio de Producción:** `borboyona.sondecapital.com`
* **Ruta en Astro:** [`src/pages/proyectos/borboyona-mina.astro`](./src/pages/proyectos/borboyona-mina.astro)
* **Tipo de Yacimiento:** Skarn Polimetálico masivo de alta ley (Cobre, Plata, Plomo, Zinc y Oro).
* **Magnitud Geológica:** Potencial inferido de **+3,000 millones de toneladas métricas (+3.01 BT)**.
* **Validación Científica:** Evaluado y catalogado formalmente como un **"Monstruo Geológico"** por el Dr. Marco Einaudi (Profesor Emérito de Geología Económica de Stanford University).
* **Estructura Emblemática:** Veta continua *El Tesoro* de **6 km de longitud** con ensayos de laboratorio que arrojan leyes de hasta **333 oz/t de Plata**.
* **Estado Legal:** 13 concesiones mineras tituladas e inscritas en SUNARP.
* **Ventaja Logística:** Acceso directo al nuevo Megapuerto Multimodal de Chancay para exportación marítima directa al Pacífico.
* **Componentes Clave:**
  * [`BorboyonaGalleryCarousel.astro`](./src/components/BorboyonaGalleryCarousel.astro) (Galería fotográfica HD del yacimiento).
  * [`BorboyonaAltitudeViewer.astro`](./src/components/BorboyonaAltitudeViewer.astro) (Visualizador de cotas y relieve geográfico).
  * [`TesoroStructureExplorer.astro`](./src/components/TesoroStructureExplorer.astro) (Explorador interactivo de la veta El Tesoro).
  * [`ChancayLogisticsCorridor.astro`](./src/components/ChancayLogisticsCorridor.astro) (Ruta logística al puerto de Chancay).
* **Experiencia de Usuario en Hero:**
  * Coreografía de animación secuencial por capas: Título principal (0.2s) -> Descripción geológica (0.85s) -> CTAs directos (1.4s) -> Carrusel de muestras (1.75s).
  * CTAs concisos y directos: `Solicitar Data Room` (ancla a `#dataroom` para captura de leads) con animación continua de atracción visual (aura dorada pulsante cada 3s + destello de luz líquido transversal) y `Explorar Socavón` (ancla a `#altitud`).
  * Titular limpio sin redundancias: Eliminación del texto repetitivo «Depósito Polimetálico» en la cabecera.
  * Marca 100% institucional Sonde Capital (sin menciones a Lone Star Minerals).

---

### B. Metales Estratégicos & Tierras Raras Adriano (Sur del Perú)
* **Subdominio de Producción:** `adriano.sondecapital.com`
* **Ruta en Astro:** [`src/pages/proyectos/metales-adriano.astro`](./src/pages/proyectos/metales-adriano.astro)
* **Documento Rector:** [`PRD_REDISENO_ADRIANO.md`](./PRD_REDISENO_ADRIANO.md)
* **Tipo de Yacimiento:** 1,200 hectáreas continuas con mineralización masiva de metales críticos y lantánidos.
* **Certificación Analítica:** Matriz interactiva de **41 elementos certificados** en 15 ensayos de laboratorio (Hafnio, Circonio, Titanio, Lantánidos ligeros y pesados).
* **Tesis Geopolítica:** Activo clave para la soberanía de la cadena de suministro occidental ante el monopolio y las restricciones de exportación impuestas por China.
* **Benchmarking Global:** Posicionamiento competitivo frente a los mayores productores mundiales (Mountain Pass en EE.UU. y Serra Verde en Brasil).
* **Componentes Clave (en [`src/components/adriano/`](./src/components/adriano/)):**
  * `AdrianoHero.astro`: Portada institucional con cifras clave de escala.
  * `AdrianoElementsMatrix.astro`: Matriz interactiva filtrable de los 41 elementos.
  * `AdrianoGeopolitics.astro`: Mapa interactivo del balance geopolítico de tierras raras.
  * `AdrianoBenchmarking.astro`: Comparativa técnica frente a activos de referencia.
  * `AdrianoDataRoomContact.astro`: Formulario de solicitud de Data Room confidencial bajo protocolo NDA.

---

### C. Mina Las Arenas del Santa (Áncash)
* **Subdominio de Producción:** `santa.sondecapital.com`
* **Ruta en Astro:** [`src/pages/proyectos/arenas-del-santa.astro`](./src/pages/proyectos/arenas-del-santa.astro)
* **Documento Rector:** [`PRD_MINA_SANTA.md`](./PRD_MINA_SANTA.md)
* **Tipo de Yacimiento:** Placer aluvial costero de minerales pesados en la cuenca baja del Río Santa (2,100 hectáreas tituladas e inscritas).
* **Valorización del Activo:** Precio de adquisición total establecido en **$690 MM USD** (disponible también bajo Joint Venture o contrato Offtake).
* **Doble Motor Económico:**
  1. **Oro Aluvial:** 20 millones de onzas de potencial (~USD 86.6B a precio récord), con método de extracción gravimétrica 100% limpia sin cianuro ni químicos tóxicos.
  2. **Magnetita Masiva:** 700 millones de toneladas métricas (~USD 70B) para la industria global de acero verde descarbonizado.
  3. **Minerales Críticos de Defensa:** Monacita, Hafnio (para barras de control en reactores nucleares/navales de EE.UU.) y Escandio (superaleaciones ligeras de aluminio-escandio para cazas F-35 y fuselajes hipersónicos).
* **Eje Geopolítico:** Basado en el **Memorándum de Entendimiento (MoU) sobre Cooperación en Minerales Críticos Perú-Estados Unidos (Febrero 2026)**.
* **Componentes Clave (en [`src/components/santa/`](./src/components/santa/)):**
  * `SantaHero.astro`: Portada de alto impacto con fotografía real visible de la mina, coreografía de entrada secuencial en 4 fases (Título -> Tesis de concentración -> CTAs -> Validación ALS), eliminación de texto redundante y CTAs rediseñados (`Solicitar Data Room` con loop continuo áureo + `Explorar 32 Elementos`).
  * `SantaAnchorAssets.astro`: Módulos Bento de los 2 motores de valorización (Oro y Magnetita).
  * `SantaElementsMatrix.astro`: Matriz de 32 minerales certificados por laboratorios ALS.
  * `SantaGeopoliticsUsa.astro`: Eje de cooperación bilateral con EE.UU. (MoU 2026).
  * `SantaInvestmentRoom.astro`: Formulario de acceso al Investment Room y suscripción de NDA.

---

## 3. Stack Tecnológico & Infraestructura

* **Framework Web:** [Astro v7.2.6](https://astro.build) configurado en modo estático puro (`output: "static"`).
* **Motor de Estilos:** [Tailwind CSS v4](https://tailwindcss.com) mediante el compilador `@tailwindcss/vite` vinculado en `src/styles/global.css`.
* **Gráficos:** [Chart.js](https://www.chartjs.org) (`^4.5.1`) para curvas de valorización y comparativas de mercado.
* **Hosting & CDN:** [Vercel](https://vercel.com) con reescrituras de dominio basadas en el encabezado `Host` configuradas en [`vercel.json`](./vercel.json).
* **Subdominios Oficiales en Vercel:**
  * `sondecapital.com` -> Portal Corporativo (`src/pages/index.astro`)
  * `borboyona.sondecapital.com` -> Mina Borboyona (`src/pages/proyectos/borboyona-mina.astro`)
  * `adriano.sondecapital.com` -> Metales Adriano (`src/pages/proyectos/metales-adriano.astro`)
  * `santa.sondecapital.com` -> Mina Las Arenas del Santa (`src/pages/proyectos/arenas-del-santa.astro`)

---

## 4. Sistema de Captación & Despacho de Leads (M&A)

Todos los formularios del ecosistema están centralizados a través de un endpoint serverless con entrega instantánea a correo electrónico:

### 4.1. Arquitectura del Endpoint
* **Archivo:** [`api/contact.js`](./api/contact.js) (Vercel Serverless Function en Node.js runtime).
* **Middleware Local:** Plugin `devApiPlugin` en [`astro.config.mjs`](./astro.config.mjs) que replica el comportamiento de la función en entorno de desarrollo (`npm run dev`).
* **Protección Anti-Spam:** Campo trampa invisible (*honeypot* `_honey`).
* **Diseño del Correo:** Plantilla HTML ejecutiva con branding Sonde Capital (*Navy Deep* `#090D16` y *Gold* `#F59E0B`), etiqueta distintiva del proyecto de procedencia, tabla con todos los datos institucionales (nombre, cargo, fondo, email, WhatsApp, ticket transaccional y requerimiento) y botón de respuesta directa `mailto:`.

### 4.2. Destinatarios Configurados
1. **Destinatario Principal (Titular de Sandbox Resend):**
   * **`miguel.ampuero333@gmail.com`**
   * Recibe todos los leads en tiempo real con la plantilla institucional formateada.
2. **Destinatario Institucional / Respaldo:**
   * **`miguel.ampuero@sondecapital.com`**
   * Recibe respaldo simultáneo en segundo plano mediante FormSubmit AJAX.

### 4.3. Los 4 Formularios Conectados
| Portal | Ubicación | ID del Formulario | Destino |
| :--- | :--- | :--- | :--- |
| **Corporativo** | [`src/pages/index.astro`](./src/pages/index.astro) (`#contacto`) | `corporate-contact-form` | `POST /api/contact` |
| **Borboyona** | [`src/pages/proyectos/borboyona-mina.astro`](./src/pages/proyectos/borboyona-mina.astro) (`#dataroom`) | `borboyona-form` | `POST /api/contact` |
| **Adriano** | [`src/components/adriano/AdrianoDataRoomContact.astro`](./src/components/adriano/AdrianoDataRoomContact.astro) (`#contacto`) | `nda-request-form` | `POST /api/contact` |
| **Santa** | [`src/components/santa/SantaInvestmentRoom.astro`](./src/components/santa/SantaInvestmentRoom.astro) (`#acceso`) | `santa-nda-form` | `POST /api/contact` |

---

## 5. Reglas de Diseño Institucional ([`design.md`](./design.md))

Cualquier cambio de interfaz debe alinearse estrictamente a estos principios de banca de inversión:

1. **Estética Private Equity / High Finance:**
   * Fondos: Limpios y luminosos (*Clean White* `#FFFFFF`, *Slate* `#F8FAFC`, `#F1F5F9`).
   * Estructura y Textos: *Navy Profundo* (`#090D16`, `#0F172A`).
   * Acentos de Valor: *Oro / Ámbar* (`#F59E0B`, `#D97706`).
2. **Prohibición Cromática Estricta:**
   * **Terminantemente prohibido el uso de morados, púrpuras, fucsias, magentas o turquesas estridentes.** Proyectan estética genérica de startup de criptomonedas o software IA, incompatible con fondos soberanos y minería Tier-1.
3. **Tipografía Obligatoria:**
   * Titulares y Encabezados: `Plus Jakarta Sans` (pesos 600, 700 y 800).
   * Contenido, Tablas y Cifras: `Inter` con la propiedad obligatoria `tabular-nums` (`font-feature-settings: "tnum" 1`) para garantizar alineación vertical perfecta de cifras financieras y leyes de laboratorio.
4. **Rigor Técnico:**
   * Cero ilustraciones fantásticas de IA.
   * La credibilidad descansa en leyes certificadas de laboratorio (ALS Global, etc.), cubicaciones geológicas oficiales, mapas satelitales e infraestructura comprobable.

---

## 6. Variables de Entorno & Configuración

* **Archivo Local:** `.env.local` (estrictamente ignorado en `.gitignore` para no exponer secretos en git).
  * `RESEND_API_KEY`: Clave de API de Resend (`re_...`).
  * `LEADS_EMAIL_PRIMARY`: `miguel.ampuero333@gmail.com`
  * `LEADS_EMAIL_SECONDARY`: `miguel.ampuero@sondecapital.com`
  * `VERCEL_OIDC_TOKEN`: Token de autenticación de Vercel CLI.
* **Configuración en Vercel:** Las variables `RESEND_API_KEY`, `LEADS_EMAIL_PRIMARY` y `LEADS_EMAIL_SECONDARY` están configuradas y encriptadas en Vercel para los entornos `Production`, `Preview` y `Development`.

---

## 7. Comandos Operativos para Desarrolladores

```bash
# Servidor de desarrollo local (Astro + Middleware de API)
npm run dev

# Modo background según AGENTS.md
astro dev --background
astro dev status
astro dev logs
astro dev stop

# Compilación estática de producción (Debe generar 10 páginas con 0 errores)
npm run build

# Vista previa de la compilación estática
npm run preview

# Despliegue directo a producción en Vercel
npx vercel --prod
```

---

## 8. Procedimiento para Desbloquear el Remitente Oficial `@sondecapital.com` en Resend

Cuando el equipo decida verificar el dominio `sondecapital.com` en Resend para que los correos salgan desde `notificaciones@sondecapital.com` y no desde el sandbox `onboarding@resend.dev`:

1. Ingresar a [resend.com/domains](https://resend.com/domains) con la cuenta `miguel.ampuero333@gmail.com`.
2. Hacer clic en **"Add Domain"** y registrar `sondecapital.com`.
3. Copiar los 3 registros DNS que entrega Resend (1 registro TXT para SPF y 2 registros CNAME/MX para DKIM).
4. Añadir esos registros en el editor de zonas DNS del hosting donde residen los nameservers (`A2 Hosting` / cPanel).
5. Tras unos minutos se activará el estado verificado y el sistema podrá enviar correos a cualquier destinatario sin restricciones.

---

## 12. Sistema de Animaciones y Micro-Interacciones (Borboyona)

Implementado siguiendo estrictamente las directrices de `animation-on-scroll`, `animation-systems`, `beam-glow-states` y `high-end-visual-design`:

### 12.1 Animaciones de Entrada en Scroll (`scroll-reveal`)
- **Motor:** `IntersectionObserver` nativo con umbral de 8% y margen inferior de -30px.
- **Transición:** `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1)` y `transform: translateY(28px) -> 0`. Acelerado 100% por GPU sin re-layout.
- **Ejecución única:** `once = true` para evitar re-disparos molestos al hacer micro-scroll.
- **Escalonamiento:** Clase `.scroll-reveal-stagger` para cards en cascada (delays progresivos de 100ms a 460ms).
- **Accesibilidad:** Regla `@media (prefers-reduced-motion: reduce)` que neutraliza todas las transiciones y loops instantáneamente.

### 12.2 Componentes Clave con Animación en LOOP (Puntos Focales de Conversión)
1. **CTA Principal del Hero (`Solicitar Data Room`):**
   - Pulso respiratorio de aura dorada (`ctaGoldAuraPulse`) cada 3s + barrido de haz luminoso reflectante (`ctaSweepSheen`) continuo.
2. **Megaestructura «El Tesoro» (`+6.0 km`):**
   - Borde respiratorio perimetral ámbar (`tesoroGlowPulse` cada 4s) con micro-radar ping en el indicador de extensión horizontal.
3. **Corte Geológico & Socavones (`Labor NP 502 Récord` - 333 oz/t Ag):**
   - Pulso vivo en la cota activa (`cotaHaloPulse`) y resplandor perimetral en la labor récord (`recordBorderGlow` cada 3.5s).
4. **Matriz de Minerales Críticos (Ficha de Valor Bruto):**
   - Respiración áurea en la tarjeta de valuación in-situ (`grossValuePulse` cada 4s) destacando los *$929,295 MM USD*.
5. **Benchmarking Stanford (Dr. Marco Einaudi):**
   - Resplandor institucional en el contenedor de dictamen (`stanfordAuraPulse`) y texto animado con brillo dorado continuo (`monstruo-potencial-shimmer` cada 4s) en la frase *«monstruo potencial»*.
6. **Corredor Logístico Chancay (Hito 04 - Megapuerto):**
   - Card 04 con borde de luz pulsante (`chancayGlowPulse` cada 3.8s) y radar ping en el nodo "04 Hub Transpacífico".
7. **Terminal de Envío de Data Room (Botón Submit):**
   - Botón de solicitud con micro-aura viva (`formSubmitPulse` cada 3.5s) y barrido de luz en el candado de seguridad.

---

## 13. Header Exclusivo y Navegación de Borboyona (`BorboyonaHeader.astro`)

- **Componente:** [`src/components/BorboyonaHeader.astro`](file:///home/laptop/Documentos/mineria-sondecapital/src/components/BorboyonaHeader.astro).
- **Estilo Visual:** Fondo blanco translúcido (`bg-white/95 backdrop-blur-md`) con tipografía oscura de alto contraste (`text-slate-700`) y bordes nítidos (`border-slate-200/90`).
- **Logo Institucional:** Preserva exactamente el logotipo oficial de Sonde Capital (`/assets/sonde_logo_transparent.png`) con el subtítulo institucional Private Equity y etiqueta Borboyona, con espaciado amplio (`mr-4 lg:mr-8 xl:mr-10`) para evitar cualquier colisión.
- **Navegación Técnica Directa (Desktop & Mobile Drawer) en una sola línea (`whitespace-nowrap`):**
  - **«El Tesoro»:** Enlace a `#tesoro` (destacado en dorado).
  - **Socavones:** Enlace a `#altitud`.
  - **Minerales Críticos:** Enlace a `#minerales`.
  - **Stanford / Antamina:** Enlace a `#benchmarking`.
  - **Megapuerto Chancay:** Enlace a `#logistica`.
  - **Garantías:** Enlace a `#garantias`.
- **CTA Único con Animación en Loop:**
  - Botón: **"Agendar Reunión"** enlazado directamente a `#contacto` / `#dataroom`.
  - Efecto: Animación continua de pulso dorado respiratorio (`headerCtaPulse` cada 3s) y destello de luz líquido (`headerCtaSweep` cada 3.2s) para maximizar la acción del inversionista institucional.
  - Soporte responsive con menú lateral desplegable para dispositivos móviles con cierre automático al hacer tap.

### 13.1 Actualizaciones Globales en Footer y Contacto
- **Proyectos Estratégicos:** Simplificado a **"Borboyona"** en los enlaces del pie de página.
- **Teléfono Oficial Corporativo:** Actualizado a **`+51 968899700`** con enlace clickeable `tel:` en todos los portales y formularios de contacto.


