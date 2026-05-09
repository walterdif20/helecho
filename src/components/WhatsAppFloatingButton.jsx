import { businessInfo } from '../data/business';

export default function WhatsAppFloatingButton() {
  const hasNumber = Boolean(businessInfo.whatsapp?.trim());
  const href = hasNumber
    ? `https://wa.me/${businessInfo.whatsapp.replace(/\D/g, '')}`
    : '#';

  return (
    <a
      className={`wa-float ${hasNumber ? '' : 'is-disabled'}`}
      href={href}
      target={hasNumber ? '_blank' : '_self'}
      rel="noreferrer"
      aria-label="Contacto por WhatsApp"
      title={hasNumber ? 'Escribinos por WhatsApp' : 'Configurar número de WhatsApp'}
    >
      WhatsApp
    </a>
  );
}
