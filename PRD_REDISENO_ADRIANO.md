# PRD: Rediseño Integral de la Plataforma "Metales Estratégicos & Tierras Raras Adriano"

**URL de Producción:** [adriano.sondecapital.com](https://adriano.sondecapital.com/)  
**Ruta del Código Fuente:** [`src/pages/proyectos/metales-adriano.astro`](./src/pages/proyectos/metales-adriano.astro)  
**Sistema de Diseño de Referencia:** [`design.md`](./design.md)  
**Documento Técnico Fuente:** [`docs/adriano/RE Metales Estrategicos & Tierras Raras Adriano 2026.docx`](./docs/adriano/RE%20Metales%20Estrategicos%20&%20Tierras%20Raras%20Adriano%202026.docx)  
**Catálogo de Minerales:** [`docs/adriano/Relacion de TTRR Adriano Agosto 26 V2.xlsx`](./docs/adriano/Relacion%20de%20TTRR%20Adriano%20Agosto%2026%20V2.xlsx)  
**Imagen Principal del Hero:** [`docs/adriano/Foto Portada.png`](./docs/adriano/Foto%20Portada.png)  
**Versión:** 2.0 (Alineada al Objetivo de Informar, Persuadir y con Animaciones On-Scroll)

---

## 1. Visión, Enfoque y Objetivos del Producto

### 1.1. Propósito Central: Informar y Persuadir
Esta plataforma tiene como único propósito **informar con rigor técnico y persuadir estratégicamente** a inversionistas institucionales calificados, fondos soberanos y operadores mineros internacionales Tier-1 sobre la excepcionalidad geológica y geopolítica del **Proyecto Adriano**.

> [!IMPORTANT]
> **Directriz Estricta de Contenido:** Se excluyen totalmente proyecciones financieras especulativas, simuladores de retorno, curvas de ingresos, flujos de caja, EBITDA y NPV. La propuesta se fundamenta exclusivamente en **hechos geológicos comprobados, leyes y PPMs certificados en 15 estudios de laboratorio internacionales, ventajas de extracción en superficie (open-pit), logística directa a puerto y relevancia de soberanía en la cadena de suministro occidental frente al monopolio asiático.**

### 1.2. Audiencia Objetivo
- Fondos de Capital Privado (*Private Equity*) y Fondos Soberanos de países de la OCDE.
- Vicepresidencias de Estrategia y M&A de corporaciones mineras globales.
- Agencias gubernamentales y diplomáticas enfocadas en seguridad de minerales críticos (EE.UU., Unión Europea, Japón, Corea, India).
- Procesadores y fabricantes de imanes permanentes, semiconductores, robótica, industria aeroespacial y de defensa.

### 1.3. Objetivos de Conversión
1. **Credibilidad Inmediata:** Deslumbrar en los primeros segundos con una estética ejecutiva de banca privada, fotografía real del yacimiento y datos contundentes.
2. **Exploración Dinámica de la Riqueza Mineral:** Permitir filtrar, buscar y examinar los **41 elementos certificados** provenientes del archivo técnico oficial.
3. **Persuasión Geopolítica Incontestable:** Demostrar por qué Adriano supera a proyectos como Serra Verde (Brasil), Mountain Pass (EE.UU.) y Mount Weld (Australia).
4. **Conversión Rápida a NDA y Reunión Directa:** Conducir al usuario a solicitar el acuerdo de confidencialidad (NDA) y agendar una sesión con el equipo directivo de Sonde Capital.

---

## 2. Pila de "Agent Skills" para Crear una Web Excepcional ("Cheverasa")

Para que el rediseño tenga una estética de primer nivel, fluidez total y dinamismo visual sin caer en plantillas genéricas, se aplicarán las siguientes skills especializadas:

| Skill | Aporte Clave al Proyecto |
| :--- | :--- |
| **`animation-on-scroll`** | Configura `IntersectionObserver` y keyframes de Tailwind para activar animaciones fluidas (fade-in, slide-up, contadores numéricos y revelado escalonado) a medida que el usuario se desplaza por la página. |
| **`animation-systems`** | Define curvas de aceleración (easing refinados tipo Apple/Stripe), coreografía de micro-animaciones en tarjetas, botones y tablas vivas para evitar saltos toscos. |
| **`high-end-visual-design`** | Garantiza un aspecto sobrio y ultra-premium de banca de inversión: tipografía impecable, espacios en blanco generosos, contrastes calculados y jerarquías sin sobrecarga. |
| **`design-taste-frontend`** | Pasa un filtro anti-clichés de IA, garantizando un diseño editorial distintivo, moderno y adaptado al sector minero estratégico. |
| **`beautiful-shadows`** | Aplica sombras neutrales estratificadas para tarjetas y paneles flotantes con elevaciones realistas y limpias. |
| **`css-border-gradient`** | Añade microrresplandores y bordes con gradiente tenue en contenedores destacados (como la opción recomendada de inversión o el badge de seguridad). |
| **`scroll-progress-timeline`** | Construye una línea de tiempo interactiva vertical/horizontal con avance sincronizado al scroll para el proceso de Due Diligence (Fases 01 a 05). |
| **`staggered-word-reveal`** | Añade micro-revelado cinematográfico de texto en los titulares de alto impacto al momento de ingresar a la vista. |

---

## 3. Arquitectura y Desglose Sección por Sección

La página se reestructura en **10 secciones estratégicas** enfocadas en información técnica real, persuasión de alto nivel y animación reactiva al scroll:

---

### SECCIÓN 1: Header Institucional Slim & Barra de Navegación Compacta
- **Propósito:** Ofrecer navegación limpia, liviana y discreta sin obstaculizar la lectura.
- **Diseño & Estilo:**
  - Barra ultra-delgada y compacta (*slim*), altura contenida (`h-16`), estilo *Glassmorphism* (`bg-white/85 backdrop-blur-md border-b border-slate-200/70`).
  - Isotipo de Sonde Capital en escala reducida y texto de apoyo institucional sutil.
- **Contenido y Enlaces de Anclaje:**
  1. *Escala* (`#resumen`)
  2. *Contexto Geopolítico* (`#geopolitica`)
  3. *Matriz* (`#elementos`)
  4. *Geología* (`#geologia`)
  5. *Vías de Inversión* (`#estructuras`)
- **Acción Principal (CTA):**
  - Botón sobrio y visible: `"Solicitar NDA"` con micro-icono de candado seguro (`fa-solid fa-lock text-amber-500`).
- **Animación on Scroll:**
  - Al hacer scroll hacia abajo, la barra refuerza sutilmente su sombra inferior y resalta el enlace activo correspondiente a la sección visible.

---

### SECCIÓN 2: Hero Institucional con Portada Real & Micro-Revelado Cinematográfico
- **Propósito:** Captar la atención en los primeros segundos transmitiendo la escala física y geográfica real del activo.
- **Fondo Visual:**
  - **Imagen real de portada:** [`Foto Portada.png`](./docs/adriano/Foto%20Portada.png) colocada como fondo con un degradado superpuesto (*dark overlay* con transición a azul marino financiero `#0F172A`), asegurando máximo contraste y legibilidad nítida en blanco y dorado.
- **Contenido Textual Exacto:**
  - *Badge de Seguridad:* `"ESTRICTAMENTE CONFIDENCIAL · EXCLUSIVO PARA INVERSIONISTAS CALIFICADOS"` con indicador luminoso intermitente.
  - *Título Principal (Display):* `"Metales Estratégicos & Tierras Raras Adriano"`.
  - *Subtítulo de Posicionamiento:* `"El Activo Mineral de Origen Mantélico Más Relevante de la Década"`.
  - *Párrafo de Contextualización:*  
    > *"Oportunidad de inversión exclusiva en uno de los yacimientos minerales más extraordinarios jamás identificados: una formación ofiolítica de **2.328 hectáreas** en el norte de Perú, que **contiene 41 metales estratégicos** con acceso directo en superficie y a solo 75 km del Puerto de Salaverry."*
- **Acciones Duales (CTAs):**
  1. Primario (Dorado corporativo): `"Explorar los 41 Elementos"` (hace scroll suave hacia la matriz interactiva).
  2. Secundario (Borde y fondo traslúcido): `"Agenda una reunión con el equipo directivo"` (lleva a la sección de contacto / agendamiento).
- **Cinta de Validación Científica al Pie del Hero:**
  - Mención destacada de 15 estudios independientes certificados por laboratorios de clase mundial: **ACTLABS (Canadá)**, **ALS-Chemex (Vancouver)**, **SGS del Perú** (18 años de evaluación geoquímica 2004–2022).
- **Animaciones on Scroll:**
  - Entrada escalonada de elementos con fade-in y desplazamiento vertical sutil (`translate-y`).

---

### SECCIÓN 3: Cinta Bento Grid de Escala & Métricas Duras (Sin Proyecciones)
- **Propósito:** Sintetizar los pilares verificables del yacimiento en un bloque de lectura rápida.
- **Las 6 Tarjetas de Escala Verificada:**
  1. **$2.5 B+ USD:** Precio de Venta / Adquisición Completa (*Asking Price* para fondos o consorcios).
  2. **41 Elementos Confirmados:** 15 Elementos de Tierras Raras (REE) + 23 Metales Estratégicos analizados por ICP-MS.
  3. **2,328 Hectáreas:** 05 Concesiones mineras tituladas y registradas ante INGEMMET sin contingencias legales.
  4. **100% Tajo Abierto (Open-Pit):** Mineralización accesible en superficie, eliminando la complejidad y sobrecosto de pozos o túneles subterráneos.
  5. **15 Estudios Certificados:** Validaciones técnicas continuas desde 2004 hasta 2022.
  6. **75 km a Puerto Salaverry:** Enlace logístico costero inmediato al Océano Pacífico para despacho a granel.
- **Diseño & Animación:**
  - Tarjetas blancas limpias con bordes perimetrales precisos (`border-slate-200`) y acentos en dorado y azul marino.
  - Al entrar al viewport mediante scroll, cada cifra numérica ejecuta una animación de conteo ascendente progresivo.

---

### SECCIÓN 4: Geopolítica & Crisis Global de Suministro (China vs. Occidente)
- **Propósito:** Persuadir al inversionista sobre el valor de seguridad nacional que representa este activo.
- **Contenido Técnico Extraído del Documento Fuente:**
  - *La Dependencia Crítica:* China extrae el **69% de las tierras raras del mundo** y controla más del **85% de la capacidad de refinamiento** y más del **90% de los imanes permanentes** indispensables para defensa, energía eólica y vehículos eléctricos.
  - *La Alerta de los Gobiernos Occidentales:* Restricciones de cuotas de exportación dictadas por Beijing, exigencias del *Critical Raw Materials Act* de la Unión Europea y financiamiento directo del Departamento de Defensa de EE.UU. para asegurar fuentes fuera de China.
  - *La Ventaja Estratégica de Perú:* Perú es un pilar minero con tratados de libre comercio con EE.UU., Europa y Asia, y participó activamente en la *Reunión Ministerial de Minerales Críticos de EE.UU. de 2026* con 53 naciones aliadas.
- **Presentación Visual e Interactiva:**
  - Bloque con fondo tecnológico oscuro (`bg-slate-950`) que contrasta fuertemente con las secciones claras.
  - Barras gráficas de dominancia china en procesamiento vs. vulnerabilidad occidental.
  - Matriz de Riesgo Estratégico de Minerales:
    - *Disprosio (Dy) & Neodimio (Nd):* Control Chino 70–90% -> Riesgo: **EXTREMO**.
    - *Rubidio (Rb):* Esencial para telecomunicaciones cuánticas y defensa -> Riesgo: **CRÍTICO**.
    - *Litio (Li) & Escandio (Sc):* Aleaciones avanzadas y movilidad -> Riesgo: **ALTO**.
- **Animación on Scroll:**
  - Las barras de porcentaje se llenan progresivamente cuando el usuario hace scroll hacia este bloque.

---

### SECCIÓN 5: Benchmarking Global: ¿Por Qué Adriano Supera a los Referentes Mundiales?
- **Propósito:** Demostrar objetivamente la superioridad comparativa de Adriano frente a los principales proyectos del planeta.
- **Datos Comparativos Directos (Extraídos del Documento):**
  - **Adriano (Sonde Capital - Perú):**
    - 41 elementos presentes simultáneamente (15 REE + 23 estratégicos).
    - Formación ofiolítica mantélica única.
    - Acceso 100% en superficie a cielo abierto.
    - Concentraciones de Rubidio excepcionales (154 ppm base, picos hasta 479 ppm).
    - Logística portuaria insuperable: 75 km a terminal marítimo de aguas profundas.
  - **Serra Verde (Brasil):** Adquirida en 2026 por consorcio respaldado por el gobierno de EE.UU. Sin embargo, su depósito es de arcillas iónicas con solo 2-3 elementos viables (Nd, Pr) y está ubicada en Goiás a más de 1,000 km de la costa.
  - **Mountain Pass (MP Materials - EE.UU.):** Bastnäsita con 3-4 elementos base, dependiente históricamente de enviar concentrados a China para etapas intermedias de separación.
  - **Mount Weld (Lynas - Australia):** Carbonatita con altos costos de flete hacia plantas de procesamiento en Malasia.
- **Diseño & Animación:**
  - Tabla comparativa ejecutiva con fila destacada para Adriano en acento dorado suave.
  - Iconos duotono de verificación (`check`) para evidenciar cada factor superado por Adriano.
  - Revelado suave de filas al entrar en el viewport.

---

### SECCIÓN 6: Matriz Interactiva de los 41 Elementos & Tierras Raras
- **Propósito:** El núcleo técnico de consulta donde geólogos, fondos e ingenieros pueden explorar la riqueza del depósito.
- **Fuente Oficial de Datos:** Extraído íntegramente de [`Relacion de TTRR Adriano Agosto 26 V2.xlsx`](./docs/adriano/Relacion%20de%20TTRR%20Adriano%20Agosto%2026%20V2.xlsx).
- **Contenido del Catálogo (41 Elementos Reales):**
  - *Tierras Raras (15 REE):* Neodimio (Nd: 42.56 ppm), Cerio (Ce: 117.43 ppm), Lantano (La: 67.3 ppm), Escandio (Sc: 8.18 ppm), Samario (Sm: 9.68 ppm), Itrio (Y: 32.61 ppm), Praseodimio (Pr: 11.7 ppm), Disprosio (Dy: 6.2 ppm), Yterbio (Yb: 5.14 ppm), Europio (Eu: 2.03 ppm), Terbio (Tb: 1.18 ppm), Gadolinio (Gd: 7.5 ppm), Holmio (Ho: 1.2 ppm), Lutecio (Lu: 0.74 ppm), Tulio (Tm: 0.6 ppm).
  - *Metales Estratégicos & Tecnológicos (23+ Elementos):* Rubidio (Rb: 154 ppm - concentración récord mundial), Litio (Li: 21 ppm), Boro (B: 20 ppm), Cesio (Cs: 4.77 ppm), Torio (Th: 17.46 ppm), Hafnio (Hf: 11.8 ppm), Galio (Ga: 23 ppm), Niobio (Nb: 42 ppm), Circonio (Zr: 351 ppm), Tántalo (Ta: 2.47 ppm), Estroncio (Sr: 138 ppm), Indio (In: 0.2 ppm), Titanio (Ti: 0.188%), Vanadio (V: 7.7 ppm), Cromo (Cr: 29 ppm), Uranio (U: 4.2 ppm), Cobalto (Co: 1.7 ppm), Berilio (Be: 2.18 ppm), Germanio (Ge: 0.26 ppm), Níquel (Ni: 8.32 ppm), Selenio (Se: 5 ppm), Oro (Au), Aluminio y Potasio.
- **Interacciones Disponibles en el Módulo:**
  - **Buscador Dinámico Instantáneo:** Búsqueda por nombre de elemento, símbolo químico o aplicación (ej. "Rubidio", "Dy", "Defensa", "Baterías").
  - **Filtros por Categoría:** Botones rápidos `[Todos (41)]`, `[Tierras Raras (15)]`, `[Metales Estratégicos (23)]`, `[Críticos para Defensa/IA]`.
  - **Fichas Expandibles:** Al pulsar sobre un elemento se despliega su tarjeta con PPM promedio, toneladas estimadas según estudio, aplicación en alta tecnología y nivel de criticidad.
- **Animación on Scroll:**
  - Las tarjetas de minerales aparecen en cascada escalonada (*staggered fade-in*) al desplazarse por el catálogo.

---

### SECCIÓN 7: Ficha Geológica, Concesiones & Ventaja Logística a Salaverry
- **Propósito:** Respaldar la viabilidad legal, la titulación de la tierra y la logística portuaria.
- **Contenido Técnico:**
  - *Las 05 Concesiones Mineras Tituladas:*
    1. **Atahualpa**
    2. **Bonanza**
    3. **Gasñape**
    4. **Huascar**
    5. **Incanato**
    - Suma total: **2,328 hectáreas** con derechos mineros exclusivos en regla.
  - *El Fenómeno Geológico Ofiolítico:*
    - Cuerpo gabroico intrusivo originado en el límite del manto terrestre emplazado en basaltos del Jurásico Superior.
    - Extensión continua de **~20 kilómetros de diámetro**.
    - Perforación LGR a 180 metros de profundidad confirmó continuidad de los metales estratégicos (con potencial vertical mayor a 1,000 m).
  - *Corredor Logístico Directo:*
    - Distancia: **Solo 75 km** hasta el Puerto de Salaverry por vía asfaltada.
    - Ventaja competitiva frente a la minería andina tradicional: cero problemas de gran altitud (puna/soroche), carreteras operativas los 365 días del año y ahorro de más del 70% en costos de transporte terrestre.
- **Diseño & Animación:**
  - Distribución en 2 paneles: desglose de concesiones a la izquierda y tarjeta de conectividad logística con mapa esquemático a la derecha.

---

### SECCIÓN 8: Galería de Terreno & Evidencias del Proyecto
- **Propósito:** Brindar tangibilidad y realismo, mostrando que no es solo un prospecto en papel sino un yacimiento explorado y con tracción diplomática.
- **Imágenes Reales a Integrar (provenientes de `/docs/adriano/`):**
  - [`Tracto.jpg`](./docs/adriano/Tracto.jpg) y [`Tracto 3.jpg`](./docs/adriano/Tracto%203.jpg): Fotografías en terreno del macizo mineralizado y maquinaria pesada operando en las concesiones.
  - [`Foto Reunion Embajada de India.jpg`](./docs/adriano/Foto%20Reunion%20Embajada%20de%20India.jpg): Registro fotográfico de sesiones de trabajo diplomático con representantes soberanos interesados en la cadena de metales estratégicos.
- **Presentación Visual:**
  - Mosaico fotográfico curado con leyendas explicativas, marcos finos y efecto hover con zoom sutil (`group-hover:scale-105 transition-transform duration-500`).
  - Animación de revelado suave al scroll.

---

### SECCIÓN 9: Estructura de Participación & Ruta de Adquisición
- **Propósito:** Plantear de forma nítida las alternativas de negocio y el camino institucional para formalizar una transacción.
- **Las 3 Alternativas de Colaboración:**
  1. **Vía 1: Adquisición Completa (100% Equity & Concesiones):**
     - Valoración de Referencia: USD $2,500,000,000+.
     - Traspaso íntegro de las 5 concesiones, derechos mineros y los 15 estudios de laboratorio.
     - Indicado para: Fondos soberanos, consorcios estatales occidentales y mega-corporaciones.
  2. **Vía 2: Joint Venture con Operador Minero Cualificado (Recomendada):**
     - Aporte de capital de desarrollo a cambio de participación accionaria o reparto de ingresos (*revenue share*).
     - Sonde Capital lidera la interlocución estratégica y soporte institucional local.
     - Indicado para: Mineras medianas especializadas y fondos de Private Equity minero.
  3. **Vía 3: Suministro de Mineral Crudo (Offtake EXW):**
     - Venta directa de material triturado en condiciones *Ex Works* para despacho hacia plantas refinadoras internacionales.
     - Indicado para: Procesadores y plantas químicas de imanes y tierras raras.
- **Línea de Tiempo del Proceso (5 Etapas):**
  - *Paso 01:* Solicitud inicial e intercambio de cartas de interés.
  - *Paso 02:* Formalización de Acuerdo de Confidencialidad (NDA).
  - *Paso 03:* Acceso completo al Data Room técnico (certificados ICP-MS).
  - *Paso 04:* Presentación de Oferta No Vinculante (*Term Sheet*).
  - *Paso 05:* Cierre notarial y transferencia de derechos.
- **Diseño & Animación:**
  - Tarjetas de vías de inversión con la opción de Joint Venture destacada con badge dorado `"OPCIÓN RECOMENDADA"`.
  - Stepper secuencial animado con barra de progreso que se completa con el scroll (`scroll-progress-timeline`).

---

### SECCIÓN 10: Data Room Confidencial, Agendamiento Directo & Solicitud de NDA
- **Propósito:** El punto de captura y conversión para iniciar conversaciones con entidades serias.
- **Contenido y Campos:**
  - *Panel Izquierdo Institucional:*
    - Texto explicativo: El acceso a los reportes ICP-MS de ACTLABS, ALS-Chemex y SGS requiere la formalización de un NDA para salvaguardar la reserva estratégica del activo.
    - Contacto corporativo: Sede en San Isidro Financial District, Lima, Perú | `inversiones@sondecapital.com`.
  - *Formulario de Solicitud Ágil:*
    - Nombre y Apellidos completos.
    - Institución / Fondo / Empresa Minera.
    - Cargo Ejecutivo (*Managing Director, VP M&A, Chief Geologist*).
    - Correo Corporativo (con validación).
    - Teléfono directo / WhatsApp con código de país.
    - Interés de Inversión: `[Adquisición Total]` / `[Joint Venture]` / `[Contrato de Suministro]` / `[Reunión Ejecutiva]`.
    - Botón de Acción Principal: `"Solicitar Credenciales de Data Room & NDA"`.
    - Opción secundaria destacada: Enlace directo para agendar videollamada con la gerencia de Sonde Capital.
- **Diseño & Animación:**
  - Contenedor dividido en bloque oscuro a la izquierda y formulario nítido a la derecha. Animación de revelado y feedback inmediato al interactuar con los campos.

---

### SECCIÓN 11: Footer Institucional & Aviso de Confidencialidad
- **Propósito:** Cierre formal, navegación por el portafolio y marco regulatorio.
- **Contenido:**
  - Logotipo de Sonde Capital en blanco.
  - Enlaces a los proyectos hermanos:
    - *Proyecto Borboyona & Tocllano (3.01 BT Oro y Polimetálico)* -> `borboyona.sondecapital.com`
    - *Proyecto Las Arenas del Santa (Hierro, Titanio, Vanadio)* -> `santa.sondecapital.com`
  - Aviso legal formal de confidencialidad y estándares internacionales (NI 43-101 / JORC).
  - Copyright © 2026 Sonde Capital.

---

## 4. Plan de Ejecución por Fases (Metodología Iterativa)

Para validar cada bloque de forma ordenada y sin sorpresas, trabajaremos bajo el siguiente esquema por fases:

- **Fase 1: Header Slim, Hero con Portada Real (`Foto Portada.png`) y Bento Grid de Escala Verificada** (Secciones 1, 2 y 3).
- **Fase 2: Bloque Geopolítico (China vs. Occidente) y Benchmarking frente a Serra Verde, Mountain Pass y Mount Weld** (Secciones 4 y 5).
- **Fase 3: Matriz Interactiva de los 41 Elementos y Tierras Raras basada en el Excel oficial** (Sección 6 - con buscador y filtros instantáneos).
- **Fase 4: Geología de las 5 Concesiones, Corredor a Salaverry y Galería Fotográfica de Terreno** (Secciones 7 y 8).
- **Fase 5: Estructuras de Inversión, Proceso de Cierre, Formulario de NDA / Agendamiento y Footer** (Secciones 9, 10 y 11).
- **Fase 6: Integración del Sistema de Animaciones on-scroll y Revisión Visual Final**.

---

*Este PRD v2.0 queda registrado como la guía oficial para el rediseño.*
