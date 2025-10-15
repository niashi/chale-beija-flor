import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Amatic_SC } from "next/font/google";

// Fonte principal (texto)
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-quicksand",
});

// Fonte dos títulos
const amatic = Amatic_SC({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-amatic",
});

export const metadata: Metadata = {
  title: "Chalé Beija-Flor – refúgio aconchegante",
  description:
    "O Chalé Beija-Flor é um refúgio aconchegante cercado pela natureza. Reserve pelo WhatsApp ou Booking.",
  openGraph: {
    title: "Chalé Beija-Flor",
    description: "Refúgio aconchegante na natureza, perfeito para relaxar.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${quicksand.variable} ${amatic.variable} font-sans antialiased bg-[--cream] text-[--charcoal]`}
      >
        {children}
      </body>
    </html>
  );
}
