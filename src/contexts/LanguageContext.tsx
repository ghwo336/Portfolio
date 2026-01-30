/* eslint-disable react-refresh/only-export-components */
import React, {createContext, useContext, useState} from 'react';
import type {ReactNode} from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>('ko');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'ko' ? 'en' : 'ko'));
  };

  const translations: Record<Language, Record<string, string>> = {
    ko: {
      // Header
      'header.subtitle': '알고리즘 & 블록체인 | 웹 개발자',

      // Navbar
      'nav.about': '소개',
      'nav.techStack': '기술 스택',
      'nav.projects': '프로젝트',
      'nav.affiliations': '소속',
      'nav.algorithms': '알고리즘',
      'nav.awards': '수상',
      'nav.contact': '연락처',

      // About Me
      'about.title': '😃 소개',
      'about.intro': '알고리즘과 블록체인에 관심이 많은 이호재입니다.',
      'about.student': '홍익대학교 컴퓨터공학과 4학년',
      'about.animal': '제가 좋아하는 동물은 펠리컨입니다 🐥',
      'about.motto':
        '저는 먼저 시도하고 나중에 최적화하는 타입입니다. (빠르게 실패하고, 더 빠르게 배웁니다.)',

      // Tech Stack
      'tech.title': '🛠️ 기술 스택',

      // Projects
      'projects.title': '🐥 프로젝트',
      'projects.chef.name': 'Chef Token Dining',
      'projects.chef.type': '졸업 프로젝트 (기획 중)',
      'projects.chef.desc1':
        '재능있는 셰프가 미래의 식사 경험을 토큰화하는 Web3 기반 선결제 플랫폼',
      'projects.chef.desc2':
        '셰프는 식사 토큰을 선판매하여 자금을 조달하고, 사용자는 토큰을 실제 식사로 교환',
      'projects.chef.desc3':
        '식사 교환을 위한 소각 메커니즘이 있는 ERC-20 토큰, 2차 시장에서 거래 가능',
      'projects.chef.desc4':
        '러그풀 방지를 위한 마일스톤 기반 자금 해제 스마트 컨트랙트 에스크로',
      'projects.chef.desc5':
        '하이브리드 아키텍처: 중앙화된 셰프 검증, 탈중앙화된 토큰 및 자금 관리',
      'projects.chef.desc6':
        '기술 스택: 스마트 컨트랙트 (ERC-20), Express.js, PostgreSQL, React, 지갑 연동',

      'projects.pawnable.name': 'PAWNABLE',
      'projects.pawnable.type': '개인 프로젝트 (진행 중)',
      'projects.pawnable.desc1':
        '독특한 청산 메커니즘을 가진 담보 기반 P2P 대출 DeFi 플랫폼',
      'projects.pawnable.desc2':
        '차입자가 직접 금리를 제시하여 유연한 P2P 매칭',
      'projects.pawnable.desc3':
        '담보 가치 하락이 아닌 시간 기반 청산 (청산 스트레스 없음)',
      'projects.pawnable.desc4': 'ETH, SOL, NFT를 담보로 지원',
      'projects.pawnable.desc5':
        '기술 스택: React, Express.js, PostgreSQL, 스마트 컨트랙트, 지갑 연동',
      'projects.pawnable.desc6': '테스트넷 배포 및 거버넌스 토큰 구현 계획',

      'projects.hiarc.name': 'HiARC 홈페이지',
      'projects.hiarc.type': '팀 프로젝트 (완료)',
      'projects.hiarc.desc1':
        'HiARC 동아리 웹사이트의 프론트엔드 개발 부분 담당',
      'projects.hiarc.desc2': '수상 및 업적 페이지 구현',
      'projects.hiarc.desc3':
        '협업 아키텍처 설계 및 디자이너와 긴밀한 협력 경험',

      'projects.rating.name': 'Hi-Rating',
      'projects.rating.type': '팀 프로젝트 (완료)',
      'projects.rating.desc1': '전체 프론트엔드 구현',
      'projects.rating.desc2': '모노레포 아키텍처 적용',
      'projects.rating.desc3': '쿠키를 사용한 관리자 로그인 구현',
      'projects.rating.desc4': '실시간 알고리즘 대회 채점 시스템',
      'projects.rating.desc5': '상태 관리, API 통합 및 반응형 UI',
      'projects.rating.desc6': '디자이너 및 백엔드 개발자와 협업',

      // Affiliations
      'affiliations.title': '🎓 소속',
      'affiliations.1': '홍익대학교 컴퓨터공학과 (2023년 3월 ~ 현재)',
      'affiliations.2':
        '홍익 알고리즘 동아리 운영팀 (2023년 3월 ~ 2024년 12월)',
      'affiliations.3': 'HiARC 개발팀 (2024년 9월 ~ 2025년 9월)',
      'affiliations.4': 'BlockchainAtYeonsei 개발 온보딩팀 (2026년 1월 ~ 현재)',

      // Algorithms
      'algorithms.title': '🏅 알고리즘',

      // Awards
      'awards.title': '🏆 수상 및 성과',
      'awards.1': '2024 겨울 SUAPC — 학교별 1등상',
      'awards.2': '2024년 9월 홍익대학교 프로그래밍 대회 — 저학년 특별상',
      'awards.3': '2025 여름 SUAPC — 동상',
      'awards.4': '2025 ICPC 서울 리저널 - 본선 진출',

      // Contact
      'contact.title': '🤝 연락처',

      // Footer
      'footer.text': '© 2025 이호재. React & TypeScript로 제작.',
    },
    en: {
      // Header
      'header.subtitle':
        'Algorithm Enthusiast | Blockchain Passionate | Web Developer',

      // Navbar
      'nav.about': 'About',
      'nav.techStack': 'Tech Stack',
      'nav.projects': 'Projects',
      'nav.affiliations': 'Affiliations',
      'nav.algorithms': 'Algorithms',
      'nav.awards': 'Awards',
      'nav.contact': 'Contact',

      // About Me
      'about.title': '😃 About Me',
      'about.intro':
        "I'm Hojae Lee, passionate about algorithms and blockchain.",
      'about.student':
        '4th-year Computer Engineering student at Hongik University',
      'about.animal': 'My favorite animal is the pelican 🐥',
      'about.motto':
        "I'm the type who tries first and optimizes later. (Fail fast, learn faster.)",

      // Tech Stack
      'tech.title': '🛠️ Tech Stacks',

      // Projects
      'projects.title': '🐥 Projects',
      'projects.chef.name': 'Chef Token Dining',
      'projects.chef.type': 'Graduation Project (Planning)',
      'projects.chef.desc1':
        'Web3-based prepayment platform where talented chefs tokenize future dining experiences',
      'projects.chef.desc2':
        'Chefs raise capital by pre-selling meal tokens, users redeem tokens for actual meals',
      'projects.chef.desc3':
        'ERC-20 tokens with burn mechanism for meal redemption, transferable on secondary markets',
      'projects.chef.desc4':
        'Smart contract escrow with milestone-based fund release to prevent rug pulls',
      'projects.chef.desc5':
        'Hybrid architecture: centralized chef verification, decentralized token & fund management',
      'projects.chef.desc6':
        'Tech Stack: Smart Contracts (ERC-20), Express.js, PostgreSQL, React, Wallet Integration',

      'projects.pawnable.name': 'PAWNABLE',
      'projects.pawnable.type': 'Personal Project (In Progress)',
      'projects.pawnable.desc1':
        'Collateral-based P2P lending DeFi platform with unique liquidation mechanism',
      'projects.pawnable.desc2':
        'Borrowers propose their own interest rates for flexible P2P matching',
      'projects.pawnable.desc3':
        'Time-based liquidation instead of collateral value drop (no liquidation stress)',
      'projects.pawnable.desc4': 'Support for ETH, SOL, and NFT as collateral',
      'projects.pawnable.desc5':
        'Tech Stack: React, Express.js, PostgreSQL, Smart Contracts, Wallet Integration',
      'projects.pawnable.desc6':
        'Testnet deployment planned with future governance token implementation',

      'projects.hiarc.name': 'HiARC Homepage',
      'projects.hiarc.type': 'Team Project (Completed)',
      'projects.hiarc.desc1':
        'Partially responsible for frontend development of the HiARC club website',
      'projects.hiarc.desc2': 'Implemented the Awards & Achievements page',
      'projects.hiarc.desc3':
        'Experience in collaborative architecture design and working closely with designers',

      'projects.rating.name': 'Hi-Rating',
      'projects.rating.type': 'Team Project (Completed)',
      'projects.rating.desc1': 'Implemented the entire frontend',
      'projects.rating.desc2': 'Applied monorepo architecture',
      'projects.rating.desc3': 'Implemented admin login using cookies',
      'projects.rating.desc4': 'Real-time algorithm competition scoring system',
      'projects.rating.desc5':
        'State management, API integration, and responsive UI',
      'projects.rating.desc6':
        'Collaborated with designers and backend developers',

      // Affiliations
      'affiliations.title': '🎓 Affiliations',
      'affiliations.1':
        'Hongik University, Department of Computer Engineering (Mar 2023 ~ Present)',
      'affiliations.2':
        'Operations Team, Hongik Algorithm Club (Mar 2023 ~ Dec 2024)',
      'affiliations.3': 'HiARC Development Team (Sep 2024 ~ Sep 2025)',
      'affiliations.4':
        'BlockchainAtYeonsei Development Onboarding Team (Jan 2026 ~ Present)',

      // Algorithms
      'algorithms.title': '🏅 Algorithms',

      // Awards
      'awards.title': '🏆 Awards & Achievements',
      'awards.1': '2024 Winter SUAPC — 1st Place (University Ranking Award)',
      'awards.2':
        'Sep 2024 Hongik University Programming Contest — Lower Division Special Award',
      'awards.3': '2025 Summer SUAPC — Bronze Award',
      'awards.4': '2025 ICPC Seoul Regional - Onsite Participant',

      // Contact
      'contact.title': '🤝 Contact',

      // Footer
      'footer.text': '© 2025 Hojae Lee. Built with React & TypeScript.',
    },
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{language, toggleLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  );
};
