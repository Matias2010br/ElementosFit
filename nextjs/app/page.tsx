import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import Sobre from '@/components/Sobre';
import Estrutura from '@/components/Estrutura';
import Diferenciais from '@/components/Diferenciais';
import Planos from '@/components/Planos';
import AppNextFit from '@/components/AppNextFit';
import Horarios from '@/components/Horarios';
import Avaliacoes from '@/components/Avaliacoes';
import Instagram from '@/components/Instagram';
import Localizacao from '@/components/Localizacao';
import CtaFinal from '@/components/CtaFinal';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import SiteBehavior from '@/components/SiteBehavior';

export default function Home() {
  return (
    <>
      {/* grelha de composição visível — assinatura do layout */}
      <div className="gridlines" aria-hidden="true">
        {Array.from({ length: 12 }, (_, i) => <i key={i} />)}
      </div>

      <Navbar />

      <main id="conteudo">
        <Hero />
        <Marquee />
        <Sobre />
        <Estrutura />
        <Diferenciais />
        <Planos />
        <AppNextFit />
        <Horarios />
        <Avaliacoes />
        <Instagram />
        <Localizacao />
        <CtaFinal />
      </main>

      <Footer />
      <WhatsAppFab />
      <SiteBehavior />
    </>
  );
}
