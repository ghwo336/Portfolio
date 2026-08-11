import { pick, type Lang } from "@/lib/i18n";
import { AWARDS, PRESS_FIGURE, PRESS_SECTION } from "@/content/press";
import Section from "@/components/ui/Section";

export default function Press({ lang }: { lang: Lang }) {
  return (
    <Section
      id={PRESS_SECTION.id}
      chip={PRESS_SECTION.chip}
      title={pick(lang, PRESS_SECTION.title)}
    >
      <div className="press-grid">
        <figure className="rv">
          <img
            className="talk-photo"
            src={PRESS_FIGURE.src}
            alt={pick(lang, PRESS_FIGURE.alt)}
          />
          <figcaption>{pick(lang, PRESS_FIGURE.caption)}</figcaption>
        </figure>
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
