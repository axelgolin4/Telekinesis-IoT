import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/config";

// WhatsApp siempre a la mano.
export default function FloatingButtons({ ui }) {
  return (
    <a
      href={whatsappLink(ui.mensajeBase)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ui.escribirA}
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-azul text-white shadow-[0_12px_28px_-10px_rgba(23,105,255,0.7)] transition-transform duration-150 active:scale-95"
    >
      <MessageCircle size={26} />
    </a>
  );
}
