import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /** Rojo institucional (tarjeta Taller JuanCar) */
        brand: {
          DEFAULT: "#E31E24",
          50: "#FDE8EA",
          100: "#F9D4D8",
          200: "#EEA8AF",
          300: "#E47C87",
          400: "#E03D4F",
          500: "#E31E24",
          600: "#C41A20",
          700: "#9B1519",
          800: "#731012",
          900: "#4A0A0C",
        },
        /** Superficie tipo papel tarjeta */
        paper: "#F9F9F9",
        surface: "#FFFFFF",
        foreground: "#0A0A0A",
        /** Neutros legibles sobre fondos claros */
        ink: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          700: "#3F3F46",
          800: "#27272A",
          900: "#18181B",
          950: "#0A0A0A",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "1.5rem",
          lg: "2rem",
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)",
        "paper-grain":
          "radial-gradient(circle at 1px 1px, rgba(0,0,0,0.045) 1px, transparent 0)",
      },
    },
  },
  plugins: [],
};

export default config;
