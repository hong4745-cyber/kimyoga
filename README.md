# KIM'S YOGA PILATES

> 기존 요가·필라테스 교육기관 홈페이지를 사용자 중심의 UI/UX와 반응형 웹으로 리뉴얼한 프로젝트입니다.

## 🚧 README 리팩토링 미리보기

이 파일은 **최종본 초안(v1)** 입니다.
기존 README의 내용을 유지하면서 GitHub 포트폴리오 형식으로 리디자인하기 위한 중간 결과물입니다.

---

## ✨ Highlights

- Responsive Web
- Vanilla JavaScript
- Firebase Authentication
- Realtime Database
- Firestore
- NAVER Map API
- Kakao / Naver Login
- Community Board

---

# KIM'S YOGA PILATES

> 기존 요가·필라테스 교육기관 홈페이지를 사용자 중심의 UI/UX와 반응형 웹으로 리뉴얼한 프로젝트입니다.

![main](./readme/main.png)

## 프로젝트 소개

기존 홈페이지는 오래된 UI와 낮은 사용성으로 인해 원하는 정보를 찾기 어려웠습니다.

본 프로젝트는 사용자의 정보 탐색 흐름을 고려하여 디자인을 전면 개선하고, 
반응형 레이아웃과 다양한 인터랙션을 적용하여 브랜드 이미지를 강화하는 것을 목표로 제작했습니다.

- 프로젝트명 : KIM'S YOGA PILATES Renewal
- 개발기간 : 2026.06 (3일)
- 개발인원 : 1인 프로젝트
- 배포 : https://hong4745-cyber.github.io/kimyoga/
- Repository
https://github.com/hong4745-cyber/kimyoga

---

# 🛠 사용 기술

## Front-end

- **HTML5** — 시맨틱 마크업으로 페이지 구조를 설계하고, 접근성 속성(`aria-label`, `role`)을 적용했습니다.
- **CSS3** — CSS 변수(`:root`)와 Flexbox·Grid를 활용해 디자인 시스템을 단일 파일(`style.css`)로 관리했습니다.
- **JavaScript (ES6)** — 프레임워크 없이 DOM 조작·이벤트 핸들링·탭 전환·슬라이드쇼 등 모든 인터랙션을 바닐라 JS로 구현했습니다.

## Backend

- **Firebase Authentication** — 이메일·비밀번호 기반 회원 가입·로그인을 처리하고, 로그인 상태에 따라 UI를 동적으로 전환했습니다.
- **Firebase Realtime Database** — 수강상담 신청 폼 데이터와 커뮤니티 게시글을 실시간으로 저장·조회합니다.
- **Firebase Firestore** — 회원 프로필 정보를 문서 단위로 구조화하여 저장합니다.
- **Firebase Storage** — 커뮤니티 게시글 작성 시 이미지 파일을 업로드하고 URL을 반환받아 표시합니다.

## API

- **NAVER Map API** — `location.html`에서 지점별 지도를 렌더링하고, 마커·인포윈도우로 주소 정보를 표시합니다.
- **Kakao Login SDK** — 카카오 소셜 계정으로 간편 로그인·회원가입을 지원합니다.
- **Naver Login SDK** — 네이버 소셜 계정으로 간편 로그인·회원가입을 지원합니다.

## 외부 라이브러리 · 폰트

- **Font Awesome 6.5** — 네비게이션·버튼·푸터 등 전 페이지의 아이콘을 CDN으로 로드해 사용했습니다.
- **Noto Sans KR** (Google Fonts) — 한국어 본문 전용 웹폰트로 가독성을 높였습니다.
- **Taviraj** (Google Fonts) — 섹션 제목·날짜 등 영문 세리프 포인트 텍스트에 사용했습니다.

---


# 📌 주요 기능

## 1. 히어로 슬라이드쇼 — `index.html`

(이미지)

자동 전환되는 풀스크린 슬라이드쇼로 브랜드 첫인상을 강렬하게 전달하며, 화살표·도트 인디케이터로 수동 이동도 지원합니다.

---

## 2. 스티키 GNB + 호버 드롭다운 — 전 페이지 공통

(이미지)

스크롤해도 상단에 고정되는 네비게이션으로, 주요 메뉴에 마우스를 올리면 서브 페이지 목록이 드롭다운으로 펼쳐집니다.

---

## 3. 모바일 햄버거 드로어 메뉴 — 전 페이지 공통

(이미지)

모바일(375px)에서 GNB가 햄버거 버튼으로 전환되며, 클릭 시 전체화면 드로어 메뉴가 슬라이드로 열립니다.

---

## 4. 스크롤 진행률 바 — 전 페이지 공통

(이미지)

