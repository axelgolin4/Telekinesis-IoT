---
name: Telekinesis IoT
description: Sitio corporativo bilingüe (ES/EN) de una empresa guatemalteca de soluciones IoT, automatización y software.
colors:
  noche: "#101d35"
  noche-2: "#16284a"
  azul: "#1769ff"
  azul-hondo: "#0f55d6"
  cyan: "#21c7d9"
  niebla: "#f4f7fa"
  fondo: "#ffffff"
  superficie: "#f4f7fa"
  tarjeta: "#ffffff"
  texto: "#101d35"
  texto-2: "#5b6b80"
  borde: "#e3e9f0"
  enlace: "#1769ff"
  fondo-oscuro: "#0a1426"
  superficie-oscuro: "#0f1b31"
  tarjeta-oscuro: "#13213b"
  texto-oscuro: "#eaf1fb"
  texto-2-oscuro: "#a3b1c6"
  borde-oscuro: "#1f2f4d"
  enlace-oscuro: "#6aa0ff"
  texto-sobre-noche: "#b9c6d8"
  texto-2-sobre-noche: "#a9b6c9"
typography:
  display:
    fontFamily: "Lexend, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Lexend, sans-serif"
    fontSize: "clamp(1.875rem, 3.5vw, 2.6rem)"
    fontWeight: 600
    lineHeight: 1.12
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Lexend, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.375
  body-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.625
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Inter, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.43
rounded:
  chip: "8px"
  control: "12px"
  tile: "16px"
  card: "24px"
  banda: "32px"
  full: "9999px"
spacing:
  gutter: "16px"
  gutter-sm: "24px"
  grid-gap: "20px"
  card-pad: "24px"
  card-pad-lg: "28px"
  section: "96px"
  section-sm: "112px"
  container: "1280px"
components:
  button-primary:
    backgroundColor: "{colors.azul}"
    textColor: "{colors.fondo}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.azul-hondo}"
  button-claro:
    backgroundColor: "{colors.fondo}"
    textColor: "{colors.noche}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-claro-hover:
    backgroundColor: "{colors.niebla}"
  button-noche:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.fondo}"
    rounded: "{rounded.control}"
    padding: "0 24px"
    height: "48px"
  button-noche-hover:
    backgroundColor: "{colors.noche-2}"
  card-solucion:
    backgroundColor: "{colors.tarjeta}"
    textColor: "{colors.texto}"
    rounded: "{rounded.card}"
    padding: "24px"
  icon-tile:
    backgroundColor: "{colors.noche}"
    textColor: "{colors.cyan}"
    rounded: "{rounded.tile}"
    size: "48px"
  input:
    backgroundColor: "{colors.tarjeta}"
    textColor: "{colors.texto}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
    height: "48px"
  chip-tecnologia:
    backgroundColor: "{colors.tarjeta}"
    textColor: "{colors.texto}"
    rounded: "{rounded.chip}"
    padding: "6px 12px"
  badge-ejemplo:
    textColor: "{colors.cyan}"
    rounded: "{rounded.full}"
    padding: "2px 8px"
---

# Design System: Telekinesis IoT

## Overview

**Creative North Star: "La sala de control"**

Lo físico se vuelve dato. El sitio alterna bandas de noche azul profunda (hero, propuesta de valor, CTA, footer), donde los dispositivos se ven conectados a un centro que los observa, con bandas claras de lectura en blanco y gris niebla, donde se explican soluciones, servicios y tecnología. El cyan es la señal viva que recorre ambas: líneas, pulsos, viñetas, íconos sobre noche y el borde que se enciende al pasar el cursor.

El tono es premium, minimalista, tecnológico y corporativo, por pedido explícito del brief. La paleta, las secciones y la estructura (barra de navegación con selector ES/EN y de tema, botón flotante de WhatsApp, footer oscuro) vienen fijadas por el usuario y siguen al sitio hermano Plastikinesis; los titulares en Lexend son el hilo visual compartido entre ambas empresas. Se rechaza la landing SaaS genérica de gradiente morado con tres tarjetas de beneficios.

Densidad media, mucho aire vertical, tarjetas grandes de esquinas generosas, sombras casi ausentes. El movimiento es funcional: pulsos de datos en el hero, aparición suave al hacer scroll donde el navegador lo soporta, y presión táctil en botones.

