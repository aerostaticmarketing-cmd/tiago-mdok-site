import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400", "700"],
  variable: "--font-dm-serif",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tiago Mdok | Music Producer & Sound Engineer",
  description: "Productor musical, sound engineer y director musical de Miracali Records. Créditos en Netflix, RCN y colaboraciones con artistas reconocidos.",
  keywords: ["music producer", "sound engineer", "beats", "production", "Cali", "Colombia"],
  openGraph: {
    title: "Tiago Mdok | Music Producer & Sound Engineer",
    description: "Productor musical con créditos en Netflix, RCN y colaboraciones artísticas de nivel internacional.",
    type: "profile",
    locale: "es_CO",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${dmSerif.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[var(--beige)] text-[var(--gris-texto)]">
        {children}
      </body>
    </html>
  );
}
