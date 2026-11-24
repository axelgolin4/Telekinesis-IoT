import Image from "next/image";

// Logo: el símbolo de puntos conectados entregado por el cliente y el nombre en Lexend.
// `claro` fuerza el texto blanco para fondos oscuros; si no, sigue el tema.
export default function Logo({ claro = false, className = "" }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Image src="/marca/simbolo.png" alt="" width={409} height={452} className="h-9 w-auto" priority />
      <span
        className={`whitespace-nowrap font-display text-lg font-semibold tracking-[-0.01em] sm:text-xl ${claro ? "text-white" : "text-texto"}`}
      >
        Telekinesis{" "}
        <span className={`font-medium ${claro ? "text-cyan" : "text-azul dark:text-cyan"}`}>IoT</span>
      </span>
    </span>
  );
}
