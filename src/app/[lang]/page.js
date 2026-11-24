import {
  Activity,
  ArrowRight,
  CheckCircle2,
  CircuitBoard,
  Cloud,
  Code2,
  Cpu,
  Droplet,
  Droplets,
  Gauge,
  Layers,
  LayoutDashboard,
  LineChart,
  Mail,
  MapPin,
  MessageCircle,
  Network,
  PawPrint,
  PenTool,
  Radar,
  Rocket,
  Search,
  Settings2,
  Sprout,
  Trash2,
  User,
  Wifi,
  Wind,
  Workflow,
  Zap,
} from "lucide-react";
import HeroDiagram from "@/components/HeroDiagram";
import ContactForm from "@/components/ContactForm";
import { getContent } from "@/data/content";
import { config, whatsappLink } from "@/data/config";

const iconosSolucion = {
  "smart-water": Droplets,
  "leak-detection": Droplet,
  "smart-irrigation": Sprout,
  "predictive-maintenance": Activity,
  "smart-energy": Zap,
  "smart-livestock": PawPrint,
  "smart-waste": Trash2,
  "air-quality": Wind,
};
const iconosServicio = { software: Code2, automatizacion: Workflow, iot: Cpu, datos: LayoutDashboard };
const iconosValor = { "tiempo-real": Radar, automatizacion: Workflow, eficiencia: Gauge, conectividad: Wifi, centralizada: Layers };
const iconosTecnologia = {
  hardware: CircuitBoard,
  conectividad: Wifi,
  protocolos: Network,
  software: Code2,
  infraestructura: Cloud,
  automatizacion: Settings2,
};
const iconosPaso = [Search, PenTool, Rocket, LineChart];

const Titulo = ({ children, claro = false, className = "" }) => (
  <h2
    className={`text-balance font-display text-3xl font-semibold leading-[1.12] tracking-[-0.02em] sm:text-[2.6rem] ${
      claro ? "text-white" : "text-texto"
    } ${className}`}
  >
    {children}
  </h2>
);

