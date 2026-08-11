import { pick, type Lang } from "@/lib/i18n";
import { EDUCATION_PARAGRAPHS, EDUCATION_SECTION } from "@/content/education";
import Section from "@/components/ui/Section";

export default function Education({ lang }: { lang: Lang }) {
  return (
    <Section
      id={EDUCATION_SECTION.id}
      chip={EDUCATION_SECTION.chip}
      title={pick(lang, EDUCATION_SECTION.title)}
    >
      {EDUCATION_PARAGRAPHS.map((paragraph, i) => (
        <p key={i} className="sub">
          {pick(lang, paragraph)}
        </p>
      ))}
    </Section>
  );
}
