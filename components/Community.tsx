import type { Lang } from "@/lib/i18n";
import { COMMUNITY, COMMUNITY_SECTION } from "@/content/community";
import CardSection from "@/components/ui/CardSection";

export default function Community({ lang }: { lang: Lang }) {
  return (
    <CardSection lang={lang} section={COMMUNITY_SECTION} items={COMMUNITY} />
  );
}
