import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { BUSINESS } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    template: `%s | ${BUSINESS.name}`,
  },
  description: BUSINESS.shortDescription,
  metadataBase: new URL("https://tallerjuancar.com.ar"),
  openGraph: {
    title: `${BUSINESS.name} | ${BUSINESS.tagline}`,
    description: BUSINESS.shortDescription,
    type: "website",
    locale: "es_AR",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#E31E24",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen font-sans">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
