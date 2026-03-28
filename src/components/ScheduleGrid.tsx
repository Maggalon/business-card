"use client";

import { useState } from "react";

type Slot = {
  day: string;
  shortDay: string;
  slots: { time: string; type: "individual" | "group" | "free" }[];
};

const schedule: Slot[] = [
  {
    day: "Понедельник",
    shortDay: "Пн",
    slots: [
      { time: "15:00 – 16:00", type: "individual" },
      { time: "16:30 – 18:00", type: "group" },
      { time: "18:30 – 19:30", type: "free" },
    ],
  },
  {
    day: "Вторник",
    shortDay: "Вт",
    slots: [
      { time: "14:00 – 15:00", type: "free" },
      { time: "15:30 – 17:00", type: "group" },
      { time: "17:30 – 18:30", type: "individual" },
    ],
  },
  {
    day: "Среда",
    shortDay: "Ср",
    slots: [
      { time: "15:00 – 16:00", type: "individual" },
      { time: "16:30 – 18:00", type: "group" },
      { time: "18:30 – 19:30", type: "free" },
    ],
  },
  {
    day: "Четверг",
    shortDay: "Чт",
    slots: [
      { time: "14:00 – 15:00", type: "individual" },
      { time: "15:30 – 17:00", type: "free" },
      { time: "17:30 – 18:30", type: "individual" },
    ],
  },
  {
    day: "Пятница",
    shortDay: "Пт",
    slots: [
      { time: "14:00 – 15:30", type: "group" },
      { time: "16:00 – 17:00", type: "free" },
      { time: "17:30 – 18:30", type: "individual" },
    ],
  },
  {
    day: "Суббота",
    shortDay: "Сб",
    slots: [
      { time: "10:00 – 11:00", type: "free" },
      { time: "11:30 – 13:00", type: "group" },
      { time: "13:30 – 14:30", type: "individual" },
    ],
  },
  {
    day: "Воскресенье",
    shortDay: "Вс",
    slots: [
      { time: "10:00 – 11:00", type: "free" },
      { time: "11:30 – 13:00", type: "group" },
      { time: "13:30 – 14:30", type: "individual" },
    ],
  },
];

const typeLabels: Record<string, string> = {
  individual: "Индивидуальное",
  group: "Групповое",
  free: "Свободно",
};

interface ScheduleGridProps {
  theme: "dark" | "light";
}

