import { ACADEMIA, whatsapp } from '@/lib/site';

/** Cabeçalho e rodapé simplificados das páginas legais. */
export default function LegalShell({ children }: { children: React.ReactNode }) {
  const ano = new Date().getFullYear();

  return (
    <>
      <header className="nav is-stuck">
        <div className="nav__in">
          <a className="nav__logo" href="/" aria-label={`${ACADEMIA.nome} — início`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/img/logo-horizontal.png" width={420} height={126} alt={ACADEMIA.nome} />
          </a>
          <a className="nav__back" href="/">← Voltar ao site</a>
          <a className="btn btn--sm nav__cta" href={whatsapp('recepcao')} target="_blank" rel="noopener">
            Fale com a recepção
          </a>
        </div>
      </header>

      {children}

      <footer className="foot">
        <div className="bleed">
          <div className="foot__bottom" style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>
            <p>© {ano} {ACADEMIA.nome} — {ACADEMIA.cidade}/{ACADEMIA.uf}. Todos os direitos reservados.</p>
            <div className="foot__legal">
              <a href="/">Início</a>
              <a href="/termos-de-uso">Termos de Uso</a>
              <a href="/politica-de-privacidade">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
