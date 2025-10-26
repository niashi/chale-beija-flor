// src/app/sitemap.ts
import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://chalebeijaflor.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${SITE}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    // Se criar páginas extras, adicione aqui:
    // { url: ${SITE}/galeria, changeFrequency: "yearly", priority: 0.7 },
    // { url: ${SITE}/como-chegar, changeFrequency: "yearly", priority: 0.6 },
  ];
}