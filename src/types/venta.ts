export type EstadoVenta = "disponible" | "reservado" | "vendido";

export interface ImagenSanity {
  _type?: "image";
  _key?: string;
  asset?: {
    _ref?: string;
    _type?: "reference";
    url?: string;
  };
  alt?: string;
}

/** Bloque Portable Text mínimo (Studio `type: "block"`). */
export interface BloquePortable {
  _type: string;
  _key?: string;
  style?: string;
  children?: Array<{
    _type: string;
    _key?: string;
    text?: string;
    marks?: string[];
  }>;
  markDefs?: Array<{ _type: string; _key?: string }>;
  listItem?: string;
  level?: number;
}

export interface ArticuloVenta {
  _id: string;
  _type: "articuloVenta";
  _createdAt: string;
  _updatedAt: string;
  titulo: string;
  slug: { current: string };
  descripcionCorto: string;
  descripcionLarga?: BloquePortable[] | null;
  precio?: number | null;
  moneda?: "ARS" | "USD";
  imagenUrl?: string | null;
  imagen?: ImagenSanity;
  galeria?: ImagenSanity[] | null;
  estado: EstadoVenta;
  categoria?: "vehiculo" | "repuesto" | "herramienta" | "accesorio";
  destacado?: boolean;
  kilometraje?: number;
  anio?: number;
  combustible?: string;
  transmision?: string;
  color?: string;
}
