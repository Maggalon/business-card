"use client";

import { useState, useMemo, useCallback } from "react";

// EGE conversion table (primary → test score)
const egeConversion: Record<number, number> = {
  0: 0, 1: 6, 2: 11, 3: 17, 4: 22, 5: 27, 6: 34, 7: 40, 8: 46, 9: 52, 10: 58,
  11: 64, 12: 70, 13: 72, 14: 74, 15: 76, 16: 78, 17: 80, 18: 82, 19: 84, 20: 86,
  21: 88, 22: 90, 23: 92, 24: 94, 25: 95, 26: 96, 27: 97, 28: 98, 29: 99, 30: 100, 31: 100, 32: 100,
};

const egePart1 = [
  { num: 1, topic: "Планиметрия", max: 1 },
  { num: 2, topic: "Векторы", max: 1 },
  { num: 3, topic: "Стереометрия", max: 1 },
  { num: 4, topic: "Начала теории вероятностей", max: 1 },
  { num: 5, topic: "Вероятности сложных событий", max: 1 },
  { num: 6, topic: "Простейшие уравнения", max: 1 },
  { num: 7, topic: "Вычисления и преобразования", max: 1 },
  { num: 8, topic: "Производная и первообразная", max: 1 },
  { num: 9, topic: "Задачи с прикладным содержанием", max: 1 },
  { num: 10, topic: "Текстовые задачи", max: 1 },
  { num: 11, topic: "Графики функций", max: 1 },
  { num: 12, topic: "Наибольшее и наименьшее значение функций", max: 1 }
];

const egePart2 = [
  { num: 13, topic: "Уравнения", max: 2 },
  { num: 14, topic: "Стереометрическая задача", max: 3 },
  { num: 15, topic: "Неравенства", max: 2 },
  { num: 16, topic: "Финансовая математика", max: 2 },
  { num: 17, topic: "Планиметрическая задача", max: 3 },
  { num: 18, topic: "Задача с параметром", max: 4 },
  { num: 19, topic: "Теория чисел", max: 4 },
];

const ogePart1 = [
  { num: 1, topic: "Сараи, шины, печки", max: 1 },
  { num: 2, topic: "Простейшие текстовые задачи", max: 1 },
  { num: 3, topic: "Прикладная геометрия: площадь", max: 1 },
  { num: 4, topic: "Прикладная геометрия: расстояния", max: 1 },
  { num: 5, topic: "Выбор оптимального варианта", max: 1 },
  { num: 6, topic: "Числа и вычисления", max: 1 },
  { num: 7, topic: "Числовые неравенства, координатная прямая", max: 1 },
  { num: 8, topic: "Числа, вычисления и алгебраические выражения", max: 1 },
  { num: 9, topic: "Уравнения, системы уравнений", max: 1 },
  { num: 10, topic: "Статистика, вероятности", max: 1 },
  { num: 11, topic: "Графики функций", max: 1 },
  { num: 12, topic: "Расчеты по формулам", max: 1 },
  { num: 13, topic: "Неравенства, системы неравенств", max: 1 },
  { num: 14, topic: "Задачи на прогрессии", max: 1 },
  { num: 15, topic: "Треугольники и их элементы", max: 1 },
  { num: 16, topic: "Окружность, круг и их элементы", max: 1 },
  { num: 17, topic: "Четырёхугольники, многоугольники и их элементы", max: 1 },
  { num: 18, topic: "Фигуры на квадратной решётке", max: 1 },
  { num: 19, topic: "Анализ геометрических высказываний", max: 1 },
];

const ogePart2 = [
  { num: 20, topic: "Уравнения, неравенства и их системы", max: 2 },
  { num: 21, topic: "Текстовые задачи", max: 2 },
  { num: 22, topic: "Функции и их свойства. Графики функций", max: 2 },
  { num: 23, topic: "Геометрические задачи на вычисление", max: 2 },
  { num: 24, topic: "Геометрические задачи на доказательство", max: 2 },
  { num: 25, topic: "Геометрические задачи повышенной сложности", max: 2 },
];

