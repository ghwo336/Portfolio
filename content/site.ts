import type { Metadata } from "next";
import type { Lang, Localized } from "@/lib/i18n";

export const SITE_META: Record<Lang, Metadata> = {
  ko: {
    title: "이호재 | 펠리컨을 좋아하는 Web3 Builder",
    description: "펠리컨을 좋아하는 Web3 Builder, 이호재입니다.",
    openGraph: {
      title: "이호재 | 펠리컨을 좋아하는 Web3 Builder",
      description: "펠리컨을 좋아하는 Web3 Builder, 이호재입니다.",
      url: "https://pelicanlab.dev/",
      siteName: "pelicanlab.dev",
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "이호재 | 펠리컨을 좋아하는 Web3 Builder",
      description: "펠리컨을 좋아하는 Web3 Builder, 이호재입니다.",
    },
    robots: { index: false },
  },
  en: {
    title: "Hojae Lee | Web3 Builder Who Loves Pelicans",
    description: "Hojae Lee is a Web3 builder who loves pelicans.",
    openGraph: {
      title: "Hojae Lee | Web3 Builder Who Loves Pelicans",
      description: "Hojae Lee is a Web3 builder who loves pelicans.",
      url: "https://pelicanlab.dev/en",
      siteName: "pelicanlab.dev",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "Hojae Lee | Web3 Builder Who Loves Pelicans",
      description: "Hojae Lee is a Web3 builder who loves pelicans.",
    },
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
