import type { Metadata } from "next";
import "./globals.css";
import { Quicksand, Amatic_SC } from "next/font/google";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://chalebeijaflor.netlify.app";
const TITLE = "Chalé Beija-Flor – Refúgio Aconchegante";
const DESC =
  "O Chalé Beija-Flor é um refúgio aconchegante cercado pela natureza. Reserve pelo WhatsApp, AirBnb ou Booking.";

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
  metadataBase: new URL(SITE),
  title: { default: TITLE, template: "%s | Chalé Beija-Flor Gonçalves MG" },
  description: DESC,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE,
    title: TITLE,
    description: DESC,
    images: ["/hero.webp"],
    locale: "pt_BR",
    siteName: "Chalé Beija-Flor",
  },
  robots: { index: true, follow: true },
  // Quando for verificar no Search Console, descomente e cole o token:
verification: { google: "twynAKFq5C2BwsMo2Cy8m7J1mttbvm0faC4R9mALuz4" },
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
