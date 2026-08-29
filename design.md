# Sistema de Diseño y Guía de Estilo: Sonde Capital

## 1. Identidad y Filosofía Visual

**Sonde Capital** es una firma de inversión privada y desarrollo minero estratégico (Proyecto Borboyona / Arenas del Santa). La identidad visual está diseñada para transmitir **solidez institucional, alta rentabilidad, precisión técnica, modernidad y máxima confianza**.

### Pilares Fundamentales
- **Claridad Corporativa & Confianza Institucional**: Estética de banca de inversión privada y fondos institucionales (*Private Equity*). Ambientes luminosos, estructurados y con alta legibilidad.
- **Minimalismo Moderno & Espacio Negativo**: Eliminación de artificios innecesarios. Jerarquías claras, márgenes generosos y acabados nítidos.
- **Detalles Dorados de Precisión**: Acentos dorados sutiles y elegantes (no estridentes) sobre bases azul marino financiero y fondos perla/blanco arquitectónico.
- **Dinamismo, Interactividad & Presentación de Alto Impacto**: Énfasis en la presentación viva y dinámica de la información. Los datos se muestran mediante componentes interactivos, micro-animaciones, selectores en tiempo real, estados reactivos al cursor y transiciones suaves que eliminan la monotonía, logrando que comités, gerentes e inversionistas exploren el proyecto de forma atractiva, ágil e impactante.

---

## 2. Paleta Cromática (Tokens de Color)

### Paleta Principal (Clean White & Slate)
| Token | Variable / Hex | Uso Principal |
| :--- | :--- | :--- |
| `--color-bg-body` | `#F8FAFC` / `#FFFFFF` | Fondo general de la plataforma (limpio, luminoso) |
| `--color-bg-surface` | `#FFFFFF` | Fondo de tarjetas, paneles y contenedores de datos |
| `--color-bg-subtle` | `#F1F5F9` | Fondos de tablas, badges y áreas secundarias |
| `--color-border-light` | `#E2E8F0` | Bordes finos estructurales (1px) |
| `--color-border-focus` | `#CBD5E1` | Bordes al interactuar o enfocar elementos |

### Azul Marino Financiero (Navy Deep)
| Token | Variable / Hex | Uso Principal |
| :--- | :--- | :--- |
| `--color-navy-950` | `#090D16` | Contraste máximo, textos de encabezados principales |
| `--color-navy-900` | `#0F172A` | Color corporativo primario institucional |
| `--color-navy-800` | `#1E293B` | Subtítulos y textos con peso |
| `--color-navy-700` | `#334155` | Textos de párrafos y descripciones |

### Acentos de Valor (Gold & Amber Métrico)
| Token | Variable / Hex | Uso Principal |
| :--- | :--- | :--- |
| `--color-gold-400` | `#FBBF24` | Iluminación de gráficos y detalles sutiles |
| `--color-gold-500` | `#F59E0B` | Acentos primarios, indicadores y líneas de tendencia |
| `--color-gold-600` | `#D97706` | Botones de acción principal (CTA) y estados activos |
| `--color-gold-light` | `rgba(245, 158, 11, 0.08)` | Fondos de insignias y estados destacados |

### Paleta de Dinamismo, Estados e Interactividad (Dynamic UI & Data Viz)
| Token | Hex | Uso en Componentes Dinámicos |
| :--- | :--- | :--- |
| `--color-interactive-primary` | `#0F172A` | Elementos de datos base y estructuras activas |
| `--color-interactive-accent` | `#D97706` | Puntos focales interactivos, líneas activas y hover destacado |
| `--color-interactive-teal` | `#0D9488` | Indicadores de confirmación, badges activos y métricas destacadas |
| `--color-interactive-glow` | `rgba(217, 119, 6, 0.18)` | Resplandor sutil para elementos enfocados o seleccionados |
| `--color-interactive-grid` | `rgba(15, 23, 42, 0.06)` | Guías y cuadrículas de apoyo para visualizadores dinámicos |

---

## 3. Tipografía

Tipografía moderna sans-serif estilo Fintech / Venture Capital de alto rendimiento:

- **Títulos y Encabezados (Display)**:
  - Familia: `Plus Jakarta Sans` (o `Outfit`)
  - Pesos: `600 (SemiBold)` y `700 (Bold)`
  - Características: Letras nítidas, proporciones equilibradas y aspecto tecnológico corporativo.
- **Cuerpo, Tablas y Métricas Numéricas**:
  - Familia: `Inter`
  - Pesos: `400 (Regular)`, `500 (Medium)`, `600 (SemiBold)`
  - Regla Numérica: `font-feature-settings: "tnum" 1, "cv05" 1` (`tabular-nums`) para que todas las cifras y monedas alineen perfectamente en vertical.

---

## 4. Componentes y Patrones UI de Alto Impacto

### Tarjetas de Métricas Dinámicas (Interactive KPI Cards)
- Superficie blanca pura (`#FFFFFF`) con elevación suave: `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05)`.
- Respuesta al hover interactivo: elevación sutil (`translate-y(-4px)`), sombra difusa reforzada y acento en el borde superior.
- Cifra principal de gran escala (`text-3xl` o `text-4xl`, peso 700) con animaciones de conteo o revelado progresivo al entrar en viewport.

### Componentes Dinámicos y Visualizadores Interactivos de Datos
- **Exploración por Capas**: Módulos interactivos donde el usuario puede alternar vistas, variables o escenarios mediante botones segmentados o pestañas dinámicas sin recarga.
- **Feedback Visual Inmediato**: Tooltips flotantes (`backdrop-filter: blur(8px)`), barras con llenado progresivo animado y micro-interacciones suaves.
- **Visualización No Aburrida**: Reemplazo de tablas o listas estáticas por componentes vivos con transiciones fluidas, comparadores interactivos y datos reactivos al cursor.

### Botones de Acción y Controles Interactivos (CTAs)
- **Botón Primario**: Fondo oro corporativo (`#D97706` con hover a `#B45309`), texto blanco o navy oscuro, esquinas suaves (`rounded-xl`), micro-escala al clic (`active:scale-95`).
- **Botón Secundario / Filtro**: Fondo blanco con borde fino `#CBD5E1`, texto `#0F172A`, cambio de estado visual claro al estar activo.

### Desgloses Interactivos y Tablas Vivas
- Filas interactivas con iluminación hover suave (`hover:bg-slate-50`), badges de estado con pulso sutil (ej: *Alta Ley*, *100% Titulado*, *Crítico*).
- Paneles colapsables y modales ligeros para inspeccionar fichas geológicas sin perder el contexto visual de la página.

---

## 5. Arquitectura de Navegación y Secciones
1. **Hero Institucional de Alto Impacto**: Propuesta de valor contundente, métricas macro en vivo y llamadas a la acción directas.
2. **Dashboard Dinámico & Módulos Interactivos**: Paneles interactivos de exploración de datos, comparativas en tiempo real y visualizadores vivos de indicadores clave.
3. **Ficha Técnica & Geológica Dinámica (Borboyona / Arenas del Santa / Adriano)**: Desglose interactivo de mineralogía, calicatas, recursos y ventajas competitivas.
4. **Estructura de Participación & Opciones de Inversión**: Modelos interactivos de colaboración (Adquisición, JV, Offtake) con cronogramas claros.
5. **Data Room & Formulario de Acceso Confidencial**: Formulario ágil con validación y solicitud de credenciales institucionales.
