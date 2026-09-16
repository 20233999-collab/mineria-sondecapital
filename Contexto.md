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
  * `SantaHero.astro`: Resumen ejecutivo en dos líneas con métricas principales.
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
