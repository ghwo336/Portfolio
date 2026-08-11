import { both } from "@/lib/i18n";
import type { CardItem, SectionInfo } from "@/content/types";

export const TALKS_SECTION: SectionInfo = {
  id: "talks",
  chip: "0x01 TALKS & DEMOS",
  title: { ko: "발표 경험", en: "Talks" },
};

export const TALKS: CardItem[] = [
  {
    title: {
      ko: "Consensus Hong Kong: 첫 영어 발표",
      en: "Consensus Hong Kong: First Talk in English",
    },
    meta: both("2026.02, HONG KONG"),
    body: {
      ko: "Web3 판에 들어온 지 얼마 되지 않았을 때 나간 첫 글로벌 해커톤. 부족한 영어로 무대에 서던 경험이 이후 모든 발표의 출발점이 되었습니다.",
      en: "My first global hackathon, entered not long after I got into Web3. Standing on stage with imperfect English became the starting point for every talk since.",
    },
    links: [
      {
        href: "https://drive.google.com/file/d/175nXSya9O2pQxnw48sCfQM7eF6FghmcN/view",
        label: { ko: "▶ 발표 영상", en: "▶ Talk video" },
      },
    ],
  },
  {
    title: {
      ko: "Injective 공식 행사: AI Agentic Finance Forum",
      en: "Injective Official Event: AI Agentic Finance Forum",
    },
    meta: both("2026.04, SEOUL, LIVE DEMO"),
    body: {
      ko: "AI 에이전트가 Injective MCP로 온체인 트레이딩을 수행하는 과정을 라이브로 시연했습니다. Injective Korea 공식 X 계정에 소개되었습니다.",
      en: "Live demo of an AI agent executing on-chain trades through the Injective MCP. Featured on the official Injective Korea X account.",
    },
    links: [
      {
        href: "https://x.com/InjectiveKR/status/2043495069542703172",
        label: { ko: "𝕏 공식 계정 소개 포스트", en: "𝕏 official shoutout" },
      },
      {
        href: "https://luma.com/3y4qknui",
        label: { ko: "행사 페이지", en: "Event page" },
      },
    ],
  },
  {
    title: {
      ko: "Consensus Miami: EasyA 초청 30분 단독 세션",
      en: "Consensus Miami: Invited 30-min Solo Session by EasyA",
    },
    meta: both("2026.05, MIAMI, INVITED TALK"),
    body: {
      ko: "해커톤 주최사 EasyA 창립자가 ChainLens 데모를 보고 직접 세션을 제안했습니다. AI 에이전트의 결제와 거래 활용을 주제로 30분간 발표했고, 같은 대회 해커톤에서 파이널리스트에 올랐습니다. ChainLens는 CoinDesk의 행사 기사에도 언급되었습니다.",
      en: "After seeing the ChainLens demo, EasyA's founder invited me to speak. I gave a 30-minute session on how AI agents use payments and trading, and made finalist in the hackathon at the same event. ChainLens was also mentioned in CoinDesk's coverage.",
    },
    links: [
      {
        href: "https://x.com/easya_app/status/2053555489326178802",
        label: { ko: "𝕏 EasyA 샤라웃", en: "𝕏 EasyA shoutout" },
      },
      {
        href: "https://x.com/EasyA_Kickstart/status/2055314911119442171",
        label: { ko: "인터뷰 영상", en: "Interview video" },
      },
      {
        href: "https://www.coindesk.com/tech/2026/05/08/ai-agents-fueled-a-frenzy-of-startup-building-at-the-consensus-miami-easya-hackathon",
        label: { ko: "CoinDesk 기사", en: "CoinDesk article" },
      },
      {
        href: "https://easya-ltd.notion.site/EasyA-Consensus-Hackathon-Miami-9c6bf8719d6d824f815581afc05febee",
        label: { ko: "행사 타임테이블", en: "Event timetable" },
      },
    ],
  },
];
