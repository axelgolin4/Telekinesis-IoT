// Contenido del sitio en español e inglés. Las páginas piden el idioma con getContent(lang).

export const locales = ["es", "en"];
export const hasLocale = (lang) => locales.includes(lang);

const es = {
  lang: "es",
  meta: {
    titulo: "Telekinesis IoT | Soluciones IoT, automatización y software en Guatemala",
    descripcion:
      "Diseñamos e implementamos soluciones IoT, automatización, electrónica y software a la medida para monitorear, gestionar y optimizar operaciones. Guatemala.",
  },
  ui: {
    nav: [
      { id: "inicio", label: "Inicio" },
      { id: "nosotros", label: "Nosotros" },
      { id: "soluciones", label: "Soluciones" },
      { id: "servicios", label: "Servicios" },
      { id: "tecnologia", label: "Tecnología" },
      { id: "contacto", label: "Contacto" },
    ],
    asesoria: "Solicitar asesoría",
    abrirMenu: "Abrir menú",
    cerrarMenu: "Cerrar menú",
    cambiarIdioma: "View in English",
    modoOscuro: "Activar modo oscuro",
    modoClaro: "Activar modo claro",
    whatsapp: "WhatsApp",
    llamar: "Llamar",
    escribirA: "Escribir a Telekinesis IoT por WhatsApp",
    mensajeBase: "Hola, me interesa una asesoría de Telekinesis IoT.",
  },
  hero: {
    titulo: "Conectamos el mundo físico con el digital.",
    subtitulo:
      "Desarrollamos soluciones IoT, automatización y software inteligente para transformar la manera en que las empresas monitorean, gestionan y optimizan sus operaciones.",
    explorar: "Explorar soluciones",
    nodos: ["Agua", "Energía", "Riego", "Maquinaria", "Aire", "Residuos"],
    panel: {
      titulo: "Panel de monitoreo",
      ejemplo: "Datos de ejemplo",
      lecturas: [
        { etiqueta: "Nivel de tanque", valor: "72 %" },
        { etiqueta: "Vibración motor 2", valor: "2,4 mm/s" },
        { etiqueta: "Consumo eléctrico", valor: "18,6 kW" },
      ],
      alerta: "Posible fuga detectada · Bodega 3",
    },
  },
  nosotros: {
    titulo: "Innovación que conecta y transforma.",
    texto:
      "En Telekinesis IoT creemos que la tecnología debe resolver problemas reales. Integramos ingeniería, electrónica y desarrollo de software para crear soluciones que permiten conectar dispositivos, recopilar información y transformar procesos en operaciones más inteligentes.",
    puntos: [
      "No somos distribuidores de sensores: diseñamos la solución completa, del dispositivo a la plataforma.",
      "Hardware, conectividad, software, automatización y análisis bajo un mismo equipo.",
      "Empresa hermana de Plastikinesis, ingeniería y fabricación de componentes técnicos.",
    ],
    eslogan: "Conectamos tecnología. Transformamos operaciones.",
  },
  soluciones: {
    titulo: "Soluciones para operaciones más inteligentes",
    intro: "Ocho líneas de solución que convierten lo que pasa en tu operación en información para actuar a tiempo.",
    lista: [
      { id: "smart-water", nombre: "Smart Water", titulo: "Monitoreo inteligente de agua", texto: "Mide niveles de tanques, caudal, presión y consumo para detectar anomalías y optimizar el recurso." },
      { id: "leak-detection", nombre: "Leak Detection", titulo: "Detección inteligente de fugas", texto: "Sensores que detectan agua donde no debe haber y avisan a tiempo para prevenir daños." },
      { id: "smart-irrigation", nombre: "Smart Irrigation", titulo: "Agricultura y riego automatizado", texto: "Humedad del suelo y dispositivos conectados para monitorear cultivos y automatizar el riego." },
      { id: "predictive-maintenance", nombre: "Predictive Maintenance", titulo: "Mantenimiento predictivo", texto: "Vibración, temperatura y variables de maquinaria para anticipar fallas antes de que paren la línea." },
      { id: "smart-energy", nombre: "Smart Energy", titulo: "Gestión inteligente de energía", texto: "Consumo eléctrico, patrones y consumos anormales para encontrar oportunidades de eficiencia." },
      { id: "smart-livestock", nombre: "Smart Livestock", titulo: "Ganadería inteligente", texto: "Monitoreo y seguimiento de ganado con dispositivos conectados, sensores y ubicación." },
      { id: "smart-waste", nombre: "Smart Waste", titulo: "Gestión inteligente de residuos", texto: "Nivel de llenado de contenedores para optimizar rutas y frecuencia de recolección." },
      { id: "air-quality", nombre: "Air Quality", titulo: "Monitoreo de calidad del aire", texto: "Temperatura, humedad, CO₂ y partículas medidos de forma continua en tus espacios." },
    ],
  },
  servicios: {
    titulo: "Servicios tecnológicos",
    intro: "Las capacidades detrás de cada solución, también disponibles para tus propios proyectos.",
    grupos: [
      { id: "software", titulo: "Desarrollo de software", items: ["Software a medida", "Plataformas web", "APIs e integraciones"] },
      { id: "automatizacion", titulo: "Automatización", items: ["Automatización industrial y empresarial", "Diseño e implementación de sistemas electrónicos"] },
      { id: "iot", titulo: "Integración IoT", items: ["Integración de dispositivos IoT", "Monitoreo remoto"] },
      { id: "datos", titulo: "Datos y consultoría", items: ["Dashboards y visualización de datos", "Analítica de datos", "Consultoría tecnológica"] },
    ],
  },
  valor: {
    titulo: "Lo que gana tu operación",
    lista: [
      { id: "tiempo-real", titulo: "Monitoreo en tiempo real", texto: "Sabes qué está pasando, aunque no estés ahí." },
      { id: "automatizacion", titulo: "Automatización", texto: "Los procesos repetitivos se ejecutan solos y a tiempo." },
      { id: "eficiencia", titulo: "Eficiencia operativa", texto: "Menos pérdidas, menos desperdicio y mejor uso de recursos." },
      { id: "conectividad", titulo: "Conectividad", texto: "Dispositivos y datos accesibles de forma remota." },
      { id: "centralizada", titulo: "Información centralizada", texto: "Todo en un mismo lugar para decidir con datos." },
    ],
    extra: ["Detección temprana de anomalías", "Reducción de pérdidas", "Acceso remoto a datos y dispositivos"],
  },
  tecnologia: {
    titulo: "Tecnología que utilizamos",
    intro: "Herramientas probadas que elegimos según cada proyecto.",
    categorias: [
      { id: "hardware", titulo: "Hardware y electrónica", items: ["ESP32", "Microcontroladores", "Sensores", "Actuadores", "Sistemas embebidos"] },
      { id: "conectividad", titulo: "Conectividad", items: ["Wi-Fi", "Bluetooth", "LoRaWAN", "Redes celulares", "Ethernet"] },
      { id: "protocolos", titulo: "Protocolos", items: ["MQTT", "HTTP", "REST APIs", "Modbus"] },
      { id: "software", titulo: "Desarrollo de software", items: ["Laravel", "PHP", "React", "JavaScript", "Bases de datos"] },
      { id: "infraestructura", titulo: "Infraestructura", items: ["Cloud computing", "Almacenamiento de datos", "Servicios de backend", "Monitoreo"] },
      { id: "automatizacion", titulo: "Automatización", items: ["Controladores", "Sistemas de monitoreo", "Automatización de procesos"] },
    ],
  },
  proceso: {
    titulo: "Cómo trabajamos",
    pasos: [
      { titulo: "Descubrimiento", texto: "Analizamos tus necesidades, identificamos problemas y encontramos oportunidades de mejora." },
      { titulo: "Diseño", texto: "Diseñamos una solución personalizada: sensores, dispositivos, conectividad y arquitectura de software." },
      { titulo: "Implementación", texto: "Desarrollamos, integramos, instalamos y configuramos todos los componentes." },
      { titulo: "Monitoreo y optimización", texto: "Te damos herramientas de monitoreo, análisis, mantenimiento y mejora continua." },
    ],
  },
  cta: {
    titulo: "¿Tienes un proceso que podría ser más inteligente?",
    texto:
      "Cuéntanos qué necesitas monitorear, automatizar u optimizar. Podemos ayudarte a convertir esa necesidad en una solución tecnológica.",
    boton: "Conversemos sobre tu proyecto",
  },
  contacto: {
    titulo: "Solicita una asesoría",
    intro: "Completa el formulario y el mensaje sale listo en WhatsApp. También puedes escribirnos directamente.",
    campos: {
      nombre: "Nombre",
      empresa: "Empresa",
      correo: "Correo electrónico",
      telefono: "Teléfono",
      solucion: "Tipo de solución",
      descripcion: "Descripción del proyecto",
    },
    otra: "Otra / no estoy seguro",
    enviar: "Enviar solicitud",
    directo: "Escribir por WhatsApp",
    responsable: "Contacto",
    correo: "Correo",
    ubicacion: "Ubicación",
    pais: "Guatemala",
    armar: ({ nombre, empresa, correo, telefono, solucion, descripcion }) =>
      [
        `Hola, soy ${nombre}${empresa ? ` de ${empresa}` : ""}.`,
        `Me interesa: ${solucion}.`,
        descripcion,
        `Correo: ${correo}`,
        telefono ? `Teléfono: ${telefono}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
  },
  footer: {
    descripcion:
      "Soluciones IoT, automatización, electrónica y software a la medida para conectar el mundo físico con el digital.",
    navegacion: "Navegación",
    servicios: "Servicios",
    contacto: "Contacto",
    hermana: "Empresa hermana de",
    derechos: "© 2026 Telekinesis IoT. Todos los derechos reservados.",
    diseno: "Diseño web:",
  },
};

const en = {
  lang: "en",
  meta: {
    titulo: "Telekinesis IoT | IoT solutions, automation and software in Guatemala",
    descripcion:
      "We design and implement custom IoT, automation, electronics and software solutions to monitor, manage and optimize operations. Guatemala.",
  },
  ui: {
    nav: [
      { id: "inicio", label: "Home" },
      { id: "nosotros", label: "About" },
      { id: "soluciones", label: "Solutions" },
      { id: "servicios", label: "Services" },
      { id: "tecnologia", label: "Technology" },
      { id: "contacto", label: "Contact" },
    ],
    asesoria: "Request a consultation",
    abrirMenu: "Open menu",
    cerrarMenu: "Close menu",
    cambiarIdioma: "Ver en español",
    modoOscuro: "Switch to dark mode",
    modoClaro: "Switch to light mode",
    whatsapp: "WhatsApp",
    llamar: "Call",
    escribirA: "Message Telekinesis IoT on WhatsApp",
    mensajeBase: "Hi, I'm interested in a consultation with Telekinesis IoT.",
  },
  hero: {
    titulo: "We connect the physical world with the digital one.",
    subtitulo:
      "We build IoT solutions, automation and intelligent software that change how companies monitor, manage and optimize their operations.",
    explorar: "Explore solutions",
    nodos: ["Water", "Energy", "Irrigation", "Machinery", "Air", "Waste"],
    panel: {
      titulo: "Monitoring dashboard",
      ejemplo: "Sample data",
      lecturas: [
        { etiqueta: "Tank level", valor: "72%" },
        { etiqueta: "Motor 2 vibration", valor: "2.4 mm/s" },
        { etiqueta: "Power consumption", valor: "18.6 kW" },
      ],
      alerta: "Possible leak detected · Warehouse 3",
    },
  },
  nosotros: {
    titulo: "Innovation that connects and transforms.",
    texto:
      "At Telekinesis IoT we believe technology should solve real problems. We bring together engineering, electronics and software development to build solutions that connect devices, collect information and turn processes into smarter operations.",
    puntos: [
      "We don't resell sensors: we design the complete solution, from the device to the platform.",
      "Hardware, connectivity, software, automation and analytics in one team.",
      "Sister company of Plastikinesis, engineering and manufacturing of technical components.",
    ],
    eslogan: "We connect technology. We transform operations.",
  },
  soluciones: {
    titulo: "Solutions for smarter operations",
    intro: "Eight solution lines that turn what happens in your operation into information you can act on in time.",
    lista: [
      { id: "smart-water", nombre: "Smart Water", titulo: "Smart water monitoring", texto: "Measure tank levels, flow, pressure and consumption to spot anomalies and optimize the resource." },
      { id: "leak-detection", nombre: "Leak Detection", titulo: "Smart leak detection", texto: "Sensors that detect water where it shouldn't be and alert you early to prevent damage." },
      { id: "smart-irrigation", nombre: "Smart Irrigation", titulo: "Smart farming and irrigation", texto: "Soil moisture and connected devices to monitor crops and automate irrigation." },
      { id: "predictive-maintenance", nombre: "Predictive Maintenance", titulo: "Predictive maintenance", texto: "Vibration, temperature and machine variables to anticipate failures before they stop the line." },
      { id: "smart-energy", nombre: "Smart Energy", titulo: "Smart energy management", texto: "Power consumption, patterns and abnormal usage to find efficiency opportunities." },
      { id: "smart-livestock", nombre: "Smart Livestock", titulo: "Smart livestock", texto: "Livestock monitoring and tracking with connected devices, sensors and location." },
      { id: "smart-waste", nombre: "Smart Waste", titulo: "Smart waste management", texto: "Container fill levels to optimize collection routes and frequency." },
      { id: "air-quality", nombre: "Air Quality", titulo: "Air quality monitoring", texto: "Temperature, humidity, CO₂ and particulate matter measured continuously in your spaces." },
    ],
  },
  servicios: {
    titulo: "Technology services",
    intro: "The capabilities behind every solution, also available for your own projects.",
    grupos: [
      { id: "software", titulo: "Software development", items: ["Custom software", "Web platforms", "APIs and integrations"] },
      { id: "automatizacion", titulo: "Automation", items: ["Industrial and business automation", "Electronic system design and implementation"] },
      { id: "iot", titulo: "IoT integration", items: ["IoT device integration", "Remote monitoring"] },
      { id: "datos", titulo: "Data and consulting", items: ["Dashboards and data visualization", "Data analytics", "Technology consulting"] },
    ],
  },
  valor: {
    titulo: "What your operation gains",
    lista: [
      { id: "tiempo-real", titulo: "Real-time monitoring", texto: "Know what's happening, even when you're not there." },
      { id: "automatizacion", titulo: "Automation", texto: "Repetitive processes run on their own, on time." },
      { id: "eficiencia", titulo: "Operational efficiency", texto: "Fewer losses, less waste and better use of resources." },
      { id: "conectividad", titulo: "Connectivity", texto: "Devices and data available remotely." },
      { id: "centralizada", titulo: "Centralized information", texto: "Everything in one place to make data-driven decisions." },
    ],
    extra: ["Early anomaly detection", "Loss reduction", "Remote access to data and devices"],
  },
  tecnologia: {
    titulo: "Technology we use",
    intro: "Proven tools we choose for each project.",
    categorias: [
      { id: "hardware", titulo: "Hardware and electronics", items: ["ESP32", "Microcontrollers", "Sensors", "Actuators", "Embedded systems"] },
      { id: "conectividad", titulo: "Connectivity", items: ["Wi-Fi", "Bluetooth", "LoRaWAN", "Cellular networks", "Ethernet"] },
      { id: "protocolos", titulo: "Protocols", items: ["MQTT", "HTTP", "REST APIs", "Modbus"] },
      { id: "software", titulo: "Software development", items: ["Laravel", "PHP", "React", "JavaScript", "Databases"] },
      { id: "infraestructura", titulo: "Infrastructure", items: ["Cloud computing", "Data storage", "Backend services", "Monitoring"] },
      { id: "automatizacion", titulo: "Automation", items: ["Controllers", "Monitoring systems", "Process automation"] },
    ],
  },
  proceso: {
    titulo: "How we work",
    pasos: [
      { titulo: "Discovery", texto: "We analyze your needs, identify problems and find opportunities for improvement." },
      { titulo: "Design", texto: "We design a custom solution: sensors, devices, connectivity and software architecture." },
      { titulo: "Implementation", texto: "We develop, integrate, install and configure every component." },
      { titulo: "Monitoring and optimization", texto: "We provide monitoring, analysis, maintenance and continuous improvement tools." },
    ],
  },
  cta: {
    titulo: "Do you have a process that could be smarter?",
    texto:
      "Tell us what you need to monitor, automate or optimize. We can help you turn that need into a technology solution.",
    boton: "Let's talk about your project",
  },
  contacto: {
    titulo: "Request a consultation",
    intro: "Fill in the form and the message is ready in WhatsApp. You can also message us directly.",
    campos: {
      nombre: "Name",
      empresa: "Company",
      correo: "Email",
      telefono: "Phone",
      solucion: "Type of solution",
      descripcion: "Project description",
    },
    otra: "Other / not sure",
    enviar: "Send request",
    directo: "Message on WhatsApp",
    responsable: "Contact",
    correo: "Email",
    ubicacion: "Location",
    pais: "Guatemala",
    armar: ({ nombre, empresa, correo, telefono, solucion, descripcion }) =>
      [
        `Hi, I'm ${nombre}${empresa ? ` from ${empresa}` : ""}.`,
        `I'm interested in: ${solucion}.`,
        descripcion,
        `Email: ${correo}`,
        telefono ? `Phone: ${telefono}` : "",
      ]
        .filter(Boolean)
        .join("\n"),
  },
  footer: {
    descripcion: "Custom IoT, automation, electronics and software solutions that connect the physical world with the digital one.",
    navegacion: "Navigation",
    servicios: "Services",
    contacto: "Contact",
    hermana: "Sister company of",
    derechos: "© 2026 Telekinesis IoT. All rights reserved.",
    diseno: "Web design:",
  },
};

const contenidos = { es, en };
export const getContent = (lang) => contenidos[lang] ?? es;
