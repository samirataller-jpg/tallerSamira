export type EstadoVenta = "disponible" | "reservado" | "vendido";

export interface ImagenSanity {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
    url: string;
  };
  alt?: string;
}

export interface ArticuloVenta {
  _id: string;
  _type: "articuloVenta";
  _createdAt: string;
  _updatedAt: string;
  titulo: string;
  slug: { current: string };
  descripcionCorto: string;
  precio: number;
  moneda: "ARS" | "USD";
  imagenUrl: string;
  imagen?: ImagenSanity;
  estado: EstadoVenta;
  categoria?: "vehiculo" | "repuesto" | "herramienta" | "accesorio";
  destacado?: boolean;
  kilometraje?: number;
  anio?: number;
}