화면 최상단에 표시되는 얇은 프로그레스 바로, 현재 페이지를 얼마나 읽었는지 한눈에 파악할 수 있습니다.

---

## 5. 강사 필터링 카드 그리드 — `instructors.html`

(이미지)

전체보기 / 순위별 버튼으로 강사 카드를 필터링하며, 이름·전문 분야·상세보기 버튼이 담긴 4열 그리드로 구성됩니다.

---

## 6. 지점 탭 전환 + 시설 갤러리 — `location.html`

(이미지)

6개 지점을 탭으로 전환하면 해당 지점의 지도·시설 이미지 갤러리·교통 정보가 한 번에 교체됩니다.

---

## 7. 교육 프로그램 사이드바 필터 폼 — `program-yoga.html` / `program-pilates.html`

(이미지)

좌측 사이드바에서 프로그램·요일·강사·지점을 드롭다운으로 선택하고, 우측에서 해당 프로그램 목록을 확인할 수 있습니다.

---

## 8. 커뮤니티 탭 + 게시판 + 검색 — `community-notice.html` / `community-review.html` / `community-news.html`

(이미지)

공지사항·수강생 후기·뉴스 3종 탭을 하나의 레이아웃으로 통합하며, 태그 배지·페이지네이션·키워드 검색을 지원합니다.

---

## 9. 수강상담 3탭 통합 폼 — `inquiry.html`

(이미지)

온라인상담·시간표조회·원데이신청 3개 탭을 하나의 페이지에서 전환하며, 고객 정보 입력과 과정 선택이 2패널로 구성됩니다.

---

## 10. Firebase 회원 인증 — `login.html` / `signup.html`

(이미지)

Firebase Authentication으로 이메일·비밀번호 기반 로그인·회원가입을 구현하고, 로그인 상태에 따라 상단 버튼이 동적으로 전환됩니다.

---

# 🔧 Trouble Shooting

## 1. 모바일 메뉴 UX

### 문제

모바일에서 메뉴 이동 시 계층구조가 복잡하여 사용성이 떨어졌습니다.

### 해결

Drawer Menu 방식을 적용하여 햄버거 버튼 클릭 시 전체화면 오버레이로 열리도록 구현했습니다. 한 손으로도 쉽게 탐색할 수 있도록 개선했습니다.

---

## 2. git index.lock 충돌

### 문제

이미지 파일이 많아 `git add` 도중 타임아웃이 발생하면서 `.git/index.lock` 잠금 파일이 남아 이후 git 명령이 모두 실패했습니다.

### 해결

`index.lock` 파일을 수동으로 삭제한 후 다시 스테이징·커밋했습니다.

---

## 3. 한글 경로 git 명령 오류

### 문제

Windows 환경에서 한글이 포함된 프로젝트 경로(`홈페이지 리뉴얼`)를 `git -C` 옵션에 전달하면 인코딩 오류가 발생했습니다.

### 해결

`cd` 로 경로 이동 후 git 명령을 실행하거나, VS Code 내장 터미널에서 직접 실행하는 방식으로 우회했습니다.

---

## 4. Firebase 소셜 로그인 이메일 미공개 계정 처리

### 문제

카카오·네이버 계정에서 이메일 공개 동의를 하지 않은 경우 Firebase 계정 생성이 불가능했습니다.

### 해결

소셜 로그인 콜백에서 이메일 값이 없을 경우 안내 메시지를 표시하고 로그인을 중단하도록 처리했습니다.

---

# ⚡ 성능 최적화

- **이미지 이중 해상도 제공** — 지점 시설 이미지를 `_600.jpg` / `_1200.jpg` 두 가지 크기로 준비해 모바일·데스크톱에 맞게 로드합니다.
- **CSS 단일 파일 관리** — 모든 스타일을 `css/style.css` 하나로 통합해 HTTP 요청 수를 줄였습니다.
- **스크롤 이벤트 최소화** — 스크롤 진행률 바와 GNB 스타일 변경을 단일 `scroll` 이벤트 핸들러로 처리했습니다.
- **Firebase SDK 분할 로드** — 인증·Firestore·Realtime DB·Storage SDK를 페이지별로 필요한 것만 선택 로드합니다.

---

# 🗄️ 데이터 구조

Firebase Realtime Database와 Firestore를 용도에 따라 분리해 사용했습니다.

### Firebase Realtime Database

실시간 읽기·쓰기가 필요한 데이터에 사용합니다.

