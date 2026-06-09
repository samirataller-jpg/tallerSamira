import Image from "next/image";
import { BUSINESS } from "@/lib/constants";

export function LogoJuancar({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block shrink-0 overflow-hidden rounded-full bg-white ${className}`}
    >
      <Image
        src={BUSINESS.logoSrc}
        alt="Emblema Taller Juancar"
        fill
        sizes="(max-width: 640px) 52px, 72px"
        className="object-contain object-center"
        priority
      />
    </span>
  );
}

export function BrandWordmark({ className = "" }: { className?: string }) {
  return (
    <span
      className={`font-display text-lg font-extrabold uppercase leading-none tracking-[0.12em] ${className}`}
    >
      <span className="text-brand-500">Taller</span>
      <span className="text-ink-950">Juancar</span>
    </span>
  );
}
