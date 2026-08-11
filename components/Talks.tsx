import type { Lang } from "@/lib/i18n";
import { TALKS, TALKS_SECTION } from "@/content/talks";
import CardSection from "@/components/ui/CardSection";

export default function Talks({ lang }: { lang: Lang }) {
  return <CardSection lang={lang} section={TALKS_SECTION} items={TALKS} />;
}
