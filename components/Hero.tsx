import { pick, type Lang } from "@/lib/i18n";
import { HERO } from "@/content/hero";

export default function Hero({ lang }: { lang: Lang }) {
  return (
    <header className="hero">
      <div className="wrap hero-inner">
        <img
          className="hero-photo slide"
          src={HERO.image.src}
          alt={pick(lang, HERO.image.alt)}
          fetchPriority="high"
        />
        <div className="hero-text">
          <h1 className="slide">
            <img className="pelican-badge" src={HERO.badgeSrc} alt="" />
            {pick(lang, HERO.name)} <span>{HERO.role}</span>
          </h1>
        </div>
      </div>
    </header>
  );
}
