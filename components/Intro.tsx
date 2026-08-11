import { pick, type Lang } from "@/lib/i18n";
import { INTRO_LEAD } from "@/content/intro";
import ContactLinks from "@/components/ui/ContactLinks";

export default function Intro({ lang }: { lang: Lang }) {
  return (
    <div className="intro">
      <div className="wrap">
        <p className="lead">{pick(lang, INTRO_LEAD)}</p>
        <ContactLinks className="links" />
      </div>
    </div>
  );
}
