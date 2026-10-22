"use client";

import { useCallback, useState } from "react";
import type { ArticuloVenta } from "@/types/venta";
import { CardVenta } from "@/components/ui/CardVenta";
import { ModalDetalleVenta } from "@/components/ui/ModalDetalleVenta";

export function VentasGrid({
  articulos,
  priorityCount = 0,
}: {
  articulos: ArticuloVenta[];
  priorityCount?: number;
}) {
  const [selectedProduct, setSelectedProduct] = useState<ArticuloVenta | null>(
    null,
  );

  const closeModal = useCallback(() => setSelectedProduct(null), []);

  return (
    <>
      <ul className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articulos.map((producto, idx) => (
          <li key={producto._id} className="h-full">
            <CardVenta
              articulo={producto}
              priority={idx < priorityCount}
              onOpen={() => setSelectedProduct(producto)}
            />
          </li>
        ))}
      </ul>

      {selectedProduct !== null && (
        <ModalDetalleVenta
          articulo={selectedProduct}
          onClose={closeModal}
        />
      )}
    </>
  );
}
