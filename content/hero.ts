import type { Localized } from "@/lib/i18n";

export const HERO: {
  image: { src: string; alt: Localized };
  badgeSrc: string;
  name: Localized;
  role: string;
} = {
  image: {
    src: "/injective-presetation.jpeg",
    alt: {
      ko: "인젝티브 AI Agentic Finance Forum에서 발표 중인 이호재",
      en: "Hojae Lee presenting at the Injective AI Agentic Finance Forum",
    },
  },
  badgeSrc: "/myProfile.png",
  name: { ko: "이호재", en: "Hojae Lee" },
  role: "Web3 Builder & Educator",
};
