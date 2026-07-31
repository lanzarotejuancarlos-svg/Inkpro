import type { Metadata } from "next";
import { Archivo_Black, Archivo } from "next/font/google";

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-archivo-black",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siroco Hybridbox — Primer Centro HYROX Oficial de Canarias",
  description:
    "Entrena en el primer centro HYROX oficial de las Islas Canarias. CrossFit, entrenamiento funcional, fisioterapia y más. Costa Teguise, Lanzarote.",
};

export default function SirocoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${archivoBlack.variable} ${archivo.variable}`}>
      {children}
    </div>
  );
}
