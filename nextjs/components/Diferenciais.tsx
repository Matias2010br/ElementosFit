const ITENS = [
  ['Aberta das 06h à meia-noite', 'Dezoito horas de academia aberta de segunda a sexta. Quem trabalha em turno, quem treina antes do sol nascer ou depois do expediente cabe aqui.'],
  ['Equipamentos de ponta', 'Máquinas Cimerian e cardio Matrix: equipamentos que respeitam o movimento do corpo — mais conforto para treinar e mais segurança para evoluir.'],
  ['Profissionais por perto', 'Acompanhamento profissional na sala de treino: alguém para corrigir a execução, ajustar a carga e tirar sua dúvida na hora.'],
  ['Uma casa, uma família', 'Ambiente acolhedor onde morador e visitante treinam lado a lado. Você não é uma matrícula — é parte da Elemento.'],
  ['Seu treino no app', 'Com o NextFit você acessa sua ficha, registra as séries e acompanha sua evolução do celular — dentro e fora da academia.'],
  ['No coração de Bombas', 'Na R. Martim Pescador, a minutos da praia. Perto de casa para quem mora e no caminho de quem está passando temporada.'],
] as const;

export default function Diferenciais() {
  return (
    <section className="sec" id="diferenciais">
      <div className="bleed">
        <div className="g12 head">
          <div className="head__l">
            <p className="tag rv-up" data-n="03">Diferenciais</p>
            <h2 className="d2 rv-lines" data-split>Por que<br />Elemento Fit?</h2>
          </div>
          <div className="head__r">
            <p className="lead rv-up">
              Seis motivos concretos — não promessas. Cada um deles muda alguma coisa no seu treino.
            </p>
          </div>
        </div>

        <div className="feats">
          {ITENS.map(([titulo, texto], i) => (
            <article className="feat rv-row" key={titulo}>
              <div className="feat__n">{String(i + 1).padStart(2, '0')}</div>
              <h3>{titulo}</h3>
              <p>{texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
