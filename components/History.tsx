import { pick, type Lang } from "@/lib/i18n";
import {
  HISTORY_NOW,
  HISTORY_ROWS,
  HISTORY_SECTION,
} from "@/content/history";
import Section from "@/components/ui/Section";

export default function History({ lang }: { lang: Lang }) {
  const now = pick(lang, HISTORY_NOW);
  return (
    <Section
      id={HISTORY_SECTION.id}
      chip={HISTORY_SECTION.chip}
      title={pick(lang, HISTORY_SECTION.title)}
    >
      <ul className="history-list rv">
        {HISTORY_ROWS.map((row) => (
          <li key={row.period}>
            <span className="period">
              {row.period.endsWith("~") ? `${row.period} ${now}` : row.period}
            </span>
            <span>{pick(lang, row.body)}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
