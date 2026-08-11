import { pick, type Lang } from "@/lib/i18n";
import type { LinkItem } from "@/content/types";

/** 카드 하단의 외부 링크 묶음(.more) */
export default function MoreLinks({
  lang,
  links,
}: {
  lang: Lang;
  links: LinkItem[];
}) {
  return (
    <p className="more">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {pick(lang, link.label)}
        </a>
      ))}
    </p>
  );
}
