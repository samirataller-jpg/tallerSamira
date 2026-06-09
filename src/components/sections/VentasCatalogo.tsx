"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import type { ArticuloVenta, EstadoVenta } from "@/types/venta";
import { CardVenta } from "@/components/ui/CardVenta";

type Filtro = "todos" | EstadoVenta;

const filtros: { id: Filtro; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "disponible", label: "Disponible" },
  { id: "reservado", label: "Reservado" },
  { id: "vendido", label: "Vendido" },
];

export function VentasCatalogo({ articulos }: { articulos: ArticuloVenta[] }) {
  const [filtro, setFiltro] = useState<Filtro>("todos");

  const filtrados = useMemo(() => {
    if (filtro === "todos") return articulos;
    return articulos.filter((a) => a.estado === filtro);
  }, [articulos, filtro]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="tablist"
        aria-label="Filtrar por estado"
      >
        {filtros.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={filtro === id}
            onClick={() => setFiltro(id)}
            className={clsx(
              "rounded-lg border-2 px-4 py-2 text-sm font-bold uppercase tracking-wide transition",
              filtro === id
                ? "border-brand-600 bg-brand-50 text-brand-800 shadow-sm"
                : "border-ink-200 bg-surface text-ink-600 hover:border-brand-500/35 hover:bg-ink-50",
            )}
          >
            {label}
          </button>
        ))}
      </div>

      {filtrados.length === 0 ? (
        <p className="mt-10 text-center text-ink-600">
          No hay publicaciones con este estado por ahora.
        </p>
      ) : (
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((articulo, idx) => (
            <li key={articulo._id}>
              <CardVenta articulo={articulo} priority={idx < 3} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