function getScoreZone(score: number, exam: "ege" | "oge") {
  if (exam === "ege") {
    if (score <= 26) return { label: "Не сдано", color: "#EF4444", bg: "bg-rose/10" };
    if (score <= 38) return { label: "Аттестат получен", color: "#F97316", bg: "bg-orange/10" };
    if (score <= 70) return { label: "Можно подаваться в ВУЗ", color: "#F59E0B", bg: "bg-amber/10" };
    if (score <= 86) return { label: "Высокий балл", color: "#10B981", bg: "bg-emerald/10" };
    return { label: "Топ", color: "#4F46E5", bg: "bg-indigo/10" };
  } else {
    if (score <= 7) return { label: "Оценка: 2 (Не сдано)", color: "#EF4444", bg: "bg-rose/10" };
    if (score <= 14) return { label: "Оценка: 3 (Базовый уровень)", color: "#F97316", bg: "bg-orange/10" };
    if (score <= 21) return { label: "Оценка: 4 (Хороший результат)", color: "#10B981", bg: "bg-emerald/10" };
    return { label: "Оценка: 5 (Отлично)", color: "#4F46E5", bg: "bg-indigo/10" };
  }
}

function getDynamicCTA(score: number, exam: "ege" | "oge") {
  if (exam === "ege") {
    if (score <= 38) return {
      title: "Есть, куда расти — и это нормально.",
      text: "Большинство учеников начинают примерно отсюда. За 3–4 месяца с правильным репетитором можно прибавить 20–30 баллов. Давай обсудим план.",
      cta: "Записаться на диагностику",
    };
    if (score <= 70) return {
      title: "Неплохо, но ты можешь больше.",
      text: "Ты уже решаешь первую часть — осталось разобраться со второй. Там и спрятаны те самые +15–20 баллов, которые решают всё при поступлении.",
      cta: "Разобрать вторую часть с репетитором",
    };
    if (score <= 86) return {
      title: "Сильный результат. Давай сделаем его отличным.",
      text: "Ты уже в форме. Но параметры, олимпиадная геометрия и хитрые неравенства — это то, что отделяет 75 от 90+. Точечная работа над сложными заданиями — мой конёк.",
      cta: "Прокачать сложные задания",
    };
    return {
      title: "Топ! Но расслабляться рано 😏",
      text: "На таком уровне важно не потерять баллы на глупых ошибках и отработать стратегию тайминга. Одно занятие-ревью может стоить нескольких дополнительных баллов.",
      cta: "Записаться на ревью",
    };
  } else {
    if (score <= 14) return {
      title: "Есть, куда расти — и это нормально.",
      text: "Для сдачи ОГЭ нужно обязательно набрать баллы по алгебре и геометрии. Мы разберем самые понятные задания, чтобы ты уверенно сдал экзамен. Давай обсудим план.",
      cta: "Записаться на диагностику",
    };
    if (score <= 21) return {
      title: "Хорошая база, пора браться за вторую часть.",
      text: "Ты почти не ошибаешься в простых заданиях. Давай научимся оформлять задачи второй части, чтобы получить твёрдую «четвёрку» или даже «пятёрку».",
      cta: "Разобрать сложную часть",
    };
    return {
      title: "Отличный уровень!",
      text: "Ты претендуешь на максимальный балл. Главное сейчас — не терять баллы на невнимательности и идеально оформлять геометрические задачи. Запишись на консультацию.",
      cta: "Записаться на ревью",
    };
  }
}

