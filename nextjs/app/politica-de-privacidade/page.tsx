import type { Metadata } from 'next';
import LegalShell from '@/components/LegalShell';

export const metadata: Metadata = {
  title: 'Política de Privacidade | Elemento Fit Academia — Bombinhas/SC',
  description: 'Política de Privacidade do site da Elemento Fit Academia, em Bombas, Bombinhas/SC. Como tratamos dados pessoais conforme a LGPD.',
  alternates: { canonical: '/politica-de-privacidade' },
};

export default function PoliticaDePrivacidade() {
  return (
    <LegalShell>
      <main className="legal bleed g12" id="conteudo">
        <div className="legal__h">
          <p className="tag tag--plain">Documento legal</p>
          <h1 className="d2">Política de Privacidade</h1>
          <p className="legal__meta">Última atualização: agosto de 2026</p>
        </div>

        <div className="legal__b">
          <h2>1. Quem somos</h2>
          <p>Esta Política descreve como a <strong>Elemento Fit Academia</strong>, com sede na R. Martim Pescador, 917 — Bombas, Bombinhas/SC, trata os dados pessoais de quem visita este site, em conformidade com a Lei nº 13.709/2018 (Lei Geral de Proteção de Dados — LGPD).</p>
          <p>Contato para assuntos de privacidade: telefone e WhatsApp <a href="tel:+5547991047652">(47) 99104-7652</a>.</p>

          <h2>2. Este site não coleta seus dados diretamente</h2>
          <p>Este site é institucional e <strong>não possui formulários de cadastro, área de login, carrinho de compras ou campos que solicitem dados pessoais</strong>. Você pode navegar por todas as páginas sem se identificar.</p>
          <p>Os botões do site apenas levam você a canais externos — WhatsApp, Instagram, Facebook, Google Maps e as lojas de aplicativos. Ao clicar, você sai deste site e passa a interagir com essas plataformas.</p>

          <h2>3. Dados tratados quando você fala com a gente</h2>
          <p>Quando você inicia uma conversa pelo WhatsApp a partir deste site, tratamos os dados que você mesmo nos envia — como nome, número de telefone, mensagens trocadas e as informações que você compartilhar sobre seus objetivos de treino.</p>
          <ul>
            <li><strong>Finalidade:</strong> responder à sua mensagem, prestar informações sobre a academia e os planos, agendar sua visita e dar continuidade ao atendimento comercial.</li>
            <li><strong>Base legal:</strong> execução de procedimentos preliminares relacionados a contrato a seu pedido (art. 7º, V, da LGPD) e legítimo interesse no atendimento (art. 7º, IX).</li>
            <li><strong>Retenção:</strong> pelo tempo necessário ao atendimento e, quando aplicável, pelos prazos legais de guarda.</li>
          </ul>
          <p>O WhatsApp é operado pela Meta Platforms e possui política de privacidade própria, sobre a qual não temos controle.</p>

          <h2>4. Dados técnicos de navegação</h2>
          <p>Como acontece em qualquer site, o servidor que hospeda estas páginas pode registrar automaticamente informações técnicas — como endereço IP, tipo de navegador, sistema operacional, data e hora do acesso e páginas visitadas. Esses registros são utilizados para segurança, prevenção a fraudes e diagnóstico de problemas, e o registro de acesso é obrigatório pelo Marco Civil da Internet (Lei nº 12.965/2014).</p>

          <h2>5. Cookies</h2>
          <p>Este site <strong>não utiliza cookies próprios de rastreamento, publicidade ou perfilamento</strong>.</p>
          <p>Podem ser gravados no seu navegador cookies definidos por serviços de terceiros incorporados às páginas, especificamente:</p>
          <ul>
            <li><strong>Google Maps</strong> — o mapa da seção de localização só é carregado depois que você clica para vê-lo. Enquanto você não clicar, nenhum conteúdo do Google é solicitado pela página.</li>
            <li><strong>Google Fonts</strong> — utilizado para carregar as fontes do site.</li>
          </ul>
          <p>Você pode bloquear ou apagar cookies nas configurações do seu navegador. Bloquear cookies de terceiros pode afetar a exibição do mapa.</p>

          <h2>6. Ferramentas de análise</h2>
          <p>Caso, no futuro, sejam adicionadas ferramentas de análise de audiência ou de anúncios (como Google Analytics ou Meta Pixel), esta Política será atualizada para descrever quais dados são coletados, com que finalidade e com base em qual fundamento legal, e o site passará a exibir o aviso de cookies correspondente.</p>

          <h2>7. Compartilhamento</h2>
          <p>Não vendemos e não cedemos dados pessoais. O compartilhamento ocorre apenas com:</p>
          <ul>
            <li>Prestadores de serviço necessários à operação da academia e deste site, como hospedagem, sistema de gestão de alunos e aplicativo de treino;</li>
            <li>Plataformas de terceiros que você mesmo aciona ao clicar nos botões do site;</li>
            <li>Autoridades públicas, quando houver obrigação legal, regulatória ou ordem judicial.</li>
          </ul>

          <h2>8. Segurança</h2>
          <p>Adotamos medidas técnicas e administrativas razoáveis para proteger os dados sob nossa responsabilidade contra acessos não autorizados, perda, alteração ou divulgação indevida. Nenhum sistema, entretanto, é totalmente imune a incidentes; caso ocorra um incidente relevante, adotaremos as providências previstas na LGPD.</p>

          <h2>9. Seus direitos</h2>
          <p>A LGPD assegura a você, a qualquer momento, o direito de:</p>
          <ul>
            <li>Confirmar a existência de tratamento e acessar seus dados;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;</li>
            <li>Solicitar a portabilidade dos dados;</li>
            <li>Obter informação sobre com quem seus dados são compartilhados;</li>
            <li>Revogar consentimento, quando o tratamento se basear nele;</li>
            <li>Opor-se a tratamento realizado com fundamento em legítimo interesse.</li>
          </ul>
          <p>Para exercer qualquer desses direitos, entre em contato pelo WhatsApp <a href="tel:+5547991047652">(47) 99104-7652</a> ou pessoalmente na recepção da academia. Podemos solicitar informações que confirmem sua identidade antes de atender ao pedido.</p>

          <h2>10. Crianças e adolescentes</h2>
          <p>Este site não é direcionado a crianças. Dados de menores de idade relacionados à matrícula são tratados no contexto do atendimento presencial, com o consentimento e o acompanhamento dos pais ou responsáveis legais.</p>

          <h2>11. Alterações desta Política</h2>
          <p>Esta Política pode ser atualizada a qualquer momento, especialmente se o site passar a contar com novos recursos. A versão vigente é sempre a publicada nesta página, com a data de atualização indicada no topo.</p>

          <h2>12. Contato</h2>
          <ul>
            <li>Endereço: R. Martim Pescador, 917 — Bombas, Bombinhas/SC</li>
            <li>Telefone e WhatsApp: <a href="tel:+5547991047652">(47) 99104-7652</a></li>
            <li>Instagram: <a href="https://www.instagram.com/elementofitbombinhas/" target="_blank" rel="noopener">@elementofitbombinhas</a></li>
          </ul>
          <p>Consulte também os nossos <a href="/termos-de-uso">Termos de Uso</a>.</p>

          <p style={{marginTop: '44px'}}>
            <a className="arrow" href="/">Voltar para o site <span>→</span></a>
          </p>
        </div>
      </main>
    </LegalShell>
  );
}
