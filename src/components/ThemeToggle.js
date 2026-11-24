"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Moon, Sun } from "lucide-react";

// Aplica el tema guardado (o el del sistema) a <html>.
function aplicarTemaGuardado() {
  try {
    const t = localStorage.getItem("tema");
    const oscuro = t === "oscuro" || (!t && matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList.toggle("dark", oscuro);
  } catch {}
}

// Botón pequeño de modo oscuro/claro. El tema vive en la clase "dark" de <html> y se guarda en localStorage.
export default function ThemeToggle({ ui }) {
  const pathname = usePathname();

  // Al cambiar de idioma React vuelve a pintar <html> y borra la clase; se reaplica tras cada navegación.
  useEffect(() => {
    aplicarTemaGuardado();
  }, [pathname]);

  function alternar() {
    const oscuro = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("tema", oscuro ? "oscuro" : "claro");
    } catch {}
  }

  return (
    <button
      onClick={alternar}
      className="grid h-9 w-9 place-items-center rounded-full border border-borde text-texto transition-[background-color,transform] duration-150 hover:bg-superficie active:scale-95"
    >
      <Moon size={16} className="dark:hidden" aria-hidden="true" />
      <Sun size={16} className="hidden dark:block" aria-hidden="true" />
      <span className="sr-only dark:hidden">{ui.modoOscuro}</span>
      <span className="sr-only hidden dark:inline">{ui.modoClaro}</span>
    </button>
  );
}
