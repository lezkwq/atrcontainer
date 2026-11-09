import { createFileRoute } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getRequestUrl } from "@tanstack/react-start/server";
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

const title = "ATR Refrigeração e Container | Containers Reefer em Itajaí, SC";
const description =
  "Venda de containers refrigerados Reefer, equipamentos, peças e manutenção especializada em refrigeração de containers. Itajaí, SC.";
const getSiteOrigin = createIsomorphicFn()
  .server(() => getRequestUrl().origin)
  .client(() => window.location.origin);

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: new URL("/og-atr-refrigeracao.png", getSiteOrigin()).href },
      { property: "og:image:type", content: "image/png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Logotipo ATR Refrigeração sobre fundo branco" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
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
