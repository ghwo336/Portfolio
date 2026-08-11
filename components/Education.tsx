import type { Lang } from "@/lib/i18n";

export default function Education({ lang }: { lang: Lang }) {
  const en = lang === "en";
  return (
    <section id="education">
      <div className="wrap">
        <span className="chip" data-type="0x02 TECHNICAL EDUCATION"></span>
        <h2>{en ? "Teaching" : "강의 경험"}</h2>
        {en ? (
          <p className="sub">
            As the 18th-cohort dev team lead at BAY (Blockchain at Yonsei), I
            analyze the geth (Go-Ethereum) codebase, write the lecture
            materials, teach a one-hour session every Thursday, and help
            members review with quizzes. The curriculum is designed so members
            new to both Go and geth can follow all the way into the internals
            of an EVM client. Materials are self-hosted at{" "}
            <a
              href="https://baydev.pelicanlab.dev/lectures"
              target="_blank"
              rel="noopener noreferrer"
            >
              baydev.pelicanlab.dev
            </a>
            .
          </p>
        ) : (
          <p className="sub">
            BAY(Blockchain at Yonsei) 18기 개발팀장으로, geth(Go-Ethereum)
            코드베이스를 직접 분석해 강의자료를 만들고 매주 목요일 한 시간씩
            강의하고 퀴즈로 복습을 돕습니다. Go도 geth도 처음인 학회원이 EVM
            클라이언트 내부까지 따라올 수 있게 커리큘럼을 짭니다. 강의자료는{" "}
            <a
              href="https://baydev.pelicanlab.dev/lectures"
              target="_blank"
              rel="noopener noreferrer"
            >
              baydev.pelicanlab.dev
            </a>
            에서 직접 호스팅합니다.
          </p>
        )}
        <p className="sub">
          {en
            ? "I have also been teaching high school math for three years (Nov 2022 ~ present): diagnosing each student's level, explaining at their pace, and checking that they truly understand."
            : "3년째(2022.11 ~ 현재) 고등학생에게 수학을 가르치고 있습니다. 학생마다 다른 이해 수준을 진단하고, 눈높이에 맞춰 설명하고, 이해했는지 확인하여 아이들의 이해를 도우려고 노력해왔습니다."}
        </p>
      </div>
    </section>
  );
}
