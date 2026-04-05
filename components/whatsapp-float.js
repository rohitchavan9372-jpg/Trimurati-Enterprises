import { Icon } from "@/components/icons";
import { siteConfig } from "@/data/site";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={`https://wa.me/${siteConfig.whatsapp}`}
      aria-label="Chat on WhatsApp"
    >
      <Icon name="chat" />
    </a>
  );
}


