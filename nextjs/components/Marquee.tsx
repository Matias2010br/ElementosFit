/** Faixa rolante com o lema da academia. O JS duplica o conteúdo até cobrir o ecrã. */
export default function Marquee() {
  return (
    <div className="marq hot" aria-hidden="true">
      <div className="marq__track" id="marq">
        <span>
          <b>Inspire-se</b> <i>/</i> <b>Mais que uma academia</b> <i>/</i> <b>Uma casa</b> <i>/</i> <b>Uma família</b> <i>/</i>
        </span>
      </div>
    </div>
  );
}
