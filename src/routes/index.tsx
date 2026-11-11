import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero_desktop.png";
import { Hero } from "@/components/atr/Hero";
import {
  Avaliacoes,
  Containers,
  CtaFinal,
  Equipamentos,
  Faq,
  Fotografias,
  Manutencao,
  Rodape,
  Solucoes,
  Sobre,
  WhatsAppFlutuante,
} from "@/components/atr/Sections";
import { BUSINESS_ADDRESS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const siteUrl = "https://www.atrrefrigeracao.com.br/";
const businessName = "ATR Refrigeração e Container";
const title = `${businessName} | Containers Reefer em Itajaí, SC`;
const description =
  "Venda de containers Reefer, equipamentos e peças de refrigeração e manutenção especializada em São Vicente, Itajaí, SC.";
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}#atr`,
  name: businessName,
  description,
  url: siteUrl,
  image: new URL(heroImage, siteUrl).href,
  telephone: `+${WHATSAPP_NUMBER}`,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${BUSINESS_ADDRESS.street}, ${BUSINESS_ADDRESS.neighborhood}`,
    addressLocality: BUSINESS_ADDRESS.city,
    addressRegion: BUSINESS_ADDRESS.state,
    postalCode: BUSINESS_ADDRESS.postalCode,
    addressCountry: "BR",
  },
  hasMap: MAPS_URL,
  sameAs: [INSTAGRAM_URL],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Containers refrigerados e soluções em refrigeração",
    itemListElement: [
      "Venda de containers Reefer",
      "Venda de equipamentos e peças de refrigeração",
      "Manutenção de containers refrigerados",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: siteUrl },
      { property: "og:image", content: new URL("/og-atr-refrigeracao.png", siteUrl).href },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Logotipo ATR Refrigeração sobre fundo branco" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: siteUrl }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(businessSchema) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <main>
        <Hero />
        <Solucoes />
        <Containers />
        <Equipamentos />
        <Manutencao />
        <Sobre />
        <Fotografias />
        <Avaliacoes />
        <Faq />
        <CtaFinal />
      </main>
      <Rodape />
      <WhatsAppFlutuante />
    </>
  );
}
