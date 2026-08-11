import type { ReactNode } from "react";
import type { Localized } from "@/lib/i18n";

export const INTRO_LEAD: Localized<ReactNode> = {
  ko: (
    <>
      홍익대학교 컴퓨터공학과 4학년, 세상의 문제를 찾아 해결하는 Problem
      Solver입니다. 지금은 BAY(Blockchain at Yonsei) 18기 개발팀장을 맡고
      있습니다. 누구도 제어하지 못하는 내 재화를{" "}
      <strong>코드로 직접 제어할 수 있다</strong>는 매력에 빠져 블록체인을
      좋아하게 됐고, 어려운 개념을 쉽게 풀어 설명하는 게 좋아 3년째 수학을
      가르치고 있습니다. 자기 입보다 큰 동물 앞에서도 일단 입을 벌리고 보는
      펠리컨처럼, 새로운 도전을 두려워하지 않습니다.
    </>
  ),
  en: (
    <>
      I&apos;m a senior in Computer Engineering at Hongik University and a
      problem solver who goes looking for problems worth solving. I currently
      lead the 18th-cohort dev team at BAY (Blockchain at Yonsei). I got into
      blockchain because{" "}
      <strong>it lets me control my own assets with code</strong> that no one
      else can touch, and I&apos;ve taught high school math for three years
      because I love making hard concepts easy. Like a pelican that opens its
      beak even when the thing in front of it is bigger than its mouth,
      I&apos;m not afraid of new challenges.
    </>
  ),
};
