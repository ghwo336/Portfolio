import type { ReactNode } from "react";
import type { Localized } from "@/lib/i18n";
import type { SectionInfo } from "@/content/types";
import { OSS_SECTION } from "@/content/opensource";

export const EDUCATION_SECTION: SectionInfo = {
  id: "education",
  chip: "0x02 TECHNICAL EDUCATION",
  title: { ko: "강의 경험", en: "Teaching" },
};

const LECTURES_URL = "https://baydev.pelicanlab.dev/lectures";
/** 오픈소스 기여 섹션으로 가는 페이지 내 앵커 */
const OSS_ANCHOR = `#${OSS_SECTION.id}`;

export const EDUCATION_PARAGRAPHS: Localized<ReactNode>[] = [
  {
    ko: (
      <>
        BAY(Blockchain at Yonsei) 18기 개발팀장으로, geth(Go-Ethereum)
        코드베이스를 직접 분석해 강의자료를 만들고 매주 목요일 한 시간씩
        강의하고 퀴즈로 복습을 돕습니다. Go도 geth도 처음인 학회원이 EVM
        클라이언트 내부까지 따라올 수 있게 커리큘럼을 짭니다. 강의자료는{" "}
        <a href={LECTURES_URL} target="_blank" rel="noopener noreferrer">
          baydev.pelicanlab.dev
        </a>
        에서 직접 호스팅합니다. 강의 준비 중 읽은 코드에서 찾은 버그는{" "}
        <a href={OSS_ANCHOR}>go-ethereum에 직접 고쳐 보내</a> 머지되었습니다.
      </>
    ),
    en: (
      <>
        As the 18th-cohort dev team lead at BAY (Blockchain at Yonsei), I
        analyze the geth (Go-Ethereum) codebase, write the lecture materials,
        teach a one-hour session every Thursday, and help members review with
        quizzes. The curriculum is designed so members new to both Go and geth
        can follow all the way into the internals of an EVM client. Materials
        are self-hosted at{" "}
        <a href={LECTURES_URL} target="_blank" rel="noopener noreferrer">
          baydev.pelicanlab.dev
        </a>
        . Bugs I found in the code while preparing those lectures were{" "}
        <a href={OSS_ANCHOR}>fixed and merged upstream in go-ethereum</a>.
      </>
    ),
  },
  {
    ko: "3년째(2022.11 ~ 현재) 고등학생에게 수학을 가르치고 있습니다. 학생마다 다른 이해 수준을 진단하고, 눈높이에 맞춰 설명하고, 이해했는지 확인하여 아이들의 이해를 도우려고 노력해왔습니다.",
    en: "I have also been teaching high school math for three years (Nov 2022 ~ present): diagnosing each student's level, explaining at their pace, and checking that they truly understand.",
  },
];
