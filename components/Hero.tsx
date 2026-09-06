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
        <div className="hero-text slide">
          <div className="hero-name">
            <h1>{pick(lang, HERO.name)}</h1>
            <img className="pelican-badge" src={HERO.badgeSrc} alt="" />
          </div>
          <p className="hero-role">{HERO.role}</p>
        </div>
      </div>
    </header>
  );
}
