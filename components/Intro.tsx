import { pick, type Lang } from "@/lib/i18n";
import { INTRO_LEAD } from "@/content/intro";

export default function Intro({ lang }: { lang: Lang }) {
  return (
    <div className="intro">
      <div className="wrap">
        <p className="lead">{pick(lang, INTRO_LEAD)}</p>
      </div>
    </div>
  );
}
