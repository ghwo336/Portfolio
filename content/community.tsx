import { both } from "@/lib/i18n";
import type { CardItem, SectionInfo } from "@/content/types";

export const COMMUNITY_SECTION: SectionInfo = {
  id: "community",
  chip: "0x05 COMMUNITY & GROWTH",
  title: { ko: "커뮤니티 활동", en: "Community" },
};

export const COMMUNITY: CardItem[] = [
  {
    title: both("BAY(Blockchain at Yonsei)"),
    meta: {
      ko: "18기 개발팀장, 2026.07 ~ 현재",
      en: "18TH-COHORT DEV TEAM LEAD, 2026.07 ~ PRESENT",
    },
    body: {
      ko: "온보딩팀을 거쳐 지금은 개발팀장으로 운영진을 맡고 있습니다. 학회 개발 세션을 기획하고 geth 코어 스터디를 이끌고 있습니다.",
      en: "Started on the onboarding team, and now serve in the club's leadership as dev team lead. I plan the club's dev sessions and run the geth core study.",
    },
  },
  {
    title: both("NinjaLabs"),
    meta: both("INJECTIVE KOREA, 2026.03 ~ 2027.02"),
    body: {
      ko: "랜딩, 온보딩, 데이터 페이지 작업에서 PM 역할을 맡아 인젝티브 운영진과 팀 사이 커뮤니케이션을 담당했습니다. 침체된 커뮤니티에서 자발적으로 행사를 유치하고 해커톤 출전을 이끌었습니다.",
      en: "Took the PM role for the landing, onboarding and data pages, handling communication between the Injective team and ours. Voluntarily brought events to a quiet community and led our hackathon participation.",
    },
  },
  {
    title: { ko: "ChainLens 𝕏 운영", en: "ChainLens 𝕏 account" },
    meta: both("CONTENT → COMMUNITY"),
    body: {
      ko: "프로젝트 계정을 0에서 개설해 콘텐츠로 초기 커뮤니티를 만들었습니다. 포스팅 하나가 시장 반응으로 직결되는 것을 직접 경험하며, 개발자 대상 콘텐츠의 힘을 배웠습니다.",
      en: "Opened the project account from zero and built the early community with content. Watching a single post translate directly into market reaction taught me the power of developer-facing content.",
    },
    links: [
      {
        href: "https://x.com/chainlens402",
        label: both("𝕏 @chainlens402"),
      },
    ],
  },
  {
    title: {
      ko: "HiARC(홍익대 알고리즘 학회)",
      en: "HiARC (Hongik Algorithm Club)",
    },
    meta: {
      ko: "운영진 & 개발팀, 2023.03 ~ 2025.09",
      en: "OPERATIONS & DEV TEAM, 2023.03 ~ 2025.09",
    },
    body: {
      ko: "컴퓨터공학과 입학 후 첫 커뮤니티 활동입니다. 여러 행사를 기획해 학회원들의 친목을 도왔고, 팀을 꾸려 알고리즘 대회에서 수상하기도 했습니다. 이후에는 개발팀으로 학생들이 알고리즘을 즐겁게 풀 수 있는 경쟁 시스템을 개발했습니다.",
      en: "My first community after entering the computer engineering program. Organized events that brought club members closer, formed a team that won an algorithm contest, and later joined the dev team to build a competition system that makes solving algorithm problems fun.",
    },
  },
];
