import Image from "next/image";
import { AlertTriangle, Cog, Droplets, Recycle, Sprout, Wind, Zap } from "lucide-react";

// Posiciones de los dispositivos alrededor del centro (en % del cuadro).
const nodos = [
  { x: 50, y: 9, icon: Droplets },
  { x: 89, y: 30, icon: Zap },
  { x: 89, y: 70, icon: Sprout },
  { x: 50, y: 91, icon: Cog },
  { x: 11, y: 70, icon: Wind },
  { x: 11, y: 30, icon: Recycle },
];

// Diagrama del hero: dispositivos de campo conectados a la plataforma, con pulsos de datos viajando hacia el centro.
export default function HeroDiagram({ hero }) {
  return (
    <div className="relative">
      <div className="relative mx-auto aspect-square w-full max-w-[460px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <circle cx="50" cy="50" r="41" fill="none" stroke="rgba(33,199,217,0.12)" strokeWidth="0.3" strokeDasharray="1 1.5" />
          {nodos.map((n, i) => (
            <g key={i}>
              <line x1={n.x} y1={n.y} x2="50" y2="50" stroke="rgba(33,199,217,0.25)" strokeWidth="0.35" />
              <line
                x1={n.x}
                y1={n.y}
                x2="50"
                y2="50"
                pathLength={226}
                className="pulso"
                style={{ "--retraso": `${i * 0.43}s` }}
                stroke="#21c7d9"
                strokeWidth="0.9"
                strokeLinecap="round"
              />
            </g>
          ))}
        </svg>

        {/* Centro: la plataforma */}
        <div className="absolute left-1/2 top-1/2 grid h-[30%] w-[30%] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[28%] bg-noche-2 ring-1 ring-cyan/30 shadow-[0_18px_40px_-16px_rgba(0,0,0,0.6)]">
          <Image src="/marca/simbolo.png" alt="" width={409} height={452} className="h-[58%] w-auto" />
        </div>

        {/* Dispositivos de campo */}
        {nodos.map((n, i) => {
          const Icon = n.icon;
          return (
            <div
              key={i}
              className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5"
              style={{ left: `${n.x}%`, top: `${n.y}%` }}
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-noche-2 text-cyan ring-1 ring-white/10 sm:h-12 sm:w-12">
                <Icon size={20} aria-hidden="true" />
              </span>
              <span className="text-[0.7rem] font-medium tracking-wide text-[#a9b6c9] sm:text-xs">{hero.nodos[i]}</span>
            </div>
          );
        })}
      </div>

      {/* Tarjeta de panel con datos de ejemplo */}
      <div className="relative mx-auto mt-8 max-w-sm rounded-2xl bg-white/[0.06] p-5 ring-1 ring-white/10">
        <span className="absolute -top-8 left-1/2 h-8 w-px bg-gradient-to-b from-cyan/0 to-cyan/50" aria-hidden="true" />
        <div className="flex items-center justify-between">
          <p className="text-sm font-semibold text-white">{hero.panel.titulo}</p>
          <span className="rounded-full bg-cyan/15 px-2 py-0.5 text-[0.7rem] font-medium text-cyan">{hero.panel.ejemplo}</span>
        </div>
        <dl className="mt-4 space-y-2.5">
          {hero.panel.lecturas.map((l) => (
            <div key={l.etiqueta} className="flex items-baseline justify-between gap-4 text-sm">
              <dt className="text-[#a9b6c9]">{l.etiqueta}</dt>
              <dd className="font-semibold tabular-nums text-white">
                {l.valor}
                <span className="sr-only"> ({hero.panel.ejemplo})</span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-[#f5a524]/12 px-3 py-2 text-xs font-medium text-[#f7c26b]">
          <AlertTriangle size={14} aria-hidden="true" /> {hero.panel.alerta}
        </p>
      </div>
    </div>
  );
}
