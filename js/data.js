/**
 * Contenido del portafolio.
 * Para sumar un proyecto nuevo: agregá un objeto al array `projects`.
 * Para sumar experiencia, habilidades o educación: mismo criterio, un objeto más en el array.
 * El HTML y el CSS no se tocan — solo este archivo.
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Juan Cruz Manochi",
    role: "E-commerce · Growth Marketing · Automatización con IA",
    pitch:
      "Monto marcas de e-commerce, dirijo equipos creativos y automatizo todo lo que se puede con IA. De la idea al checkout, y del checkout al proceso que lo sostiene.",
    location: "Vicente López, Buenos Aires, Argentina",
    bio:
      "Técnico en Multimedios y dueño de mi propia marca de ropa online. Aprendí a vender, a diseñar, a dirigir equipos y a automatizar procesos con IA haciendo, no solo estudiando. Hoy cruzo comercio, marketing y tecnología para armar operaciones que funcionan solas.",
    interests: [
      "Comercio Online",
      "Automatización y gestión",
      "Publicidad Digital",
      "Tecnología e IA",
      "Diseño y Arte",
    ],
  },

  skills: [
    {
      category: "Comercio & Venta",
      code: "CV",
      items: ["Meta Ads", "E-commerce", "Atención al cliente y venta", "Growth Marketing"],
    },
    {
      category: "IA & Automatización",
      code: "IA",
      items: ["Claude Code", "Integraciones con IA", "Automatización con IA", "Gestión de Procesos"],
    },
    {
      category: "Dirección & Diseño",
      code: "DD",
      items: ["Dirección Creativa", "Estrategia Visual"],
    },
  ],

  experience: [
    {
      role: "Dueño y Gestor",
      org: "Tienda de Ropa Online",
      start: "Nov 2025",
      end: "Mayo 2026",
      description:
        "Manejé mi propia marca de ropa, página web y marketing de punta a punta: producto, tienda, campañas y ventas.",
    },
    {
      role: "Director de Operaciones",
      org: "Agencia de Marketing con IA",
      start: "Abr 2023",
      end: "Ago 2023",
      description:
        "Organicé el trabajo del equipo, mejoré los procesos internos y dirigí a diseñadores y editores para crear campañas que llaman la atención.",
    },
    {
      role: "Vendedor",
      org: "Agencia de Marketing con IA",
      start: "Feb 2023",
      end: "Mar 2023",
      description: "Contacté clientes potenciales y cerré reuniones de venta.",
    },
  ],

  education: [
    {
      title: "Técnico en Multimedios",
      org: "E.E.S.T Técnica N°3 de Vicente López",
      start: "2020",
      end: "Presente",
    },
    {
      title: "Curso de E-commerce de Ropa (7FB)",
      org: "7FB",
      start: "2025",
      end: "2026",
    },
    {
      title: "Curso de Claude Code",
      org: "Agustín Medina",
      start: "2026",
      end: "2026",
    },
  ],

  // Vacío por ahora — a medida que Juan mande carpetas con proyectos, se cargan acá.
  projects: [],

  contact: {
    phone: "+54 11 3191-3259",
    phoneHref: "tel:+541131913259",
    whatsappHref: "https://wa.me/5491131913259",
    email: "manochijuancruz@gmail.com",
  },
};
