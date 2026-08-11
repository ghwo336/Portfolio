import type { ReactNode } from "react";
import type { Localized } from "@/lib/i18n";
import type { SectionInfo } from "@/content/types";

export const HISTORY_SECTION: SectionInfo = {
  id: "history",
  chip: "0x05 HISTORY",
  title: { ko: "이력", en: "History" },
};

export type HistoryRow = {
  period: string;
  body: Localized<ReactNode>;
};

export const HISTORY_ROWS: HistoryRow[] = [
  {
    period: "2026.07 ~",
    body: {
      ko: (
        <>
          <b>BAY(Blockchain at Yonsei)</b> 18기 개발팀장
        </>
      ),
      en: (
        <>
          <b>BAY (Blockchain at Yonsei)</b> Dev Team Lead, 18th cohort
        </>
      ),
    },
  },
  {
    period: "2026.04 ~",
    body: {
      ko: (
        <>
          <b>ChainLens</b> 파운더 (EasyA Kickstart 지원 프로젝트)
        </>
      ),
      en: (
        <>
          <b>ChainLens</b> Founder (EasyA Kickstart-backed)
        </>
      ),
    },
  },
  {
    period: "2026.03 ~ 2027.02",
    body: {
      ko: (
        <>
          <b>Injective NinjaLabs</b> 2기 멤버
        </>
      ),
      en: (
        <>
          <b>Injective NinjaLabs</b> Cohort 2 Member
        </>
      ),
    },
  },
  {
    period: "2026.02 ~ 2026.06",
    body: {
      ko: (
        <>
          <b>BAY(Blockchain at Yonsei)</b> 온보딩팀
        </>
      ),
      en: (
        <>
          <b>BAY (Blockchain at Yonsei)</b> Onboarding Team
        </>
      ),
    },
  },
  {
    period: "2023.03 ~ 2025.09",
    body: {
      ko: (
        <>
          <b>HiARC</b> 홍익대 알고리즘 학회 운영진 &amp; 개발팀
        </>
      ),
      en: (
        <>
          <b>HiARC</b> (Hongik Algorithm Club) Operations &amp; Dev Team
        </>
      ),
    },
  },
  {
    period: "2023.03 ~",
    body: {
      ko: (
        <>
          <b>홍익대학교</b> 컴퓨터공학과 재학 (2027.02 졸업 예정)
        </>
      ),
      en: (
        <>
          <b>Hongik University</b> Dept. of Computer Engineering (graduating
          Feb 2027)
        </>
      ),
    },
  },
  {
    period: "2019.03 ~ 2020.10",
    body: {
      ko: (
        <>
          <b>대한민국 육군</b> 병장 만기전역
        </>
      ),
      en: (
        <>
          <b>Republic of Korea Army</b> completed mandatory service (Sergeant)
        </>
      ),
    },
  },
];

/** 진행 중(~)인 기간 뒤에 붙는 표기 */
export const HISTORY_NOW: Localized = { ko: "현재", en: "present" };
