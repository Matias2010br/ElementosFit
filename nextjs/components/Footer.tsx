import { ACADEMIA, LINKS, whatsapp } from '@/lib/site';
import { IconFacebook, IconInstagram, IconPin, IconWhatsApp } from './Icons';

export default function Footer() {
  return (
    <footer className="foot">
      <div className="bleed">
        <div className="g12 foot__grid">
          <div className="foot__a">
            <a className="foot__logo" href="#inicio" aria-label={ACADEMIA.nome}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/logo-full.png"
                width={196}
                height={176}
                alt={`${ACADEMIA.nome} — ${ACADEMIA.cidade}/${ACADEMIA.uf}`}
                decoding="async"
              />
            </a>
            <p className="foot__desc">{ACADEMIA.bio} {ACADEMIA.slogan}</p>
            <div className="foot__social">
              <a href={LINKS.instagram} target="_blank" rel="noopener" aria-label="Instagram da Elemento Fit"><IconInstagram /></a>
              <a href={LINKS.facebook} target="_blank" rel="noopener" aria-label="Facebook da Elemento Fit"><IconFacebook /></a>
              <a href={whatsapp('recepcao')} target="_blank" rel="noopener" aria-label="WhatsApp da Elemento Fit"><IconWhatsApp /></a>
              <a href={LINKS.maps} target="_blank" rel="noopener" aria-label="Elemento Fit no Google Maps"><IconPin /></a>
            </div>
          </div>

          <div className="foot__b">
            <h4>Navegação</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#estrutura">Estrutura</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#app">App NextFit</a></li>
              <li><a href="#horarios">Horários</a></li>
            </ul>
          </div>

          <div className="foot__c">
            <h4>Horários</h4>
            <ul>
              <li>Seg. a sex. · 06:00 — 00:00</li>
              <li>Sáb. e feriados · 07:00 — 19:00</li>
              <li>Domingo · 08:00 — 12:00</li>
            </ul>
            <h4 className="mt-24">Aplicativo</h4>
            <ul>
              <li><a href={LINKS.appIOS} target="_blank" rel="noopener">NextFit para iPhone</a></li>
              <li><a href={LINKS.appAndroid} target="_blank" rel="noopener">NextFit para Android</a></li>
            </ul>
          </div>

          <div className="foot__d">
            <h4>Contato</h4>
            <ul>
              <li>{ACADEMIA.rua}<br />{ACADEMIA.bairro} — {ACADEMIA.cidade}/{ACADEMIA.uf}</li>
              <li><a href={`tel:${ACADEMIA.telefoneE164}`}>{ACADEMIA.telefone}</a></li>
              <li><a href={whatsapp('recepcao')} target="_blank" rel="noopener">Falar no WhatsApp</a></li>
              <li><a href={LINKS.comoChegar} target="_blank" rel="noopener">Como chegar</a></li>
              <li><a href={LINKS.avaliarGoogle} target="_blank" rel="noopener">Avalie-nos no Google</a></li>
            </ul>
          </div>
        </div>

        <div className="foot__bottom">
          <p>© <span id="ano">2026</span> {ACADEMIA.nome} — {ACADEMIA.cidade}/{ACADEMIA.uf}. Todos os direitos reservados.</p>
          <div className="foot__legal">
            <a href="/termos-de-uso">Termos de Uso</a>
            <a href="/politica-de-privacidade">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
