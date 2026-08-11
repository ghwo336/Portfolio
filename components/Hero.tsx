import type { Lang } from "@/lib/i18n";

export default function Hero({ lang }: { lang: Lang }) {
  const en = lang === "en";
  return (
    <header className="hero">
      <img
        className="hero-img"
        src="/injective-presetation.jpeg"
        alt={
          en
            ? "Hojae Lee presenting at the Injective AI Agentic Finance Forum"
            : "인젝티브 AI Agentic Finance Forum에서 발표 중인 이호재"
        }
        fetchPriority="high"
      />
      <div className="chyron">
        <div className="chyron-inner">
          <img className="pelican-badge slide" src="/myProfile.png" alt="" />
          <h1 className="slide">
            {en ? (
              <>
                Hojae Lee <span>Web3 Builder & Educator</span>
              </>
            ) : (
              <>
                이호재 <span>Web3 Builder & Educator</span>
              </>
            )}
          </h1>
        </div>
      </div>
    </header>
  );
}