export default async function Home({ params }) {
  const { lang } = await params;
  const c = getContent(lang);
  const { hero, nosotros, soluciones, servicios, valor, tecnologia, proceso, cta, contacto, ui } = c;

  return (
    <>
      {/* Hero */}
      <section id="inicio" className="relative isolate scroll-mt-20 overflow-hidden bg-noche text-white">
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-noche via-noche to-[#0f2c66]" />
        <div className="reticula absolute inset-0 -z-10" aria-hidden="true" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 sm:pt-20 lg:grid-cols-2 lg:pb-28">
          <div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.06] tracking-[-0.025em] sm:text-6xl">
              {hero.titulo}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#b9c6d8]">{hero.subtitulo}</p>
            <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <a
                href="#soluciones"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-semibold text-noche transition-[background-color,transform] duration-150 hover:bg-niebla active:scale-[0.97]"
              >
                {hero.explorar} <ArrowRight size={18} />
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-azul px-6 font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-azul-hondo active:scale-[0.97]"
              >
                {ui.asesoria}
              </a>
            </div>
          </div>
          <HeroDiagram hero={hero} />
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="aparece mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-4 py-24 sm:px-6 sm:py-28 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Titulo>{nosotros.titulo}</Titulo>
          <p className="mt-6 text-lg leading-relaxed text-texto-2">{nosotros.texto}</p>
          <p className="mt-8 font-display text-xl font-medium text-enlace">{nosotros.eslogan}</p>
        </div>
        <ul className="space-y-4 lg:col-span-5 lg:col-start-8 lg:self-center">
          {nosotros.puntos.map((p) => (
            <li key={p} className="flex gap-4 rounded-2xl bg-superficie p-5 ring-1 ring-borde">
              <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-cyan" aria-hidden="true" />
              <span className="leading-relaxed text-texto">{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Soluciones */}
      <section id="soluciones" className="scroll-mt-20 bg-superficie py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="aparece max-w-2xl">
            <Titulo>{soluciones.titulo}</Titulo>
            <p className="mt-4 text-lg leading-relaxed text-texto-2">{soluciones.intro}</p>
          </div>
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {soluciones.lista.map((s) => {
              const Icon = iconosSolucion[s.id];
              return (
                <li
                  key={s.id}
                  className="aparece group relative rounded-3xl bg-tarjeta p-6 ring-1 ring-borde transition-[box-shadow,transform] duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_40px_-24px_rgba(16,29,53,0.35)] hover:ring-cyan/70"
                >
                  {/* La señal se enciende al pasar el cursor: el borde y el ícono pasan a cyan */}
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-azul/10 text-azul transition-colors duration-200 group-hover:bg-cyan group-hover:text-noche dark:bg-cyan/10 dark:text-cyan">
                    <Icon size={24} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold leading-snug text-texto">{s.titulo}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-texto-2">{s.texto}</p>
                  <p className="mt-4 text-sm font-medium text-texto-2">{s.nombre}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-28">
        <div className="aparece max-w-2xl">
          <Titulo>{servicios.titulo}</Titulo>
          <p className="mt-4 text-lg leading-relaxed text-texto-2">{servicios.intro}</p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {servicios.grupos.map((g) => {
            const Icon = iconosServicio[g.id];
            return (
              <article key={g.id} className="aparece flex gap-5 rounded-3xl p-7 ring-1 ring-borde">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-noche text-cyan dark:bg-noche-2">
                  <Icon size={24} aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-texto">{g.titulo}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {g.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-texto-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Propuesta de valor */}
      <section className="bg-noche py-24 text-white sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Titulo claro className="aparece max-w-2xl">
            {valor.titulo}
          </Titulo>
          <ul className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {valor.lista.map((v) => {
              const Icon = iconosValor[v.id];
              return (
                <li key={v.id} className="aparece bg-noche p-7">
                  <Icon size={26} className="text-cyan" aria-hidden="true" />
                  <h3 className="mt-5 font-display text-lg font-semibold">{v.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-[#a9b6c9]">{v.texto}</p>
                </li>
              );
            })}
          </ul>
          <ul className="mt-8 flex flex-wrap gap-3">
            {valor.extra.map((e) => (
              <li key={e} className="rounded-full bg-white/[0.06] px-4 py-2 text-sm text-[#cdd7e5] ring-1 ring-white/10">
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Tecnología */}
      <section id="tecnologia" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-24 sm:px-6 sm:py-28">
        <div className="aparece max-w-2xl">
          <Titulo>{tecnologia.titulo}</Titulo>
          <p className="mt-4 text-lg leading-relaxed text-texto-2">{tecnologia.intro}</p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tecnologia.categorias.map((t) => {
            const Icon = iconosTecnologia[t.id];
            return (
              <article key={t.id} className="aparece rounded-3xl bg-superficie p-7 ring-1 ring-borde">
                <div className="flex items-center gap-3">
                  <Icon size={22} className="text-enlace" aria-hidden="true" />
                  <h3 className="font-display text-lg font-semibold text-texto">{t.titulo}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {t.items.map((it) => (
                    <li key={it} className="rounded-lg bg-tarjeta px-3 py-1.5 text-sm font-medium text-texto ring-1 ring-borde">
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      {/* Proceso */}
      <section className="bg-superficie py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Titulo className="aparece">{proceso.titulo}</Titulo>
          <ol className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {proceso.pasos.map((p, i) => {
              const Icon = iconosPaso[i];
              return (
                <li key={p.titulo} className="aparece relative">
                  <div className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-azul font-display font-semibold text-white">
                      {i + 1}
                    </span>
                    <span className="hidden h-px flex-1 bg-gradient-to-r from-azul/40 to-transparent lg:block" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 flex items-center gap-2 font-display text-lg font-semibold text-texto">
                    <Icon size={18} className="text-enlace" aria-hidden="true" /> {p.titulo}
                  </h3>
                  <p className="mt-2 leading-relaxed text-texto-2">{p.texto}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-noche to-noche-2 px-6 py-16 text-white sm:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <Titulo claro>{cta.titulo}</Titulo>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#b9c6d8]">{cta.texto}</p>
            </div>
            <div className="lg:justify-self-end">
              <a
                href="#contacto"
                className="inline-flex min-h-12 items-center gap-2 whitespace-nowrap rounded-xl bg-azul px-5 text-[0.95rem] font-semibold text-white transition-[background-color,transform] duration-150 hover:bg-azul-hondo active:scale-[0.97] sm:px-6 sm:text-base"
              >
                {cta.boton} <ArrowRight size={18} className="hidden sm:block" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="mx-auto grid max-w-7xl scroll-mt-20 gap-12 px-4 pb-24 pt-8 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Titulo>{contacto.titulo}</Titulo>
          <p className="mt-4 text-lg leading-relaxed text-texto-2">{contacto.intro}</p>
          <ul className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-texto">
              <User size={20} className="text-enlace" aria-hidden="true" />
              <span>
                <span className="text-texto-2">{contacto.responsable}: </span>
                {config.responsable}
              </span>
            </li>
            <li className="flex items-center gap-3 text-texto">
              <Mail size={20} className="text-enlace" aria-hidden="true" />
              <a href={`mailto:${config.correo}`} className="break-all hover:text-enlace">
                {config.correo}
              </a>
            </li>
            <li className="flex items-center gap-3 text-texto">
              <MapPin size={20} className="text-enlace" aria-hidden="true" /> {contacto.pais}
            </li>
          </ul>
          <a
            href={whatsappLink(ui.mensajeBase)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-12 items-center gap-2 rounded-xl bg-noche px-6 font-semibold text-white ring-1 ring-white/10 transition-[background-color,transform] duration-150 hover:bg-noche-2 active:scale-[0.97]"
          >
            <MessageCircle size={20} /> {contacto.directo}
          </a>
        </div>
        <div className="lg:col-span-7">
          <ContactForm lang={lang} />
        </div>
      </section>
    </>
  );
}
