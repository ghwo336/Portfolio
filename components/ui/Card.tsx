import { pick, type Lang } from "@/lib/i18n";
import type { CardItem } from "@/content/types";
import MoreLinks from "@/components/ui/MoreLinks";

/** 제목 + 태그 + 메타 + 본문 + 링크로 이루어진 카드 하나 */
export default function Card({ lang, item }: { lang: Lang; item: CardItem }) {
  return (
    <div className="card rv">
      <h3>
        {pick(lang, item.title)}
        {item.tag && (
          <>
            {" "}
            <span className={`tag ${item.tag.kind}`}>
              {pick(lang, item.tag.label)}
            </span>
          </>
        )}
      </h3>
      <p className="meta">{pick(lang, item.meta)}</p>
      <p>{pick(lang, item.body)}</p>
      {item.links && item.links.length > 0 && (
        <MoreLinks lang={lang} links={item.links} />
      )}
    </div>
  );
}
