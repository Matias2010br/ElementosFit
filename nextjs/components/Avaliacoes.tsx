import { LINKS } from '@/lib/site';
import { IconGoogle } from './Icons';

export default function Avaliacoes() {
  return (
    <section className="sec" id="avaliacoes">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="07">Avaliações</p>
            <h2 className="d2 rv-lines" data-split>Quem treina<br />aqui, conta.</h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              Não publicamos depoimentos escritos por nós. Toda avaliação sobre a Elemento Fit está no Google, no
              perfil oficial da academia — onde ninguém pode editá-las.
            </p>
          </div>
        </div>

        <div className="g12 rev">
          <article className="rev__a rv-up">
            <span className="gmark"><IconGoogle /> Ler no Google</span>
            <h3>Leia o que dizem<br />sobre a academia</h3>
            <p>Abra o perfil oficial e leia todas as avaliações na íntegra, sem filtro e sem recorte.</p>
            <a className="btn btn--ghost" href={LINKS.maps} target="_blank" rel="noopener">Ver avaliações</a>
          </article>

          <article className="rev__b rv-up">
            <span className="gmark"><IconGoogle /> Deixe a sua</span>
            <h3>Já treina<br />com a gente?</h3>
            <p>Sua avaliação ajuda quem ainda não conhece a Elemento Fit a dar o primeiro passo. Leva menos de um minuto.</p>
            <a className="btn" href={LINKS.avaliarGoogle} target="_blank" rel="noopener">Avalie-nos no Google</a>
          </article>
        </div>
      </div>
    </section>
  );
}
