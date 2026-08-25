import { ACADEMIA, LINKS } from '@/lib/site';
import { IconPin } from './Icons';

export default function Localizacao() {
  return (
    <section className="sec" id="localizacao">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="09">Localização</p>
            <h2 className="d2 rv-lines" data-split>Encontre<br />a Elemento Fit.</h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              No bairro {ACADEMIA.bairro}, a poucos minutos da praia. Estacione, entre e treine.
            </p>
          </div>
        </div>

        <div className="g12 loc">
          <div className="loc__l">
            <dl className="sheet">
              <div className="rv-row">
                <dt>Endereço</dt>
                <dd>{ACADEMIA.rua}<br />{ACADEMIA.bairro} — {ACADEMIA.cidade}/{ACADEMIA.uf}</dd>
              </div>
              <div className="rv-row">
                <dt>Telefone</dt>
                <dd><a href={`tel:${ACADEMIA.telefoneE164}`}>{ACADEMIA.telefone}</a></dd>
              </div>
              <div className="rv-row"><dt>Seg — Sex</dt><dd>06:00 — 00:00</dd></div>
              <div className="rv-row"><dt>Sáb / Fer.</dt><dd>07:00 — 19:00</dd></div>
              <div className="rv-row"><dt>Domingo</dt><dd>08:00 — 12:00</dd></div>
            </dl>
            <div className="loc__btns rv-up">
              <a className="btn" href={LINKS.comoChegar} target="_blank" rel="noopener">Como chegar</a>
              <a className="btn btn--ghost" href={LINKS.maps} target="_blank" rel="noopener">Abrir no Maps</a>
            </div>
          </div>

          <div className="loc__r rv-clip">
            <div className="map" id="mapBox">
              <button className="map__cover" id="mapCover" type="button" aria-label="Carregar o mapa do Google Maps">
                <IconPin />
                <b>Ver no mapa</b>
                <span>{ACADEMIA.enderecoCompleto}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
