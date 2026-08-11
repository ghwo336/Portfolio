import type { Lang } from "@/lib/i18n";
import { PROJECTS, PROJECTS_SECTION } from "@/content/projects";
import CardSection from "@/components/ui/CardSection";

export default function Projects({ lang }: { lang: Lang }) {
  return (
    <CardSection lang={lang} section={PROJECTS_SECTION} items={PROJECTS} />
  );
}
