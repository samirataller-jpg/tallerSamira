"use client";

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import {
  Calendar,
  Droplets,
  Gauge,
  MessageCircle,
  Palette,
  Settings2,
  X,
} from "lucide-react";
import clsx from "clsx";
import type { ArticuloVenta, ImagenSanity } from "@/types/venta";
import {
  formatPrecio,
  tienePrecioDefinido,
  urlImagenArticulo,
  urlImagenSanity,
  whatsappConsultaUrl,
} from "@/lib/venta-format";

const estadoStyles = {
  disponible: "border-emerald-600/35 bg-emerald-50 text-emerald-900",
  reservado: "border-amber-600/35 bg-amber-50 text-amber-950",
  vendido: "border-rose-600/35 bg-rose-50 text-rose-950",
} as const;

const estadoLabels = {
  disponible: "Disponible",
  reservado: "Reservado",
  vendido: "Vendido",
} as const;

interface ModalDetalleVentaProps {
  articulo: ArticuloVenta;
  onClose: () => void;
}

function fotosDelArticulo(articulo: ArticuloVenta): ImagenSanity[] {
  const lista: ImagenSanity[] = [];
  if (articulo.imagen?.asset) lista.push(articulo.imagen);
  for (const extra of articulo.galeria ?? []) {
    if (!extra?.asset) continue;
    const yaEsta = lista.some(
      (img) => img.asset?._ref && img.asset._ref === extra.asset?._ref,
    );
    if (!yaEsta) lista.push(extra);
  }
  return lista;
}

export function ModalDetalleVenta({ articulo, onClose }: ModalDetalleVentaProps) {
  const tituloId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [indiceFoto, setIndiceFoto] = useState(0);
  const [mounted, setMounted] = useState(false);

  const fotos = useMemo(() => fotosDelArticulo(articulo), [articulo]);
  const fotoActiva = fotos[indiceFoto];
  const srcPrincipal =
    urlImagenSanity(fotoActiva, 1000) ?? urlImagenArticulo(articulo, 1000);
  const altPrincipal =
    fotoActiva?.alt?.trim() || articulo.titulo;
  const tienePrecio = tienePrecioDefinido(articulo.precio);
  const disponible = articulo.estado === "disponible";
  const tienePortable =
    Array.isArray(articulo.descripcionLarga) &&
    articulo.descripcionLarga.length > 0;

  const badges = [
    articulo.anio ? { icon: Calendar, label: String(articulo.anio) } : null,
    articulo.kilometraje != null
      ? {
          icon: Gauge,
          label: `${articulo.kilometraje.toLocaleString("es-AR")} km`,
        }
      : null,
    articulo.combustible
      ? { icon: Droplets, label: articulo.combustible }
      : null,
    articulo.transmision
      ? { icon: Settings2, label: articulo.transmision }
      : null,
    articulo.color ? { icon: Palette, label: articulo.color } : null,
  ].filter(Boolean) as Array<{
    icon: typeof Calendar;
    label: string;
  }>;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = anterior;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  if (!mounted) return null;

  const modal = (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="presentation"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={tituloId}
        className="flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-start justify-between gap-4 border-b border-ink-200 px-5 py-4 sm:px-6">
          <div className="min-w-0 pr-8">
            <span
              className={clsx(
                "inline-flex rounded-md border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide",
                estadoStyles[articulo.estado],
              )}
            >
              {estadoLabels[articulo.estado]}
            </span>
            <h2
              id={tituloId}
              className="mt-2 font-display text-xl font-black uppercase tracking-[0.06em] text-ink-950 sm:text-2xl"
            >
              {articulo.titulo}
            </h2>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-200 bg-surface text-ink-800 transition hover:bg-ink-100"
            aria-label="Cerrar detalle"
          >
            <X className="h-5 w-5" aria-hidden />
          </button>
        </div>

        <div className="grid min-h-0 flex-1 overflow-y-auto lg:grid-cols-2">
          <div className="bg-ink-100">
            <div className="relative aspect-[4/3] w-full">
              {srcPrincipal ? (
                <Image
                  src={srcPrincipal}
                  alt={altPrincipal}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center text-ink-300">
                  Sin imagen
                </div>
              )}
            </div>
            {fotos.length > 1 && (
              <ul className="flex gap-2 overflow-x-auto p-3">
                {fotos.map((foto, i) => {
                  const thumb = urlImagenSanity(foto, 200, 150);
                  if (!thumb) return null;
                  return (
                    <li key={foto._key ?? foto.asset?._ref ?? i}>
                      <button
                        type="button"
                        onClick={() => setIndiceFoto(i)}
                        className={clsx(
                          "relative h-14 w-20 overflow-hidden rounded-md border-2",
                          i === indiceFoto
                            ? "border-brand-500"
                            : "border-transparent opacity-80 hover:opacity-100",
                        )}
                        aria-label={`Ver foto ${i + 1}`}
                        aria-current={i === indiceFoto}
                      >
                        <Image
                          src={thumb}
                          alt={foto.alt || `Foto ${i + 1}`}
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>

          <div className="flex flex-col gap-5 p-5 sm:p-6">
            {badges.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {badges.map(({ icon: Icon, label }) => (
                  <li
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-ink-200 bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-800"
                  >
                    <Icon className="h-3.5 w-3.5 text-brand-600" aria-hidden />
                    {label}
                  </li>
                ))}
              </ul>
            )}

            <div className="space-y-3 text-sm leading-relaxed text-ink-700">
              {tienePortable ? (
                <div className="prose prose-sm max-w-none prose-p:text-ink-700 prose-li:text-ink-700">
                  <PortableText
                    value={articulo.descripcionLarga!}
                    components={{
                      block: {
                        normal: ({ children }) => (
                          <p className="mb-3 last:mb-0">{children}</p>
                        ),
                      },
                      list: {
                        bullet: ({ children }) => (
                          <ul className="mb-3 list-disc space-y-1 pl-5">
                            {children}
                          </ul>
                        ),
                        number: ({ children }) => (
                          <ol className="mb-3 list-decimal space-y-1 pl-5">
                            {children}
                          </ol>
                        ),
                      },
                    }}
                  />
                </div>
              ) : (
                <p>{articulo.descripcionCorto}</p>
              )}
            </div>

            <div className="mt-auto border-t border-ink-200 pt-5">
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                Desde
              </p>
              <p className="font-display text-2xl font-extrabold text-ink-950">
                {tienePrecio
                  ? formatPrecio(articulo.precio!, articulo.moneda)
                  : "Consultar"}
                {tienePrecio && (
                  <sup className="ml-0.5 text-sm font-semibold text-neutral-500">
                    *
                  </sup>
                )}
              </p>
              <p className="mt-2 text-[11px] leading-snug text-neutral-500">
                * Los precios son estimativos y pueden variar según marca,
                modelo, versión y estado del vehículo.
              </p>

              <Link
                href={whatsappConsultaUrl(articulo.titulo)}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled={!disponible}
                tabIndex={disponible ? 0 : -1}
                className={clsx(
                  "mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition",
                  disponible
                    ? "bg-brand-500 text-white shadow-sm hover:bg-brand-600"
                    : "pointer-events-none border border-ink-200 bg-ink-100 text-ink-500",
                )}
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
