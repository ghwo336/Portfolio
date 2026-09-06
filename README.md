# 이호재 — Portfolio

Next.js(App Router) 기반 포트폴리오 사이트.

## 실행

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # 프로덕션 빌드 (정적 프리렌더)
npm start
```

## 구조

- `app/page.tsx` — 메인 페이지 (섹션 컴포넌트 조합)
- `app/globals.css` — 전체 스타일 (원본 HTML의 CSS 그대로)
- `components/` — Hero / Intro / Talks / Education / OpenSource / Projects / Community / History / Press / SiteFooter
- `components/Fx.tsx` — 스크롤 리빌 + 섹션 칩 타이핑 효과 (클라이언트)
- `lib/contacts.ts` — 이메일 / GitHub / X / Telegram / LinkedIn 링크 (여기만 고치면 인트로·푸터에 모두 반영)
- `public/img/` — 이미지

## 이미지

- `public/injective-presetation.jpeg` — 히어로 발표 사진
- `public/vera.jpeg` — AI·SW중심대학 경진대회 우수상 시상 사진
- `public/myProfile.png` — 펠리컨 (히어로 뱃지 + 파비콘)
