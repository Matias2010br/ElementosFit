import { ACADEMIA, whatsapp } from '@/lib/site';
import { IconWhatsApp } from './Icons';

const LINKS_NAV = [
  ['#inicio', 'Início'],
  ['#sobre', 'Sobre'],
  ['#estrutura', 'Estrutura'],
  ['#planos', 'Planos'],
  ['#app', 'App'],
  ['#horarios', 'Horários'],
  ['#localizacao', 'Contato'],
] as const;

export default function Navbar() {
  return (
    <>
      <header className="nav" id="nav">
        <div className="nav__in">
          <a className="nav__logo" href="#inicio" aria-label={`${ACADEMIA.nome} — início`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/logo-horizontal.png" width={420} height={126} alt={ACADEMIA.nome} fetchPriority="high" decoding="async" />
          </a>

          <nav className="nav__links" aria-label="Navegação principal">
            {LINKS_NAV.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
          </nav>

          <a className="btn nav__cta" href={whatsapp('recepcao')} target="_blank" rel="noopener">
            <IconWhatsApp />
            Recepção
          </a>

          <button className="burger" id="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="drawer">
            <span />
          </button>
        </div>
        <div className="prog" id="prog" aria-hidden="true" />
      </header>

      <div className="drawer" id="drawer">
        {LINKS_NAV.map(([href, label], i) => (
          <a className="drawer__link" key={href} href={href}>
            {label} <span>{String(i + 1).padStart(2, '0')}</span>
          </a>
        ))}
        <a className="btn btn--lg" href={whatsapp('recepcao')} target="_blank" rel="noopener">Fale com a recepção</a>
        <div className="drawer__meta">
          {ACADEMIA.enderecoCompleto}<br />
          {ACADEMIA.telefone}
        </div>
      </div>
    </>
  );
}
