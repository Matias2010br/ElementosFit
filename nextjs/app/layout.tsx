import type { Metadata, Viewport } from 'next';
import { ACADEMIA, LINKS, SITE_URL } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Elemento Fit Academia | Bombinhas - SC',
  description:
    'Academia em Bombinhas/SC, no bairro Bombas. Musculação, cardio e peso livre com equipamentos Cimerian e Matrix. Aberta das 06h às 00h. Planos a partir de R$ 119/mês. Fale com a recepção pelo WhatsApp.',
  applicationName: ACADEMIA.nome,
  authors: [{ name: ACADEMIA.nome }],
  keywords: [
    'academia em Bombinhas',
    'academia em Bombas',
    'academia Bombinhas SC',
    'musculação em Bombinhas',
    'Elemento Fit Bombinhas',
    'academia perto de mim Bombinhas',
    'treinamento funcional Bombinhas',
  ],
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: ACADEMIA.nome,
    title: 'Elemento Fit Academia | Bombinhas - SC',
    description:
      'Mais que uma academia, uma casa, uma família. Musculação, cardio e peso livre em Bombas, Bombinhas/SC. Das 06h às 00h, a partir de R$ 119/mês.',
    url: '/',
    images: [{
      url: '/assets/img/og-elemento-fit.jpg',
      width: 1200,
      height: 630,
      alt: 'Elemento Fit Academia — Bombinhas/SC',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elemento Fit Academia | Bombinhas - SC',
    description: 'Musculação, cardio e peso livre em Bombas, Bombinhas/SC. Das 06h às 00h, a partir de R$ 119/mês.',
    images: ['/assets/img/og-elemento-fit.jpg'],
  },
  icons: {
    icon: [
      { url: '/assets/img/favicon.ico', sizes: '32x32' },
      { url: '/assets/img/favicon-64.png', type: 'image/png', sizes: '64x64' },
    ],
    apple: '/assets/img/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'BR-SC',
    'geo.placename': ACADEMIA.cidade,
    'geo.position': `${ACADEMIA.lat};${ACADEMIA.lng}`,
    ICBM: `${ACADEMIA.lat}, ${ACADEMIA.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ExerciseGym',
  '@id': `${SITE_URL}/#academia`,
  name: ACADEMIA.nome,
  alternateName: 'Elemento Fit Bombinhas',
  description:
    'Academia em Bombas, Bombinhas/SC: musculação, cardio e peso livre com equipamentos Cimerian e Matrix, acompanhamento profissional e horário livre no plano Clube+. Planos a partir de R$ 119 por mês.',
  url: `${SITE_URL}/`,
  telephone: ACADEMIA.telefoneE164,
  image: `${SITE_URL}/assets/img/hero.jpg`,
  logo: `${SITE_URL}/assets/img/logo-full.png`,
  priceRange: 'R$ 119 - R$ 199',
  currenciesAccepted: 'BRL',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rua Martim Pescador, 917',
    addressLocality: ACADEMIA.cidade,
    addressRegion: ACADEMIA.uf,
    addressCountry: 'BR',
  },
  geo: { '@type': 'GeoCoordinates', latitude: ACADEMIA.lat, longitude: ACADEMIA.lng },
  hasMap: LINKS.maps,
  areaServed: [
    { '@type': 'City', name: 'Bombinhas' },
    { '@type': 'Place', name: 'Bombas' },
    { '@type': 'Place', name: 'Canto Grande' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '06:00',
      closes: '23:59',
    },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '07:00', closes: '19:00' },
    { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Sunday'], opens: '08:00', closes: '12:00' },
  ],
  sameAs: [LINKS.instagram, LINKS.facebook, LINKS.linktree],
  potentialAction: {
    '@type': 'CommunicateAction',
    name: 'Fale com a recepção',
    target: `https://wa.me/${ACADEMIA.whatsapp}`,
  },
  makesOffer: [
    {
      '@type': 'Offer',
      name: 'Clube+',
      category: 'Plano anual com horário livre',
      description:
        'Musculação com horários livres, taxa de matrícula isenta, 3 avaliações físicas, plano flex, 60 dias de liberdade, 1 consulta com nutricionista e 1 sessão de procedimento na AFINATO.',
      price: '119.00',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '119.00', priceCurrency: 'BRL', unitCode: 'MON',
      },
    },
    {
      '@type': 'Offer', name: 'Passaporte', category: 'Musculação 6x por semana',
      price: '129.00', priceCurrency: 'BRL',
      priceSpecification: { '@type': 'UnitPriceSpecification', price: '129.00', priceCurrency: 'BRL', unitCode: 'MON' },
    },
    {
      '@type': 'Offer', name: 'Prata', category: 'Musculação 3x por semana',
      price: '119.00', priceCurrency: 'BRL',
      priceSpecification: { '@type': 'UnitPriceSpecification', price: '119.00', priceCurrency: 'BRL', unitCode: 'MON' },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" href="/assets/fonts/archivo-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/assets/fonts/spacemono-700-latin.woff2" as="font" type="font/woff2" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body>
        <a className="skip" href="#conteudo">Ir para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
