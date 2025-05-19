## 개발 환경

- Node.js 버전: 20v
- 패키지 매니저: yarn

## 사용 라이브러리

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **상태 관리**: React Query, jotai
- **폼 관리**: React Hook Form, zod
- **UI 컴포넌트**: Storybook

## 프로젝트 규칙

### 디렉토리 구조

- `src/app`: Next.js의 페이지 및 라우팅 관련 컴포넌트
- `src/shared`: 공통으로 사용되는 컴포넌트, 타입, 상수 등
- `src/services`: API 통신 및 외부 서비스 연동 관련 로직
- `src/utils`: 유틸리티 함수 및 헬퍼

### 코딩 컨벤션

1. **네이밍 규칙**

   - 파일 및 폴더: kebab-case (예: `calendar.tsx`, `user-profile.tsx`)
   - 상수: UPPER_SNAKE_CASE (예: `API_ENDPOINTS`)
   - 컴포넌트 내부 함수/변수: camelCase (예: `handleSubmit`, `userData`)
   - 컴포넌트 이름: PascalCase (예: `Calendar`, `UserProfile`)

2. **파일 구조**

   - 페이지별 컴포넌트는 해당 페이지 폴더 내에 위치
     - 내부 컴포넌트는 `_components` 폴더에 배치
     - 페이지별 컴포넌트는 해당 페이지 폴더 내에 위치
     - 공용으로 활용될 경우 상위 레이어로 올린다
     - 공통 컴포넌트는 `shared/components` 폴더에 위치
     - 컴포넌트는 `index.tsx`로 파일을 생성 후 활용
   - 컴포넌트 관련 파일들(index.tsx, styles.ts, types.ts 등)은 같은 디렉토리에 위치

3. **컴포넌트 작성**

   - 함수형 컴포넌트 사용

4. **Git 커밋 메시지**

   - Feat: 새로운 기능 추가
   - Fix: 기능 수정
   - Bug: 에러 수정
   - Docs: 문서 수정
   - Refactor: 코드 리팩토링
   - Chore: 빌드 프로세스나 보조 도구 변경

5. **Type 관리 규칙**
   - 컴포넌트 props 타입은 접미사로 `Props` 사용 (예: `ButtonProps`, `ModalProps`)
   - API 관련 타입은 용도에 따라 `Request`, `Response`, `Params` 접미사 사용
