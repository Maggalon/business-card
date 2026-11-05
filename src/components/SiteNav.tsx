"use client";

import { useEffect, useState } from "react";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { navLinks, person, primaryCta } from "@/content/cv";

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of ["top", ...navLinks.map((link) => link.id)]) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4">
        <div className="pointer-events-auto flex items-center gap-2 rounded-2xl border border-line bg-surface/70 p-2 backdrop-blur-xl">
          <a
            href="#top"
            onClick={() => setIsOpen(false)}
            className="title-4 rounded-lg px-2 py-2 whitespace-nowrap text-ink transition-colors duration-300 ease-base hover:bg-raised"
          >
            {person.shortName}
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Разделы резюме">
            {navLinks.map((link) => {
              const isActive = activeId === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`title-4 rounded-lg px-3 py-2 transition-colors duration-300 ease-base hover:bg-raised hover:text-ink ${
                    isActive ? "bg-raised text-ink" : "text-muted"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a href={primaryCta.href} className="cta button-sm">
            {primaryCta.label}
          </a>

          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            className="relative size-10 shrink-0 rounded-lg transition-colors duration-300 ease-base hover:bg-raised active:scale-[0.98] lg:hidden"
          >
            <span
              aria-hidden="true"
              className={`absolute top-1/2 left-1/2 -mt-px -ml-2 h-0.5 w-4 rounded-full bg-ink transition-transform duration-500 ease-base ${
                isOpen ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              aria-hidden="true"
              className={`absolute top-1/2 left-1/2 -mt-px -ml-2 h-0.5 w-4 rounded-full bg-ink transition-transform duration-500 ease-base ${
                isOpen ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        inert={!isOpen}
        className={`fixed inset-0 z-40 bg-ground/95 backdrop-blur-2xl transition-opacity duration-500 ease-base lg:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-2 px-4 pt-24" aria-label="Разделы резюме">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setIsOpen(false)}
              aria-current={activeId === link.id ? "location" : undefined}
              style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
              className={`heading-4 rounded-lg py-2 transition-[opacity,transform] duration-500 ease-base ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              } ${activeId === link.id ? "text-accent" : "text-ink"}`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${person.email}`}
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: isOpen ? `${navLinks.length * 60}ms` : "0ms" }}
            className={`body-3 mt-6 inline-flex items-center gap-2 text-muted transition-[opacity,transform] duration-500 ease-base ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <EnvelopeSimple size={20} aria-hidden="true" />
            <span className="min-w-0 break-all">{person.email}</span>
          </a>
        </nav>
      </div>
    </>
  );
}
