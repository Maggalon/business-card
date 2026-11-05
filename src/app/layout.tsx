import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { person } from "@/content/cv";
import "./globals.css";

const geist = Geist({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist",
});

const geistMono = Geist_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-geist-mono",
});

const title = `${person.name}, кандидат в продажи инженерного оборудования`;
const description =
  "Ищу первую работу в продажах инженерного оборудования. Внедрение 1С:ERP у поставщика трубопроводной арматуры, больше 4 лет репетиторства по математике и физике, ДВФУ.";

export const metadata: Metadata = {
  metadataBase: new URL("https://goshanov.ru"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: person.name,
    locale: "ru_RU",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      data-scroll-behavior="smooth"
      className={`${geist.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen font-sans">
        <noscript>
          <style>{`.reveal{opacity:1;transform:none}.word{opacity:1}`}</style>
        </noscript>
        <a
          href="#main"
          className="button-sm fixed top-2 left-2 z-[60] -translate-y-24 rounded-lg bg-accent px-3 py-2 text-surface transition-transform duration-300 ease-base focus-visible:translate-y-0"
        >
          Перейти к содержанию
        </a>
        {children}
      </body>
    </html>
  );
}
