export const BUSINESS = {
  name: "Taller Juancar",
  tagline: "Mecánica integral del automóvil",
  shortDescription:
    "Más de dos décadas reparando, diagnosticando y poniendo a punto tu vehículo en Caseros.",
  phone: "+54 11 2718-0197",
  phoneRaw: "541127180197",
  whatsappMessage:
    "Hola! Vengo desde la web de Taller Juancar y quería consultar por un servicio.",
  address: {
    street: "Gral. Villegas 5456",
    city: "Caseros",
    province: "Buenos Aires",
    country: "Argentina",
  },
  hours: [
    { day: "Lunes a Viernes", time: "09:00 – 19:00" },
    { day: "Sábados", time: "09:00 – 13:00" },
    { day: "Domingos", time: "Cerrado" },
  ],
  social: {
    instagram: "https://www.instagram.com/taller.juancar/",
    tiktok: "https://www.tiktok.com/@juanochoa.juancar?_r=1&_t=ZS-9AkXmlvGcia",
    google:
      "https://synara.ar/directorio-de-empresas/empresa/taller-juancar-109713",
  },
  rating: { value: 4.7, reviews: 33 },
  /** Archivo dentro de `public/` (no en la raíz del repo). Ej.: `public/logo-juancar.jpg` → `/logo-juancar.jpg`. */
  logoSrc: "/logo-juancar.jpg",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Gral.+Villegas+5456,+Caseros,+Buenos+Aires,+Argentina&hl=es&z=16&output=embed",
} as const;

export const WHATSAPP_URL = `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(
  BUSINESS.whatsappMessage,
)}`;

export const TEL_URL = `tel:+${BUSINESS.phoneRaw}`;

/** URL del crédito “Desarrollado por CB” en el footer. */
export const CB_CREDIT_URL = "https://si-cb-vendes-mejor.com.ar/" as const;
