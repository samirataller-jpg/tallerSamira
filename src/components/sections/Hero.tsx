import Link from "next/link";
import { MessageCircle, MapPin, Phone, Star, Wrench } from "lucide-react";
import { BUSINESS, TEL_URL, WHATSAPP_URL } from "@/lib/constants";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b border-ink-200 bg-paper pt-24 sm:pt-28 lg:pt-32"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:44px_44px] opacity-[0.45]" />

      {/* Marca lateral tipo banda tarjeta */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-0 top-0 hidden h-full w-1 bg-brand-500 md:block lg:w-1.5"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-28 right-[10%] h-72 w-72 rounded-full bg-brand-500/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 h-52 w-[min(480px,50vw)] bg-gradient-to-l from-brand-500/14 to-transparent"
      />

      <div className="container relative grid gap-10 pb-16 sm:pb-20 lg:grid-cols-12 lg:items-center lg:gap-12 lg:pb-28">
        <div className="lg:col-span-7">
          <span className="eyebrow">
            <Wrench className="h-3.5 w-3.5" aria-hidden />
            Taller · Caseros, Buenos Aires
          </span>

          <h1 className="mt-6 font-display text-3xl font-black uppercase leading-[1.08] tracking-[0.04em] text-ink-950 sm:text-4xl lg:text-5xl xl:text-[3.35rem]">
            Tu auto en{" "}
            <span className="text-brand-500">manos expertas</span>
            , sin vueltas.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg">
            En <strong className="font-semibold text-ink-950">{BUSINESS.name}</strong>{" "}
            hacemos mecánica integral con diagnóstico preciso, presupuestos claros y
            entregas en tiempo. {BUSINESS.shortDescription}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              aria-label="Escribinos por WhatsApp"
            >
              <MessageCircle className="h-5 w-5" aria-hidden />
              Pedir turno por WhatsApp
            </Link>
            <Link href={TEL_URL} className="btn-secondary">
              <Phone className="h-5 w-5" aria-hidden />
              {BUSINESS.phone}
            </Link>
          </div>

          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4 text-center sm:gap-6">
            <HeroStat
              icon={<Star className="h-4 w-4 fill-brand-400 text-brand-500" aria-hidden />}
              value={BUSINESS.rating.value.toFixed(1)}
              label={`${BUSINESS.rating.reviews} reseñas Google`}
            />
            <HeroStat value="20+" label="Años de oficio" />
            <HeroStat
              icon={<MapPin className="h-4 w-4 text-brand-500" aria-hidden />}
              value={BUSINESS.address.city}
              label={BUSINESS.address.province}
            />
          </dl>
        </div>

        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-xl border-2 border-ink-900/12 bg-surface shadow-xl shadow-black/10">
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-1.5 bg-brand-500"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_-10%,rgba(227,30,36,0.09),transparent_55%)]"
            />
            <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
              <div className="flex items-center gap-3 text-sm font-medium text-ink-600">
                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-[0_0_0_4px_rgba(34,197,94,0.25)]" />
                Abierto hoy · {BUSINESS.hours[0].time}
              </div>

              <ul className="space-y-4">
                {[
                  "Electrónica y diagnóstico",
                  "Mecánica integral",
                  "Electricidad del automotor",
                  "Tren delantero y frenos",
                  "Service e inyección",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-ink-200 bg-ink-50/80 px-4 py-3 text-sm font-medium text-ink-900 shadow-sm backdrop-blur-sm"
                  >
                    <Wrench className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="rounded-xl border border-ink-200 bg-paper px-4 py-4 text-sm text-ink-600">
                <p className="text-[11px] font-bold uppercase tracking-widest text-brand-700">
                  Dirección
                </p>
                <p className="mt-1 font-semibold uppercase tracking-wide text-ink-950">
                  {BUSINESS.address.street}
                </p>
                <p>
                  {BUSINESS.address.city}, {BUSINESS.address.province}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroStat({
  icon,
  value,
  label,
}: {
  icon?: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-xl border-2 border-ink-900/10 bg-surface px-3 py-4 shadow-sm">
      <dt className="flex items-center justify-center gap-1.5 text-lg font-bold text-ink-950 sm:text-xl">
        {icon}
        {value}
      </dt>
      <dd className="mt-1 text-[10px] font-semibold uppercase leading-tight tracking-wider text-ink-600 sm:text-xs">
        {label}
      </dd>
    </div>
  );
}
