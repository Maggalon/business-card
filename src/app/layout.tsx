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
  metadataBase: new URL("https://goshanov.ru"),
  openGraph: {
    title: "Георгий Новицкий — Репетитор по математике",
    description: "Прокачаем математику вместе. Подготовка к ЕГЭ и ОГЭ с прозрачными результатами.",
    url: "/",
    siteName: "Георгий Новицкий",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Георгий Новицкий — Репетитор по математике",
    description: "Системный подход к подготовке к ЕГЭ и ОГЭ.",
  }
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