**Key Characteristics:**
- Alternancia de bandas noche / claras como ritmo de página.
- Cyan reservado a la señal: líneas, pulsos, viñetas, íconos sobre fondo oscuro, estado hover.
- Azul tecnológico reservado a las acciones.
- Tarjetas de 24px con anillo de 1px en lugar de sombra.
- Modo claro y oscuro completos mediante la clase `dark` en `<html>`.
- Bilingüe: cada superficie existe en `/es` y `/en` con el mismo diseño.

## Colors

Azul noche como masa, azul tecnológico como acción, cyan como señal de dato vivo, y neutros fríos para la lectura.

### Primary
- **Azul tecnológico** (`azul`): todas las acciones (botón «Solicitar asesoría», enviar formulario, botón flotante de WhatsApp, números de los pasos del proceso). Al pasar el cursor baja a **Azul hondo** (`azul-hondo`).

### Secondary
- **Cyan señal** (`cyan`): líneas y pulsos del diagrama del hero, íconos sobre fondo noche, viñetas de listas, check de los puntos de «Nosotros», anillo hover de las tarjetas de soluciones, contorno de foco (`:focus-visible`) y selección de texto. En modo oscuro también sustituye al azul en el «IoT» del logotipo y en los íconos de las tarjetas de soluciones.

### Neutral
- **Azul noche** (`noche`): fondo del hero, de la propuesta de valor, del footer y de la banda CTA; color de texto principal en modo claro.
- **Noche 2** (`noche-2`): superficies elevadas sobre noche (nodos y centro del diagrama, final del degradado del CTA, hover del botón oscuro).
- **Niebla** (`niebla` / `superficie`): fondo de las secciones de lectura alternas (Soluciones, Proceso) y de las tarjetas de Tecnología y Nosotros.
- **Blanco** (`fondo`, `tarjeta`): fondo de página y de tarjetas en modo claro.
- **Gris pizarra** (`texto-2`): texto secundario. Es más oscuro que el gris #64748B del brief para mantener contraste AA sobre niebla; el valor del build manda.
- **Borde frío** (`borde`): anillos de tarjetas, bordes de campos, divisores de la barra de navegación.
- **Textos sobre noche** (`texto-sobre-noche`, `texto-2-sobre-noche`): subtítulos del hero y del CTA, y textos secundarios del diagrama, de la propuesta de valor y del footer.

Los tokens de tema (`fondo`, `superficie`, `tarjeta`, `texto`, `texto-2`, `borde`, `enlace`) tienen su pareja oscura (sufijo `-oscuro` en el frontmatter) aplicada por la clase `.dark`.

### Named Rules
**The Señal Rule.** El cyan nunca es fondo de bloque ni color de botón: es la línea, el punto, el ícono o el borde por donde «pasa el dato». La única excepción es el fondo del ícono de una tarjeta de solución en hover.

**The Una Acción Rule.** Todo lo que se puede pulsar para avanzar hacia la asesoría es azul tecnológico. El botón blanco del hero («Explorar soluciones») y el botón noche de WhatsApp son las únicas alternativas, y solo sobre su contexto.

**The Datos de Ejemplo Rule.** Toda lectura numérica en la tarjeta de panel del hero es dato de muestra y debe ir marcada visiblemente con la insignia «Datos de ejemplo» / «Sample data» (y repetida para lectores de pantalla). No se publican cifras sin esa etiqueta hasta que existan datos reales.

## Typography

**Display Font:** Lexend (con sans-serif)
**Body Font:** Inter (con sans-serif)

**Character:** Lexend, geométrica y abierta, da a los titulares un aire técnico y amable, y es el vínculo visual con Plastikinesis. Inter lleva todo el texto de lectura, neutra y muy legible en ambos idiomas.

