import Link from "next/link";

export default function Footer({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const isDark = theme === "dark";

  return (
    <footer
      className={`border-t py-8 md:py-12 ${
        isDark ? "bg-void border-edge" : "bg-snow border-subtle"
      }`}
      role="contentinfo"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className={`text-sm ${isDark ? "text-ash" : "text-grey"}`}>
            © {new Date().getFullYear()} Георгий Новицкий. Все права защищены.
          </div>
          <nav className="flex gap-6" aria-label="Навигация в подвале">
            <Link
              href="/"
              className={`text-sm transition-colors ${
                isDark ? "text-ash hover:text-chalk" : "text-grey hover:text-charcoal"
              }`}
            >
              Школьникам
            </Link>
            <Link
              href="/parents"
              className={`text-sm transition-colors ${
                isDark ? "text-ash hover:text-chalk" : "text-grey hover:text-charcoal"
              }`}
            >
              Родителям
            </Link>
            <Link
              href="/calculator"
              className={`text-sm transition-colors ${
                isDark ? "text-ash hover:text-chalk" : "text-grey hover:text-charcoal"
              }`}
            >
              Калькулятор
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
