import { both } from "@/lib/i18n";
import type { CardItem, SectionInfo } from "@/content/types";

export const PROJECTS_SECTION: SectionInfo = {
  id: "projects",
  chip: "0x03 PROJECTS",
  title: { ko: "프로젝트", en: "Projects" },
};

export const PROJECTS: CardItem[] = [
  {
    title: both("VeraWallet"),
    tag: { kind: "wip", label: { ko: "개발 진행 중", en: "In development" } },
    meta: both("DID 기반 KYC WALLET"),
    body: {
      ko: "모바일 신분증으로 사용자를 인증하는 KYC 지갑. DeFi/CeFi 이용 시 세금 계산 기능을 포함합니다. 과기부 DID 모바일 신분증 활용 AI·블록체인 해커톤에서 본선 Top 10에 올라 다음 라운드를 준비 중입니다 (최종 5팀은 최대 10억 사업화 지원).",
      en: "A KYC wallet that verifies users with Korea's mobile ID. Includes tax calculation for DeFi/CeFi activity. Reached the Top 10 finals of the MSIT DID Mobile ID AI·Blockchain Hackathon and now preparing for the next round (the final 5 teams receive up to ₩1B in commercialization support).",
    },
  },
  {
    title: both("VERA"),
    tag: {
      kind: "plan",
      label: { ko: "기획 수상작", en: "Award-winning concept" },
    },
    meta: both("STO COMPLIANCE SDK (CONCEPT)"),
    body: {
      ko: "한국 STO 시장에서 자금 수취 자격을 검증하는 SDK 컨셉. 기획과 발표만으로 AI·SW중심대학 AI·블록체인 비즈니스 모델 경진대회 우수상을 수상했습니다.",
      en: "An SDK concept for verifying fundraising eligibility in the Korean STO market. Won the Excellence Award at the AI·SW University AI·Blockchain Business Model Competition on planning and presentation alone.",
    },
  },
  {
    title: both("GIWA Launchpad"),
    tag: { kind: "wip", label: { ko: "개발 진행 중", en: "In development" } },
    meta: both("PERMISSIONED LAUNCHPAD"),
    body: {
      ko: "업비트 신규 체인 GIWA 생태계에서 검증된 프로젝트와 참여자를 위한 런치패드. RWA 및 규제 친화적 온체인 자산 발행 구조를 기획하고 개발 중입니다.",
      en: "A launchpad for verified projects and participants in the ecosystem of GIWA, Upbit's new chain. Designing and building a structure for RWA and regulation-friendly on-chain asset issuance.",
    },
  },
  {
    title: both("ChainLens"),
    tag: {
      kind: "sunset",
      label: { ko: "런칭 → 피벗 → 선셋", en: "Launch → Pivot → Sunset" },
    },
    meta: both("AI AGENT API MARKETPLACE, FOUNDER"),
    body: {
      ko: "AI 에이전트가 API와 자원을 사고파는 마켓플레이스. x402 기반 에이전트 결제를 프로토타이핑하고, EasyA 인큐베이션과 함께 토큰 런칭, 커뮤니티 운영, 피벗, 선셋까지 프로덕트 전체 라이프사이클을 경험했습니다.",
      en: "A marketplace where AI agents buy and sell APIs and resources. Prototyped x402-based agent payments and, with EasyA's incubation, went through the full product lifecycle: token launch, community, pivot, and sunset.",
    },
    links: [
      {
        href: "https://chainlens.pelicanlab.dev/",
        label: { ko: "라이브 데모", en: "Live demo" },
      },
      {
        href: "https://github.com/Chain-Lens/ChainLens",
        label: both("GitHub"),
      },
      {
        href: "https://kickstart.easya.io/token/BVG5pTybt2EV2LzfDoKLPmH8QVRoq5XPbdBUAy2rtCdb",
        label: { ko: "EasyA 런치패드 토큰", en: "EasyA launchpad token" },
      },
    ],
  },
  {
    title: both("HEIST"),
    tag: { kind: "build", label: { ko: "수상", en: "Award" } },
    meta: both("SOLANA MULTIPLAYER GAME"),
    body: {
      ko: "경찰과 도둑을 모티브로 한 실시간 멀티플레이어 게임. 게임 로직은 오프체인, 에스크로와 정산은 솔라나 온체인으로 분리한 구조를 설계했습니다. Solana Startup Village Student Award ($1,500).",
      en: "A real-time multiplayer cops-and-robbers game. Designed an architecture that keeps game logic off-chain while settling escrow on Solana. Solana Startup Village Student Award ($1,500).",
    },
    links: [
      {
        href: "https://www.youtube.com/watch?v=AVm9EdkF9sk",
        label: { ko: "▶ 데모 영상", en: "▶ Demo video" },
      },
      {
        href: "https://github.com/EarthIsMine/HEIST",
        label: both("GitHub"),
      },
      {
        href: "https://x.com/SuperteamKorea/status/2059255321479331901",
        label: { ko: "𝕏 수상 포스트", en: "𝕏 award post" },
      },
    ],
  },
  {
    title: both("Pawnable"),
    tag: { kind: "build", label: { ko: "수상", en: "Award" } },
    meta: both("DEFI LENDING, FIRST DEPLOY"),
    body: {
      ko: "Consensus Hong Kong 해커톤 출품작. 생애 첫 스마트 컨트랙트를 Base Sepolia에 배포하고, 이후 EarthIsMine 팀으로 WorldLand Grant를 수상했습니다 (20,000 WL).",
      en: "Built at the Consensus Hong Kong hackathon. Deployed my first-ever smart contract to Base Sepolia, and later won a WorldLand Grant as team EarthIsMine (20,000 WL).",
    },
    links: [
      {
        href: "https://github.com/EarthIsMine/PAWNABLE",
        label: both("GitHub"),
      },
      {
        href: "https://worldland-official.medium.com/worldland-grant-program-results-announcement-b365e937fe76",
        label: { ko: "그랜트 발표 (Medium)", en: "Grant announcement (Medium)" },
      },
    ],
  },
  {
    title: both("Hi-rating"),
    tag: { kind: "wip", label: { ko: "운영 중", en: "In service" } },
    meta: {
      ko: "HiARC, 기획 + 프론트엔드",
      en: "HiARC, PLANNING + FRONTEND",
    },
    body: {
      ko: "학회원들이 알고리즘 문제를 더 재밌게 풀 수 있도록 레이팅 서비스를 기획하고 프론트엔드를 개발했습니다. 개발자 커뮤니티의 참여 동기를 설계해본 첫 경험입니다. 이후 학회 통합 플랫폼으로 이관되어 지금도 운영되고 있습니다.",
      en: "Planned and built the frontend of a rating service that makes solving algorithm problems more fun for club members, my first attempt at designing participation incentives for a developer community. Since migrated into the club's unified platform and still in service.",
    },
    links: [
      {
        href: "https://rating.hiarc-official.com/",
        label: { ko: "운영 중인 사이트", en: "Live site" },
      },
      {
        href: "https://github.com/HIARC-Developers/Hi-rating-FE",
        label: { ko: "GitHub (초기 개발)", en: "GitHub (original)" },
      },
      {
        href: "https://github.com/HIARC-Developers/HIARC-Platform-FE",
        label: { ko: "GitHub (현재 플랫폼)", en: "GitHub (current platform)" },
      },
    ],
  },
];
