import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleGrid from "@/components/ScheduleGrid";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Георгий Новицкий | Репетитор ЕГЭ/ОГЭ",
  description:
    "Подготовка к ЕГЭ и ОГЭ по математике для школьников. Системно, понятно, без занудства. Запишись на первое занятие.",
};

const painCards = [
  {
    emoji: "😴",
    title: "«На уроках — тоска, а в голове — тишина»",
    text: "Учитель говорит с доской, а не с тобой. Формулы летят мимо, и ты уже даже не пытаешься вникнуть. Проблема не в тебе — проблема в подаче.",
  },
  {
    emoji: "😱",
    title: "«Вторая часть экзамена? Нет, спасибо, я пас»",
    text: "Первая часть вроде ок, а потом открываешь задания с развёрнутым ответом — и будто другой экзамен. Параметры, неравенства, геометрия… Без паники — это разбирается по шагам.",
  },
  {
    emoji: "⏰",
    title: "«До экзамена осталось... ой»",
    text: "Кажется, что поздно начинать. Спойлер: нет. Даже за 3-4 месяца можно вытянуть балл на 20-30 пунктов, если заниматься с головой, а не с тревогой.",
  },
];

const steps = [
  {
    num: "01",
    title: "Диагностика",
    subtitle: "Находим, где пробелы",
    text: "На первом занятии определяем твой реальный уровень: что знаешь, что подзабыл, а что нужно выучить с нуля. Без оценок и осуждения — просто честная точка А.",
  },
  {
    num: "02",
    title: "Прокачка",
    subtitle: "Разбираем, тренируем, закрепляем",
    text: "Каждая тема — на понятных примерах и с объяснением «почему», а не «потому что так надо». Решаем задачи в формате экзамена, чтобы на ЕГЭ ты не увидел ничего нового.",
  },
  {
    num: "03",
    title: "Уверенность",
    subtitle: "Выходишь на экзамен — и не трясёшься",
    text: "К концу подготовки ты знаешь свои сильные стороны, не боишься второй части и умеешь распределять время. Это не магия — это система.",
  },
];

