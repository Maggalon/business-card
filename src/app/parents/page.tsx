import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScheduleGrid from "@/components/ScheduleGrid";

export const metadata: Metadata = {
  title: "Для родителей — Георгий Новицкий | Репетитор ЕГЭ/ОГЭ",
  description:
    "Системный подход к подготовке к ЕГЭ и ОГЭ по математике. Прозрачные результаты, отчёты после каждого занятия. Обсудите план подготовки.",
  openGraph: {
    title: "Для родителей — Георгий Новицкий | Репетитор ЕГЭ/ОГЭ",
    description: "Прозрачные результаты, отчёты после каждого занятия. Спокойствие для родителей, высокие баллы для детей.",
    type: "website",
    locale: "ru_RU",
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Для родителей — Георгий Новицкий | Репетитор ЕГЭ/ОГЭ",
  "description": "Как мы готовим к ЕГЭ и ОГЭ по математике: системный подход, отчетность, гарантии качества.",
  "about": {
    "@type": "EducationalOrganization",
    "name": "Георгий Новицкий — Репетитор по математике"
  }
};

const painCards = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: "Уже меняли двух репетиторов — а балл не растёт",
    text: "Уроки были, тетрадки исписаны, бюджет потрачен. А на пробнике — всё те же 50 баллов. Проблема не в количестве занятий, а в отсутствии системы и контроля.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: "Стресс, слёзы, «я тупой» — знакомый сценарий",
    text: "Когда подготовка строится на страхе и давлении, ребёнок не учится — а выживает. Результат: ненависть к предмету и нулевая мотивация. Так быть не должно.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
    title: "Вы не понимаете, чему ребёнка учат и есть ли прогресс",
    text: "Репетитор приходит, уходит, а вы не знаете: ребёнок уже освоил геометрию или они всё ещё на арифметике? Без обратной связи вы платите в темноте.",
  },
];

const approach = [
  {
    title: "Системность",
    subtitle: "Чёткий план, а не «разберём, что не поняли в школе»",
    text: "У каждого ученика есть индивидуальная дорожная карта: от диагностики до целевого балла. Мы не блуждаем по темам — мы двигаемся к конкретной цели, закрывая пробелы по приоритету.",
  },
  {
    title: "Прозрачная отчётность",
    subtitle: "Вы всегда в курсе — без допроса ребёнка",
    text: "После каждого занятия вы получаете короткий отчёт: что прошли, где трудности, что задано. Раз в месяц — сводка по прогрессу и корректировка плана. Вы видите, за что платите.",
  },
  {
    title: "Проверенная методика",
    subtitle: "Готовлю к реальному экзамену, а не к идеальному",
    text: "Методика выстроена вокруг формата ЕГЭ/ОГЭ: типовые задания, ловушки составителей, стратегии распределения времени. Ребёнок приходит на экзамен подготовленным — не удивлённым.",
  },
];

const pricing = [
  {
    name: "Разовое занятие / Диагностика",
    price: "1500 ₽",
    tagline: "Для тех, кто хочет понять точку старта",
    features: [
      "Длительность: 60 минут",
      "Определение текущего уровня знаний",
      "Разбор сильных и слабых мест",
      "Рекомендации по дальнейшей подготовке",
      "Подходит для первого знакомства",
    ],
    cta: "Записаться на диагностику",
    popular: false,
  },
  {
    name: "Групповое занятие",
    price: "1500 ₽",
    tagline: "Эффективно и дешевле — для тех, кому комфортно в компании",
    features: [
      "Длительность: 90 минут",
      "Мини-группа до 5 человек",
      "Совместный разбор типовых заданий",
      "Элемент здоровой конкуренции",
      "Отличный вариант для стабильной практики",
    ],
    cta: "Присоединиться к группе",
    popular: true,
  },
  {
    name: "Индивидуальное занятие",
    price: "3000 ₽/час",
    tagline: "Максимум внимания — максимум результата",
    features: [
      "Длительность: 60–120 минут",
      "Занятие 1 на 1 с репетитором",
      "Персональный план подготовки",
      "Отчёт после каждого занятия",
      "Идеально для целенаправленной подготовки к ЕГЭ/ОГЭ",
    ],
    cta: "Выбрать индивидуальный формат",
    popular: false,
  },
];

