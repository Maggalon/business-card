import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { person } from "@/content/cv";

export const metadata: Metadata = {
  title: `Условия использования | ${person.name}`,
  description: "На каких условиях можно использовать материалы этого резюме.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Условия использования"
      paragraphs={[
        "Этот сайт представляет собой личное резюме и не является публичной офертой.",
        "Материалы можно использовать для оценки кандидата при найме. Для другого использования нужно моё согласие.",
        "Сведения об опыте и образовании приведены для оценки кандидата. Подтверждающие документы я предоставляю по запросу.",
      ]}
    />
  );
}
