import type { ArticuloVenta, ImagenSanity } from "@/types/venta";
import { BUSINESS } from "@/lib/constants";
import { urlFor } from "@/sanity/lib/image";

export function formatPrecio(precio: number, moneda: "ARS" | "USD" = "ARS") {
  const locale = moneda === "USD" ? "en-US" : "es-AR";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: moneda,
    maximumFractionDigits: 0,
  }).format(precio);
}

export function tienePrecioDefinido(
  precio: ArticuloVenta["precio"],
): precio is number {
  return typeof precio === "number" && precio > 0;
}

export function urlImagenSanity(
  imagen: ImagenSanity | undefined,
  width = 800,
  height?: number,
): string | null {
  if (!imagen?.asset) return null;
  try {
    let builder = urlFor(imagen).width(width).auto("format");
    if (height) builder = builder.height(height).fit("crop");
    return builder.url();
  } catch {
    return null;
  }
}

export function urlImagenArticulo(
  articulo: ArticuloVenta,
  width = 800,
  height?: number,
): string | null {
  return (
    urlImagenSanity(articulo.imagen, width, height) ?? articulo.imagenUrl ?? null
  );
}

export function whatsappConsultaUrl(titulo: string) {
  return `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(
    `Hola! Me interesa "${titulo}" publicado en la web de Taller Juancar y quería consultar disponibilidad y presupuesto.`,
  )}`;
}

export const estadoLabels = {
  disponible: "Disponible",
  reservado: "Reservado",
  vendido: "Vendido",
} as const;
