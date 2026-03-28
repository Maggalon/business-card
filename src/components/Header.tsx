"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Школьникам" },
  { href: "/parents", label: "Родителям" },
  { href: "/calculator", label: "Калькулятор" },
];

export default function Header({ theme = "dark" }: { theme?: "dark" | "light" }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isDark = theme === "dark";

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${isDark
        ? "bg-void/80 border-b border-edge"
        : "bg-white/80 border-b border-subtle shadow-xs"
        }`}
      role="banner"
    >
      <div className="mx-auto max-w-[1200px] px-4 md:px-6 lg:px-8">
        <div className="flex h-14 md:h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-lg font-bold tracking-tight transition-colors ${isDark ? "text-chalk hover:text-electric" : "text-charcoal hover:text-indigo"
              }`}
            aria-label="Георгий Новицкий — Главная"
          >
            <span className={isDark ? "text-electric" : "text-indigo"}>Гоша</span>
            <span>{" "}Научит</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Основная навигация">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${isActive
                    ? isDark
                      ? "text-electric"
                      : "text-indigo"
                    : isDark
                      ? "text-ash hover:text-chalk hover:bg-carbon"
                      : "text-grey hover:text-charcoal hover:bg-mist"
                    }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full ${isDark ? "bg-electric" : "bg-indigo"
                        }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="https://t.me/maggalon"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex h-10 items-center px-5 rounded-md text-sm font-medium transition-all duration-200 ${isDark
                ? "bg-electric text-void hover:bg-electric-hover hover:-translate-y-px hover:shadow-md"
                : "bg-indigo text-white hover:bg-indigo-hover hover:-translate-y-px hover:shadow-md"
                }`}
            >
              Записаться
            </a>
          </div>

          {/* Mobile Burger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors ${isDark ? "text-chalk hover:bg-carbon" : "text-charcoal hover:bg-mist"
              }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className={`md:hidden border-t px-4 pb-4 pt-2 ${isDark ? "border-edge bg-void" : "border-subtle bg-white"
            }`}
          aria-label="Мобильная навигация"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-3 rounded-md text-base font-medium transition-colors ${isActive
                  ? isDark
                    ? "text-electric bg-carbon"
                    : "text-indigo bg-mist"
                  : isDark
                    ? "text-ash hover:text-chalk hover:bg-carbon"
                    : "text-grey hover:text-charcoal hover:bg-mist"
                  }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://t.me/maggalon"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className={`block mt-2 text-center py-3 rounded-md text-base font-medium transition-colors ${isDark
              ? "bg-electric text-void hover:bg-electric-hover"
              : "bg-indigo text-white hover:bg-indigo-hover"
              }`}
          >
            Записаться
          </a>
        </nav>
      )}
    </header>
  );
}
