"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandWordmark } from "@/components/brand/LogoJuancar";
import { HeaderLogoImage } from "@/components/brand/LogoImage";

const nav = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/en-venta", label: "En venta" },
  { href: "/#contacto", label: "Contacto" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="h-1 bg-brand-500" aria-hidden />
      <div className="border-b border-ink-200 bg-surface/95 shadow-sm backdrop-blur-md supports-[backdrop-filter]:bg-surface/80">
        <div className="container flex min-h-[4.5rem] items-center justify-between gap-4 py-1.5 sm:min-h-[5.5rem] sm:py-2">
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3"
            onClick={() => setOpen(false)}
          >
            <HeaderLogoImage />
            <BrandWordmark />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={isHome}
                className="rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide text-ink-700 transition hover:bg-ink-100 hover:text-ink-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border-2 border-ink-900/12 text-ink-950 md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>

        {open && (
          <div
            id="mobile-nav"
            className="border-t border-ink-200 bg-surface px-4 py-4 shadow-inner md:hidden"
          >
            <nav className="flex flex-col gap-1" aria-label="Móvil">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  scroll={isHome}
                  className="rounded-lg px-4 py-3 text-base font-semibold uppercase tracking-wide text-ink-800 hover:bg-ink-50"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
