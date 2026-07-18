import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/content";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${siteConfig.professionalName} | ${siteConfig.title} em ${siteConfig.city}`,
  description:
    "Atendimento psicológico acolhedor, com escuta real e acompanhamento contínuo, presencial em Curvelo - MG ou online para todo o Brasil.",
  keywords: [
    "psicóloga",
    "psicóloga clínica",
    "terapia",
    "ansiedade",
    "autoestima",
    "psicologia Curvelo",
  ],
  openGraph: {
    title: `${siteConfig.professionalName} | ${siteConfig.title}`,
    description:
      "Atendimento psicológico acolhedor, com escuta real e acompanhamento contínuo, presencial em Curvelo - MG ou online para todo o Brasil.",
    url: siteUrl,
    siteName: siteConfig.professionalName,
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-cream text-[#2b1a1d]">
        {children}
      </body>
    </html>
  );
}
