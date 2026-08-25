import { LINKS } from '@/lib/site';
import { IconApple, IconPlay } from './Icons';

const BENEFICIOS = [
  'Sua ficha de treino sempre à mão',
  'Registro dos treinos realizados',
  'Acompanhamento da sua evolução',
  'Disponível para iPhone e Android',
];

export default function AppNextFit() {
  return (
    <section className="sec sec--flush" id="app">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="05">Aplicativo</p>
            <h2 className="d2 rv-lines" data-split>Seu treino.<br /><span className="thin">Onde você estiver.</span></h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              A Elemento Fit usa o <strong>NextFit</strong>, o aplicativo do aluno. Sua ficha de treino sai do papel e
              vai para o bolso: você abre o celular, sabe exatamente o que fazer e registra a série no mesmo lugar.
            </p>
          </div>
        </div>

        <div className="g12 app">
          <div className="app__l">
            <ul className="app__list">
              {BENEFICIOS.map((b, i) => (
                <li className="rv-row" data-i={String(i + 1).padStart(2, '0')} key={b}>{b}</li>
              ))}
            </ul>

            <div className="stores rv-up">
              <a className="store" href={LINKS.appIOS} target="_blank" rel="noopener" aria-label="Baixar o app NextFit na App Store">
                <IconApple />
                <span><small>Baixar na</small><b>App Store</b></span>
              </a>
              <a className="store" href={LINKS.appAndroid} target="_blank" rel="noopener" aria-label="Baixar o app NextFit no Google Play">
                <IconPlay />
                <span><small>Baixar no</small><b>Google Play</b></span>
              </a>
            </div>

            <p className="note mt-24 rv-up">Seu acesso ao app é liberado pela recepção no momento da matrícula.</p>
          </div>

          <div className="app__r rv-up">
            <div className="phone" aria-hidden="true">
              <div className="phone__scr">
                <div className="phone__brand">ELEMENTO<em>FIT</em></div>
                <div className="phone__card">
                  <b>Treino de hoje</b><span>Superior A · 7 exercícios</span>
                  <div className="phone__bar"><i data-fill="64" /></div>
                </div>
                <div className="phone__card"><b>Supino reto</b><span>4 × 10 · 40 kg</span></div>
                <div className="phone__card"><b>Remada curvada</b><span>4 × 12 · 35 kg</span></div>
                <div className="phone__card">
                  <b>Frequência</b><span>16 treinos no mês</span>
                  <div className="phone__bar"><i data-fill="82" /></div>
                </div>
                <div className="phone__ft"><span>NextFit</span><span>Bombinhas</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
