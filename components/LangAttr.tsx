"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n";

/** html lang 속성을 현재 페이지 언어로 맞춘다 (루트 레이아웃은 ko 고정이라서) */
export default function LangAttr({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