export default function StudentsPage() {
  return (
    <div className="bg-void text-chalk" data-theme="dark">
      <Header theme="dark" />

      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden"
          aria-labelledby="hero-heading"
        >
          {/* Right side background image */}
          <div
            className="absolute inset-y-0 right-0 w-full lg:w-[55%] opacity-40 md:opacity-50 lg:opacity-100 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: "url('/image-stud.png')" }}
            aria-hidden="true"
          />
          {/* Gradient overlay to blend image into the background */}
          <div
            className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-void/50 md:bg-void/40 lg:bg-transparent lg:bg-gradient-to-r lg:from-void lg:via-void/70 lg:to-transparent z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-36">
            <div className="max-w-2xl">
              <p className="animate-fade-in-up text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-electric mb-4 md:mb-6">
                ЕГЭ и ОГЭ по математике
              </p>
              <h1
                id="hero-heading"
                className="animate-fade-in-up-delay-1 text-4xl md:text-[44px] lg:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-chalk"
              >
                Математика — это не приговор.{" "}
                Это навык, который мы {" "}
                <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-accent)" }}>
                  прокачаем
                </span>{" "}
                вместе.
              </h1>
              <p className="animate-fade-in-up-delay-2 mt-6 text-lg md:text-xl text-ash leading-relaxed">
                Готовлю к ЕГЭ и ОГЭ по математике так, чтобы ты реально понимал, а не зубрил формулы в панике за неделю до экзамена. Системно. Понятно. Без занудства.
              </p>
              <div className="animate-fade-in-up-delay-3 mt-8 md:mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://t.me/maggalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 md:h-14 items-center justify-center px-8 rounded-md bg-electric text-void text-base md:text-lg font-semibold transition-all duration-200 hover:bg-electric-hover hover:-translate-y-px hover:shadow-lg hover:shadow-electric/20"
                >
                  Записаться на занятие
                </a>
                <Link
                  href="/calculator"
                  className="inline-flex h-13 md:h-14 items-center justify-center px-8 rounded-md border-[1.5px] border-electric text-electric text-base md:text-lg font-medium transition-all duration-200 hover:bg-electric/[0.06]"
                >
                  Узнать свой балл →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section
          className="bg-graphite py-16 md:py-20 lg:py-24"
          aria-labelledby="pain-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-electric mb-3">
              Знакомо?
            </p>
            <h2
              id="pain-heading"
              className="sr-only"
            >
              Знакомые ситуации
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {painCards.map((card, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-edge bg-void p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-electric"
                >
                  <span className="text-2xl mb-4 block" aria-hidden="true">
                    {card.emoji}
                  </span>
                  <h3 className="text-lg md:text-[22px] font-bold text-chalk leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-ash leading-relaxed">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section
          className="bg-void py-16 md:py-20 lg:py-24"
          aria-labelledby="steps-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-electric mb-3">
              Как проходят занятия
            </p>
            <h2
              id="steps-heading"
              className="text-2xl md:text-[34px] lg:text-[40px] font-bold text-chalk leading-tight tracking-[-0.015em] max-w-2xl"
            >
              Три шага от «ничего не понимаю» до «а чё тут сложного?»
            </h2>

            <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              {steps.map((step, i) => (
                <div key={i} className="relative">
                  {/* Timeline connector (desktop) */}
                  {/* {i < steps.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-8 left-full w-full h-px bg-edge -translate-x-5"
                      aria-hidden="true"
                    />
                  )} */}
                  <span
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-electric/10 text-electric text-sm font-bold font-mono mb-4"
                    aria-hidden="true"
                  >
                    {step.num}
                  </span>
                  <h3 className="text-xl md:text-[22px] font-bold text-chalk mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-electric mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-ash leading-relaxed">
                    {step.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section
          className="bg-graphite py-16 md:py-20 lg:py-24"
          aria-labelledby="testimonial-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-electric mb-6">
              Те, кто уже сдал
            </p>
            <h2 id="testimonial-heading" className="sr-only">
              Отзывы учеников
            </h2>

            <blockquote className="relative max-w-3xl">
              <div className="absolute -top-4 -left-2 text-6xl text-electric/20 font-serif leading-none" aria-hidden="true">
                &ldquo;
              </div>
              <p className="text-lg md:text-xl text-chalk/90 leading-relaxed italic pl-6 border-l-2 border-electric/30">
                Пришла к Георгию за полгода до экзамена с твёрдыми 55 баллами по пробнику. Думала, что вторая часть — это не моё. Оказалось — моё, просто мне никто нормально не объяснял. На занятиях реально понятно: без воды, без «ты должна сама разобраться». Сдала на 82, поступила на бюджет. Лучшая инвестиция в мой 11 класс.
              </p>
              <footer className="mt-6 pl-6">
                <p className="text-base font-semibold text-chalk">Даша, 11 класс</p>
                <p className="text-sm text-neon-emerald font-mono font-medium">
                  82 балла ЕГЭ → бюджет в СПБГУ
                </p>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── Schedule Grid ── */}
        <ScheduleGrid theme="dark" />

        {/* ── Final CTA ── */}
        <section
          id="cta"
          className="relative overflow-hidden py-16 md:py-20 lg:py-24"
          aria-labelledby="cta-heading"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{ background: "var(--gradient-hero-students)" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-void/60" aria-hidden="true" />

          <div className="relative mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 text-center">
            <h2
              id="cta-heading"
              className="text-2xl md:text-[34px] lg:text-[40px] font-bold text-chalk leading-tight tracking-[-0.015em] max-w-2xl mx-auto"
            >
              Экзамен сам себя не сдаст. Но мы к нему подготовимся.
            </h2>
            <p className="mt-4 text-base md:text-lg text-ash max-w-xl mx-auto">
              Запишись на первое занятие — разберёмся, где ты сейчас и сколько баллов можно набрать.
            </p>
            <a
              href="https://t.me/maggalon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-13 md:h-14 items-center justify-center px-8 md:px-10 rounded-md bg-electric text-void text-base md:text-lg font-semibold transition-all duration-200 hover:bg-electric-hover hover:-translate-y-px hover:shadow-lg hover:shadow-electric/20 mt-8"
            >
              Записаться на первое занятие
            </a>
          </div>
        </section>
      </main>

      <Footer theme="dark" />
    </div>
  );
}