export default function ScheduleGrid({ theme }: ScheduleGridProps) {
  const [activeDay, setActiveDay] = useState(0);
  const isDark = theme === "dark";

  /* ── Colour maps per theme ── */
  const accent = isDark ? "electric" : "indigo";
  const slotStyles: Record<string, string> = isDark
    ? {
      individual:
        "border-electric/20 bg-electric/[0.05] text-electric/60",
      group:
        "border-neon-emerald/20 bg-neon-emerald/[0.05] text-neon-emerald/60",
      free:
        "border-electric bg-electric/[0.12] text-electric ring-1 ring-electric/30 shadow-[0_0_20px_rgba(129,140,248,0.15)] hover:bg-electric/[0.20] hover:shadow-[0_0_28px_rgba(129,140,248,0.25)] hover:ring-electric/50 schedule-shimmer",
    }
    : {
      individual:
        "border-indigo/15 bg-indigo/[0.03] text-indigo/50",
      group:
        "border-emerald/15 bg-emerald/[0.03] text-emerald/50",
      free:
        "border-indigo bg-indigo/[0.08] text-indigo ring-1 ring-indigo/25 shadow-[0_0_20px_rgba(79,70,229,0.1)] hover:bg-indigo/[0.14] hover:shadow-[0_0_28px_rgba(79,70,229,0.18)] hover:ring-indigo/40 schedule-shimmer",
    };

  const dotColors: Record<string, string> = isDark
    ? { individual: "bg-electric/50", group: "bg-neon-emerald/50", free: "bg-electric" }
    : { individual: "bg-indigo/40", group: "bg-emerald/40", free: "bg-indigo" };

  const pillActive = isDark
    ? "bg-electric text-void"
    : "bg-indigo text-white";
  const pillInactive = isDark
    ? "text-ash hover:text-chalk hover:bg-edge/60"
    : "text-grey hover:text-charcoal hover:bg-subtle/60";

  const sectionBg = isDark ? "bg-graphite" : "bg-mist";
  const labelColor = isDark ? "text-electric" : "text-indigo";
  const headingColor = isDark ? "text-chalk" : "text-charcoal";
  const subColor = isDark ? "text-ash" : "text-grey";

  const legendBorder = isDark ? "border-edge" : "border-subtle";

  return (
    <section
      className={`${sectionBg} py-16 md:py-20 lg:py-24`}
      aria-labelledby="schedule-heading"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        {/* ── Header ── */}
        <p
          className={`text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] ${labelColor} mb-3`}
        >
          Расписание
        </p>
        <h2
          id="schedule-heading"
          className={`text-2xl md:text-[34px] lg:text-[40px] font-bold ${headingColor} leading-tight tracking-[-0.015em] max-w-2xl`}
        >
          Выберите удобное время для занятий
        </h2>
        <p className={`mt-3 text-base md:text-lg ${subColor} max-w-xl`}>
          Нажмите на свободный слот, чтобы записаться через Telegram.
        </p>

        {/* ── Day pills (scrollable on mobile) ── */}
        <div className="mt-8 md:mt-10 -mx-4 px-4 md:mx-0 md:px-0 overflow-x-auto scrollbar-none">
          <div className="flex gap-2 md:gap-3 w-max md:w-auto md:flex-wrap">
            {schedule.map((day, i) => (
              <button
                key={day.day}
                onClick={() => setActiveDay(i)}
                className={`shrink-0 px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer ${activeDay === i ? pillActive : pillInactive
                  }`}
              >
                <span className="md:hidden">{day.shortDay}</span>
                <span className="hidden md:inline">{day.day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Time slots grid ── */}
        <div className="mt-6 md:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {schedule[activeDay].slots.map((slot, i) => {
            const isFree = slot.type === "free";
            return isFree ? (
              <a
                key={i}
                href={`https://t.me/maggalon?text=${encodeURIComponent(
                  `Здравствуйте! Хочу записаться: ${schedule[activeDay].day}, ${slot.time}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative flex flex-col gap-2 rounded-xl border p-4 md:p-5 transition-all duration-200 cursor-pointer ${slotStyles[slot.type]} hover:-translate-y-0.5 hover:shadow-md`}
              >
                {/* Pulsing dot */}
                <span className="absolute top-4 right-4 flex h-2.5 w-2.5">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-60 ${isDark ? "bg-electric" : "bg-indigo"
                      }`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isDark ? "bg-electric" : "bg-indigo"
                      }`}
                  />
                </span>

                <span className="text-base md:text-lg font-bold tracking-tight">
                  {slot.time}
                </span>
                <span className="flex items-center gap-2 text-xs md:text-sm font-medium">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${dotColors[slot.type]}`}
                  />
                  {typeLabels[slot.type]} — записаться →
                </span>
              </a>
            ) : (
              <div
                key={i}
                className={`relative flex flex-col gap-2 rounded-xl border p-4 md:p-5 transition-all duration-200 ${slotStyles[slot.type]}`}
              >
                <span className="text-base md:text-lg font-bold tracking-tight">
                  {slot.time}
                </span>
                <span className="flex items-center gap-2 text-xs md:text-sm font-medium opacity-80">
                  <span
                    className={`inline-block h-1.5 w-1.5 rounded-full ${dotColors[slot.type]}`}
                  />
                  {typeLabels[slot.type]} — занято
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Legend ── */}
        <div
          className={`mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm ${subColor} border-t ${legendBorder} pt-5`}
        >
          <span className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${dotColors.individual}`} />
            Индивидуальное
          </span>
          <span className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${dotColors.group}`} />
            Групповое
          </span>
          <span className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${dotColors.free}`} />
            <span className="flex items-center gap-1">
              Свободно
              <span className="flex h-1.5 w-1.5">
                <span
                  className={`animate-ping absolute inline-flex h-1.5 w-1.5 rounded-full opacity-60 ${isDark ? "bg-electric" : "bg-indigo"
                    }`}
                />
                <span
                  className={`relative inline-flex rounded-full h-1.5 w-1.5 ${isDark ? "bg-electric" : "bg-indigo"
                    }`}
                />
              </span>
            </span>
          </span>
        </div>

        {/* ── Flexible-time callout ── */}
        <div
          className={`mt-6 md:mt-8 flex items-start gap-3 rounded-xl border p-4 md:p-5 ${isDark
            ? "border-edge bg-void/60 text-ash"
            : "border-subtle bg-white text-grey"
            }`}
        >
          <span className="text-xl shrink-0 mt-0.5" aria-hidden="true">💬</span>
          <p className="text-sm md:text-base leading-relaxed">
            Не нашли удобное время? Пишите!{" "}
            С вероятностью 90% я подберу вам подходящий слот или создам для вас новый.{" "}
            <a
              href="https://t.me/maggalon"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-1 font-semibold transition-colors ${isDark
                ? "text-electric hover:text-electric-hover"
                : "text-indigo hover:text-indigo-hover"
                }`}
            >
              Написать в Telegram →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
