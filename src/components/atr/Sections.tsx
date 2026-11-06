import { ArrowUpRight, ArrowRight, MapPin, Instagram } from "lucide-react";
import reeferCurto from "@/assets/reefer_curto.jpg.asset.json";
import reefer12 from "@/assets/reefer_12m_perspectiva.jpg.asset.json";
import reefer12Grafite from "@/assets/reefer_12m_grafite.jpg.asset.json";
import carrierEquip from "@/assets/carrier_equipamento.jpg.asset.json";
import carrierContainer from "@/assets/carrier_container.jpg.asset.json";
import tkDetalhe from "@/assets/thermo_king_detalhe.jpg.asset.json";
import tkFrontal from "@/assets/thermo_king_frontal.jpg.asset.json";
import manutencao from "@/assets/manutencao.jpg.asset.json";
import equipe from "@/assets/equipe.jpg.asset.json";
import logo from "@/assets/atr_logo.png.asset.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ADDRESS, INSTAGRAM_URL, MAPS_URL, MSG, waLink } from "@/lib/whatsapp";
import { Stars, WhatsAppIcon } from "./icons";

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

function CtaLink({ href, children, tone = "dark" }: { href: string; children: React.ReactNode; tone?: "dark" | "light" }) {
  const styles =
    tone === "dark"
      ? "bg-deep text-deep-foreground hover:bg-primary"
      : "bg-on-photo text-deep hover:bg-secondary";
  return (
    <a
      href={href}
      {...ext}
      className={`inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${styles}`}
    >
      <WhatsAppIcon className="h-4 w-4" />
      {children}
    </a>
  );
}