export default function CalculatorClient() {
  const [exam, setExam] = useState<"ege" | "oge">("ege");
  const [part1, setPart1] = useState<boolean[]>(new Array(19).fill(false));
  const [part2, setPart2] = useState<number[]>(new Array(7).fill(0));

  const currentPart1 = exam === "ege" ? egePart1 : ogePart1;
  const currentPart2 = exam === "ege" ? egePart2 : ogePart2;
  const maxPrimary = exam === "ege" ? 32 : 31;
  const maxTest = exam === "ege" ? 100 : 31;

  const primaryScore = useMemo(() => {
    const p1 = currentPart1.reduce((s, _, i) => s + (part1[i] ? 1 : 0), 0);
    const p2 = currentPart2.reduce((s, _, i) => s + (part2[i] || 0), 0);
    return Math.min(p1 + p2, maxPrimary);
  }, [part1, part2, currentPart1, currentPart2, maxPrimary]);

  const testScore = useMemo(() => {
    if (exam === "ege") {
      return egeConversion[primaryScore] ?? 0;
    }
    return primaryScore;
  }, [primaryScore, exam]);

  const zone = useMemo(() => getScoreZone(testScore, exam), [testScore, exam]);
  const dynamicCTA = useMemo(() => getDynamicCTA(testScore, exam), [testScore, exam]);

  const handlePart1Toggle = useCallback((i: number) => {
    setPart1((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  }, []);

  const handlePart2Change = useCallback((i: number, val: number) => {
    setPart2((prev) => {
      const next = [...prev];
      next[i] = val;
      return next;
    });
  }, []);

  const handleReset = useCallback(() => {
    setPart1(new Array(19).fill(false));
    setPart2(new Array(7).fill(0));
  }, []);

  // Gauge SVG calculations
  const circumference = Math.PI * 90; // semicircle with r=90
  const progress = Math.min(testScore / maxTest, 1);
  const strokeDashoffset = circumference * (1 - progress);

  return (
    <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-8 md:py-12">
      {/* Exam Toggle */}
      <div className="flex items-center gap-2 mb-8" role="radiogroup" aria-label="Тип экзамена">
        {(["ege", "oge"] as const).map((type) => (
          <button
            key={type}
            role="radio"
            aria-checked={exam === type}
            onClick={() => { setExam(type); handleReset(); }}
            className={`px-5 py-2.5 rounded-md text-sm font-semibold transition-all duration-200 ${exam === type
              ? "bg-indigo text-white shadow-md"
              : "bg-mist text-grey hover:bg-subtle"
              }`}
          >
            {type === "ege" ? "ЕГЭ" : "ОГЭ"}{" "}
            <span className="text-xs font-normal opacity-70">
              {type === "ege" ? "(профильный)" : ""}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* ── Left: Checkboxes ── */}
        <div className="lg:w-8/12">
          {/* Part 1 */}
          <h2 className="text-lg md:text-xl font-bold text-charcoal mb-4">
            Часть 1 — Задания с кратким ответом
          </h2>
          <div className="space-y-2">
            {currentPart1.map((task, i) => (
              <label
                key={task.num}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 cursor-pointer select-none ${part1[i]
                  ? "border-indigo bg-indigo/[0.04]"
                  : "border-subtle hover:border-indigo/40 hover:bg-mist/50"
                  }`}
              >
                <span className="relative flex items-center justify-center h-5 w-5">
                  <input
                    type="checkbox"
                    checked={part1[i]}
                    onChange={() => handlePart1Toggle(i)}
                    className="peer sr-only"
                    aria-label={`Задание ${task.num}: ${task.topic}`}
                  />
                  <span
                    className={`h-5 w-5 rounded-[6px] border-2 transition-all duration-200 flex items-center justify-center ${part1[i]
                      ? "bg-indigo border-indigo"
                      : "border-subtle peer-hover:border-indigo"
                      }`}
                  >
                    {part1[i] && (
                      <svg className="h-3 w-3 text-white animate-scale-in" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    )}
                  </span>
                </span>
                <span className="text-xs font-mono text-grey w-6 shrink-0">
                  {task.num}
                </span>
                <span className="text-sm text-charcoal">{task.topic}</span>
              </label>
            ))}
          </div>

          {/* Part 2 */}
          <h2 className="text-lg md:text-xl font-bold text-charcoal mt-8 mb-4">
            Часть 2 — Задания с развёрнутым ответом
          </h2>
          <p className="text-xs text-grey mb-4 flex items-start gap-1.5">
            <span aria-hidden="true">💡</span>
            <span>Часть 2 оценивается по критериям: можно получить частичный балл за неполное решение. Если решаешь не целиком — выбери количество баллов, которое реально набираешь.</span>
          </p>
          <div className="space-y-3">
            {currentPart2.map((task, i) => (
              <div
                key={task.num}
                className="flex items-center gap-3 p-3 rounded-lg border border-subtle"
              >
                <span className="text-xs font-mono text-grey w-6 shrink-0">
                  {task.num}
                </span>
                <span className="text-sm text-charcoal flex-1 min-w-0">
                  {task.topic}
                </span>
                <div className="flex gap-1 shrink-0" role="radiogroup" aria-label={`Баллы за задание ${task.num}`}>
                  {Array.from({ length: task.max + 1 }, (_, v) => (
                    <button
                      key={v}
                      role="radio"
                      aria-checked={part2[i] === v}
                      onClick={() => handlePart2Change(i, v)}
                      className={`h-9 w-9 rounded-md text-sm font-medium transition-all duration-200 ${part2[i] === v
                        ? "bg-indigo text-white shadow-sm"
                        : v <= part2[i]
                          ? "bg-indigo/70 text-white/90"
                          : "bg-mist text-grey hover:bg-subtle"
                        }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Results Panel (Sticky) ── */}
        <aside className="lg:w-4/12">
          <div className="lg:sticky lg:top-20">
            <div className="rounded-2xl border border-subtle bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-indigo mb-4">
                Твой результат
              </p>

              {primaryScore === 0 ? (
                <p className="text-sm text-grey text-center py-8">
                  Отметь хотя бы одно задание, чтобы увидеть свой прогнозируемый балл.
                </p>
              ) : (
                <>
                  {/* Gauge */}
                  <div className="flex justify-center mb-4">
                    <svg
                      viewBox="0 0 200 115"
                      className="w-48 h-auto"
                      role="img"
                      aria-label={`Твой тестовый балл: ${testScore} из 100`}
                    >
                      {/* Background arc */}
                      <path
                        d="M 10 100 A 90 90 0 0 1 190 100"
                        fill="none"
                        stroke="#E2E8F0"
                        strokeWidth={12}
                        strokeLinecap="round"
                      />
                      {/* Filled arc */}
                      <path
                        d="M 10 100 A 90 90 0 0 1 190 100"
                        fill="none"
                        stroke={zone.color}
                        strokeWidth={12}
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        className="transition-all duration-600"
                        style={{
                          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                        }}
                      />
                      {/* Score text */}
                      <text
                        x="100"
                        y="90"
                        textAnchor="middle"
                        className="font-mono font-extrabold"
                        style={{
                          fontSize: "48px",
                          fill: zone.color,
                        }}
                      >
                        {testScore}
                      </text>
                      <text
                        x="100"
                        y="108"
                        textAnchor="middle"
                        className="font-sans"
                        style={{
                          fontSize: "11px",
                          fill: "#64748B",
                        }}
                      >
                        из {maxTest}
                      </text>
                    </svg>
                  </div>

                  {/* Zone label */}
                  <div
                    className={`text-center py-2 px-4 rounded-full mx-auto w-fit text-sm font-semibold ${zone.bg}`}
                    style={{ color: zone.color }}
                    aria-live="polite"
                  >
                    {zone.label}
                  </div>

                  {/* Primary score */}
                  <div className="mt-4 text-center">
                    <p className="text-sm text-grey">
                      Первичные баллы:{" "}
                      <span className="font-mono font-semibold text-charcoal">
                        {primaryScore}
                      </span>{" "}
                      из {maxPrimary}
                    </p>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 h-2 rounded-full bg-mist overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-400"
                      style={{
                        width: `${(primaryScore / maxPrimary) * 100}%`,
                        backgroundColor: zone.color,
                        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  </div>
                </>
              )}

              {/* Reset button */}
              <button
                onClick={handleReset}
                className="mt-6 w-full py-2.5 rounded-md border border-subtle text-sm font-medium text-grey transition-colors hover:bg-mist hover:text-charcoal"
              >
                Сбросить всё
              </button>
            </div>

            {/* Info tooltip */}
            <p className="mt-4 text-xs text-grey leading-relaxed px-1">
              Балл рассчитывается по официальной шкале ФИПИ. Шкала может незначительно меняться каждый год — мы используем актуальные данные. Для ОГЭ это просто первичный балл, переводимый в оценку.
            </p>
          </div>
        </aside>
      </div>

      {/* ── Dynamic CTA ── */}
      {primaryScore > 0 && (
        <section
          className="mt-12 rounded-2xl p-6 md:p-10 border border-subtle"
          style={{ backgroundColor: `${zone.color}08` }}
          aria-labelledby="calc-cta-heading"
        >
          <h2
            id="calc-cta-heading"
            className="text-xl md:text-2xl font-bold text-charcoal"
          >
            {dynamicCTA.title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-grey max-w-2xl leading-relaxed">
            {dynamicCTA.text}
          </p>
          <a
            href="https://t.me/maggalon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center px-8 rounded-md bg-indigo text-white text-sm md:text-base font-semibold transition-all duration-200 hover:bg-indigo-hover hover:-translate-y-px hover:shadow-md mt-6"
          >
            {dynamicCTA.cta}
          </a>
        </section>
      )}

      {/* ── Disclaimer ── */}
      <p className="mt-8 text-xs text-grey italic text-center max-w-2xl mx-auto">
        Калькулятор носит ознакомительный характер и основан на шкале перевода баллов ФИПИ. Реальный результат зависит от множества факторов. Для точной оценки запишись на диагностическое занятие.
      </p>
    </div>
  );
}
