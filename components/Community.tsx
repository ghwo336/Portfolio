import type { Lang } from "@/lib/i18n";

export default function Community({ lang }: { lang: Lang }) {
  const en = lang === "en";
  return (
    <section id="community">
      <div className="wrap">
        <span className="chip" data-type="0x04 COMMUNITY & GROWTH"></span>
        <h2>{en ? "Community" : "커뮤니티 활동"}</h2>

        <div className="card rv">
          <h3>BAY(Blockchain at Yonsei)</h3>
          <p className="meta">
            {en
              ? "18TH-COHORT DEV TEAM LEAD, 2026.07 ~ PRESENT"
              : "18기 개발팀장, 2026.07 ~ 현재"}
          </p>
          <p>
            {en
              ? "Started on the onboarding team, and now serve in the club's leadership as dev team lead. I plan the club's dev sessions and run the geth core study."
              : "온보딩팀을 거쳐 지금은 개발팀장으로 운영진을 맡고 있습니다. 학회 개발 세션을 기획하고 geth 코어 스터디를 이끌고 있습니다."}
          </p>
        </div>

        <div className="card rv">
          <h3>NinjaLabs</h3>
          <p className="meta">INJECTIVE KOREA, 2026.03 ~ 2027.02</p>
          <p>
            {en
              ? "Took the PM role for the landing, onboarding and data pages, handling communication between the Injective team and ours. Voluntarily brought events to a quiet community and led our hackathon participation."
              : "랜딩, 온보딩, 데이터 페이지 작업에서 PM 역할을 맡아 인젝티브 운영진과 팀 사이 커뮤니케이션을 담당했습니다. 침체된 커뮤니티에서 자발적으로 행사를 유치하고 해커톤 출전을 이끌었습니다."}
          </p>
        </div>

        <div className="card rv">
          <h3>{en ? "ChainLens 𝕏 account" : "ChainLens 𝕏 운영"}</h3>
          <p className="meta">CONTENT → COMMUNITY</p>
          <p>
            {en
              ? "Opened the project account from zero and built the early community with content. Watching a single post translate directly into market reaction taught me the power of developer-facing content."
              : "프로젝트 계정을 0에서 개설해 콘텐츠로 초기 커뮤니티를 만들었습니다. 포스팅 하나가 시장 반응으로 직결되는 것을 직접 경험하며, 개발자 대상 콘텐츠의 힘을 배웠습니다."}
          </p>
          <p className="more">
            <a
              href="https://x.com/chainlens402"
              target="_blank"
              rel="noopener noreferrer"
            >
              𝕏 @chainlens402
            </a>
          </p>
        </div>

        <div className="card rv">
          <h3>
            {en ? "HiARC (Hongik Algorithm Club)" : "HiARC(홍익대 알고리즘 학회)"}
          </h3>
          <p className="meta">
            {en
              ? "OPERATIONS & DEV TEAM, 2023.03 ~ 2025.09"
              : "운영진 & 개발팀, 2023.03 ~ 2025.09"}
          </p>
          <p>
            {en
              ? "My first community after entering the computer engineering program. Organized events that brought club members closer, formed a team that won an algorithm contest, and later joined the dev team to build a competition system that makes solving algorithm problems fun."
              : "컴퓨터공학과 입학 후 첫 커뮤니티 활동입니다. 여러 행사를 기획해 학회원들의 친목을 도왔고, 팀을 꾸려 알고리즘 대회에서 수상하기도 했습니다. 이후에는 개발팀으로 학생들이 알고리즘을 즐겁게 풀 수 있는 경쟁 시스템을 개발했습니다."}
          </p>
        </div>
      </div>
    </section>
  );
}
