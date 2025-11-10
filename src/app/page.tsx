/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { FaAirbnb } from "react-icons/fa";
import { GiHummingbird } from "react-icons/gi";
import Image from "next/image";
import LocalBusinessJsonLd from "../components/LocalBusinessJsonLd";

const WHATSAPP = "5535998418107";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}?text=Olá!%20Gostaria%20de%20fazer%20uma%20reserva%20no%20Chalé%20Beija-Flor.%20:)`;
const WHATSAPP_URL_2 = `https://wa.me/${WHATSAPP}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Chalé%20Beija-Flor.%20:)`;
const BOOKING_URL =
  "https://www.booking.com/hotel/br/chale-beija-flor-paraisopolis.pt-br.html?aid=2127532&label=metagha-link-MRBR-hotel-12249898_dev-desktop_los-1_bw-32_dow-Sunday_defdate-1_room-0_gstadt-2_rateid-public_aud-0_gacid-_mcid-50_bc-ALrrKg_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20251109_ppt-B-Share-QD9aJH%401759963544&sid=645fb690fe7273dd73ea87213da57dce&all_sr_blocks=1224989801_395361070_2_0_0&checkin=2025-11-09&checkout=2025-11-10&dest_id=12249898&dest_type=hotel&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1224989801_395361070_2_0_0&hpos=1&matching_block_id=1224989801_395361070_2_0_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1224989801_395361070_2_0_0__36400&srepoch=1759963553&srpvid=893ea00e264d07fd&type=total&ucfs=1&";
const AIRBNB_URL =
  "https://www.airbnb.com.br/rooms/1165860464884234578?viralityEntryPoint=1&s=76&source_impression_id=p3_1760490990_P3qvqWA9ImuJNWtj";



const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://chalebeijaflor.netlify.app";

