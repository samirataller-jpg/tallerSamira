import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import type { Metadata } from "next";
import { VentasCatalogo } from "@/components/sections/VentasCatalogo";
import { mockVentas } from "@/data/mockVentas";
import { BUSINESS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "En venta",
  description: `Vehículos y artículos en venta en ${BUSINESS.name}. Consultá disponibilidad por WhatsApp.`,
  openGraph: {
    title: `En venta | ${BUSINESS.name}`,
    description: `Catálogo de publicaciones del taller en ${BUSINESS.address.city}.`,
  },
};

export default function EnVentaPage() {
  // TODO: Reemplazar este Mock con el fetch a Sanity.io usando GROQ.

  return (
    <main className="min-h-screen bg-paper pt-24 sm:pt-28">
      <div className="container pb-20 sm:pb-24">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-brand-600 hover:text-brand-700"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
          Volver al inicio
        </Link>

        <header className="mt-8 max-w-3xl">
          <span className="eyebrow">Catálogo</span>
          <h1 className="mt-4 font-display text-3xl font-black uppercase tracking-[0.06em] text-ink-950 sm:text-4xl lg:text-5xl">
            En venta
          </h1>
          <p className="mt-4 text-lg text-ink-600">
            Publicaciones del taller: autos, repuestos y más. Filtrá por estado
            y consultá por WhatsApp lo que te interese.
          </p>
        </header>

        <div className="mt-12">
          <VentasCatalogo articulos={mockVentas} />
        </div>
      </div>
    </main>
  );
}
