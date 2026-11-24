"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import LangToggle from "./LangToggle";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ lang, ui }) {
  const [open, setOpen] = useState(false);
  const enlace = (id) => `/${lang}#${id}`;

  return (
    <header className="sticky top-0 z-40 border-b border-borde bg-fondo/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href={`/${lang}`} onClick={() => setOpen(false)} aria-label="Telekinesis IoT">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {ui.nav.map(({ id, label }) => (
            <li key={id}>
              <a href={enlace(id)} className="py-2 text-[0.95rem] font-medium text-texto-2 transition-colors duration-150 hover:text-texto">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LangToggle lang={lang} ui={ui} />
          <ThemeToggle ui={ui} />
          <a
            href={enlace("contacto")}
            className="hidden min-h-10 items-center rounded-xl bg-azul px-4 text-sm font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-azul-hondo active:scale-[0.97] sm:inline-flex"
          >
            {ui.asesoria}
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="grid h-11 w-11 place-items-center rounded-full text-texto xl:hidden"
            aria-label={open ? ui.cerrarMenu : ui.abrirMenu}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="pop-in border-t border-borde bg-fondo px-4 pb-5 pt-2 xl:hidden">
          <ul className="flex flex-col">
            {ui.nav.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={enlace(id)}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center border-b border-borde font-display text-lg font-medium text-texto"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={enlace("contacto")}
            onClick={() => setOpen(false)}
            className="mt-4 flex min-h-12 items-center justify-center rounded-xl bg-azul font-semibold text-white"
          >
            {ui.asesoria}
          </a>
        </div>
      )}
    </header>
  );
}
