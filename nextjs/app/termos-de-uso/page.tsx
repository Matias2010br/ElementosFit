import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Termos de Uso | Elemento Fit Academia — Bombinhas/SC',
  description: 'Termos de Uso do site da Elemento Fit Academia, em Bombas, Bombinhas/SC.',
  alternates: { canonical: '/termos-de-uso' },
};

export default function TermosDeUso() {
  return (
    <LegalShell>
      <main className="legal bleed g12" id="conteudo">
        <div className="legal__h">
          <p className="tag tag--plain">Documento legal</p>
          <h1 className="d2">Termos de Uso</h1>
          <p className="legal__meta">Última atualização: agosto de 2026</p>
        </div>

        <div className="legal__b">
          <h2>1. Sobre estes termos</h2>
          <p>Estes Termos de Uso regem o acesso e a navegação no site institucional da <strong>Elemento Fit Academia</strong>, localizada na R. Martim Pescador, 917 — Bombas, Bombinhas/SC. Ao navegar por este site, você declara que leu e concorda com as condições descritas abaixo. Caso não concorde, pedimos que não utilize o site.</p>

          <h2>2. Finalidade do site</h2>
          <p>Este site tem finalidade exclusivamente informativa e de contato. Ele apresenta a academia, sua estrutura, seus horários de funcionamento e suas formas de contato, e direciona o visitante à recepção para tratar de planos, valores, matrícula e demais assuntos comerciais.</p>
          <p>A navegação no site não constitui, por si só, matrícula, contrato de prestação de serviços, reserva de vaga ou qualquer obrigação entre você e a Elemento Fit Academia. A contratação de planos ocorre exclusivamente pelos canais oficiais de atendimento da academia.</p>

          <h2>3. Informações publicadas</h2>
          <p>Buscamos manter as informações deste site corretas e atualizadas. Ainda assim, horários, condições comerciais, planos e demais informações podem mudar sem aviso prévio. Antes de se deslocar até a academia ou tomar qualquer decisão baseada no conteúdo desta página, confirme os dados diretamente com a nossa recepção pelo telefone/WhatsApp <a href="tel:+5547991047652">(47) 99104-7652</a>.</p>
          <p>Valores e condições de planos não são divulgados neste site e são informados exclusivamente pela recepção.</p>

          <h2>4. Propriedade intelectual</h2>
          <p>A marca Elemento Fit, o logotipo, os textos, as fotografias, os vídeos, os elementos gráficos, a identidade visual e o código deste site são protegidos pela legislação brasileira de propriedade intelectual e pertencem à Elemento Fit Academia ou a seus respectivos licenciantes.</p>
          <p>É vedada a reprodução, cópia, distribuição, modificação, exibição pública ou uso comercial de qualquer material deste site sem autorização prévia e por escrito. É permitido compartilhar o endereço (link) das páginas e utilizar os botões de compartilhamento eventualmente disponíveis.</p>

          <h2>5. Conduta do usuário</h2>
          <p>Ao utilizar este site, você concorda em não:</p>
          <ul>
            <li>Utilizá-lo para qualquer finalidade ilícita ou que viole estes Termos;</li>
            <li>Tentar obter acesso não autorizado a sistemas, servidores ou dados relacionados ao site;</li>
            <li>Introduzir vírus, códigos maliciosos ou qualquer tecnologia que prejudique o funcionamento do site;</li>
            <li>Utilizar mecanismos automatizados para extrair conteúdo em massa;</li>
            <li>Reproduzir a identidade visual da Elemento Fit de modo a induzir terceiros a erro.</li>
          </ul>

          <h2>6. Links e serviços de terceiros</h2>
          <p>Este site contém links para serviços operados por terceiros, entre eles WhatsApp, Instagram, Facebook, Google Maps, App Store, Google Play e o aplicativo NextFit. Esses serviços possuem termos de uso e políticas de privacidade próprios, aos quais você se submete ao acessá-los.</p>
          <p>A Elemento Fit Academia não controla o conteúdo, a disponibilidade ou as práticas desses serviços e não se responsabiliza por eles. A presença de um link não implica endosso de todo o conteúdo do destino.</p>

          <h2>7. Limitação de responsabilidade</h2>
          <p>O site é disponibilizado no estado em que se encontra. Embora empreguemos esforços razoáveis para mantê-lo disponível, seguro e funcional, não garantimos operação ininterrupta ou livre de falhas, e podemos suspendê-lo temporariamente para manutenção ou por motivos técnicos.</p>
          <p>Na máxima extensão permitida pela legislação aplicável, a Elemento Fit Academia não se responsabiliza por danos decorrentes de indisponibilidade do site, de falhas em serviços de terceiros ou do uso de informações que não tenham sido previamente confirmadas junto à recepção.</p>
          <p>Nada nestes Termos exclui ou limita direitos que a legislação brasileira — em especial o Código de Defesa do Consumidor — assegure de forma inafastável.</p>

          <h2>8. Saúde e prática de atividade física</h2>
          <p>Os conteúdos deste site têm caráter informativo e não substituem avaliação médica ou orientação profissional individualizada. Antes de iniciar ou retomar a prática de atividade física, recomendamos consultar um profissional de saúde. Na academia, siga sempre a orientação da equipe técnica e as regras internas de uso dos equipamentos e dos espaços.</p>

          <h2>9. Privacidade</h2>
          <p>O tratamento de dados pessoais relacionados a este site é descrito na nossa <a href="/politica-de-privacidade">Política de Privacidade</a>, que integra estes Termos.</p>

          <h2>10. Alterações destes Termos</h2>
          <p>Estes Termos podem ser atualizados a qualquer momento para refletir mudanças no site, nos serviços ou na legislação. A versão vigente é sempre a publicada nesta página, com a data de atualização indicada no topo. Recomendamos consultá-la periodicamente.</p>

          <h2>11. Legislação e foro</h2>
          <p>Estes Termos são regidos pelas leis da República Federativa do Brasil. Fica eleito o foro da comarca de Bombinhas/SC para dirimir eventuais controvérsias, ressalvadas as hipóteses de competência definidas em lei em favor do consumidor.</p>

          <h2>12. Contato</h2>
          <p>Dúvidas sobre estes Termos podem ser encaminhadas à nossa recepção:</p>
          <ul>
            <li>Endereço: R. Martim Pescador, 917 — Bombas, Bombinhas/SC</li>
            <li>Telefone e WhatsApp: <a href="tel:+5547991047652">(47) 99104-7652</a></li>
            <li>Instagram: <a href="https://www.instagram.com/elementofitbombinhas/" target="_blank" rel="noopener">@elementofitbombinhas</a></li>
          </ul>

          <p style={{marginTop: '44px'}}>
            <a className="arrow" href="/">Voltar para o site <span>→</span></a>
          </p>
        </div>
      </main>
    </LegalShell>
  );
}
