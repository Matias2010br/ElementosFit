import { LINKS, whatsapp } from '@/lib/site';
import { IconWhatsApp } from './Icons';

export default function CtaFinal() {
  return (
    <section className="final hot" id="contato">
      <div className="bleed g12">
        <h2 className="d1 rv-lines" data-split>Pronto para<br />começar?</h2>
        <p className="final__p rv-up">
          Fale com nossa recepção e descubra como fazer parte da Elemento Fit. A gente te explica os planos, tira
          suas dúvidas e te espera para conhecer a academia.
        </p>
        <div className="final__cta rv-up">
          <a className="btn btn--dark btn--lg" href={whatsapp('recepcao')} target="_blank" rel="noopener">
            <IconWhatsApp />
            Fale com a recepção
          </a>
          <a className="btn btn--ghost btn--lg" href="#planos">Ver planos</a>
        </div>
        <nav className="final__micro rv-up" aria-label="Atalhos">
          <a href="#estrutura">Conhecer a estrutura</a>
          <a href={LINKS.comoChegar} target="_blank" rel="noopener">Como chegar</a>
          <a href={LINKS.avaliarGoogle} target="_blank" rel="noopener">Avaliar no Google</a>
          <a href={LINKS.instagram} target="_blank" rel="noopener">Seguir no Instagram</a>
          <a href="#app">Conhecer o NextFit</a>
        </nav>
      </div>
    </section>
  );
}
