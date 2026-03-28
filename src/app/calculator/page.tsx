import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CalculatorClient from "@/components/CalculatorClient";

export const metadata: Metadata = {
  title: "Калькулятор баллов ЕГЭ/ОГЭ — Георгий Новицкий",
  description:
    "Узнай свой прогнозируемый балл ЕГЭ или ОГЭ по математике. Отметь задания, которые решаешь уверенно — калькулятор покажет результат в тестовых баллах.",
};

export default function CalculatorPage() {
  return (
    <div className="bg-snow text-charcoal min-h-screen flex flex-col" data-theme="light">
      <Header theme="light" />

      <main className="flex-1">
        {/* Page Header */}
        <div className="bg-white border-b border-subtle">
          <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8 py-8 md:py-12">
            <h1 className="text-2xl md:text-[34px] lg:text-[40px] font-extrabold text-charcoal leading-tight tracking-[-0.015em]">
              Калькулятор баллов{" "}
              <span className="text-indigo">ЕГЭ / ОГЭ</span>{" "}
              по математике
            </h1>
            <p className="mt-3 text-sm md:text-base text-grey max-w-2xl leading-relaxed">
              Отметь задания, которые ты решаешь уверенно — калькулятор моментально покажет твой результат в тестовых баллах.
              Не знаешь, решишь ли — не отмечай. Лучше честный прогноз, чем красивая иллюзия.
            </p>
          </div>
        </div>

        <CalculatorClient />
      </main>

      <Footer theme="light" />
    </div>
  );
}
