import Image from "next/image";
import Link from "next/link";
import { Calendar, Gauge, MessageCircle } from "lucide-react";
import clsx from "clsx";
import type { ArticuloVenta, EstadoVenta } from "@/types/venta";
import { BUSINESS } from "@/lib/constants";

interface CardVentaProps {
  articulo: ArticuloVenta;
  priority?: boolean;
}

const estadoStyles: Record<
  EstadoVenta,
  { label: string; className: string }
> = {
  disponible: {
    label: "Disponible",
    className: "border-emerald-600/35 bg-emerald-50 text-emerald-900",
  },
  reservado: {
    label: "Reservado",
    className: "border-amber-600/35 bg-amber-50 text-amber-950",
  },
  vendido: {
    label: "Vendido",
    className: "border-rose-600/35 bg-rose-50 text-rose-950",
  },
};

function formatPrecio(precio: number, moneda: "ARS" | "USD") {
  const locale = moneda === "USD" ? "en-US" : "es-AR";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: moneda,
    maximumFractionDigits: 0,
  }).format(precio);
}

export function CardVenta({ articulo, priority = false }: CardVentaProps) {
  const {
    titulo,
    descripcionCorto,
    precio,
    moneda,
    imagenUrl,
    estado,
    kilometraje,
    anio,
  } = articulo;

  const estadoCfg = estadoStyles[estado];
  const disponible = estado === "disponible";

  const whatsappUrl = `https://wa.me/${BUSINESS.phoneRaw}?text=${encodeURIComponent(
    `Hola! Me interesa "${titulo}" publicado en la web de Taller Juancar.`,
  )}`;

  return (
    <article
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-xl border-2 border-ink-200 bg-surface shadow-md transition hover:-translate-y-1 hover:border-brand-500/45 hover:shadow-xl",
        !disponible && "opacity-95",
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-ink-100">
        {imagenUrl ? (
          <Image
            src={imagenUrl}
            alt={titulo}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-105"
            priority={priority}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-ink-300">
            <svg className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
        <span
          className={clsx(
            "absolute left-3 top-3 inline-flex items-center rounded-md border px-3 py-1 text-xs font-bold uppercase tracking-wide backdrop-blur-sm",
            estadoCfg.className,
          )}
        >
          {estadoCfg.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <header className="space-y-1">
          <h3 className="text-lg font-bold uppercase tracking-wide leading-snug text-ink-950">
            {titulo}
          </h3>
          <p className="line-clamp-2 text-sm leading-relaxed text-ink-600">
            {descripcionCorto}
          </p>
        </header>

        {(anio || kilometraje) && (
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-600">
            {anio && (
              <li className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                {anio}
              </li>
            )}
            {kilometraje !== undefined && (
              <li className="inline-flex items-center gap-1.5">
                <Gauge className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                {kilometraje.toLocaleString("es-AR")} km
              </li>
            )}
          </ul>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-ink-500">
              Precio
            </p>
            <p className="font-display text-xl font-extrabold text-ink-950">
              {formatPrecio(precio, moneda)}
            </p>
          </div>

          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!disponible}
            tabIndex={disponible ? 0 : -1}
            className={clsx(
              "inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition",
              disponible
                ? "bg-brand-500 text-white shadow-sm hover:bg-brand-600"
                : "pointer-events-none border border-ink-200 bg-ink-100 text-ink-500",
            )}
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            Consultar
          </Link>
        </div>
      </div>
    </article>
  );
}
