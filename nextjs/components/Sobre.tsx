import { ACADEMIA } from '@/lib/site';

export default function Sobre() {
  return (
    <section className="sec sec--flush" id="sobre">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="01">Sobre a {ACADEMIA.nomeCurto}</p>
            <h2 className="d2 rv-lines" data-split>
              Mais que<br /><span className="thin">uma academia.</span>
            </h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              A {ACADEMIA.nomeCurto} nasceu em {ACADEMIA.bairro} para ser o lugar onde morador e visitante treinam
              lado a lado — com estrutura de cidade grande e o acolhimento de quem conhece você pelo nome.
            </p>
          </div>
        </div>

        <div className="g12 about">
          <div className="about__txt">
            <p className="body rv-up">
              Somos uma academia completa, com equipamentos e profissionais de ponta. Isso significa treinar com
              segurança, ter alguém por perto para ajustar a execução e enxergar sua evolução acontecer treino após
              treino — seja você iniciante, atleta ou alguém que está voltando à rotina.
            </p>

            <div className="stats">
              <div className="rv-row"><b>18h</b><span>de academia aberta por dia, de segunda a sexta</span></div>
              <div className="rv-row"><b>{ACADEMIA.bairro}</b><span>a poucos minutos da praia, em {ACADEMIA.cidade}/{ACADEMIA.uf}</span></div>
              <div className="rv-row"><b>NextFit</b><span>seu treino e sua ficha no aplicativo</span></div>
            </div>

            <p className="mt-32 rv-up">
              <a className="arrow" href="#estrutura">Conheça a estrutura <span>→</span></a>
            </p>
          </div>

          <figure className="about__media">
            <div className="about__frame rv-clip">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/sobre.jpg"
                width={1000}
                height={1250}
                alt={`Corredor de cardio da ${ACADEMIA.nome} com alunos treinando`}
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="about__cap">
              {ACADEMIA.nomeCurto} — {ACADEMIA.bairro}, {ACADEMIA.cidade}/{ACADEMIA.uf}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
