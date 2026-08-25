import { ACADEMIA, whatsapp } from '@/lib/site';

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero__media" id="heroMedia">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/hero.jpg"
          width={1920}
          height={1080}
          alt={`Salão de musculação da ${ACADEMIA.nome} em ${ACADEMIA.bairro}, ${ACADEMIA.cidade}/${ACADEMIA.uf}`}
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero__scrim" aria-hidden="true" />

      <div className="bleed g12 hero__in">
        <div className="hero__kick">
          <span className="tag tag--plain">Academia · {ACADEMIA.bairro} · {ACADEMIA.cidade}/{ACADEMIA.uf}</span>
          <span className="status" id="status" aria-live="polite">
            <span className="status__dot" />
            <span id="statusTxt">Verificando…</span>
          </span>
        </div>

        <h1 className="d1 rv-lines" data-split>
          Inspire-se.<br /><span className="accent">Treine.</span><br />Evolua.
        </h1>

        <p className="hero__quote rv-up">Mais que uma academia, uma casa, uma família</p>

        <p className="hero__sub rv-up">
          Musculação, cardio e peso livre com equipamentos Cimerian e Matrix, no coração de {ACADEMIA.bairro} —
          com acompanhamento profissional do primeiro dia ao seu melhor resultado.
        </p>

        <div className="hero__cta rv-up">
          <a className="btn btn--lg" href={whatsapp('visita')} target="_blank" rel="noopener">Fale com a recepção</a>
          <a className="btn btn--ghost btn--lg" href="#planos">Conheça nossos planos</a>
        </div>

        <div className="hero__data rv-up">
          <dl>
            <div className="hero__row"><dt>Seg — Sex</dt><dd>06:00 — 00:00</dd></div>
            <div className="hero__row"><dt>Sáb / Feriados</dt><dd>07:00 — 19:00</dd></div>
            <div className="hero__row"><dt>Domingo</dt><dd>08:00 — 12:00</dd></div>
            <div className="hero__row"><dt>Endereço</dt><dd>{ACADEMIA.rua}</dd></div>
            <div className="hero__row"><dt>Agora</dt><dd id="statusSub">Horário de Brasília</dd></div>
          </dl>
        </div>
      </div>

      <div className="scrollcue" aria-hidden="true">Role</div>
    </section>
  );
}
