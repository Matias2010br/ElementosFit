import { whatsapp } from '@/lib/site';

const CLUBE = [
  'Musculação com horários livres',
  'Taxa de matrícula isenta',
  '3 avaliações físicas',
  'Plano Flex',
  '60 dias de liberdade',
  '1 consulta com nutricionista',
  '1 sessão de procedimento na AFINATO',
  'Estrutura completa',
];

const PRATA = [
  { k: '12 meses', v: 'R$ 119', n: 'por mês · 6× R$ 238,00', best: true },
  { k: '6 meses', v: 'R$ 149', n: 'por mês · 4× R$ 223,50', best: false },
  { k: 'Mensal', v: 'R$ 179', n: 'por mês', best: false },
];

const PASSAPORTE = [
  { k: '12 meses', v: 'R$ 129', n: 'por mês · 6× R$ 258,00', best: true },
  { k: '6 meses', v: 'R$ 159', n: 'por mês · 4× R$ 238,50', best: false },
  { k: 'Mensal', v: 'R$ 199', n: 'por mês', best: false },
];

function Tiers({ linhas }: { linhas: typeof PRATA }) {
  return (
    <ul className="tiers">
      {linhas.map((t) => (
        <li className={'tier rv-row' + (t.best ? ' is-best' : '')} key={t.k}>
          <span className="tier__k">{t.k}</span>
          <span />
          <span className="tier__v">{t.v}</span>
          <span className="tier__n">{t.n}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Planos() {
  return (
    <section className="sec inv" id="planos">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="04">Planos</p>
            <h2 className="d2 rv-lines" data-split>Encontre<br />o seu plano.</h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              Academia com vantagens que te inspiram. Três caminhos para treinar na Elemento Fit — do plano de
              musculação ao Clube+, com horário livre e benefícios que vão além da sala de treino.
            </p>
          </div>
        </div>

        <div className="g12 plan-hero">
          <div className="plan-hero__l">
            <p className="tag tag--plain rv-up">Plano mais completo</p>
            <h3 className="rv-lines" data-split>Clube<span className="accent">+</span></h3>
            <div className="price rv-up">
              <span className="price__cur">R$</span>
              <span className="price__v" data-count="119">119</span>
              <span className="price__u">média mensal</span>
            </div>
            <p className="price__c rv-up">A partir de · 9× de R$ 158,76 · total R$ 1.428,00</p>
            <p className="mt-24 rv-up">
              <a className="btn btn--dark btn--lg" href={whatsapp('clube')} target="_blank" rel="noopener">Quero o Clube+</a>
            </p>
          </div>
          <div className="plan-hero__r">
            <p className="tag tag--plain rv-up">O que está incluído</p>
            <ul className="checks">
              {CLUBE.map((c) => <li className="rv-row" key={c}>{c}</li>)}
            </ul>
          </div>
        </div>

        <div className="g12 plans2">
          <article className="plan rv-up">
            <h3>Prata</h3>
            <p className="plan__d">Musculação 3× por semana</p>
            <Tiers linhas={PRATA} />
            <p className="plan__note">+ taxa de matrícula de R$ 50</p>
            <a
              className="btn btn--ghost btn--block"
              href="https://wa.me/5547991047652?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Prata%20da%20Elemento%20Fit."
              target="_blank" rel="noopener"
            >
              Quero o Prata
            </a>
          </article>

          <article className="plan rv-up">
            <h3>Passaporte</h3>
            <p className="plan__d">Musculação 6× por semana · 1× por dia</p>
            <Tiers linhas={PASSAPORTE} />
            <p className="plan__note">+ taxa de matrícula de R$ 50</p>
            <a
              className="btn btn--ghost btn--block"
              href="https://wa.me/5547991047652?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20plano%20Passaporte%20da%20Elemento%20Fit."
              target="_blank" rel="noopener"
            >
              Quero o Passaporte
            </a>
          </article>
        </div>

        <p className="note mt-24 rv-up">
          Valores vigentes na data de publicação. De passagem por Bombinhas? Fale com a recepção para conhecer as
          opções de curta duração.
        </p>

        <div className="g12 doubt">
          <div className="doubt__t">
            <h3 className="rv-lines" data-split>Ainda está<br />em dúvida?</h3>
            <p className="body mt-16 rv-up">
              Fale com nossa recepção e descubra qual opção combina melhor com seus objetivos.
            </p>
          </div>
          <div className="doubt__b rv-up">
            <a className="btn btn--dark btn--lg" href={whatsapp('duvida')} target="_blank" rel="noopener">Fale com a recepção</a>
          </div>
        </div>
      </div>
    </section>
  );
}
