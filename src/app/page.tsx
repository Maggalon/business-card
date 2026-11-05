import {
  Calculator,
  CaretDown,
  ChalkboardTeacher,
  ChatsCircle,
  EnvelopeSimple,
  Factory,
  MapPin,
  Phone,
  SealCheck,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import SiteNav from "@/components/SiteNav";
import TaglineReveal from "@/components/TaglineReveal";
import {
  caseStudy,
  experience,
  faq,
  finalCta,
  hero,
  method,
  person,
  plan,
  primaryCta,
  reasons,
  riskReversal,
  skills,
  tagline,
} from "@/content/cv";

const reasonIcons = {
  factory: Factory,
  teacher: ChalkboardTeacher,
  calculator: Calculator,
  chat: ChatsCircle,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: person.name,
      jobTitle: person.role,
      email: person.email,
      address: { "@type": "PostalAddress", addressLocality: person.location },
      alumniOf: "Дальневосточный федеральный университет",
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

function SectionHeading({ eyebrow, id, title }: { eyebrow: string; id: string; title: string }) {
  return (
    <div className="max-w-[680px]">
      <p className="caption-3 text-accent">{eyebrow}</p>
      <h2 id={id} className="heading-4 mt-2 md:heading-3">
        {title}
      </h2>
    </div>
  );
}

function PrimaryCta() {
  return (
    <a href={primaryCta.href} className="cta button-md">
      <EnvelopeSimple size={20} weight="bold" aria-hidden="true" />
      {primaryCta.label}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SiteNav />

      <main id="main">
        {/* Hero */}
        <section id="top" aria-labelledby="hero-heading" className="relative overflow-hidden px-4 pt-24 md:pt-32">
          <Image
            src="/scene-hero.webp"
            alt=""
            width={3200}
            height={900}
            priority
            unoptimized
            className="absolute inset-x-0 bottom-0 h-96 w-full object-cover object-bottom md:h-[480px]"
          />
          <div className="relative mx-auto grid max-w-6xl items-end gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7 lg:self-center lg:pb-24">
              <p className="rise caption-1 text-balance text-accent">{person.role}</p>
              <h1
                id="hero-heading"
                style={{ animationDelay: "80ms" }}
                className="rise hero-heading heading-3 mt-4 max-w-[680px] md:heading-2 xl:heading-1"
              >
                {hero.lines.map((line) => (
                  <span key={line} className="sm:block">
                    {line}{" "}
                  </span>
                ))}
              </h1>
              <p
                style={{ animationDelay: "160ms" }}
                className="rise body-3 mt-6 max-w-[680px] text-muted"
              >
                {hero.subheading}
              </p>
              <div
                style={{ animationDelay: "240ms" }}
                className="rise mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <PrimaryCta />
                <p className="caption-1 flex items-center gap-2 text-muted">
                  <SealCheck size={16} weight="fill" className="shrink-0 text-accent" aria-hidden="true" />
                  {hero.proof}
                </p>
              </div>
            </div>
            <div style={{ animationDelay: "320ms" }} className="rise mx-auto w-full max-w-sm lg:col-span-5 lg:max-w-none">
              <Image
                src="/portrait-engraved.webp"
                alt={`${person.name}, портрет`}
                width={928}
                height={1298}
                priority
                unoptimized
                className="block h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* Why hire me */}
        <section id="why" aria-labelledby="why-heading" className="bg-band px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Почему я"
                id="why-heading"
                title="Что вы получаете, нанимая меня"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reasons.map((reason) => {
                const Icon = reasonIcons[reason.icon];
                return (
                  <Reveal key={reason.title}>
                    <article className="h-full rounded-2xl border border-line bg-surface p-6">
                      <Icon size={24} className="text-accent" aria-hidden="true" />
                      <h3 className="heading-6 mt-4">{reason.title}</h3>
                      <p className="body-3 mt-2 text-muted">{reason.text}</p>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tagline */}
        <section aria-label="Главная мысль" className="bg-accent px-4 py-24 text-surface">
          <div className="mx-auto max-w-6xl">
            <TaglineReveal lines={tagline} />
          </div>
        </section>

        {/* Case */}
        <section id="case" aria-labelledby="case-heading" className="bg-band px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="Кейс" id="case-heading" title={caseStudy.title} />
              <p className="body-3 mt-4 max-w-[680px] text-muted">{caseStudy.summary}</p>
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-12">
              <Reveal className="lg:col-span-7">
                <dl className="flex h-full flex-col justify-between gap-4 rounded-2xl border border-line bg-surface p-6 md:p-8">
                  {caseStudy.facts.map((fact) => (
                    <div key={fact.label} className="grid gap-1 sm:grid-cols-3 sm:gap-4">
                      <dt className="body-6 text-muted">{fact.label}</dt>
                      <dd className="title-3 sm:col-span-2">{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
              <Reveal className="lg:col-span-5">
                <div className="flex h-full flex-col gap-6 rounded-2xl border border-line bg-surface p-6 md:p-8">
                  <h3 className="caption-3 text-accent">Что это даёт вам</h3>
                  {caseStudy.takeaways.map((takeaway) => (
                    <div key={takeaway.title}>
                      <h4 className="title-3">{takeaway.title}</h4>
                      <p className="body-6 mt-1 text-muted">{takeaway.text}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Experience and education */}
        <section id="experience" aria-labelledby="experience-heading" className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Опыт и образование"
                id="experience-heading"
                title="На что я опираюсь"
              />
            </Reveal>
            <ol className="mt-12 flex flex-col gap-6">
              {experience.map((item) => (
                <li key={item.company}>
                  <Reveal>
                    <article className="grid gap-6 rounded-2xl border border-line bg-surface p-6 md:grid-cols-12 md:p-8">
                      <div className="md:col-span-4">
                        <h3 className="heading-6">{item.company}</h3>
                        <p className="caption-1 mt-1 text-muted">{item.period}</p>
                      </div>
                      <div className="md:col-span-8">
                        <p className="title-2">{item.role}</p>
                        <ul className="mt-4 flex flex-col gap-2">
                          {item.points.map((point) => (
                            <li key={point} className="body-3 flex gap-3 text-muted">
                              <span
                                aria-hidden="true"
                                className="mt-3 size-1 shrink-0 rounded-full bg-accent"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* How I work */}
        <section id="method" aria-labelledby="method-heading" className="bg-band px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="Как я работаю"
                id="method-heading"
                title="Что перенесу в продажи из внедрения и преподавания"
              />
            </Reveal>
            <ol className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
              {method.map((step, index) => (
                <li key={step.title}>
                  <Reveal>
                    <p aria-hidden="true" className="font-mono text-sm font-medium text-accent">
                      0{index + 1}
                    </p>
                    <h3 className="heading-6 mt-4">{step.title}</h3>
                    <p className="body-3 mt-2 text-muted">{step.text}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* First 90 days */}
        <section id="plan" aria-labelledby="plan-heading" className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading
                eyebrow="План"
                id="plan-heading"
                title={"Мои первые 90 дней у вас"}
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {plan.map((stage) => (
                <Reveal key={stage.title}>
                  <article className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                    <p className="caption-3 text-muted">{stage.period}</p>
                    <p className="mt-2 font-mono text-2xl font-medium text-accent">{stage.value}</p>
                    <h3 className="heading-6 mt-4">{stage.title}</h3>
                    <p className="body-3 mt-2 text-muted">{stage.outcome}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Skills */}
        <section aria-labelledby="skills-heading" className="bg-band px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <SectionHeading eyebrow="Навыки" id="skills-heading" title="Что я умею уже сейчас" />
            </Reveal>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((group) => (
                <Reveal key={group.title}>
                  <h3 className="title-3">{group.title}</h3>
                  <ul className="mt-4 flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="body-6 text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" aria-labelledby="faq-heading" className="px-4 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <SectionHeading
                eyebrow="Вопросы"
                id="faq-heading"
                title="Что вы, скорее всего, хотите спросить"
              />
            </Reveal>
            <Reveal className="flex flex-col gap-2 lg:col-span-8">
              {faq.map((item) => (
                <details key={item.question} className="group rounded-2xl border border-line bg-surface">
                  <summary className="title-3 flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl p-4 transition-colors duration-300 ease-base hover:bg-raised [&::-webkit-details-marker]:hidden">
                    {item.question}
                    <CaretDown
                      size={16}
                      aria-hidden="true"
                      className="shrink-0 text-muted transition-transform duration-500 ease-base group-open:rotate-180"
                    />
                  </summary>
                  <p className="body-3 px-4 pb-4 text-muted">{item.answer}</p>
                </details>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Risk reversal and final CTA */}
        <section id="contact" aria-labelledby="contact-heading" className="bg-band px-4 py-16 md:py-24">
          <div className="mx-auto max-w-6xl">
            <Reveal className="rounded-2xl border border-line bg-surface p-6 md:p-8">
              <SealCheck size={24} className="text-accent" aria-hidden="true" />
              <h2 className="heading-6 mt-4 max-w-[680px]">{riskReversal.title}</h2>
              <p className="body-3 mt-2 max-w-[680px] text-muted">{riskReversal.text}</p>
            </Reveal>

            <Reveal className="mt-16 md:mt-24">
              <h2 id="contact-heading" className="heading-4 max-w-[680px] md:heading-3">
                {finalCta.title}
              </h2>
              <p className="body-3 mt-4 max-w-[680px] text-muted">{finalCta.text}</p>
              <div className="mt-8">
                <PrimaryCta />
              </div>
              <ul className="caption-1 mt-8 flex flex-col gap-4 text-muted md:flex-row md:gap-8">
                <li>
                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-2 rounded-lg transition-colors duration-300 ease-base hover:text-ink"
                  >
                    <EnvelopeSimple size={16} aria-hidden="true" className="shrink-0" />
                    <span className="min-w-0 break-all">{person.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={person.phoneHref}
                    className="flex items-center gap-2 rounded-lg transition-colors duration-300 ease-base hover:text-ink"
                  >
                    <Phone size={16} aria-hidden="true" className="shrink-0" />
                    {person.phone}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} aria-hidden="true" className="shrink-0" />
                  {person.location}
                </li>
              </ul>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
