# 정은호 포트폴리오형 자기소개 웹사이트

빌드 스텝 없이 동작하는 순수 정적 웹사이트입니다. `HTML + CSS + Vanilla JS`만 사용하며, GitHub Pages에 그대로 배포할 수 있습니다.

## 파일 구조

```text
index.html
assets/
  css/
    style.css
  js/
    data.js
    main.js
  img/
README.md
```

## 콘텐츠 수정 방법

모든 텍스트와 링크 데이터는 `assets/js/data.js`에 있습니다.

- 프로필, 연락처, 학력, 경력, 수상, 자격증: 확정 데이터 반영 완료
- `skills`, `projects`, `essays`: `// TODO:` 주석을 찾아 실제 내용으로 교체
- 실제 프로필 사진은 `assets/img/profile.jpg`로 넣으면 자동 표시
- 프로젝트 이미지는 `assets/img/proj1.jpg` 같은 경로에 파일을 넣거나 `data.js`의 `thumb` 값을 수정

## 로컬에서 여는 법

가장 간단한 방법은 `index.html`을 브라우저로 직접 여는 것입니다.

1. 이 폴더를 엽니다.
2. `index.html`을 더블클릭합니다.
3. 브라우저에서 페이지를 확인합니다.

로컬 서버로 확인하고 싶다면 PowerShell에서 아래 명령을 실행할 수 있습니다.

```powershell
python -m http.server 8000
```

이후 브라우저에서 `http://localhost:8000`으로 접속합니다.

## GitHub Pages 배포 방법

1. GitHub에 새 저장소를 만듭니다.
2. 이 프로젝트의 전체 파일을 저장소에 업로드합니다.
3. GitHub 저장소에서 `Settings`로 이동합니다.
4. 왼쪽 메뉴에서 `Pages`를 선택합니다.
5. `Build and deployment`의 `Source`를 `Deploy from a branch`로 설정합니다.
6. `Branch`를 `main`, 폴더를 `/root`로 선택하고 저장합니다.
7. 잠시 후 표시되는 GitHub Pages URL로 접속해 배포 결과를 확인합니다.

## 기술 메모

- 모든 경로는 GitHub Pages 호환을 위해 상대경로로 작성했습니다.
- 내비게이션 활성화, smooth scroll, fade-up 등장, 스킬 바 애니메이션은 `assets/js/main.js`에서 처리합니다.
- 외부 의존성은 Pretendard CDN 폰트만 사용합니다.
