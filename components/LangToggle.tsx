import { pick, type Lang } from "@/lib/i18n";
import { LANG_TOGGLE } from "@/content/site";

/** 우상단 언어 전환 버튼 */
export default function LangToggle({ lang }: { lang: Lang }) {
  const toggle = pick(lang, LANG_TOGGLE);
  return (
    <a
      className="lang-toggle"
      href={toggle.href}
      aria-label={toggle.ariaLabel}
    >
      {toggle.label}
    </a>
  );
}
