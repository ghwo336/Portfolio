import type { ReactNode } from "react";
import { both, type Localized } from "@/lib/i18n";
import type { LinkItem, SectionInfo } from "@/content/types";

export const PRESS_SECTION: SectionInfo = {
  id: "press",
  chip: "0x06 PRESS & RECOGNITION",
  title: { ko: "수상 및 기록", en: "Awards & Press" },
};

export const PRESS_FIGURE: {
  src: string;
  alt: Localized;
  caption: Localized;
} = {
  src: "/vera.jpeg",
  alt: {
    ko: "2026 AI·SW중심대학 AI·블록체인 비즈니스 모델 경진대회 우수상 시상",
    en: "Excellence Award ceremony, 2026 AI·SW University AI·Blockchain Business Model Competition",
  },
  caption: {
    ko: "AI·SW중심대학 경진대회 우수상 (VERA)",
    en: "Excellence Award, AI·SW University Competition · VERA",
  },
};

export type Award = {
  year: string;
  body: Localized<ReactNode>;
  link?: LinkItem;
};

export const AWARDS: Award[] = [
  {
    year: "2026",
    body: {
      ko: (
        <>
          AI·SW중심대학 AI·블록체인 비즈니스 모델 경진대회 <b>우수상</b>{" "}
          (VERA),{" "}
        </>
      ),
      en: (
        <>
          <b>Excellence Award</b>, AI·SW University AI·Blockchain Business
          Model Competition (VERA),{" "}
        </>
      ),
    },
    link: {
      href: "https://biz.heraldcorp.com/article/10736228",
      label: { ko: "헤럴드경제 인터뷰", en: "Herald Business interview" },
    },
  },
  {
    year: "2026",
    body: {
      ko: (
        <>
          과기부 DID 모바일 신분증 활용 AI·블록체인 해커톤 <b>본선 Top 10</b>{" "}
          (VeraWallet), 대회 진행 중
        </>
      ),
      en: (
        <>
          <b>Top 10 finalist</b>, MSIT DID Mobile ID AI·Blockchain Hackathon
          (VeraWallet), competition ongoing
        </>
      ),
    },
  },
  {
    year: "2026",
    body: {
      ko: (
        <>
          Consensus Miami Hackathon <b>Finalist</b>, EasyA 초청 30분 세션
        </>
      ),
      en: (
        <>
          Consensus Miami Hackathon <b>Finalist</b>, invited 30-min EasyA
          session
        </>
      ),
    },
  },
  {
    year: "2026",
    body: {
      ko: (
        <>
          <b>CoinDesk 기사</b>에 ChainLens 언급,{" "}
        </>
      ),
      en: (
        <>
          ChainLens mentioned in a <b>CoinDesk article</b>,{" "}
        </>
      ),
    },
    link: {
      href: "https://www.coindesk.com/tech/2026/05/08/ai-agents-fueled-a-frenzy-of-startup-building-at-the-consensus-miami-easya-hackathon",
      label: { ko: "기사 보기", en: "Read article" },
    },
  },
  {
    year: "2026",
    body: {
      ko: (
        <>
          Injective 공식 행사 <b>AI Agentic Finance Forum 라이브 데모</b>
        </>
      ),
      en: (
        <>
          Injective official event <b>AI Agentic Finance Forum live demo</b>
        </>
      ),
    },
  },
  {
    year: "2026",
    body: both(
      <>
        Solana Startup Village <b>Student Award</b> ($1,500)
      </>
    ),
  },
  {
    year: "2026",
    body: both(
      <>
        WorldLand <b>Grant</b> (Pawnable, 20,000 WL)
      </>
    ),
  },
  {
    year: "2025",
    body: {
      ko: (
        <>
          ICPC 한국 예선 통과, <b>본선 진출</b>
        </>
      ),
      en: (
        <>
          ICPC Korea: passed the preliminary, <b>advanced to the regional
          finals</b>
        </>
      ),
    },
  },
  {
    year: "2025",
    body: {
      ko: (
        <>
          신촌 연합 알고리즘 대회(SUAPC 2025 Summer) <b>동상</b>,{" "}
        </>
      ),
      en: (
        <>
          <b>Bronze Award</b>, Sinchon Universities Algorithm Contest (SUAPC
          2025 Summer),{" "}
        </>
      ),
    },
    link: {
      href: "https://icpc-sinchon.io/suapc/2025-Summer",
      label: { ko: "대회 기록", en: "Results" },
    },
  },
];
