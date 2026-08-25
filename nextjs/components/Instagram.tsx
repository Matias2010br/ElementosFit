import { LINKS } from '@/lib/site';
import { IconInstagram } from './Icons';

export default function Instagram() {
  return (
    <section className="sec sec--tight" id="instagram">
      <div className="bleed g12 ig">
        <div className="ig__l">
          <p className="tag rv-up" data-n="08">Instagram</p>
          <h2 className="d2 rv-lines mt-16" data-split>Acompanhe<br />a Elemento Fit.</h2>
        </div>
        <div className="ig__r">
          <span className="ig__at rv-up">@elementofitbombinhas</span>
          <a className="btn btn--lg rv-up" href={LINKS.instagram} target="_blank" rel="noopener">
            <IconInstagram />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
