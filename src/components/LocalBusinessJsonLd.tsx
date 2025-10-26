"use client";

type Props = {
  name: string;
  url: string;
  phoneE164: string; // ex.: +55359XXXXXXXX
  street: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string; // "BR"
  lat: number;
  lng: number;
  images?: string[];
  openingHours?: string; // "Mo-Su 08:00-22:00"
};

export default function LocalBusinessJsonLd(props: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "LodgingBusiness"],
    name: props.name,
    url: props.url,
    image: props.images ?? [],
    telephone: props.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: props.street,
      addressLocality: props.city,
      addressRegion: props.region,
      postalCode: props.postalCode,
      addressCountry: props.countryCode,
    },
    geo: { "@type": "GeoCoordinates", latitude: props.lat, longitude: props.lng },
    openingHours: props.openingHours ?? "Mo-Su 08:00-22:00",
  };

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}