import { LogoJuancar } from "@/components/brand/LogoJuancar";

/** Emblema circular ≈ 3× la altura del wordmark (proporción tarjeta). */
export function HeaderLogoImage() {
  return (
    <LogoJuancar className="h-[3.25rem] w-[3.25rem] shrink-0 sm:h-[4.5rem] sm:w-[4.5rem]" />
  );
}
