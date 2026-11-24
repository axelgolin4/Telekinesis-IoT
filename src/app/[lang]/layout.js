import { notFound } from "next/navigation";
import { Inter, Lexend } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { getContent, hasLocale, locales } from "@/data/content";
import "../globals.css";

// Lexend para titulares (igual que Plastikinesis, para leerse como empresa hermana) e Inter para texto.
const lexend = Lexend({ variable: "--font-lexend", subsets: ["latin"] });
const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });

// Aplica el tema guardado (o el del sistema) antes de pintar, para que no parpadee.
const temaInicial = `try{var t=localStorage.getItem("tema");if(t==="oscuro"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const { meta } = getContent(lang);
  return {
    title: meta.titulo,
    description: meta.descripcion,
    alternates: { languages: { es: "/es", en: "/en" } },
    openGraph: { title: meta.titulo, description: meta.descripcion, locale: lang === "es" ? "es_GT" : "en_US", type: "website" },
  };
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const c = getContent(lang);

  return (
    <html lang={lang} className={`${lexend.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: temaInicial }} />
      </head>
      <body className="flex min-h-full flex-col bg-fondo font-sans text-texto">
        <Navbar lang={lang} ui={c.ui} />
        <main className="flex-1">{children}</main>
        <Footer c={c} />
        <FloatingButtons ui={c.ui} />
      </body>
    </html>
  );
}
