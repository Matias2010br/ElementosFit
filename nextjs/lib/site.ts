/**
 * Dados oficiais da Elemento Fit Academia.
 * Alterar aqui reflete em todo o site.
 * Nenhum dado aqui é inventado — todos foram confirmados em fontes públicas.
 */

export const SITE_URL = 'https://www.elementofitbombinhas.com.br';

export const ACADEMIA = {
  nome: 'Elemento Fit Academia',
  nomeCurto: 'Elemento Fit',
  cidade: 'Bombinhas',
  uf: 'SC',
  bairro: 'Bombas',
  rua: 'R. Martim Pescador, 917',
  enderecoCompleto: 'R. Martim Pescador, 917 — Bombas, Bombinhas/SC',
  telefone: '(47) 99104-7652',
  telefoneE164: '+5547991047652',
  whatsapp: '5547991047652',
  lat: -27.1476556,
  lng: -48.512285,
  slogan: 'Mais que uma academia, uma casa, uma família.',
  bio: 'Sua academia completa, com equipamentos e profissionais de ponta.',
} as const;

export const LINKS = {
  instagram: 'https://www.instagram.com/elementofitbombinhas/',
  facebook: 'https://www.facebook.com/academiaelementofit/',
  maps: 'https://maps.app.goo.gl/gdfTFMGCrNQ36X6Y9',
  comoChegar: `https://www.google.com/maps/dir/?api=1&destination=${ACADEMIA.lat},${ACADEMIA.lng}`,
  avaliarGoogle: 'https://g.page/r/CWf6QwMtRwa6EBM/review',
  linktree: 'https://linktr.ee/elementofitbombinhas',
  appIOS: 'https://apps.apple.com/br/app/next-fit/id1360859531',
  appAndroid: 'https://play.google.com/store/apps/details?id=br.com.fitastic.appaluno',
} as const;

/** Mensagens pré-preenchidas do WhatsApp, uma por contexto de conversão. */
export const WA_MENSAGENS = {
  recepcao: 'Olá! Vim pelo site da Elemento Fit e gostaria de falar com a recepção.',
  visita: 'Olá! Gostaria de conhecer a Elemento Fit e saber mais sobre a academia.',
  planos: 'Olá! Conheci a Elemento Fit pelo site e gostaria de conhecer os planos disponíveis.',
  diaria: 'Olá! Conheci a Elemento Fit pelo site e gostaria de saber sobre a diária.',
  semanal: 'Olá! Conheci a Elemento Fit pelo site e gostaria de saber sobre o plano semanal.',
  clube: 'Olá! Gostaria de saber mais sobre o plano Clube+ da Elemento Fit.',
  duvida: 'Olá! Gostaria de tirar uma dúvida sobre a Elemento Fit e entender qual plano combina comigo.',
  horarios: 'Olá! Gostaria de confirmar os horários de funcionamento da Elemento Fit.',
} as const;

export function whatsapp(mensagem: keyof typeof WA_MENSAGENS = 'recepcao') {
  return `https://wa.me/${ACADEMIA.whatsapp}?text=${encodeURIComponent(WA_MENSAGENS[mensagem])}`;
}

/**
 * Horário de funcionamento em minutos desde 00:00.
 * Seg–Sex 06:00–00:00 · Sáb e feriados 07:00–19:00 · Domingo 08:00–12:00.
 * Precisa bater com a tabela renderizada em <Horarios /> e com o JSON-LD.
 */
export const HORARIOS: Record<number, [number, number] | null> = {
  0: [480, 720],
  1: [360, 1440],
  2: [360, 1440],
  3: [360, 1440],
  4: [360, 1440],
  5: [360, 1440],
  6: [420, 1140],
};
