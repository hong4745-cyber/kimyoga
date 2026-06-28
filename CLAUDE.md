# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS publishing project for **KIM'S YOGA & PILATES** website renewal. Wireframe images in `jpg/` are the final approved design — implement them exactly as shown. No framework, no build system; plain HTML + CSS + vanilla JS only.

## File Naming Convention

Each page maps to one HTML file at the root level:

| Page | File |
|---|---|
| HOME | `index.html` |
| KIM'S 소개 (브랜드 소개) | `about.html` |
| 강사소개 | `instructors.html` |
| 교육시설·위치 | `location.html` |
| 전문지도자 요가 과정 | `program-yoga-pro.html` |
| 전문지도자 필라테스 과정 | `program-pilates-pro.html` |
| 요가 | `program-yoga.html` |
| 필라테스 | `program-pilates.html` |
| 공지사항·이벤트 | `community-notice.html` |
| 수강생 후기 | `community-review.html` |
| 뉴스·포토스토리 | `community-news.html` |
| 수강상담신청 | `inquiry.html` |

Shared styles go in `css/style.css`; shared markup (header/footer) is duplicated across pages (no server-side includes).

## Design System

**Colors** (extract exact hex from wireframes):
- Primary dark green: header background, footer background, CTA buttons
- Beige/cream: page backgrounds, section backgrounds
- White: card backgrounds, text on dark sections

**Typography**: Korean-friendly sans-serif (e.g. Noto Sans KR or Pretendard via Google Fonts / CDN)

**Images**: All photos are gray `<div>` placeholder boxes until real images are supplied. Use `background-color: #ccc` with explicit `width`/`height`. Never embed stock photos.

## Page Architecture

### Shared Components (replicated in every page)

**Top utility bar** (above GNB):
- Left: 대한요가기협회 공인 교육기관 | KIM'S 본점 | 신부점 | 신길온천점 | 원곡점 | 안양 평촌점 | 안성1호점
- Right: 대표문의 031.480.3308 | 온라인상담 | 수강료 조회 | 시간표 조회

**GNB (header)**:
- Logo left — `로고등록` placeholder
- Nav center: HOME / KIM'S 소개 (드롭다운) / 교육 프로그램 (드롭다운) / 커뮤니티 (드롭다운)
- Right: `문의하기` button → `inquiry.html`
- Dropdown on hover; active state highlighted

**Pre-footer CTA bar**:
- Text: "지금, 가까운 지점에서 시작하세요."
- Four icon buttons: 온라인상담 / 수강료조회 / 시간표조회 / 원데이신청

**Footer**:
- Logo + 브랜드명
- Address: 경기도 안산시 단원구고잔동 534-2 지스타프라자 601호
- Contact: Tel 031-480-3308 / Email dona4330@naver.com
- 사업자번호 134 27 80643 / 대표 박경화
- Follow Us: Facebook, YouTube, Twitter icons
- 이용약관 / 개인정보처리방침 / © 2026 KIM'S YOGA & PILATES
- Floating scroll-to-top + chat bubble (bottom right)

### Page-specific Notes

**HOME (`index.html`)**: Hero full-width image/video section → THE SPREAD OF PILATES text section → PROGRAM card grid → YOGA PILATES INSTRUCTORS 3-column grid → WE'RE THE ONES THAT CARE icon grid → REVIEWS FROM OUR MEMBERS card carousel → NEWS & PHOTOSTORY card grid.

**강사소개 (`instructors.html`)**: Filter bar (전체보기 / 순위별) + 4-column card grid. Each card has placeholder photo, name, specialty tag, and arrow button.

**교육 프로그램 — 지도자과정 (`program-yoga-pro.html`, `program-pilates-pro.html`)**: Hero banner with wavy bottom edge, then 6-cell info grid: 교육과정 / 교육기간 / 교육비용 / 교육과정 혜택 / 모집인원 / 교육장소. YKA 협회 logo lockup at bottom.

**교육 프로그램 — 요가/필라테스 (`program-yoga.html`, `program-pilates.html`)**: Left sidebar filter (프로그램 선택: 프로그램/요일/담당강사/지점/문의사항 + 수강상담 신청하기 버튼) + right content list with gray image placeholders and descriptions per program type (Healing, Vinyasa, Ashtanga, Hot, Myring, Yoga Meditation, 치료재활 등).

**커뮤니티 3종** (same layout): Sub-tab bar (공지사항·이벤트 / 수강생 후기 / 뉴스·포토스토리) → board list (tag badge + title + date + view count per row) → pagination → search input.

**수강상담신청 (`inquiry.html`)**: Three top tabs (온라인상담 / 시간표조회 / 원데이신청). 온라인상담 tab: left panel = 고객 정보 입력 form + 수강료 조회 section; right panel = 교육 과정 선택 (3×2 placeholder grid) + two text inputs + 신청하기 button.

## Responsive Breakpoints

| Breakpoint | Target |
|---|---|
| 1280px+ | Desktop (primary design) |
| 768px | Tablet (see `jpg/768.png`) |
| 375px | Mobile (see `jpg/Background.png`) |

Mobile wireframe collapses the GNB to a hamburger menu. The utility bar is hidden or condensed on mobile.

## Wireframe Reference Files

