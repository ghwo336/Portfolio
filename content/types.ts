import type { ReactNode } from "react";
import type { Localized } from "@/lib/i18n";

/** 섹션 헤더(칩 라벨 + 제목) */
export type SectionInfo = {
  id?: string;
  chip: string;
  title: Localized<string>;
};

/** 외부 링크 */
export type LinkItem = {
  href: string;
  label: Localized<string>;
};

export type TagKind = "wip" | "plan" | "sunset" | "build" | "merged";

/** 카드형 섹션(발표, 프로젝트, 커뮤니티)의 항목 */
export type CardItem = {
  title: Localized<ReactNode>;
  tag?: { kind: TagKind; label: Localized<string> };
  meta: Localized<ReactNode>;
  body: Localized<ReactNode>;
  links?: LinkItem[];
};