const stats = [
  { value: "5+", label: "лет опыта" },
  { value: "120+", label: "учеников" },
  { value: "78+", label: "средний балл" },
];

export default function ParentsPage() {
  return (
    <div className="bg-snow text-charcoal" data-theme="light">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header theme="light" />

      <main>
        {/* ── Hero ── */}
        <section
          className="relative overflow-hidden bg-[#EFF3FF]"
          aria-labelledby="hero-parents-heading"
        >
          {/* Right side background image */}
          <div
            className="absolute inset-y-0 right-0 w-full lg:w-[55%] opacity-40 md:opacity-50 lg:opacity-100 bg-cover bg-[center_15%] bg-no-repeat z-0"
            style={{ backgroundImage: "url('/image-par.png')" }}
            aria-hidden="true"
          />
          {/* Gradient overlay to blend image into the light background */}
          <div
            className="absolute inset-y-0 right-0 w-full lg:w-[55%] bg-[#EFF3FF]/60 md:bg-[#EFF3FF]/50 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#EFF3FF] lg:via-[#EFF3FF]/10 lg:to-transparent z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
            <div className="max-w-2xl">
              <h1
                id="hero-parents-heading"
                className="text-3xl md:text-[34px] lg:text-[44px] xl:text-[56px] font-extrabold leading-[1.1] tracking-[-0.02em] text-charcoal"
              >
                Подготовка к ЕГЭ и ОГЭ, за которую вам{" "}
                <span className="text-indigo">не придётся переживать.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-grey leading-relaxed">
                Георгий Новицкий — репетитор по математике с системным подходом и прозрачными результатами. Вы видите прогресс ребёнка, а не просто платите за «часы».
              </p>
              <a
                href="https://t.me/maggalon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 md:h-14 items-center justify-center px-8 rounded-md bg-indigo text-white text-base md:text-lg font-semibold transition-all duration-200 hover:bg-indigo-hover hover:-translate-y-px hover:shadow-md mt-8"
              >
                Обсудить план подготовки
              </a>

              {/* Stats */}
              <div className="mt-12 md:mt-16 grid grid-cols-3 gap-4 max-w-md">
                {stats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <p className="text-3xl md:text-4xl font-extrabold text-indigo font-mono tracking-tight">
                      {stat.value}
                    </p>
                    <p className="text-xs md:text-sm text-grey mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Pain Points ── */}
        <section
          className="bg-white py-16 md:py-20 lg:py-24"
          aria-labelledby="pain-parents-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-indigo mb-3">
              Знакомые ситуации?
            </p>
            <h2 id="pain-parents-heading" className="sr-only">
              Проблематика
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              {painCards.map((card, i) => (
                <article
                  key={i}
                  className="group rounded-2xl border border-subtle bg-white p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:border-indigo"
                >
                  <div className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-indigo/10 text-indigo mb-4">
                    {card.icon}
                  </div>
                  <h3 className="text-lg md:text-[22px] font-bold text-charcoal leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm md:text-base text-grey leading-relaxed">
                    {card.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── My Approach ── */}
        <section
          className="bg-mist py-16 md:py-20 lg:py-24"
          aria-labelledby="approach-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-indigo mb-3">
              Мой подход
            </p>
            <h2
              id="approach-heading"
              className="text-2xl md:text-[34px] lg:text-[40px] font-bold text-charcoal leading-tight tracking-[-0.015em] max-w-2xl"
            >
              Как я работаю — и почему это даёт результат
            </h2>

            <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {approach.map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-subtle">
                  <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo text-white text-sm font-bold mb-4">
                    {i + 1}
                  </span>
                  <h3 className="text-xl font-bold text-charcoal mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-indigo mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm md:text-base text-grey leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section
          className="bg-white py-16 md:py-20 lg:py-24"
          aria-labelledby="pricing-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-indigo mb-3">
              Форматы работы
            </p>
            <h2
              id="pricing-heading"
              className="text-2xl md:text-[34px] lg:text-[40px] font-bold text-charcoal leading-tight tracking-[-0.015em]"
            >
              Тарифы
            </h2>

            <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {pricing.map((plan, i) => (
                <article
                  key={i}
                  className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${plan.popular
                    ? "border-2 border-indigo shadow-lg lg:scale-[1.03] order-first lg:order-none"
                    : "border border-subtle shadow-sm"
                    } bg-white`}
                >
                  {plan.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center px-4 py-1 rounded-full bg-indigo text-white text-xs font-semibold uppercase tracking-[0.08em]">
                      Популярное
                    </span>
                  )}
                  <h3 className="text-xl font-bold text-charcoal mt-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-grey mt-1 mb-4">{plan.tagline}</p>
                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-indigo tracking-tight">{plan.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-charcoal">
                        <svg
                          className="h-5 w-5 text-emerald shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://t.me/maggalon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center mt-6 py-3 rounded-md text-sm font-semibold transition-all duration-200 ${plan.popular
                      ? "bg-indigo text-white hover:bg-indigo-hover hover:-translate-y-px hover:shadow-md"
                      : "border-[1.5px] border-indigo text-indigo hover:bg-indigo/[0.06]"
                      }`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section
          className="bg-mist py-16 md:py-20 lg:py-24"
          aria-labelledby="testimonial-parents-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
            <p className="text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] text-indigo mb-6">
              Родители говорят
            </p>
            <h2 id="testimonial-parents-heading" className="sr-only">
              Отзыв родителя
            </h2>

            <blockquote className="relative max-w-3xl bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-subtle">
              <div className="absolute -top-4 left-6 text-6xl text-indigo/20 font-serif leading-none" aria-hidden="true">
                &ldquo;
              </div>
              <p className="text-base md:text-lg text-charcoal/90 leading-relaxed italic">
                Мы сменили двух репетиторов, прежде чем попали к Георгию. Разница была видна уже через месяц — не потому что случилось чудо, а потому что появилась система. Мне присылали отчёты после каждого занятия — я впервые понимала, что происходит. Дочь перестала плакать над пробниками, а я перестала проверять домашку по ночам. Сдала ЕГЭ на 78, поступила на бюджет в МАИ. Спасибо за нервы, которые вы нам сохранили.
              </p>
              <footer className="mt-6">
                <p className="text-base font-semibold text-charcoal">Мария</p>
                <p className="text-sm text-grey">мама ученицы 11 класса</p>
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── Schedule Grid ── */}
        <ScheduleGrid theme="light" />

        {/* ── Final CTA ── */}
        <section
          id="cta"
          className="bg-indigo py-16 md:py-20 lg:py-24"
          aria-labelledby="cta-parents-heading"
        >
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 text-center">
            <h2
              id="cta-parents-heading"
              className="text-2xl md:text-[34px] lg:text-[40px] font-bold text-white leading-tight tracking-[-0.015em] max-w-2xl mx-auto"
            >
              Места в расписании ограничены — я работаю с каждым учеником лично.
            </h2>
            <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl mx-auto">
              Оставьте заявку, и мы обсудим план подготовки, формат занятий и ожидаемый результат. Без обязательств — просто разговор.
            </p>
            <a
              href="https://t.me/maggalon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 md:h-14 items-center justify-center px-8 md:px-10 rounded-md bg-white text-indigo text-base md:text-lg font-semibold transition-all duration-200 hover:bg-chalk hover:-translate-y-px hover:shadow-lg mt-8"
            >
              Забронировать место
            </a>
          </div>
        </section>
      </main>

      <Footer theme="light" />
    </div>
  );
}
