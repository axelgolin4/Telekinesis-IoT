"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Botón pequeño ES/EN: lleva a la misma página en el otro idioma.
export default function LangToggle({ lang, ui }) {
  const pathname = usePathname();
  const otro = lang === "es" ? "en" : "es";
  const destino = pathname.replace(/^\/(es|en)(?=\/|$)/, `/${otro}`);

  return (
    <Link
      href={destino}
      hrefLang={otro}
      aria-label={ui.cambiarIdioma}
      className="inline-flex h-9 items-center rounded-full border border-borde px-1 text-xs font-semibold transition-colors duration-150 hover:bg-superficie"
    >
      {["es", "en"].map((l) => (
        <span key={l} className={`rounded-full px-2 py-1 uppercase ${l === lang ? "bg-texto text-fondo" : "text-texto-2"}`}>
          {l}
        </span>
      ))}
    </Link>
  );
}
