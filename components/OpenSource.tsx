import { pick, type Lang } from "@/lib/i18n";
import { OSS, OSS_LEAD, OSS_SECTION } from "@/content/opensource";
import CardSection from "@/components/ui/CardSection";

export default function OpenSource({ lang }: { lang: Lang }) {
  return (
    <CardSection
      lang={lang}
      section={OSS_SECTION}
      lead={pick(lang, OSS_LEAD)}
      items={OSS}
    />
  );
}
