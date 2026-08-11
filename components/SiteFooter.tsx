import { pick, type Lang } from "@/lib/i18n";
import { FOOTER_SECTION } from "@/content/footer";
import Section from "@/components/ui/Section";
import ContactLinks from "@/components/ui/ContactLinks";

export default function SiteFooter({ lang }: { lang: Lang }) {
  return (
    <Section
      as="footer"
      chip={FOOTER_SECTION.chip}
      title={pick(lang, FOOTER_SECTION.title)}
    >
      <ContactLinks className="foot-links" />
    </Section>
  );
}
