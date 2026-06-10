const portfolioData = {
  profile: {
    name: "정은호 (鄭誾鎬)",
    headline: "숫자의 가치를 아는 개발자",
    slogan: "돈의 흐름에 대한 높은 이해도와 서울정수폴리텍에서 습득한 프레임워크 기술을 결합하여, 보안 사고 없는 무결점 금융 서비스를 지향합니다.",
    subSlogan: "영업과 IT가 만나 안정성을 더하다.",
    address: "서울특별시 동작구 상도로13나길 8",
    phone: "+82 010-5744-3003",
    email: "dosl420@naver.com",
    instagram: "korea_eunno",
    github: "https://github.com/eunno-kr",
    photo: "assets/img/KakaoTalk_20260201_211916066.jpg"
  },

  education: [
    { period: "2016.03~2018.02", title: "부광고등학교 졸업", desc: "이과계열" },
    { period: "2018.03~2018.12", title: "충남도립대학교 중퇴", desc: "패션·인테리어 디자인과" },
    { period: "2021.03~2025.02", title: "목포대학교 졸업", desc: "패션의류학과" }
  ],

  experience: [
    {
      period: "2024.08~2024.12",
      company: "마리앤어스",
      role: "VMD 인턴",
      points: [
        "24 F/W 모델촬영 참여",
        "매장 관리 및 VMD 연출",
        "신규오픈·리뉴얼오픈 진행",
        "POP·현수막·이미지시트 시안 작업 및 발주"
      ]
    },
    {
      period: "2025.02~2026.02",
      company: "대현 주크",
      role: "영업부 사원",
      points: [
        "아울렛 19개점 담당",
        "온라인 기획전·라이브 총괄"
      ]
    }
  ],

  awards: [
    { year: "2023", title: "제4회 한국섬유 패션디자인 콘테스트 공모전 입상" },
    { year: "2023", title: "파크랜드 공모전 참여 (팀명: 드림즈 백승수)" },
    { year: "2024", title: "디자인등록증 제30-1244988호 (2024.01.04)" },
    { year: "2024", title: "디자인등록증 제30-1268187호 (2024.07.15) - 목포대 졸업작품 우수작품 선정" }
  ],

  certificates: [
    { year: "2019", title: "운전면허증 2종 보통" },
    { year: "2023", title: "GTQ 포토샵 2급" }
  ],

  military: "2018.12~2020.07 병역(필) - 해병대",

  // TODO: 실제 스택/숙련도 입력.
  skills: {
    dev: [
      { name: "JavaScript", level: 70 },
      { name: "Python", level: 60 },
      { name: "C++", level: 50 },
      { name: "HTML/CSS", level: 75 }
    ],
    design: [
      { name: "Photoshop", level: 85 },
      { name: "Illustrator", level: 70 }
    ]
  },

  // TODO: 개발 프로젝트 입력.
  projects: [
    {
      title: "Team_SignBridge",
      desc: "실시간 수어 AI 번역 시스템",
      tags: ["Python", "C++", "OpenCV", "Hugging Face", "Linux"],
      repo: "https://github.com/eunno-kr/Team_SignBridge.git",
      demo: "https://huggingface.co/spaces/jeongeunho/SignBridge",
      thumb: "assets/img/proj1.jpg"
    },
    {
      title: " 대시보드",
      desc: "웹 대시보드 예시입니다.",
      tags: ["HTML", "CSS", "JavaScript"],
      repo: "",
      demo: "",
      thumb: "assets/img/proj2.jpg"
    },
    {
      title: "대시보드 2",
      desc: "웹 대시보드 예시입니다.",
      tags: ["Vanilla JS", "UX", "Local Data"],
      repo: "",
      demo: "",
      thumb: "assets/img/proj3.jpg"
    }
  ],

  // TODO: 자소서 본문 입력.
  essays: [
    { title: "정은호의 호불호", body: "TODO 본문" },
    { title: "정은호의 세상만나기", body: "TODO 본문" },
    { title: "정은호의 다짐", body: "TODO 본문" },
    { title: "정은호의 모든것", body: "TODO 본문" }
  ]
};
