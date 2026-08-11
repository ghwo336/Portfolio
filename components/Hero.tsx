import { pick, type Lang } from "@/lib/i18n";
import { HERO } from "@/content/hero";

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <header className="hero">
      <img
        className="hero-img"
        src={HERO.image.src}
        alt={pick(lang, HERO.image.alt)}
        fetchPriority="high"
      />
      <div className="chyron">
        <div className="chyron-inner">
          <img className="pelican-badge slide" src={HERO.badgeSrc} alt="" />
          <h1 className="slide">
            {pick(lang, HERO.name)} <span>{HERO.role}</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
