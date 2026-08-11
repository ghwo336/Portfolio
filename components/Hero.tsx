import { pick, type Lang } from "@/lib/i18n";
import { HERO } from "@/content/hero";

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <img className="pelican-badge slide" src={HERO.badgeSrc} alt="" />
          <h1 className="slide">
            {pick(lang, HERO.name)} <span>{HERO.role}</span>
          </h1>
        </div>
        <img
          className="hero-photo slide"
          src={HERO.image.src}
          alt={pick(lang, HERO.image.alt)}
          fetchPriority="high"
        />
      </div>
    </header>
  );
}
