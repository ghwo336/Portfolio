import type { Lang } from "@/lib/i18n";

const ROWS: {
  period: string;
  ko: React.ReactNode;
  en: React.ReactNode;
}[] = [
  {
    period: "2026.07 ~",
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
  {
    period: "2026.04 ~",
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
  {
    period: "2026.03 ~ 2027.02",
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
  {
    period: "2026.02 ~ 2026.06",
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
  {
    period: "2023.03 ~ 2025.09",
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
  {
    period: "2023.03 ~",
    ko: (
      <>
        <b>홍익대학교</b> 컴퓨터공학과 재학 (2027.02 졸업 예정)
      </>
    ),
    en: (
      <>
        <b>Hongik University</b> Dept. of Computer Engineering (graduating Feb
        2027)
      </>
    ),
  },
  {
    period: "2019.03 ~ 2020.10",
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
];

export default function History({ lang }: { lang: Lang }) {
  const en = lang === "en";
  const now = en ? "present" : "현재";
  return (
    <section id="history">
      <div className="wrap">
        <span className="chip" data-type="0x05 HISTORY"></span>
        <h2>{en ? "History" : "이력"}</h2>
        <ul className="history-list rv">
          {ROWS.map((row, i) => (
            <li key={i}>
              <span className="period">
                {row.period.endsWith("~") ? `${row.period} ${now}` : row.period}
              </span>
              <span>{en ? row.en : row.ko}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
