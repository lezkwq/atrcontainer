import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import heroDesktop from "@/assets/hero_desktop.png";
import heroMobile from "@/assets/hero_mobile.png";
import { MSG, waLink } from "@/lib/whatsapp";
import { Stars, WhatsAppIcon } from "./icons";

const left = [
  { href: "#containers", label: "Containers" },
  { href: "#equipamentos", label: "Equipamentos" },
  { href: "#manutencao", label: "Serviços" },
];
const right = [
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

function Brand() {
  return (
    <a href="#topo" className="flex flex-col items-center leading-none text-on-photo">
      <span className="font-display text-3xl font-extrabold tracking-[-0.04em] sm:text-4xl">ATR</span>
      <span className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.22em] opacity-90 sm:text-[0.7rem]">
        Refrigeração e Container
      </span>
    </a>
  );
}

export function Hero() {
  const [open, setOpen] = useState(false);
  const link = "text-sm font-medium text-on-photo/90 transition-colors hover:text-on-photo";

  return (
    <section id="topo" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-deep">
      <picture>
        <source media="(min-width: 768px)" srcSet={heroDesktop} />
        <img
          src={heroMobile}
          alt="Container Reefer branco com unidade de refrigeração Thermo King em pátio industrial sob céu azul"
          className="absolute inset-0 h-full w-full object-cover object-bottom md:object-[65%_75%]"
          fetchPriority="high"
        />
      </picture>
      <div className="hero-scrim-mobile absolute inset-0 md:hidden" />
      <div className="hero-scrim absolute inset-0 hidden md:block" />

      {/* Giant wordmark, kept in the sky area on desktop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[clamp(1.25rem,4vw,3.5rem)] top-[13%] hidden select-none font-display font-extrabold leading-[0.8] tracking-[-0.06em] text-on-photo md:block md:text-[17vw] lg:text-[15.5vw] animate-rise"
      >
        ATR
      </div>

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="container-edit grid grid-cols-[1fr_auto_1fr] items-center py-6">
          <nav aria-label="Principal, esquerda" className="hidden items-center gap-8 md:flex">
            {left.map((l) => (
              <a key={l.href} href={l.href} className={link}>
                {l.label}
              </a>
            ))}
          </nav>
          <div className="md:hidden" />
          <Brand />
          <div className="flex items-center justify-end gap-8">
            <nav aria-label="Principal, direita" className="hidden items-center gap-8 md:flex">
              {right.map((l) => (
                <a key={l.href} href={l.href} className={link}>
                  {l.label}
                </a>
              ))}
              <a
                href={waLink(MSG.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-on-photo/50 px-4 py-2 text-sm font-medium text-on-photo transition-colors hover:bg-on-photo hover:text-deep"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </nav>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              className="grid h-11 w-11 place-items-center rounded-full border border-on-photo/40 text-on-photo md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <nav
            id="menu-mobile"
            aria-label="Menu mobile"
            className="mx-5 rounded-md bg-deep/95 p-6 backdrop-blur md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {[...left, ...right].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-2xl font-semibold text-deep-foreground"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      {/* Mobile copy, in the sky */}
      <div className="container-edit absolute inset-x-0 top-[15%] z-10 md:hidden">
        <h1 className="max-w-[14ch] text-[2.4rem] font-bold leading-[1.02] text-on-photo animate-rise">
          Containers refrigerados e soluções em refrigeração.
        </h1>
        <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-on-photo/90">
          Venda de containers Reefer, equipamentos, peças e manutenção especializada.
        </p>
        <a
          href={waLink(MSG.hero)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center gap-3 rounded-full bg-on-photo py-2 pl-6 pr-2 text-sm font-semibold text-deep"
        >
          Solicitar orçamento
          <span className="grid h-10 w-10 place-items-center rounded-full bg-deep text-on-photo">
            <WhatsAppIcon className="h-4 w-4" />
          </span>
        </a>
        <div className="mt-5 flex flex-wrap items-center gap-2 text-sm text-on-photo">
          <Stars className="h-3.5 w-3.5" />
          <span className="font-semibold">5,0 no Google</span>
          <span className="opacity-80">· 32 avaliações</span>
        </div>
      </div>

      {/* Desktop commercial block */}
      <div className="container-edit absolute inset-x-0 bottom-0 z-10 hidden pb-10 md:flex md:items-end md:justify-between lg:pb-14">
        <div className="panel-glass max-w-[30rem] rounded-md p-8 lg:max-w-[34rem] lg:p-10">
          <h1 className="relative top-2 text-[1.875rem] font-bold leading-[1.04] text-on-photo lg:text-[2.375rem]">
            Containers refrigerados e soluções em refrigeração.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-on-photo/85">
            Venda de containers Reefer, equipamentos, peças e manutenção especializada. Soluções para quem
            precisa de refrigeração confiável.
          </p>
          <a
            href={waLink(MSG.hero)}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-4 rounded-full bg-on-photo py-2 pl-6 pr-2 text-sm font-semibold text-deep transition-transform hover:-translate-y-0.5"
          >
            Solicitar orçamento
            <span className="grid h-10 w-10 place-items-center rounded-full bg-deep text-on-photo transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </a>
        </div>
        <div className="mb-2 text-right text-on-photo">
          <div className="flex justify-end">
            <Stars />
          </div>
          <p className="mt-2 font-display text-2xl font-bold">5,0 no Google</p>
          <p className="text-sm opacity-85">32 avaliações</p>
        </div>
      </div>
    </section>
  );
}
