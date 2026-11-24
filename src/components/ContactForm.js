"use client";

import { Send } from "lucide-react";
import { getContent } from "@/data/content";
import { whatsappLink } from "@/data/config";

const inputClass =
  "w-full min-h-12 rounded-xl border border-borde bg-tarjeta px-4 py-3 text-texto outline-none transition-[border-color,box-shadow] duration-150 focus:border-azul focus:ring-2 focus:ring-azul/20";
const labelClass = "mb-1.5 block text-sm font-semibold text-texto";

// Formulario de asesoría. Por ahora arma el mensaje y lo abre en WhatsApp; está listo para conectarse a un backend o servicio de correo.
export default function ContactForm({ lang }) {
  const { contacto, soluciones, servicios } = getContent(lang);
  const f = contacto.campos;

  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    window.open(whatsappLink(contacto.armar(data)), "_blank", "noopener");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-tarjeta p-6 ring-1 ring-borde sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nombre" className={labelClass}>{f.nombre}</label>
          <input id="nombre" name="nombre" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="empresa" className={labelClass}>{f.empresa}</label>
          <input id="empresa" name="empresa" autoComplete="organization" className={inputClass} />
        </div>
        <div>
          <label htmlFor="correo" className={labelClass}>{f.correo}</label>
          <input id="correo" name="correo" type="email" required autoComplete="email" className={inputClass} />
        </div>
        <div>
          <label htmlFor="telefono" className={labelClass}>{f.telefono}</label>
          <input id="telefono" name="telefono" type="tel" autoComplete="tel" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="solucion" className={labelClass}>{f.solucion}</label>
        <select id="solucion" name="solucion" className={inputClass} defaultValue={soluciones.lista[0].nombre}>
          {soluciones.lista.map((s) => (
            <option key={s.id} value={s.nombre}>
              {s.titulo}
            </option>
          ))}
          {servicios.grupos.map((g) => (
            <option key={g.id} value={g.titulo}>
              {g.titulo}
            </option>
          ))}
          <option value={contacto.otra}>{contacto.otra}</option>
        </select>
      </div>
      <div>
        <label htmlFor="descripcion" className={labelClass}>{f.descripcion}</label>
        <textarea id="descripcion" name="descripcion" rows={4} required className={inputClass} />
      </div>
      <button className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-azul font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-azul-hondo active:scale-[0.98]">
        <Send size={18} /> {contacto.enviar}
      </button>
    </form>
  );
}
