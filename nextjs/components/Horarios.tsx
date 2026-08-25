import { whatsapp } from '@/lib/site';

const DIAS: Array<[number, string, string]> = [
  [1, 'Segunda', '06:00 — 00:00'],
  [2, 'Terça', '06:00 — 00:00'],
  [3, 'Quarta', '06:00 — 00:00'],
  [4, 'Quinta', '06:00 — 00:00'],
  [5, 'Sexta', '06:00 — 00:00'],
  [6, 'Sábado / feriados', '07:00 — 19:00'],
  [0, 'Domingo', '08:00 — 12:00'],
];

export default function Horarios() {
  return (
    <section className="sec" id="horarios">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="06">Horários</p>
            <h2 className="d2 rv-lines" data-split>Quando<br />a gente abre.</h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              Aberta das 06h à meia-noite de segunda a sexta. Cabe antes do trabalho, no intervalo ou depois que o
              dia acaba.
            </p>
            <div className="hours__side">
              <span className="status" id="status2">
                <span className="status__dot" />
                <span id="statusTxt2">Verificando…</span>
              </span>
              <a className="arrow" href={whatsapp('horarios')} target="_blank" rel="noopener">
                Confirmar no WhatsApp <span>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="hours" id="hoursList">
          {DIAS.map(([d, nome, horas]) => (
            <div className="hrow rv-row" data-day={d} key={d}>
              <span className="hrow__d">{nome}</span>
              <span className="hrow__t">{horas}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