export default function Page() {
  return (
    <main>
      {/* HERO */}
      <section className="w-full">
        {/* Imagem Principal */}
        <div className="relative w-full h-[42vh] md:h-[56vh] overflow-hidden flex justify-center items-center">
          <div className="relative w-[90%] md:w-[90%] h-[90%]">
            <Image
              src="/hero.webp"
              alt="Fachada do Chalé Beija-Flor com um deck de madeira e cercado por natureza"
              fill
              className="object-cover rounded-2xl shadow-[1px_1px_2px_0.5px_rgba(0,0,0,0.56)]"
              priority
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-5 md:py-10 flex flex-col items-center">
          <div className="max-w-3xl text-left">
            {/* Título */}
            <h1 className="inline-flex items-center gap-2 text-7xl md:text-7xl font-extrabold tracking-tight">
              Chalé Beija-Flor
            </h1>

            {/* Subtítulo */}
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 text-[var(--sub)]">
              Um aconchego bem-vindo em meio à{" "}
              <span className="inline-flex items-center gap-1 whitespace-nowrap">
                Natureza
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
                  <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
                </svg>
              </span>
            </h2>

            {/* Descrição */}
            <p className="mt-8 text-lg text-[var(--muted)]">
              Chalé exclusivo com deck e banheira, cercado pela floresto. Perfeito para se isolar do
              caos da cidade, descansar e curtir — tudo isso com um preço amigável e atendimento
              excepcional.
            </p>
          </div>

          {/* Preço, Booking, Airbnb e Wpp */}
          <div className="mt-6 flex flex-wrap md:justify-center gap-3">
            <div className="inline-flex items-center rounded-2xl border border-neutral-300 px-4 py-2 text-sm">
              A partir de <span className="font-bold ml-1 text-lg">R$ 399,00/noite</span>
            </div>

            <Link href={BOOKING_URL} target="_blank" className="btn btn-outline-booking">
              Ver no Booking
              <TbBrandBooking size={28} color="#003580" />
            </Link>

            <Link href={AIRBNB_URL} target="_blank" className="btn btn-outline-airbnb">
              Ver no Airbnb
              <FaAirbnb size={28} color="#FF5A5F" />
            </Link>

            <Link href={WHATSAPP_URL} target="_blank" className="btn btn-primary">
              Reservar pelo WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* DESTAQUES */}
      <section className="border-t border-secondary py-8 bg-neutral">
        <div className="max-w-5xl mx-auto text-center mb-5">
          <h2 className="section-title">Destaques</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Feature
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // class="lucide lucide-bath-icon lucide-bath"
                >
                  <path d="M10 4 8 6" />
                  <path d="M17 19v2" />
                  <path d="M2 12h20" />
                  <path d="M7 19v2" />
                  <path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                </svg>
              }
              title="Banheira"
            />
            <Feature
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // class="lucide lucide-armchair-icon lucide-armchair"
                >
                  <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3" />
                  <path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
                  <path d="M5 18v2" />
                  <path d="M19 18v2" />
                </svg>
              }
              title="Local aconchegante"
            />
            <Feature
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // class="lucide lucide-wifi-icon lucide-wifi"
                >
                  <path d="M12 20h.01" />
                  <path d="M2 8.82a15 15 0 0 1 20 0" />
                  <path d="M5 12.859a10 10 0 0 1 14 0" />
                  <path d="M8.5 16.429a5 5 0 0 1 7 0" />
                </svg>
              }
              title="Wi-Fi e Estacionamento"
            />
            <Feature
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 md:w-10 md:h-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  // class="lucide lucide-shrub-icon lucide-shrub"
                >
                  <path d="M12 22v-5.172a2 2 0 0 0-.586-1.414L9.5 13.5" />
                  <path d="M14.5 14.5 12 17" />
                  <path d="M17 8.8A6 6 0 0 1 13.8 20H10A6.5 6.5 0 0 1 7 8a5 5 0 0 1 10 0z" />
                </svg>
              }
              title="Natureza ao redor"
            />
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section className="border-t border-secondary py-8 bg-neutral">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center">
            <h2 className="section-title">Galeria</h2>
          </div>

          <div className="mt-6 max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-4">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[1px_1px_2px_0.5px_rgba(0,0,0,0.56)]">
              <Image src="/foto1.png" alt="Banheira de hidromassagem com vista para a natureza" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[1px_1px_2px_0.5px_rgba(0,0,0,0.56)]">
              <Image src="/foto2.png" alt="Cama de casal e decoração do quarto do chalé" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[1px_1px_2px_0.5px_rgba(0,0,0,0.56)]">
              <Image src="/foto3.png" alt="Vista da varanda do chalé para as montanhas" fill className="object-cover" />
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-[1px_1px_2px_0.5px_rgba(0,0,0,0.56)]">
              <Image src="/foto4.png" alt="Araucária gigante ao lado do chalé" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* LOCALIZAÇÃO */}
      <section className="border-t border-secondary py-8 bg-neutral">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center">
            <h2 className="section-title">Localização</h2>
          </div>

          <div className="mt-6 rounded-2xl overflow-hidden shadow-[1px_1px_2px_0.5px_rgba(0,0,0,0.3)]">
            <iframe
              className="w-full h-[300px] md:h-[380px]"
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14725.883022611291!2d-45.906469!3d-22.673513!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc75aafd509259%3A0x98ab55bad190ec4d!2sChal%C3%A9%20beija%20flor!5e0!3m2!1spt-BR!2sus!4v1760242605985!5m2!1spt-BR!2sus"
            />
          </div>
        </div>
      </section>

      {/* ARTE DO CHALÉ */}
      <section>
        <div className="max-w-5xl mx-auto px-4">
          <div className="mt-6 relative aspect-video">
            <Image src="/arte-chale.png" alt="Arte do Chalé Beija-Flor" fill className="object-contain" />
          </div>
        </div>
      </section>

      {/* DÚVIDAS? */}
      <section className="border-t border-secondary py-16 bg-neutral align-item text-center justify-center pb-0">
        {/* Texto */}
        <div className="text-center">
          <h2 className="section-title">Dúvidas?</h2>
          <h3 className="text-3xl md:text-4xl font-semibold tracking-tight mt-3 text-[var(--sub)]">
            Fala com a gente pelo WhatsApp!
          </h3>
        </div>

        {/* Seta - MOBILE e DESKTOP */}
        <div className="flex justify-end pr-1 md:pr-3">
          <svg
            width="80"
            height="100"
            viewBox="0 0 80 100"
            fill="none"
            className="animate-point-down"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M40 0 V65" stroke="black" strokeWidth="6" strokeLinecap="round" />
            <path
              d="M25 50 L40 65 L55 50"
              stroke="black"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-secondary py-8 bg-neutral">
        <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 md:pr-25">
          {/* Chalé Beija-Flor */}
          <div className="flex items-center gap-3 border border-gray-500 rounded-md px-3 py-2">
            <span className="font-medium">Chalé Beija-Flor</span>
            <GiHummingbird size={28} />
          </div>

          {/* Cog & Bit */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 opacity-80 hover:opacity-100 transition"
            aria-label="Feito por Cog&Bit"
            title="Feito por Cog&Bit"
          >
            <span className="text-sm">Feito com 💙 por</span>
            <Image
              src="/cog-bit-logo.png"
              alt="Cog&Bit"
              width={160}
              height={48}
              className="!h-10 !w-auto object-contain"
              priority
            />
            <span className="text-sm">em 2025</span>
          </a>
        </div>
      </footer>

      {/* FAB do WhatsApp */}
      <Link
        href={WHATSAPP_URL_2}
        target="_blank"
        aria-label="Reservar pelo WhatsApp"
        className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-green-500 hover:bg-green-600 transition-all rounded-full p-4 shadow-lg flex items-center justify-center text-white"
      >
        <FaWhatsapp size={25} />
      </Link>

      <LocalBusinessJsonLd
        name="Chalé Beija-Flor"
        url={SITE_URL}
        phoneE164="+5535998418107"
        street="Estrada para Bairro dos Onças, S/N"
        city="Paraisópolis"
        region="MG"
        postalCode="37680-000"
        countryCode="BR"
        lat={-22.66}
        lng={-45.86}
        images={[
          `${SITE_URL}/foto1.png`,
          `${SITE_URL}/foto2.png`,
          `${SITE_URL}/foto3.png`,
          `${SITE_URL}/foto4.png`,
        ]}
      />
    </main>
  );
}

function Feature({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="text-[--charcoal]/90">{icon}</div>
      <p className="text-sm leading-tight">{title}</p>
    </div>
  );
}
