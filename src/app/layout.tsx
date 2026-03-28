import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Георгий Новицкий — Репетитор по математике | ЕГЭ и ОГЭ",
  description:
    "Подготовка к ЕГЭ и ОГЭ по математике с Георгием Новицким. Системный подход, прозрачные результаты, индивидуальный план. Записывайтесь на диагностику.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}
