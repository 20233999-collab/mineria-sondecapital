# Sistema de Diseño y Guía de Estilo: Sonde Capital

## 1. Identidad y Filosofía Visual

**Sonde Capital** es una firma de inversión privada y desarrollo minero estratégico (Proyecto Borboyona / Arenas del Santa). La identidad visual está diseñada para transmitir **solidez institucional, alta rentabilidad, precisión técnica, modernidad y máxima confianza**.

### Pilares Fundamentales
- **Claridad Corporativa & Confianza Institucional**: Estética de banca de inversión privada y fondos institucionales (*Private Equity*). Ambientes luminosos, estructurados y con alta legibilidad.
- **Minimalismo Moderno & Espacio Negativo**: Eliminación de artificios innecesarios. Jerarquías claras, márgenes generosos y acabados nítidos.
- **Detalles Dorados de Precisión**: Acentos dorados sutiles y elegantes (no estridentes) sobre bases azul marino financiero y fondos perla/blanco arquitectónico.
- **Enfoque en Datos Financieros y Proyecciones**: Énfasis en la visualización interactiva de flujos de caja, ROI, métricas clave (KPIs) y gráficos de rendimiento (Chart.js / ApexCharts).

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

### Paleta de Datos Financieros (Data Viz)
| Token | Hex | Uso en Gráficos |
| :--- | :--- | :--- |
| `--color-chart-primary` | `#0F172A` | Flujo de inversión base / capital acumulado |
| `--color-chart-gold` | `#D97706` | Retorno esperado / Ganancia proyectada |
| `--color-chart-teal` | `#0D9488` | EBITDA y márgenes operativos positivos |
| `--color-chart-grid` | `rgba(15, 23, 42, 0.06)` | Cuadrícula de gráficos interactivos |

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

## 4. Componentes y Patrones UI

### Tarjetas de Métricas (KPI Cards)
- Superficie blanca pura (`#FFFFFF`) con sombra suave y difusa: `box-shadow: 0 4px 20px -2px rgba(15, 23, 42, 0.05)`.
- Borde superior sutil con indicador de color (Dorado para retorno, Azul marino para volumen).
- Cifra principal grande (`text-3xl` o `text-4xl`, peso 700) acompañada de porcentaje de variación o etiqueta institucional.

### Gráficos Interactivos de Proyección Financiera
- Implementación con **Chart.js** o **ApexCharts** con temas claros calibrados.
- Tooltips personalizados con fondo oscuro flotante (`#0F172A`), texto blanco y cifras con formato de moneda internacional (USD).
- Curvas suaves (*monotone spline*) con áreas sombreadas en gradiente tenue hacia abajo.

### Botones de Acción (CTAs)
- **Botón Primario**: Fondo oro corporativo (`#D97706` con hover a `#B45309`), texto blanco o navy oscuro, bordes con radio suave (`rounded-lg`), elevación ligera al hacer hover.
- **Botón Secundario**: Fondo blanco con borde fino `#CBD5E1`, texto `#0F172A`, hover con fondo `#F8FAFC`.

### Tablas Financieras y Desgloses
- Filas alternadas suaves (`#F8FAFC`), encabezados en mayúsculas pequeñas (`text-xs tracking-wider text-slate-500`).
- Estados de badge para validaciones técnicas (ej: *Certificado*, *En Ejecución*, *Alta Ley*).

---

## 5. Arquitectura de Navegación y Secciones
1. **Hero Institucional**: Título de alto impacto, propuesta de valor de inversión y métricas macro clave.
2. **Dashboard de Retorno & Proyecciones**: Gráficos interactivos de flujo de caja y rentabilidad proyectada por fases.
3. **Ficha Técnica del Proyecto (Borboyona / Arenas del Santa)**: Geología, volumen de reservas estimadas, tecnología de extracción y ventajas operativas.
4. **Estructura de Capital & Términos de Inversión**: Participación accionaria, cronograma de desembolsos y mecanismos de salida/liquidez.
5. **Formulario / Contacto Directo de Relación con Inversionistas**.
