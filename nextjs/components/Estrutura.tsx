const AREAS = [
  {
    n: '01',
    titulo: 'Musculação',
    texto: 'Salão amplo, máquinas Cimerian e espaço para treinar no seu ritmo — mesmo nos horários mais cheios.',
    img: '/assets/img/musculacao.jpg',
    w: 1500, h: 937,
    alt: 'Salão de musculação da Elemento Fit Academia, com máquinas Cimerian',
  },
  {
    n: '02',
    titulo: 'Cardio',
    texto: 'Esteiras e elípticos Matrix e bikes de spinning para aquecer, condicionar e fechar o treino.',
    img: '/assets/img/cardio.jpg',
    w: 1200, h: 900,
    alt: 'Área de cardio da Elemento Fit com esteiras e elípticos Matrix e bikes de spinning',
  },
  {
    n: '03',
    titulo: 'Peso livre',
    texto: 'Halteres do leve ao pesado, bancos e barras — a área que faz a diferença para quem treina força.',
    img: '/assets/img/peso-livre.jpg',
    w: 1800, h: 771,
    alt: 'Rack de halteres da Elemento Fit Academia, do leve ao pesado',
  },
];

export default function Estrutura() {
  return (
    <section className="sec" id="estrutura">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="02">Estrutura</p>
            <h2 className="d2 rv-lines" data-split>Tudo o que<br />você precisa.</h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              Um salão de musculação amplo, área de cardio e peso livre completo — pensados para que cada treino
              renda, do aquecimento ao último exercício.
            </p>
          </div>
        </div>

        <div className="rows">
          {AREAS.map((a) => (
            <article className="row rv-row" key={a.n}>
              <div className="row__n">{a.n} /</div>
              <div className="row__t">
                <h3>{a.titulo}</h3>
                <p>{a.texto}</p>
              </div>
              <div className="row__img rv-clip">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.img} width={a.w} height={a.h} alt={a.alt} loading="lazy" decoding="async" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
