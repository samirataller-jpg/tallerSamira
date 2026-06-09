import { Cpu, Disc, Gauge, Settings2, Wrench, Zap } from "lucide-react";

const items = [
  {
    title: "Diagnóstico computarizado",
    description:
      "Lectura de códigos, sensores y parámetros en vivo para acertar el primer intento.",
    icon: Cpu,
  },
  {
    title: "Service e inyección",
    description:
      "Cambios de aceite y filtros, bujías, limpieza de inyectores y mantenimiento preventivo.",
    icon: Gauge,
  },
  {
    title: "Tren delantero y geometría",
    description:
      "Rótulas, parrillas, amortiguadores y alineado para que el auto vaya derecho y seguro.",
    icon: Settings2,
  },
  {
    title: "Frenos",
    description:
      "Pastillas, discos, líquido y purgado. Frenos que responden cuando los necesitás.",
    icon: Disc,
  },
  {
    title: "Distribución y embrague",
    description:
      "Correas, tensores, kit de embrague y volante bimasa con mano de obra experta.",
    icon: Wrench,
  },
  {
    title: "Electricidad y batería",
    description:
      "Alternador, arranque, luces y cableado. Soluciones claras sin piezas de más.",
    icon: Zap,
  },
] as const;

export function Servicios() {
  return (
    <section
      id="servicios"
      className="section border-t border-ink-200 bg-surface"
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Servicios</span>
          <h2 className="mt-4 font-display text-2xl font-black uppercase tracking-[0.08em] text-ink-950 sm:text-3xl md:text-4xl">
            Todo lo que tu auto necesita, en un solo lugar
          </h2>
          <p className="mt-3 text-ink-600">
            Mecánica integral con presupuesto claro y repuestos de calidad.
            Contanos el síntoma y lo vemos con vos.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ title, description, icon: Icon }) => (
            <li
              key={title}
              className="group flex flex-col gap-4 rounded-xl border-2 border-ink-200 bg-paper p-6 shadow-sm transition hover:border-brand-500/55 hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 transition group-hover:bg-brand-100">
                <Icon className="h-6 w-6" aria-hidden />
              </span>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wide text-ink-950">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
