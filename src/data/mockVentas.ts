import type { ArticuloVenta } from "@/types/venta";

// TODO: Reemplazar este Mock con el fetch a Sanity.io usando GROQ.

export const mockVentas: ArticuloVenta[] = [
  {
    _id: "venta-001",
    _type: "articuloVenta",
    _createdAt: "2026-03-14T10:00:00.000Z",
    _updatedAt: "2026-04-02T12:30:00.000Z",
    titulo: "Renault Clio Mío 2015",
    slug: { current: "renault-clio-mio-2015" },
    descripcionCorto:
      "Nafta 1.2, papeles al día, service recién hecho. Ideal primer auto.",
    precio: 7500000,
    moneda: "ARS",
    imagenUrl:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80",
    estado: "disponible",
    categoria: "vehiculo",
    destacado: true,
    kilometraje: 98000,
    anio: 2015,
  },
  {
    _id: "venta-002",
    _type: "articuloVenta",
    _createdAt: "2026-03-28T09:15:00.000Z",
    _updatedAt: "2026-04-10T16:00:00.000Z",
    titulo: "Juego de llantas R15",
    slug: { current: "llantas-r15-aleacion" },
    descripcionCorto:
      "Set de 4 llantas de aleación en excelente estado, sin golpes ni reparaciones.",
    precio: 420000,
    moneda: "ARS",
    imagenUrl:
      "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?auto=format&fit=crop&w=1200&q=80",
    estado: "disponible",
    categoria: "accesorio",
    destacado: false,
  },
  {
    _id: "venta-003",
    _type: "articuloVenta",
    _createdAt: "2026-02-10T08:45:00.000Z",
    _updatedAt: "2026-03-20T11:10:00.000Z",
    titulo: "Ford Ka Fly Viral 2011",
    slug: { current: "ford-ka-fly-viral-2011" },
    descripcionCorto:
      "Motor recién reparado en el taller. Título y cédula al día, listo para transferir.",
    precio: 5200000,
    moneda: "ARS",
    imagenUrl:
      "https://images.unsplash.com/photo-1617469767053-d4eb2a17f5c4?auto=format&fit=crop&w=1200&q=80",
    estado: "reservado",
    categoria: "vehiculo",
    destacado: true,
    kilometraje: 145000,
    anio: 2011,
  },
  {
    _id: "venta-004",
    _type: "articuloVenta",
    _createdAt: "2026-04-05T14:20:00.000Z",
    _updatedAt: "2026-04-05T14:20:00.000Z",
    titulo: "Elevador hidráulico 2 columnas",
    slug: { current: "elevador-hidraulico-2-columnas" },
    descripcionCorto:
      "Capacidad 4 toneladas, uso liviano, incluye instalación en CABA y GBA.",
    precio: 2800,
    moneda: "USD",
    imagenUrl:
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=80",
    estado: "disponible",
    categoria: "herramienta",
    destacado: false,
  },
  {
    _id: "venta-005",
    _type: "articuloVenta",
    _createdAt: "2026-01-22T18:00:00.000Z",
    _updatedAt: "2026-02-15T09:30:00.000Z",
    titulo: "Caja de velocidades VW Gol Trend",
    slug: { current: "caja-velocidades-gol-trend" },
    descripcionCorto:
      "Caja reconstruida con 6 meses de garantía. Probada en banco, lista para instalar.",
    precio: 650000,
    moneda: "ARS",
    imagenUrl:
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1200&q=80",
    estado: "vendido",
    categoria: "repuesto",
    destacado: false,
  },
  {
    _id: "venta-006",
    _type: "articuloVenta",
    _createdAt: "2026-04-12T10:00:00.000Z",
    _updatedAt: "2026-04-18T17:45:00.000Z",
    titulo: "Peugeot 208 Active 2018",
    slug: { current: "peugeot-208-active-2018" },
    descripcionCorto:
      "1.6 Nafta, único dueño, service oficial. Impecable, financiación personal.",
    precio: 13500000,
    moneda: "ARS",
    imagenUrl:
      "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
    estado: "disponible",
    categoria: "vehiculo",
    destacado: true,
    kilometraje: 72000,
    anio: 2018,
  },
];