### Hierarchy
- **Display** (600, 2.25rem → 3.75rem desde `sm`, 1.06, -0.025em): solo el titular del hero. `text-wrap: balance`.
- **Headline** (600, 1.875rem → 2.6rem, 1.12, -0.02em): títulos de sección (el componente `Titulo`), blanco sobre noche y `texto` sobre claro. `text-wrap: balance`.
- **Title** (600, 1.125–1.25rem, 1.375): títulos de tarjeta, pasos y columnas del footer, siempre en Lexend.
- **Body grande** (400, 1.125rem, 1.625): subtítulos e introducciones de sección, ancho máximo ~42rem.
- **Body** (400, 1rem / 0.95rem en tarjetas, 1.625): textos de tarjetas y listas. `text-wrap: pretty` en p, li y dd.
- **Label** (600, 0.875rem): etiquetas de formulario, botón de la barra, chips de tecnología (500). Las lecturas del panel usan cifras tabulares.

### Named Rules
**The Dos Voces Rule.** Lexend para todo lo que titula (h1, h2, h3, logotipo, eslogan, números de paso, menú móvil); Inter para todo lo que se lee. No hay una tercera familia ni monoespaciada.

## Layout

Contenedor centrado de 1280px (`max-w-7xl`) con gutters de 16px (24px desde `sm`). Las secciones respiran con 96px de padding vertical (112px desde `sm`). Las cuadrículas usan un hueco de 20px: soluciones en 1 → 2 → 4 columnas, tecnología en 1 → 2 → 3, servicios en 1 → 2, propuesta de valor en 1 → 2 → 5 (celdas unidas por un hueco de 1px que deja ver el borde blanco translúcido), proceso en 1 → 2 → 4. Hero y contacto son dos columnas desde `lg` (contacto 5/7 de 12). La navegación completa aparece desde `xl`; por debajo, menú desplegable.

Ritmo de bandas en el orden actual: hero noche, Nosotros blanco, Soluciones niebla, Servicios blanco, Valor noche, Tecnología blanco, Proceso niebla, CTA (tarjeta noche dentro de banda blanca), Contacto blanco, footer noche. Las anclas usan `scroll-mt-20` bajo la barra fija.

## Elevation & Depth

Sistema casi plano: la profundidad se construye con tono (noche → noche-2, blanco → niebla) y anillos de 1px, no con sombras. Las sombras aparecen solo en tres lugares y siempre largas, difusas y con extensión negativa. Sobre noche, una retícula de puntos blancos al 7% cada 28px da textura de «tablero».

### Shadow Vocabulary
- **Elevación hover** (`box-shadow: 0 24px 40px -24px rgba(16,29,53,0.35)`): tarjeta de solución al pasar el cursor, junto con un desplazamiento de -4px.
- **Núcleo del diagrama** (`box-shadow: 0 18px 40px -16px rgba(0,0,0,0.6)`): el centro de la plataforma en el hero.
- **Halo de acción** (`box-shadow: 0 12px 28px -10px rgba(23,105,255,0.7)`): botón flotante de WhatsApp.

### Named Rules
**The Anillo Antes Que Sombra Rule.** En reposo, las tarjetas se separan con un anillo de 1px en `borde`; la sombra es respuesta a un estado (hover) o marca un elemento único flotante.

## Shapes

Esquinas generosas y escalonadas por tamaño: chips de tecnología 8px, botones y campos 12px, mosaicos de ícono y paneles pequeños 16px, tarjetas 24px, banda CTA 32px. Píldoras completas para el selector de idioma, el botón de tema, las etiquetas de la propuesta de valor, la insignia «Datos de ejemplo», los números de paso y el botón flotante. El núcleo del diagrama es una «squircle» de 28% de radio.

El logotipo es el símbolo de puntos conectados entregado por el cliente (imagen original con el fondo eliminado, `public/marca/simbolo.png`, con su propio degradado verde-cyan) seguido de «Telekinesis IoT» en Lexend con «IoT» en azul (cyan sobre noche y en modo oscuro). El símbolo no se redibuja, recolorea ni sustituye por otra forma.

## Components

### Buttons
Firmes y compactos, con presión táctil.
- **Shape:** esquinas suaves (12px), altura mínima de 48px (40px en la barra de navegación).
- **Primario:** azul tecnológico, texto blanco semibold, padding horizontal de 24px; hover a azul hondo; `active` escala a 0.97.
- **Claro (solo sobre noche):** blanco con texto noche; hover a niebla.
- **Noche (WhatsApp en Contacto):** noche con anillo blanco al 10%; hover a noche 2.
- **Transición:** fondo y transform en 150ms.

