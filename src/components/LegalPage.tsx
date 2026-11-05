import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <>
      <main id="main" className="mx-auto max-w-[680px] px-4 pt-16 pb-24">
        <Link
          href="/"
          className="caption-1 inline-flex items-center gap-2 rounded-lg text-muted transition-colors duration-300 ease-base hover:text-ink"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Вернуться к резюме
        </Link>
        <h1 className="heading-4 mt-8 md:heading-3">{title}</h1>
        <div className="mt-8 flex flex-col gap-4">
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className="body-3 text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
