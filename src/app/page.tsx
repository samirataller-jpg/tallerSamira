import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Contacto } from "@/components/sections/Contacto";
import { Hero } from "@/components/sections/Hero";
import { Servicios } from "@/components/sections/Servicios";
import { NotaPrecios } from "@/components/ui/NotaPrecios";
import { VentasGrid } from "@/components/ui/VentasGrid";
import { getArticulosDestacados } from "@/lib/ventas";

export const revalidate = 60;

export default async function HomePage() {
  const ventasDestacadas = await getArticulosDestacados();

  return (
    <main>
      <Hero />
      <Servicios />

      {ventasDestacadas.length > 0 && (
        <section id="en-venta" className="section border-t border-ink-200 bg-paper">
          <div className="container">
            <div className="mb-10 flex flex-col gap-4 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="eyebrow">En venta</span>
                <h2 className="mt-4 font-display text-2xl font-black uppercase tracking-[0.06em] text-ink-950 sm:text-3xl md:text-4xl">
                  Destacados del taller
                </h2>
                <p className="mt-2 max-w-2xl text-ink-600">
                  Vehículos revisados y repuestos seleccionados. Consultá por
                  WhatsApp para coordinar visita o ver más detalles.
                </p>
              </div>
              <Link
                href="/en-venta"
                className="btn-secondary inline-flex items-center gap-2 self-start sm:self-auto"
              >
                Ver catálogo completo
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </div>

            <VentasGrid articulos={ventasDestacadas} priorityCount={1} />
            <NotaPrecios />
          </div>
        </section>
      )}

      <Contacto />
    </main>
  );
}
