import type { Metadata } from "next";
import type { Lang, Localized } from "@/lib/i18n";

export const SITE_META: Record<Lang, Metadata> = {
  ko: {
    title: "이호재 | Web3 Builder",
    description:
      "이호재(Hojae Lee)는 무대에서 발표하고, geth를 가르치고, 규제 친화적 온체인 금융을 빌드합니다.",
    robots: { index: false },
  },
  en: {
    title: "Hojae Lee | Web3 Builder",
    description:
      "Hojae Lee speaks on stage, teaches geth internals, and builds regulation-friendly on-chain finance.",
  },
};

/** 언어 전환 버튼: 현재 언어 기준으로 이동할 곳과 라벨 */
export const LANG_TOGGLE: Localized<{
  href: string;
  label: string;
  ariaLabel: string;
}> = {
  ko: { href: "/en", label: "EN", ariaLabel: "View in English" },
  en: { href: "/", label: "한국어", ariaLabel: "한국어로 보기" },
};
