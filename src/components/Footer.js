import { Mail, MapPin, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { config, whatsappLink } from "@/data/config";

const nombresRed = { linkedin: "LinkedIn", instagram: "Instagram", facebook: "Facebook" };

export default function Footer({ c }) {
  const { footer, ui, servicios, contacto } = c;
  const redes = Object.entries(config.redes).filter(([, url]) => url);

  return (
    <footer className="bg-noche text-[#a9b6c9]">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo claro />
          <p className="mt-5 max-w-xs leading-relaxed">{footer.descripcion}</p>
          <p className="mt-5 text-sm">
            {footer.hermana}{" "}
            <a href={config.empresaHermana.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-white underline decoration-cyan/60 underline-offset-4 hover:decoration-cyan">
              {config.empresaHermana.nombre}
            </a>
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white">{footer.navegacion}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {ui.nav.map(({ id, label }) => (
              <li key={id}>
                <a href={`/${c.lang}#${id}`} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white">{footer.servicios}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {servicios.grupos.map((g) => (
              <li key={g.id}>
                <a href={`/${c.lang}#servicios`} className="hover:text-white">
                  {g.titulo}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-white">{footer.contacto}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={whatsappLink(ui.mensajeBase)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-white">
                <MessageCircle size={17} className="text-cyan" /> {ui.whatsapp} +502 {config.telefono}
              </a>
            </li>
            <li>
              <a href={`mailto:${config.correo}`} className="flex items-center gap-2 break-all hover:text-white">
                <Mail size={17} className="shrink-0 text-cyan" /> {config.correo}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={17} className="text-cyan" /> {contacto.pais}
            </li>
          </ul>
          {redes.length > 0 && (
            <ul className="mt-5 flex gap-4 text-sm">
              {redes.map(([red, url]) => (
                <li key={red}>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                    {nombresRed[red]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs sm:px-6 md:flex-row md:justify-between">
          <p>{footer.derechos}</p>
          <p>
            {footer.diseno} <span className="font-semibold text-white">Axel Rodas</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
