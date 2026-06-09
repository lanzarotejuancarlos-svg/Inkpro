import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Linework — Stencils de tatuaje con IA",
  description: "Convierte cualquier foto en un stencil perfecto. Líneas limpias, listas para imprimir y transferir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${archivo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
