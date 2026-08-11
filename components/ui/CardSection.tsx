import { pick, type Lang } from "@/lib/i18n";
import type { CardItem, SectionInfo } from "@/content/types";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

/** 카드 목록으로 이루어진 섹션(발표, 프로젝트, 커뮤니티) */
export default function CardSection({
  lang,
  section,
  items,
}: {
  lang: Lang;
  section: SectionInfo;
  items: CardItem[];
}) {
  return (
    <Section
      id={section.id}
      chip={section.chip}
      title={pick(lang, section.title)}
    >
      {items.map((item, i) => (
        <Card key={i} lang={lang} item={item} />
      ))}
    </Section>
  );
}