All wireframes are in `jpg/`:
- `1_HOME_와이어 프레임.png` — HOME desktop
- `768.png` — HOME tablet
- `Background.png` — HOME mobile
- `2_KIM'S 소개_와이어 프레임.png` — 브랜드 소개
- `2_1 강사소개.png` — 강사소개
- `2_2 지점소개.png` — 교육시설·위치
- `3_교육과정(지도자과정_요가)_와이어 프레임.png` — 전문지도자 요가
- `3_교육과정(지도자과정)_와이어 프레임.png` — 전문지도자 필라테스
- `3_교육과정(요가)_와이어 프레임.png` — 요가 프로그램
- `3_교육과정(필라테스)_와이어 프레임.png` — 필라테스 프로그램
- `4_커뮤니티(공지사항)_와이어 프레임.png` — 공지사항·이벤트
- `4_커뮤니티(수강생후기)_와이어 프레임.png` — 수강생 후기
- `4_커뮤니티(뉴스)_와이어 프레임.png` — 뉴스·포토스토리
- `수강상담신청_와이어 프레임.png` — 수강상담신청

Always re-read the relevant wireframe before implementing a page — it is the source of truth for layout, spacing, and text.

## Implementation Status

### Completed Pages

| File | Status | Notes |
|---|---|---|
| `index.html` | ✅ 완료 | 슬라이드쇼, 전체 섹션, 반응형 |
| `about.html` | ✅ 완료 | 서브탭, WHAT MAKES US DIFFERENT, 인용구 CTA |
| `instructors.html` | ✅ 완료 | 필터 드롭다운, 4열 카드 그리드 12장 |
| `location.html` | ✅ 완료 | 지점 탭 전환(JS), 이미지 6분할, 지도 플레이스홀더, 정보 테이블 |
| `program-yoga-pro.html` | ✅ 완료 | 웨이브 히어로, 6칸 교육정보 그리드, KYA 로고 |
| `program-pilates-pro.html` | ✅ 완료 | 위와 동일 구조, KPI 필라테스 콘텐츠 |
| `program-yoga.html` | ✅ 완료 | 사이드바 수강신청 폼, 7가지 요가 프로그램 |
| `program-pilates.html` | ✅ 완료 | 사이드바 예약 폼, 맷/소도구/기구 필라테스 |
| `community-notice.html` | ✅ 완료 | 공지/이벤트 배지, 게시판 10행, 페이지네이션, 검색 |
| `community-review.html` | ✅ 완료 | 2열 후기 카드 6장, 별점, 작성자 정보 |
| `community-news.html` | ✅ 완료 | 3열 뉴스 카드 6장, 게시판 구조 |
| `inquiry.html` | ✅ 완료 | 3탭(온라인상담/시간표/원데이) JS 전환, 2패널 폼 |

### 남은 작업

- **실제 이미지 교체**: 모든 `.ph` placeholder를 실제 사진으로 교체 (로고, 강사 사진, 시설 사진, 뉴스 썸네일 등)
- **지도 연동**: `location.html` 지도 플레이스홀더 → 카카오맵 또는 네이버맵 iframe 삽입
- **태블릿(768px) 세부 조정**: `jpg/768.png` 와이어프레임 기준으로 중간 브레이크포인트 검토
- **모바일(375px) 세부 조정**: `jpg/Background.png` 와이어프레임 기준으로 검토
- **폼 백엔드 연결**: inquiry.html 폼 데이터 전송 처리 (현재 프론트엔드만)

## CSS Architecture

모든 스타일은 `css/style.css` 단일 파일에 작성. 섹션별 구분 주석으로 구조화.

### CSS 변수 (`:root`)

| 변수 | 값 | 용도 |
|---|---|---|
| `--color-main` | `#496357` | 다크 그린 (헤더, 푸터, 버튼) |
| `--color-sub` | `#F3F1E8` | 베이지 (섹션 배경) |
| `--color-point` | `#FF9264` | 액센트 오렌지 (별점, 이벤트 배지) |
| `--ph` | `#C8C3BA` | 플레이스홀더 회색 |
| `--font-kr` | Noto Sans KR | 한국어 본문 |
| `--font-en` | Taviraj | 영문 세리프 (섹션 제목, 날짜) |
| `--max-w` | `1410px` | 컨테이너 최대 너비 |

### 핵심 CSS 클래스 패턴

**공통 컴포넌트:**
- `.top-bar` — 최상단 유틸리티 바 (모바일에서 `display:none`)
- `.gnb` — 스티키 네비게이션 헤더
- `.gnb-dropdown` — 호버 드롭다운 (`li:hover` 트리거)
- `.gnb-mobile` — 모바일 전체화면 오버레이 메뉴 (`.open` 클래스로 토글)
- `.prefooter` — 프리푸터 CTA 바
- `.floating` — 우하단 플로팅 버튼 (스크롤탑 + 채팅)

**내부 페이지 공통:**
- `.page-subnav` — 섹션 서브 탭 내비게이션 (KIM'S 소개 / 교육 프로그램 페이지)
- `.page-hero` — 커뮤니티 페이지 상단 배너 (웨이브 이미지 포함)
- `.community-tabs` — 커뮤니티 3종 탭 (`community-tab-link.active`)

**버튼:**
- `.btn-green` — 다크 그린 filled 버튼 (`→` 아이콘 `::after`)
- `.btn-outline` — 그린 아웃라인 버튼
- `.btn-outline-white` — 흰색 아웃라인 버튼 (어두운 배경용)
- `.btn-gnb` — 헤더 문의하기 버튼 (베이지 배경)

**플레이스홀더:**
- `.ph` — 회색 플레이스홀더 박스 (`background: var(--ph)`)
- `role="img" aria-label="..."` — 플레이스홀더에 반드시 추가

### 웨이브 이미지

`HOME_img/SVG.png` — 프리렌더된 PNG 웨이브 (베이지 채색, `--fill-0: #F3F1E8`)  
`HOME_img/wave.svg` — 원본 SVG (CSS 변수 `--fill-0` 재정의 가능, 단 `<img>` 태그에선 CSS 변수 미적용)

히어로 및 섹션 전환부에 `HOME_img/SVG.png` 사용. 배경이 흰색인 경우 흰색 div로 아래를 덮어 처리.
