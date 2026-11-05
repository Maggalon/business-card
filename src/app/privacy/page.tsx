import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { person } from "@/content/cv";

export const metadata: Metadata = {
  title: `Конфиденциальность | ${person.name}`,
  description: "Какие данные собирает этот сайт и как используются ваши письма.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Конфиденциальность"
      paragraphs={[
        "Этот сайт не использует файлы cookie, системы аналитики и формы сбора данных.",
        "Если вы пишете или звоните мне, ваше имя, контакты и текст сообщения используются только для обсуждения вакансии. Я не передаю их третьим лицам.",
        `Чтобы удалить вашу переписку, напишите на ${person.email}.`,
      ]}
    />
  );
}