```
root
├── users
│   └── {uid}
│       ├── name: string
│       ├── email: string
│       ├── provider: "email" | "kakao" | "naver"
│       └── createdAt: string (ISO 8601)
│
├── posts                      ← 커뮤니티 게시글
│   └── {postId}
│       ├── title: string
│       ├── content: string
│       ├── author: string
│       ├── uid: string
│       ├── imageUrl: string
│       └── createdAt: timestamp
│
└── inquiries                  ← 수강상담 신청
    └── {inquiryId}
        ├── name: string
        ├── phone: string
        ├── branch: string
        ├── course: string
        ├── message: string
        └── createdAt: timestamp
```

### Firestore

회원 프로필 등 구조화된 문서 데이터에 사용합니다.

```
users (collection)
└── {uid} (document)
    ├── name: string
    ├── email: string
    ├── phone: string
    └── createdAt: timestamp
```

---

# 📁 프로젝트 구조

```
kimyoga-main
│
├── index.html                 ← HOME
├── about.html                 ← KIM'S 소개
├── instructors.html           ← 강사소개
├── location.html              ← 교육시설·위치
├── program-yoga-pro.html      ← 전문지도자 요가 과정
├── program-pilates-pro.html   ← 전문지도자 필라테스 과정
├── program-yoga.html          ← 요가 프로그램
├── program-pilates.html       ← 필라테스 프로그램
├── community-notice.html      ← 공지사항·이벤트
├── community-review.html      ← 수강생 후기
├── community-news.html        ← 뉴스·포토스토리
├── community-write.html       ← 게시글 작성
├── notice-detail.html         ← 공지 상세
├── review-detail.html         ← 후기 상세
├── news-detail.html           ← 뉴스 상세
├── inquiry.html               ← 수강상담신청
├── login.html                 ← 로그인
├── signup.html                ← 회원가입
├── logout.html                ← 로그아웃 처리
│
├── css
│   └── style.css              ← 전체 스타일 (CSS 변수·컴포넌트·반응형)
│
├── js
│   ├── firebase-init.js       ← Firebase 초기화 + 소셜 로그인 공통 유틸
│   ├── auth-ui.js             ← 로그인 상태에 따른 헤더 UI 전환
│   └── community.js           ← 커뮤니티 게시판 로직
│
├── images                     ← 페이지별 실사 이미지
│   ├── 1_HOME_img
│   ├── 2_kim's yoga_img
│   ├── 3_instrsuctors_img
│   ├── 4_location_img
│   └── 5_Kims story_img
│
├── HOME_img                   ← 웨이브 SVG
├── firestore.rules            ← Firestore 보안 규칙
├── firestore.indexes.json     ← Firestore 인덱스 설정
└── README.md
```

---

# ▶️ 실행 방법

별도의 빌드 과정이 없는 정적 사이트입니다.

### 로컬 실행

```bash
# 1. 저장소 클론
git clone https://github.com/hong4745-cyber/kimyoga.git

# 2. 폴더 이동
cd kimyoga

# 3. index.html을 브라우저로 열기
# VS Code 사용 시 Live Server 확장으로 실행 권장
```

> **주의**: Firebase 연동 기능(로그인·게시판·상담신청)은 `js/firebase-init.js`에 실제 API 키가 필요합니다.

### 배포 URL

**https://hong4745-cyber.github.io/kimyoga/**

---

# 🔮 개선 예정

| 항목 | 내용 |
|---|---|
| 실제 이미지 교체 | 강사 사진·시설 사진·뉴스 썸네일 등 플레이스홀더 → 실사 이미지 |
| 카카오·네이버 소셜 로그인 | API 키 발급 후 실제 연동 완성 |
| 태블릿(768px) 세부 조정 | 와이어프레임 기준 중간 브레이크포인트 UI 보완 |
| SEO 최적화 | 페이지별 `<meta>` description·OG 태그 추가 |
| 접근성 개선 | 키보드 네비게이션·스크린리더 대응 강화 |
| 코드 모듈화 | 공통 헤더·푸터를 JS로 동적 삽입하여 중복 제거 |

---

## 회고

3일이라는 짧은 기간 안에 디자인부터 개발까지 전 과정을 직접 진행했습니다.

반응형 UI 설계와 다양한 인터랙션 구현을 통해 사용자 경험을 개선하는 방법을 경험할 수 있었으며,
Firebase와 외부 API 연동을 실무 형태로 적용해 볼 수 있었습니다.

---

## 라이선스

본 프로젝트는 **학습 및 포트폴리오 목적**으로 제작되었습니다.

기존 KIM'S YOGA PILATES 홈페이지를 참고하여 **디자인을 새롭게 리뉴얼**한 프로젝트이며,
상업적 목적이 아닌 UI/UX 개선 및 프론트엔드 개발 역량을 보여주기 위한 용도로 제작되었습니다.

모든 상표 및 원본 콘텐츠의 권리는 해당 소유자에게 있습니다.
