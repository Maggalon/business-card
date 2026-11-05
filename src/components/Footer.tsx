import Image from "next/image";
import Link from "next/link";
import { navLinks, person } from "@/content/cv";

const linkClass =
  "body-6 rounded-lg text-muted transition-colors duration-300 ease-base hover:text-ink";

export default function Footer() {
  return (
    <footer className="overflow-hidden">
      <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-4 pt-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="heading-6">{person.name}</p>
          <p className="body-6 mt-2 text-muted">{person.role}</p>
          <p className="caption-5 mt-4 text-muted">© {new Date().getFullYear()}</p>
        </div>

        <nav aria-label="Разделы резюме">
          <h2 className="title-3">Разделы</h2>
          <ul className="mt-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link href={`/#${link.id}`} className={linkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="title-3">Контакты</h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <a href={`mailto:${person.email}`} className={`${linkClass} break-all`}>
                {person.email}
              </a>
            </li>
            <li>
              <a href={person.phoneHref} className={linkClass}>
                {person.phone}
              </a>
            </li>
            <li className="body-6 text-muted">{person.location}</li>
          </ul>
        </div>

        <nav aria-label="Правовая информация">
          <h2 className="title-3">Документы</h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <Link href="/privacy" className={linkClass}>
                Конфиденциальность
              </Link>
            </li>
            <li>
              <Link href="/terms" className={linkClass}>
                Условия использования
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Image
        src="/scene-footer.webp"
        alt=""
        width={2800}
        height={1100}
        unoptimized
        className="mt-8 h-72 w-full object-cover object-[78%_bottom] sm:h-96 lg:-mt-12 lg:h-auto lg:max-h-[640px]"
      />
    </footer>
  );
}