/* 7. Soluções */
export function Solucoes() {
  const items = [
    { href: "#containers", t: "Containers Reefer", d: "Containers refrigerados para diferentes necessidades de armazenamento e conservação." },
    { href: "#equipamentos", t: "Equipamentos e peças", d: "Equipamentos de refrigeração e componentes para containers." },
    { href: "#manutencao", t: "Manutenção especializada", d: "Serviços técnicos de manutenção e reparo em sistemas de refrigeração." },
  ];
  return (
    <section className="py-24 lg:py-36">
      <div className="container-edit">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="max-w-[16ch] text-4xl font-bold leading-[1.02] sm:text-5xl lg:text-6xl">
            Refrigeração especializada para diferentes necessidades.
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
            Da comercialização de containers refrigerados ao fornecimento de equipamentos, peças e manutenção, a
            ATR reúne soluções para operações que dependem de refrigeração.
          </p>
        </div>
        <div className="mt-16 grid border-t border-foreground/15 md:grid-cols-3">
          {items.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="group flex flex-col justify-between gap-10 border-b border-foreground/15 py-8 md:border-b-0 md:border-l md:px-8 md:first:border-l-0 md:first:pl-0"
            >
              <div>
                <h3 className="text-2xl font-bold">{i.t}</h3>
                <p className="mt-3 max-w-[32ch] text-muted-foreground">{i.d}</p>
              </div>
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                Ver detalhes
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* 8. Containers */
export function Containers() {
  return (
    <section id="containers" className="scroll-mt-4 bg-secondary py-24 lg:py-32">
      <div className="container-edit">
        <p className="eyebrow text-primary">Containers Reefer</p>
        <div className="mt-4 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <h2 className="max-w-[18ch] text-4xl font-bold leading-[1.02] sm:text-5xl">
            Containers Reefer para quem precisa de refrigeração.
          </h2>
          <p className="max-w-[44ch] text-lg leading-relaxed text-muted-foreground">
            Conheça as opções de containers refrigerados apresentadas pela ATR e consulte as especificações e a
            disponibilidade de cada equipamento.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <article className="flex flex-col bg-background lg:col-span-7">
            <img
              src={reefer12.url}
              alt="Container Reefer de 12 metros em perspectiva com unidade Thermo King"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-4 p-7 sm:flex-row sm:items-end sm:justify-between lg:p-9">
              <div>
                <h3 className="text-2xl font-bold sm:text-3xl">Container Reefer de 12 metros</h3>
                <p className="mt-2 max-w-[40ch] text-muted-foreground">
                  Container refrigerado anunciado para temperaturas de até -30 °C, conforme o catálogo.
                </p>
                <p className="mt-3 text-sm font-medium text-foreground">Consultar valor e disponibilidade</p>
              </div>
              <CtaLink href={waLink(MSG.c12)}>Consultar</CtaLink>
            </div>
          </article>

          <div className="grid gap-6 lg:col-span-5">
            <article className="grid bg-background sm:grid-cols-2">
              <img
                src={reeferCurto.url}
                alt="Container Reefer de menor comprimento com unidade de refrigeração"
                loading="lazy"
                className="aspect-[4/5] h-full w-full object-cover"
              />
              <div className="flex flex-col justify-between gap-6 p-7">
                <div>
                  <h3 className="text-2xl font-bold">Container Reefer de 6 metros</h3>
                  <p className="mt-2 text-muted-foreground">
                    Anunciado com capacidade de operação de até -35 °C, conforme a publicação original.
                  </p>
                  <p className="mt-3 text-sm font-medium">Consultar valor e disponibilidade</p>
                </div>
                <CtaLink href={waLink(MSG.c6)}>Consultar</CtaLink>
              </div>
            </article>

            <article className="flex flex-col justify-between gap-8 bg-deep p-7 text-deep-foreground lg:p-9">
              <div>
                <p className="eyebrow text-signal">Modelo de catálogo</p>
                <h3 className="mt-3 text-2xl font-bold">Container Reefer de 12 metros com porta lateral</h3>
                <p className="mt-2 max-w-[40ch] text-deep-foreground/75">
                  Modelo apresentado no catálogo com porta lateral e refrigeração de até -30 °C.
                </p>
                <p className="mt-3 text-sm font-medium">Consultar valor e disponibilidade</p>
              </div>
              <div>
                <CtaLink href={waLink(MSG.c12lateral)} tone="light">
                  Consultar
                </CtaLink>
              </div>
            </article>
          </div>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          Características conforme publicações comerciais da ATR. Valores e disponibilidade confirmados no atendimento.
        </p>
      </div>
    </section>
  );
}

/* 9. Equipamentos */
export function Equipamentos() {
  return (
    <section id="equipamentos" className="scroll-mt-4 py-24 lg:py-32">
      <div className="container-edit grid gap-10 lg:grid-cols-12 lg:gap-14">
        <figure className="lg:col-span-7">
          <img
            src={carrierEquip.url}
            alt="Unidade de refrigeração Carrier instalada em container, com ventilador, painel e cabos visíveis"
            loading="lazy"
            className="aspect-square w-full object-cover"
          />
        </figure>
        <div className="flex flex-col justify-between gap-12 lg:col-span-5">
          <div>
            <p className="eyebrow text-primary">Equipamentos e peças</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.04] sm:text-5xl">
              Equipamentos e peças para refrigeração de containers.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Consulte opções de equipamentos e componentes para sistemas de refrigeração de containers.
            </p>
            <dl className="mt-10 divide-y divide-border border-y border-border">
              {[
                ["Thermo King", "Equipamentos apresentados no catálogo"],
                ["Carrier", "Incluindo o modelo ML3 presente no catálogo"],
                ["Peças e componentes", "Consulte o item necessário para o seu equipamento"],
              ].map(([t, d]) => (
                <div key={t} className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-4 py-4">
                  <dt className="font-display font-bold">{t}</dt>
                  <dd className="text-sm text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-[minmax(0,140px)_minmax(0,1fr)] items-end gap-6 sm:grid-cols-[minmax(0,180px)_minmax(0,1fr)]">
            <img
              src={tkDetalhe.url}
              alt="Detalhe de unidade Thermo King com compressor e ventilador"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover"
            />
            <div className="min-w-0">
              <CtaLink href={waLink(MSG.equipamentos)}>Consultar equipamentos e peças</CtaLink>
              <p className="mt-4 text-xs text-muted-foreground">
                Thermo King e Carrier são marcas de seus respectivos fabricantes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 10. Manutenção */
export function Manutencao() {
  return (
    <section id="manutencao" className="scroll-mt-4 bg-graphite text-deep-foreground">
      <div className="grid lg:grid-cols-2">
        <img
          src={manutencao.url}
          alt="Técnico realizando trabalho de manutenção na estrutura de um container refrigerado"
          loading="lazy"
          className="h-full max-h-[880px] min-h-[420px] w-full object-cover object-[50%_70%]"
        />
        <div className="flex items-center px-[clamp(1.25rem,5vw,5rem)] py-20 lg:py-28">
          <div className="max-w-[34rem]">
            <p className="eyebrow text-signal">Serviços técnicos</p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.04] sm:text-5xl">
              Manutenção especializada em refrigeração de containers.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-deep-foreground/75">
              Serviços técnicos voltados à manutenção e ao reparo de equipamentos de refrigeração utilizados em
              containers Reefer.
            </p>
            <div className="mt-10">
              <CtaLink href={waLink(MSG.manutencao)} tone="light">
                Solicitar atendimento técnico
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* 11. Sobre */
export function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-4 py-24 lg:py-32">
      <div className="container-edit grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <img
            src={logo.url}
            alt="Logotipo ATR Refrigeração"
            loading="lazy"
            className="h-28 w-28 rounded-md object-cover"
          />
          <h2 className="mt-10 text-4xl font-bold leading-[1.04] sm:text-5xl">
            Especialização que se vê em cada equipamento.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              A ATR Refrigeração e Container atua no segmento de containers refrigerados, equipamentos, peças e
              manutenção.
            </p>
            <p>
              Com atuação comercial em Itajaí, Santa Catarina, a empresa apresenta soluções para clientes que
              necessitam de equipamentos de refrigeração e suporte técnico especializado.
            </p>
          </div>
        </div>
        <figure className="lg:col-span-7 lg:pt-16">
          <img
            src={equipe.url}
            alt="Profissionais da ATR em pátio com containers refrigerados"
            loading="lazy"
            className="aspect-[16/10] w-full object-cover"
          />
        </figure>
      </div>
    </section>
  );
}

/* 12. Fotografias */
export function Fotografias() {
  return (
    <section className="bg-secondary py-24 lg:py-32">
      <div className="container-edit">
        <h2 className="max-w-[18ch] text-4xl font-bold leading-[1.04] sm:text-5xl">
          Equipamentos e trabalho em detalhe.
        </h2>
        <div className="mt-12 grid gap-4 md:grid-cols-12 md:grid-rows-2">
          <img
            src={reefer12Grafite.url}
            alt="Container Reefer cinza com unidade Thermo King em pátio"
            loading="lazy"
            className="aspect-square h-full w-full object-cover md:col-span-7 md:row-span-2"
          />
          <img
            src={carrierContainer.url}
            alt="Container refrigerado branco com equipamento Carrier"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover md:col-span-5"
          />
          <img
            src={tkFrontal.url}
            alt="Frente de unidade Thermo King com painel de controle"
            loading="lazy"
            className="aspect-[4/3] h-full w-full object-cover object-[50%_40%] md:col-span-5"
          />
        </div>
      </div>
    </section>
  );
}

/* 13. Avaliações */
export function Avaliacoes() {
  const reviews = [
    { n: "Rogger Bach", t: "Empresa séria que é comprometida com a qualidade, sinceridade e a pontualidade." },
    { n: "Renato Michelli", t: "Profissionais de alta competência e serviço feito com excelência, super recomendo" },
    { n: "Panetteria Congelados", t: "Serviço excelente. Profissional de ótima qualidade. Preço justo." },
  ];
  return (
    <section className="bg-deep py-24 text-deep-foreground lg:py-32">
      <div className="container-edit grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <h2 className="text-4xl font-bold leading-[1.04] sm:text-5xl">
            A confiança de quem já conhece nosso trabalho.
          </h2>
          <div className="mt-10 flex items-end gap-4">
            <span className="font-display text-7xl font-extrabold leading-none">5,0</span>
            <div className="pb-1">
              <Stars />
              <p className="mt-2 text-sm text-deep-foreground/75">32 avaliações no Google</p>
            </div>
          </div>
        </div>
        <ul className="divide-y divide-deep-foreground/15 border-y border-deep-foreground/15 lg:col-span-7 lg:col-start-6">
          {reviews.map((r) => (
            <li key={r.n} className="py-8">
              <blockquote className="font-display text-xl font-medium leading-snug sm:text-2xl">
                “{r.t}”
              </blockquote>
              <p className="mt-4 text-sm text-deep-foreground/70">{r.n} · Google Maps</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* 14. FAQ */
export function Faq() {
  const faq = [
    ["A ATR trabalha com containers refrigerados?", "Sim. A ATR comercializa containers refrigerados Reefer. Consulte os modelos e a disponibilidade pelo WhatsApp."],
    ["É possível consultar equipamentos Thermo King e Carrier?", "O catálogo da ATR apresenta equipamentos dessas marcas. Entre em contato para verificar os modelos disponíveis."],
    ["A ATR também realiza manutenção?", "Sim. A empresa oferece serviços técnicos de manutenção em equipamentos de refrigeração para containers."],
    ["Como solicitar um orçamento?", "Entre em contato pelo WhatsApp e informe o equipamento ou serviço desejado."],
    ["Onde a ATR está localizada?", "A localização comercial informada é São Vicente, em Itajaí, Santa Catarina."],
  ];
  return (
    <section className="py-24 lg:py-32">
      <div className="container-edit grid gap-10 lg:grid-cols-12">
        <h2 className="text-4xl font-bold leading-[1.04] sm:text-5xl lg:col-span-4">Perguntas frequentes</h2>
        <Accordion type="single" collapsible className="lg:col-span-7 lg:col-start-6">
          {faq.map(([q, a], i) => (
            <AccordionItem key={q} value={`q${i}`}>
              <AccordionTrigger className="py-6 text-left font-display text-lg font-semibold hover:no-underline">
                {q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground">{a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* 15. CTA final */
export function CtaFinal() {
  return (
    <section className="bg-secondary py-24 lg:py-36">
      <div className="container-edit">
        <h2 className="max-w-[20ch] text-5xl font-extrabold leading-[0.98] sm:text-6xl lg:text-7xl">
          Precisa de um container Reefer ou suporte em refrigeração?
        </h2>
        <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[44ch] text-lg text-muted-foreground">
            Entre em contato com a ATR para consultar containers, equipamentos, peças ou serviços de manutenção.
          </p>
          <a
            href={waLink(MSG.final)}
            {...ext}
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-deep py-2.5 pl-7 pr-2.5 text-base font-semibold text-deep-foreground transition-colors hover:bg-primary"
          >
            Falar com a ATR no WhatsApp
            <span className="grid h-11 w-11 place-items-center rounded-full bg-whatsapp text-on-photo">
              <WhatsAppIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* 16. Rodapé */
export function Rodape() {
  const nav = [
    ["#containers", "Containers"],
    ["#equipamentos", "Equipamentos"],
    ["#manutencao", "Serviços"],
    ["#sobre", "Sobre"],
  ];
  return (
    <footer id="contato" className="scroll-mt-4 bg-graphite pt-20 text-deep-foreground">
      <div className="container-edit grid gap-12 pb-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-display text-5xl font-extrabold tracking-[-0.05em]">ATR</p>
          <p className="eyebrow mt-2 text-deep-foreground/70">Refrigeração e Container</p>
        </div>
        <div className="space-y-4 text-sm md:col-span-4">
          <a href={MAPS_URL} {...ext} className="flex gap-3 hover:text-signal">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" /> {ADDRESS}
          </a>
          <a href={waLink()} {...ext} className="flex items-center gap-3 hover:text-signal">
            <WhatsAppIcon className="h-4 w-4" /> (47) 99174-8185
          </a>
          <a href={INSTAGRAM_URL} {...ext} className="flex items-center gap-3 hover:text-signal">
            <Instagram className="h-4 w-4" /> @atrcontainer
          </a>
        </div>
        <nav aria-label="Rodapé" className="md:col-span-3">
          <ul className="space-y-3 text-sm">
            {nav.map(([h, l]) => (
              <li key={h}>
                <a href={h} className="inline-flex items-center gap-2 hover:text-signal">
                  {l} <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-deep-foreground/10">
        <p className="container-edit py-6 text-xs text-deep-foreground/60">
          © {new Date().getFullYear()} ATR Refrigeração e Container. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppFlutuante() {
  return (
    <a
      href={waLink(MSG.final)}
      {...ext}
      aria-label="Conversar com a ATR no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-on-photo shadow-lg transition-transform hover:scale-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
    </a>
  );
}
