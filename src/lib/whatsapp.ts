export const WHATSAPP_NUMBER = "5547991748185";

export function waLink(message?: string) {
  const base = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export const MSG = {
  hero: "Olá! Conheci a ATR pelo site e gostaria de solicitar um orçamento.",
  c6: "Olá! Vi o container Reefer de 6 metros no site da ATR e gostaria de consultar o valor e a disponibilidade.",
  c12: "Olá! Vi o container Reefer de 12 metros no site da ATR e gostaria de mais informações.",
  c12lateral:
    "Olá! Gostaria de consultar o container Reefer de 12 metros com porta lateral apresentado no site.",
  equipamentos:
    "Olá! Conheci a ATR pelo site e gostaria de consultar os equipamentos e peças disponíveis para refrigeração de containers.",
  manutencao:
    "Olá! Encontrei a ATR pelo site e gostaria de solicitar informações sobre manutenção de um equipamento de refrigeração para container.",
  final:
    "Olá! Conheci a ATR pelo site e gostaria de receber informações sobre containers refrigerados, equipamentos ou manutenção.",
};

export const INSTAGRAM_URL = "https://www.instagram.com/atrcontainer/";
export const ADDRESS =
  "Rua Professora Erotides da Silva Fontes, 2120, São Vicente, Itajaí, SC, CEP 88309-600";
export const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "ATR Refrigeração e Container, " + ADDRESS,
)}`;
