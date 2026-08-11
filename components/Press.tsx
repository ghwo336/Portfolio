import type { Lang } from "@/lib/i18n";

export default function Press({ lang }: { lang: Lang }) {
  const en = lang === "en";
  return (
    <section id="press">
      <div className="wrap">
        <span className="chip" data-type="0x06 PRESS & RECOGNITION"></span>
        <h2>{en ? "Awards & Press" : "수상 및 기록"}</h2>
        <div className="press-grid">
          <figure className="rv">
            <img
              className="talk-photo"
              src="/vera.jpeg"
              alt={
                en
                  ? "Excellence Award ceremony, 2026 AI·SW University AI·Blockchain Business Model Competition"
                  : "2026 AI·SW중심대학 AI·블록체인 비즈니스 모델 경진대회 우수상 시상"
              }
            />
            <figcaption>
              {en
                ? "Excellence Award, AI·SW University Competition · VERA"
                : "AI·SW중심대학 경진대회 우수상 (VERA)"}
            </figcaption>
          </figure>
          <ul className="award-list rv">
            <li>
              <span className="yr">2026</span>
              <span>
                {en ? (
                  <>
                    <b>Excellence Award</b>, AI·SW University AI·Blockchain
                    Business Model Competition (VERA),{" "}
                  </>
                ) : (
                  <>
                    AI·SW중심대학 AI·블록체인 비즈니스 모델 경진대회{" "}
                    <b>우수상</b> (VERA),{" "}
                  </>
                )}
                <a
                  href="https://biz.heraldcorp.com/article/10736228"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {en ? "Herald Business interview" : "헤럴드경제 인터뷰"}
                </a>
              </span>
            </li>
            <li>
              <span className="yr">2026</span>
              <span>
                {en ? (
                  <>
                    <b>Top 10 finalist</b>, MSIT DID Mobile ID AI·Blockchain
                    Hackathon (VeraWallet), competition ongoing
                  </>
                ) : (
                  <>
                    과기부 DID 모바일 신분증 활용 AI·블록체인 해커톤{" "}
                    <b>본선 Top 10</b> (VeraWallet), 대회 진행 중
                  </>
                )}
              </span>
            </li>
            <li>
              <span className="yr">2026</span>
              <span>
                {en ? (
                  <>
                    Consensus Miami Hackathon <b>Finalist</b>, invited 30-min
                    EasyA session
                  </>
                ) : (
                  <>
                    Consensus Miami Hackathon <b>Finalist</b>, EasyA 초청
                    30분 세션
                  </>
                )}
              </span>
            </li>
            <li>
              <span className="yr">2026</span>
              <span>
                {en ? (
                  <>
                    ChainLens mentioned in a <b>CoinDesk article</b>,{" "}
                  </>
                ) : (
                  <>
                    <b>CoinDesk 기사</b>에 ChainLens 언급,{" "}
                  </>
                )}
                <a
                  href="https://www.coindesk.com/tech/2026/05/08/ai-agents-fueled-a-frenzy-of-startup-building-at-the-consensus-miami-easya-hackathon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {en ? "Read article" : "기사 보기"}
                </a>
              </span>
            </li>
            <li>
              <span className="yr">2026</span>
              <span>
                {en ? (
                  <>
                    Injective official event{" "}
                    <b>AI Agentic Finance Forum live demo</b>
                  </>
                ) : (
                  <>
                    Injective 공식 행사{" "}
                    <b>AI Agentic Finance Forum 라이브 데모</b>
                  </>
                )}
              </span>
            </li>
            <li>
              <span className="yr">2026</span>
              <span>
                Solana Startup Village <b>Student Award</b> ($1,500)
              </span>
            </li>
            <li>
              <span className="yr">2026</span>
              <span>
                WorldLand <b>Grant</b> (Pawnable, 20,000 WL)
              </span>
            </li>
            <li>
              <span className="yr">2025</span>
              <span>
                {en ? (
                  <>
                    ICPC Korea: passed the preliminary, <b>advanced to the regional finals</b>
                  </>
                ) : (
                  <>
                    ICPC 한국 예선 통과, <b>본선 진출</b>
                  </>
                )}
              </span>
            </li>
            <li>
              <span className="yr">2025</span>
              <span>
                {en ? (
                  <>
                    <b>Bronze Award</b>, Sinchon Universities Algorithm Contest
                    (SUAPC 2025 Summer),{" "}
                  </>
                ) : (
                  <>
                    신촌 연합 알고리즘 대회(SUAPC 2025 Summer) <b>동상</b>,{" "}
                  </>
                )}
                <a
                  href="https://icpc-sinchon.io/suapc/2025-Summer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {en ? "Results" : "대회 기록"}
                </a>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
