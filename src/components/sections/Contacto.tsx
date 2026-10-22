import Link from "next/link";
import { Caveat } from "next/font/google";
import {
  Clock,
  Instagram,
  MapPin,
  MessageCircle,
  Navigation,
  Phone,
} from "lucide-react";
import { BUSINESS, CB_CREDIT_URL, TEL_URL, WHATSAPP_URL } from "@/lib/constants";

const caveatCredit = Caveat({
  subsets: ["latin"],
  weight: ["400", "500"],
});

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function Contacto() {
  const direccionCompleta = `${BUSINESS.address.street}, ${BUSINESS.address.city}, ${BUSINESS.address.province}, ${BUSINESS.address.country}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccionCompleta)}`;

  return (
    <section id="contacto" className="relative section overflow-hidden border-t border-ink-200 bg-paper pb-14">
      {/* Franja inferior roja tipo tarjeta */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1.5 bg-brand-500"
      />

      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <span className="eyebrow">Ubicación y contacto</span>
            <h2 className="mt-4 font-display text-2xl font-black uppercase tracking-[0.06em] text-ink-950 sm:text-3xl md:text-4xl">
              Pasá por el taller o escribinos
            </h2>
            <p className="mt-3 max-w-xl text-ink-600">
              Coordinamos turno por WhatsApp o llamada.
            </p>

            <ul className="mt-8 space-y-5 text-ink-800">
              <li className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-surface text-brand-600 shadow-sm">
                  <MapPin className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-700">
                    Dirección
                  </p>
                  <p className="mt-1 font-semibold uppercase tracking-wide text-ink-950">
                    {BUSINESS.address.street}
                  </p>
                  <p className="text-ink-600">
                    {BUSINESS.address.city}, {BUSINESS.address.province}
                  </p>
                  <Link
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 underline-offset-4 hover:text-brand-700 hover:underline"
                  >
                    <Navigation className="h-4 w-4" aria-hidden />
                    Cómo llegar en Google Maps
                  </Link>
                </div>
              </li>

              <li className="flex gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-ink-200 bg-surface text-brand-600 shadow-sm">
                  <Clock className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-brand-700">
                    Horarios
                  </p>
                  <ul className="mt-2 space-y-1.5 text-sm">
                    {BUSINESS.hours.map((h) => (
                      <li
                        key={h.day}
                        className="flex flex-wrap justify-between gap-x-4 gap-y-1 border-b border-ink-200 py-2 last:border-0"
                      >
                        <span className="text-ink-600">{h.day}</span>
                        <span className="font-semibold text-ink-950">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              <li className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={WHATSAPP_URL}
                  className="btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </Link>
                <Link href={TEL_URL} className="btn-secondary">
                  <Phone className="h-5 w-5" aria-hidden />
                  Llamar
                </Link>
                <Link
                  href={BUSINESS.social.instagram}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" aria-hidden />
                  Instagram
                </Link>
                <Link
                  href={BUSINESS.social.tiktok}
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TikTokIcon className="h-5 w-5" />
                  TikTok
                </Link>
              </li>
            </ul>
          </div>

          <div className="overflow-hidden rounded-xl border-2 border-ink-900/12 bg-surface shadow-lg">
            <div className="aspect-[16/11] min-h-[240px] w-full sm:aspect-[16/10] sm:min-h-[320px]">
              <iframe
                title="Mapa: Taller Juancar"
                src={BUSINESS.mapsEmbedUrl}
                className="h-full w-full border-0 grayscale-[15%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <footer className="relative mt-16 border-t-2 border-ink-900/10 pt-8 text-center">
          <div className="mx-auto mb-4 h-0.5 w-24 rounded-full bg-brand-500 md:w-36" aria-hidden />

          <p className="text-sm text-ink-600">
            © {new Date().getFullYear()}{" "}
            <span className="font-display font-extrabold uppercase tracking-[0.12em]">
              <span className="text-brand-600">Taller </span>
              <span className="text-ink-950">Juancar</span>
            </span>
          </p>
          <p
            className={`${caveatCredit.className} mt-0.5 text-[10px] leading-snug text-ink-500 sm:text-[11px]`}
          >
            Desarrollado por{" "}
            <Link
              href={CB_CREDIT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-brand-600 underline-offset-2 hover:text-brand-700 hover:underline"
            >
              CB
            </Link>
          </p>
          <p className="mt-1.5 text-xs text-ink-500">
            {BUSINESS.address.city}, {BUSINESS.address.province}.
          </p>
        </footer>
      </div>
    </section>
  );
}
