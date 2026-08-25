import { whatsapp } from '@/lib/site';
import { IconWhatsApp } from './Icons';

export default function WhatsAppFab() {
  return (
    <a className="fab" id="fab" href={whatsapp('recepcao')} target="_blank" rel="noopener">
      <IconWhatsApp />
      Recepção
    </a>
  );
}
