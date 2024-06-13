import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://fisiosamer.vercel.app"),
  alternates: {
    canonical: "/",
  },
  title: "Dr. Samer Fisioterapia e Ortopedia",
  description:
    "Agende uma avaliação com o Dr. Samer, fisioterapeuta clínico especializado. Acesse nosso site e agende sua consulta a qualquer hora, em qualquer lugar. Saiba mais sobre nossos serviços!",
  keywords:
    "fisioterapia, zumbido, ortopedia, samer, tratament de dor persistente, tontura, consulta com fisioterapeuta",
  openGraph: {
    images: "/opengraph-image.png",
    siteName: "Fisio Samer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta />
      <meta property="og:url" content="https://fisiosamer.vercel.app/" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
