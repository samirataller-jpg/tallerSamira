import { client } from "@/sanity/client";
import {
  ARTICULOS_DESTACADOS_QUERY,
  TODOS_LOS_ARTICULOS_QUERY,
} from "@/sanity/queries/ventas";
import type { ArticuloVenta } from "@/types/venta";

/** ISR: Next vuelve a pedir a Sanity como máximo cada 60 s. */
const fetchOptions = {
  next: { revalidate: 60, tags: ["articuloVenta"] },
};

export async function getArticulosVenta(): Promise<ArticuloVenta[]> {
  return client.fetch<ArticuloVenta[]>(
    TODOS_LOS_ARTICULOS_QUERY,
    {},
    fetchOptions,
  );
}

export async function getArticulosDestacados(): Promise<ArticuloVenta[]> {
  return client.fetch<ArticuloVenta[]>(
    ARTICULOS_DESTACADOS_QUERY,
    {},
    fetchOptions,
  );
}
