import { pick, type Lang } from "@/lib/i18n";
import { AWARDS, PRESS_FIGURES, PRESS_SECTION } from "@/content/press";
import Section from "@/components/ui/Section";

export default function Press({ lang }: { lang: Lang }) {
  return (
    <Section
      id={PRESS_SECTION.id}
      chip={PRESS_SECTION.chip}
      title={pick(lang, PRESS_SECTION.title)}
    >
      <div className="press-grid">
        <div className="press-figures rv">
          {PRESS_FIGURES.map((figure) => (
            <figure key={figure.src}>
              <img
                className="talk-photo"
                src={figure.src}
                alt={pick(lang, figure.alt)}
                loading="lazy"
              />
              <figcaption>{pick(lang, figure.caption)}</figcaption>
            </figure>
          ))}
        </div>
        <ul className="award-list rv">
          {AWARDS.map((award, i) => (
            <li key={i}>
              <span className="yr">{award.year}</span>
              <span>
                {pick(lang, award.body)}
                {award.link && (
                  <a
                    href={award.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pick(lang, award.link.label)}
                  </a>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