### Chips
- **Tecnología:** fondo `tarjeta`, anillo `borde`, 8px de radio, texto 0.875rem medium.
- **Beneficio sobre noche:** píldora con blanco al 6%, anillo blanco al 10%, texto `#cdd7e5`.
- **Insignia «Datos de ejemplo»:** píldora cyan al 15% con texto cyan, 0.7rem.

### Cards / Containers
- **Corner Style:** 24px.
- **Background:** `tarjeta` sobre niebla (Soluciones), `superficie` sobre blanco (Tecnología, Nosotros), transparente con solo anillo (Servicios).
- **Shadow Strategy:** sin sombra en reposo; ver Elevation & Depth.
- **Border:** anillo de 1px `borde`.
- **Internal Padding:** 24px (soluciones), 28px (servicios, tecnología, valor).
- **Mosaico de ícono:** 48px, 16px de radio; azul al 10% con ícono azul (soluciones) o noche con ícono cyan (servicios).

### Inputs / Fields
- **Style:** borde de 1px `borde`, fondo `tarjeta`, 12px de radio, 48px de alto, padding 12px 16px.
- **Focus:** borde azul y anillo azul al 20% de 2px.
- **Contenedor:** formulario en tarjeta de 24px con padding 24–32px.

### Navigation
Barra fija con fondo `fondo` al 90% y desenfoque, borde inferior `borde`. Enlaces en Inter 0.95rem medium `texto-2` que pasan a `texto`. A la derecha: selector ES/EN (píldora con el idioma activo invertido), botón de tema (luna/sol, 36px), y «Solicitar asesoría» primario. Por debajo de `xl`, hamburguesa de 44px que despliega una lista de enlaces en Lexend 1.125rem con divisores y un botón primario a ancho completo; el panel entra con `pop-in` (180ms, desplazamiento de -4px).

### Diagrama del hero (firma)
El símbolo de la marca al centro en una squircle noche 2 con anillo cyan al 30%, conectado por líneas cyan al 25% a seis dispositivos de campo (agua, energía, riego, maquinaria, aire, residuos) dispuestos en anillo. Por cada línea viaja un pulso cyan (`pulso`, 2.6s lineal, desfase de 0.43s por nodo). Con movimiento reducido el pulso se detiene y queda como línea al 35%. Debajo, una tarjeta de panel translúcida (blanco al 6%) con lecturas en cifras tabulares, la insignia «Datos de ejemplo» y una alerta ámbar de muestra. Todas las cifras del panel son de ejemplo y deben seguir etiquetadas así.

### Tarjeta de solución (firma)
Al pasar el cursor, la tarjeta sube 4px, su anillo pasa a cyan al 70% y el mosaico de ícono «se enciende» a fondo cyan con ícono noche (200ms).

## Do's and Don'ts

### Do:
- **Do** usar azul tecnológico (`azul`) para cada acción que lleva a la asesoría, con hover a `azul-hondo`.
- **Do** reservar el cyan para la señal: líneas, pulsos, viñetas de 6px, íconos sobre noche, focos y hover.
- **Do** alternar bandas noche y claras; poner la retícula de puntos solo sobre noche.
- **Do** separar tarjetas con anillo de 1px y esquinas de 24px; dejar la sombra para el hover.
- **Do** titular en Lexend semibold con tracking negativo y leer en Inter.
- **Do** definir cada nuevo color de superficie o texto con su pareja `.dark`.
- **Do** mantener visible la insignia «Datos de ejemplo» / «Sample data» junto a cualquier cifra de muestra.
- **Do** usar el símbolo del cliente tal como fue entregado (fondo eliminado), sin redibujarlo.
- **Do** respetar `prefers-reduced-motion`: pulsos detenidos, sin aparición al scroll, transiciones a 1ms.

### Don't:
- **Don't** usar gradientes morados ni la composición SaaS de tres tarjetas de beneficios.
- **Don't** usar cyan como fondo de botón o de bloque grande.
- **Don't** publicar cifras, clientes, certificaciones o alianzas inventadas como si fueran reales.
- **Don't** introducir una tercera familia tipográfica.
- **Don't** ocultar contenido por defecto esperando la animación de scroll; el contenido es visible sin ella.
