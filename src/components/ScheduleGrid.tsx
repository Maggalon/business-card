"use client";

import { useState } from "react";

const DAYS = [
  { id: "пн", label: "Понедельник", short: "Пн" },
  { id: "вт", label: "Вторник", short: "Вт" },
  { id: "ср", label: "Среда", short: "Ср" },
  { id: "чт", label: "Четверг", short: "Чт" },
  { id: "пт", label: "Пятница", short: "Пт" },
  { id: "сб", label: "Суббота", short: "Сб" },
  { id: "вс", label: "Воскресенье", short: "Вс" },
];

const TIME_OPTIONS = [
  "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", 
  "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"
];

interface ScheduleGridProps {
  theme: "dark" | "light";
}

export default function ScheduleGrid({ theme }: ScheduleGridProps) {
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  const [startTime, setStartTime] = useState("10:00");
  const [endTime, setEndTime] = useState("19:00");
  const [classType, setClassType] = useState<"individual" | "group">("individual");
  const isDark = theme === "dark";

  // --- Styles matching the rest of the app ---
  const sectionBg = isDark ? "bg-graphite" : "bg-mist";
  const labelColor = isDark ? "text-electric" : "text-indigo";
  const headingColor = isDark ? "text-chalk" : "text-charcoal";
  const subColor = isDark ? "text-ash" : "text-grey";
  
  const cardBg = isDark ? "bg-void border-edge" : "bg-white border-subtle";
  
  const activePillStyles = isDark 
    ? "bg-electric text-void border-electric font-semibold" 
    : "bg-indigo text-white border-indigo font-semibold";
  
  const inactivePillStyles = isDark
    ? "bg-transparent text-ash border-edge hover:border-electric/50 hover:text-chalk"
    : "bg-transparent text-grey border-subtle hover:border-indigo/50 hover:text-charcoal";

  const toggleDay = (id: string) => {
    setSelectedDays(prev => 
      prev.includes(id) ? prev.filter(d => d !== id) : [...prev, id]
    );
  };

  const getTelegramLink = () => {
    const daysLabel = selectedDays.length > 0 
      ? selectedDays.map(id => DAYS.find(d => d.id === id)?.label).join(", ")
      : "Не выбрано";
      
    const typeLabel = classType === "individual" ? "Индивидуальное" : "Групповое";

    const text = `Здравствуйте! Хочу записаться на занятия.
Формат: ${typeLabel}
Дни: ${daysLabel}
Желаемое время: с ${startTime} до ${endTime}`;

    return `https://t.me/maggalon?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className={`${sectionBg} py-16 md:py-20 lg:py-24`} aria-labelledby="schedule-heading">
      <div className="mx-auto max-w-[800px] px-4 md:px-6 lg:px-8">
        {/* ── Header ── */}
        <p className={`text-xs md:text-[13px] font-semibold uppercase tracking-[0.08em] ${labelColor} mb-3 text-center md:text-left`}>
          Расписание
        </p>
        <h2 id="schedule-heading" className={`text-2xl md:text-[34px] lg:text-[40px] font-bold ${headingColor} leading-tight tracking-[-0.015em] mb-4 text-center md:text-left`}>
          Оставьте заявку на удобное время
        </h2>
        <p className={`text-base md:text-lg ${subColor} mb-10 text-center md:text-left`}>
          Выберите формат, дни и желаемый диапазон времени, и я свяжусь с вами, чтобы подобрать оптимальный вариант.
        </p>

        {/* Form Card */}
        <div className={`p-6 md:p-8 rounded-2xl border flex flex-col gap-8 shadow-[0_4px_40px_rgba(0,0,0,0.08)] ${cardBg}`}>
          
          {/* Class Type */}
          <div>
            <span className={`block text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-ash/80" : "text-grey/80"}`}>Формат занятий</span>
            <div className="flex gap-3">
              <button 
                onClick={() => setClassType("individual")}
                className={`flex-1 py-3 px-4 rounded-xl border transition-all duration-200 text-center cursor-pointer ${
                  classType === "individual" ? activePillStyles : inactivePillStyles
                }`}
              >
                Индивидуальное
              </button>
              <button 
                onClick={() => setClassType("group")}
                className={`flex-1 py-3 px-4 rounded-xl border transition-all duration-200 text-center cursor-pointer ${
                  classType === "group" ? activePillStyles : inactivePillStyles
                }`}
              >
                Групповое
              </button>
            </div>
          </div>

          {/* Days */}
          <div>
            <span className={`block text-sm font-semibold uppercase tracking-wider mb-3 ${isDark ? "text-ash/80" : "text-grey/80"}`}>Желаемые дни</span>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {DAYS.map(day => {
                const isActive = selectedDays.includes(day.id);
                return (
                  <button
                    key={day.id}
                    onClick={() => toggleDay(day.id)}
                    className={`px-4 py-2 md:px-5 md:py-2.5 rounded-full border text-sm transition-all duration-200 cursor-pointer ${
                      isActive ? activePillStyles : inactivePillStyles
                    }`}
                  >
                    <span className="md:hidden">{day.short}</span>
                    <span className="hidden md:inline">{day.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time Range */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className={`block text-sm font-semibold uppercase tracking-wider ${isDark ? "text-ash/80" : "text-grey/80"}`}>Желаемое время</span>
              <span className={`text-xs font-medium ${isDark ? "text-ash/50" : "text-grey/50"}`}>Часовой пояс — МСК</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <select 
                  value={startTime}
                  onChange={e => setStartTime(e.target.value)}
                  className={`w-full p-3 md:p-4 rounded-xl border appearance-none cursor-pointer outline-none transition-colors ${
                    isDark 
                      ? "bg-graphite border-edge text-chalk focus:border-electric" 
                      : "bg-mist border-subtle text-charcoal focus:border-indigo"
                  }`}
                >
                  {TIME_OPTIONS.map(time => (
                    <option key={time} value={time}>С {time}</option>
                  ))}
                </select>
              </div>
              <span className={subColor}>—</span>
              <div className="flex-1">
                <select 
                  value={endTime}
                  onChange={e => setEndTime(e.target.value)}
                  className={`w-full p-3 md:p-4 rounded-xl border appearance-none cursor-pointer outline-none transition-colors ${
                    isDark 
                      ? "bg-graphite border-edge text-chalk focus:border-electric" 
                      : "bg-mist border-subtle text-charcoal focus:border-indigo"
                  }`}
                >
                  {TIME_OPTIONS.map(time => (
                    <option key={time} value={time}>До {time}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className={`mt-4 pt-6 border-t ${isDark ? "border-edge" : "border-subtle"}`}>
            <a
              href={getTelegramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full flex items-center justify-center py-4 rounded-xl text-white font-semibold text-base md:text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                isDark 
                  ? "bg-electric hover:bg-electric-hover shadow-electric/20" 
                  : "bg-indigo hover:bg-indigo-hover shadow-indigo/20"
              }`}
            >
              <svg className="w-5 h-5 mr-3 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.799-1.185-.78-.415-1.21.258-1.91.176-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              Записаться через Telegram
            </a>
            {selectedDays.length === 0 && (
              <p className={`text-center mt-3 text-sm font-medium ${isDark ? "text-electric/70" : "text-indigo/70"}`}>
                Не забудьте выбрать желаемые дни
              </p>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

