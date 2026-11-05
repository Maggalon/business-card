import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { person } from "@/content/cv";

export const metadata: Metadata = {
  title: `Страница не найдена | ${person.name}`,
};

export default function NotFound() {
  return (
    <main id="main" className="mx-auto flex min-h-screen max-w-[680px] flex-col justify-center px-4 py-16">
      <p className="font-mono text-sm font-medium text-accent">Ошибка 404</p>
      <h1 className="hero-heading heading-3 mt-4 md:heading-2">Этого узла нет на чертеже</h1>
      <p className="body-3 mt-4 text-muted">
        Страница не найдена. Возможно, ссылка устарела. Резюме и контакты находятся на главной странице.
      </p>
      <div className="mt-8">
        <Link href="/" className="cta button-md">
          <ArrowLeft size={20} weight="bold" aria-hidden="true" />
          Вернуться к резюме
        </Link>
      </div>
    </main>
  );
}
