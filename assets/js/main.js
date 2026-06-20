(function () {
  const data = window.portfolioData || portfolioData;
  const sections = Array.from(document.querySelectorAll("[data-section]"));
  const navLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navList = document.querySelector("[data-nav-list]");
  const header = document.querySelector("[data-header]");

  const qs = (selector, root = document) => root.querySelector(selector);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };

  function sectionShell(kicker, title, intro) {
    const wrap = el("div", "container section__inner reveal");
    const heading = el("div", "section-heading");
    heading.append(el("p", "section-heading__kicker", kicker));
    heading.append(el("h2", "section-heading__title", title));
    if (intro) heading.append(el("p", "section-heading__intro", intro));
    wrap.append(heading);
    return wrap;
  }

  function setImageFallback(img, label) {
    img.addEventListener("error", () => {
      const fallback = el("div", "image-placeholder");
      fallback.setAttribute("role", "img");
      fallback.setAttribute("aria-label", `${label} 사진 placeholder`);
      fallback.innerHTML = `<span>${label}</span><small>Photo<br>Placeholder</small>`;
      img.replaceWith(fallback);
    }, { once: true });
  }

  function renderHero() {
    const profile = data.profile;
    const root = qs("#hero");
    const wrap = el("div", "container hero__inner reveal");
    const copy = el("div", "hero__copy");
    const eyebrow = el("p", "hero__eyebrow", "Portfolio Resume");
    const title = el("h1", "hero__title", profile.name);
    const headline = el("p", "hero__headline", profile.headline);
    const slogan = el("p", "hero__slogan", profile.slogan);
    const sub = el("p", "hero__sub", profile.subSlogan);
    const actions = el("div", "hero__actions");
    const contact = el("a", "button button--primary", "연락하기");
    contact.href = "#contact";
    const projects = el("a", "button button--ghost", "프로젝트 보기");
    projects.href = "#projects";
    actions.append(contact, projects);
    copy.append(eyebrow, title, headline, slogan, sub, actions);

    const visual = el("div", "hero__visual");
    const frame = el("div", "profile-card");
    const img = el("img", "profile-card__image");
    img.src = profile.photo;
    img.alt = `${profile.name} 프로필 사진`;
    setImageFallback(img, profile.name);
    const badge = el("div", "profile-card__badge");
    badge.innerHTML = `<strong>Tech Career</strong><span>Career Transition</span>`;
    frame.append(img, badge);
    visual.append(frame);

    const journey = el("section", "hero-journey");
    journey.setAttribute("aria-label", "커리어 전환 과정");
    const journeyHead = el("div", "hero-journey__head");
    journeyHead.append(
      el("p", "hero-journey__eyebrow", "My Journey"),
      el("p", "hero-journey__summary", "서로 다른 현장 경험을 연결해 더 나은 서비스를 만듭니다.")
    );
    const journeyTrack = el("ol", "hero-journey__track");
    [
      ["01", "Fashion Design", "디테일을 설계하는 감각", "2021–2025"],
      ["02", "VMD & Sales", "고객과 시장을 읽는 시선", "2024–2026"],
      ["03", "IT Developer", "경험을 구현하는 기술", "NOW"]
    ].forEach(([step, title, desc, period], index) => {
      const item = el("li", `hero-journey__item${index === 2 ? " is-current" : ""}`);
      const marker = el("span", "hero-journey__marker", step);
      const content = el("div", "hero-journey__content");
      const top = el("div", "hero-journey__top");
      top.append(el("strong", "", title), el("span", "", period));
      content.append(top, el("p", "", desc));
      item.append(marker, content);
      journeyTrack.append(item);
    });
    journey.append(journeyHead, journeyTrack);

    wrap.append(copy, visual, journey);
    root.append(wrap);
  }

  function renderAbout() {
    const root = qs("#about");
    const aboutEssay = data.essays.find((item) => item.title === "정은호의 세상만나기");
    const wrap = sectionShell("About", "정은호의 세상만나기", "패션과 디자인, 영업 현장에서 얻은 감각을 IT의 안정성과 정확성으로 옮겨가는 이야기입니다.");
    const grid = el("div", "about-grid");
    const story = el("article", "story-panel");
    story.append(el("h3", "", aboutEssay.title));
    story.append(el("p", "", aboutEssay.body));
    const metrics = el("div", "metric-grid");
    [
      ["19개점", "아울렛 담당 경험"],
      ["2건", "디자인 등록"],
      ["IT 개발자", "새로운 목표"]
    ].forEach(([value, label]) => {
      const item = el("div", "metric-card");
      item.append(el("strong", "", value), el("span", "", label));
      metrics.append(item);
    });
    grid.append(story, metrics);
    wrap.append(grid);
    root.append(wrap);
  }

  function renderSkills() {
    const root = qs("#skills");
    const wrap = sectionShell("Skills", "기술과 디자인 감각의 결합", "개발 스택과 디자인 툴 숙련도를 함께 보여줍니다. ");
    const grid = el("div", "skill-grid");
    [
      ["Development", data.skills.dev],
      ["Tools / Frameworks", data.skills.tools],
      ["Design Tools", data.skills.design]
    ].forEach(([title, items]) => {
      const card = el("article", "skill-card reveal");
      card.append(el("h3", "", title));
      items.forEach((skill) => {
        const row = el("div", "skill-row");
        const top = el("div", "skill-row__top");
        top.append(el("span", "", skill.name), el("strong", "", `${skill.level}%`));
        const track = el("div", "skill-row__track");
        const bar = el("span", "skill-row__bar");
        bar.style.setProperty("--target", `${skill.level}%`);
        bar.dataset.level = skill.level;
        track.append(bar);
        row.append(top, track);
        card.append(row);
      });
      grid.append(card);
    });
    wrap.append(grid);
    root.append(wrap);
  }

  function renderProjects() {
    const root = qs("#projects");
    const wrap = sectionShell("Projects", "개발 프로젝트", "개발자로서의 실무 감각을 보여줄 핵심 섹션입니다. ");
    const grid = el("div", "project-grid");
    data.projects.forEach((project, index) => {
      const card = el("article", "project-card reveal");
      const media = el("div", "project-card__media");
      const img = el("img", "");
      img.src = project.thumb;
      img.alt = `${project.title} 썸네일`;
      setImageFallback(img, `Project ${index + 1}`);
      media.append(img);
      const body = el("div", "project-card__body");
      body.append(el("h3", "", project.title));
      body.append(el("p", "", project.desc));
      const tags = el("div", "tag-list");
      project.tags.forEach((tag) => tags.append(el("span", "tag", tag)));
      const links = el("div", "project-card__links");
      links.append(projectLink(project.repo, "GitHub"), projectLink(project.demo, "Demo"));
      body.append(tags, links);
      card.append(media, body);
      grid.append(card);
    });
    wrap.append(grid);
    root.append(wrap);
  }

  function projectLink(href, label) {
    if (!href || href.includes("링크")) {
      const span = el("span", "text-link text-link--disabled", `${label} 준비중`);
      return span;
    }
    const link = el("a", "text-link", label);
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    return link;
  }

  function renderExperience() {
    const root = qs("#experience");
    const wrap = sectionShell("Experience", "경력과 학력", "현장 실행력, 고객 접점, 디자인 기반 문제 해결 경험이 IT 개발 역량의 기반이 됩니다.");
    const columns = el("div", "timeline-columns");
    columns.append(timeline("Career", data.experience, "experience"), timeline("Education", data.education, "education"));
    const military = el("p", "military-note", data.military);
    wrap.append(columns, military);
    root.append(wrap);
  }

  function timeline(title, items, type) {
    const box = el("article", "timeline-box reveal");
    box.append(el("h3", "", title));
    const list = el("ol", "timeline");
    items.forEach((item) => {
      const li = el("li", "timeline__item");
      li.append(el("time", "timeline__period", item.period));
      const body = el("div", "timeline__body");
      if (type === "experience") {
        body.append(el("h4", "", `${item.company} · ${item.role}`));
        const points = el("ul", "bullet-list");
        item.points.forEach((point) => points.append(el("li", "", point)));
        body.append(points);
      } else {
        body.append(el("h4", "", item.title));
        body.append(el("p", "", item.desc));
      }
      li.append(body);
      list.append(li);
    });
    box.append(list);
    return box;
  }

  function renderAwards() {
    const root = qs("#awards");
    const wrap = sectionShell("Awards", "수상·등록·자격", "디자인 성취와 기본 자격을 정돈된 리스트로 보여줍니다.");
    const grid = el("div", "award-grid");
    const awardCard = listCard("수상 및 디자인 등록", data.awards);
    const certCard = listCard("자격증", data.certificates);
    grid.append(awardCard, certCard);
    wrap.append(grid);
    root.append(wrap);
  }

  function listCard(title, items) {
    const card = el("article", "list-card reveal");
    card.append(el("h3", "", title));
    const list = el("ul", "clean-list");
    items.forEach((item) => {
      const li = el("li", "");
      li.append(el("span", "", item.year), el("strong", "", item.title));
      list.append(li);
    });
    card.append(list);
    return card;
  }

  function renderPersonal() {
    const root = qs("#personal");
    const wrap = sectionShell("Personal", "자기소개서 노트", "호불호, 다짐, 세계관 같은 개인 서사를 카드로 분리했습니다.");
    const grid = el("div", "essay-grid");
    data.essays
      .filter((essay) => essay.title !== "정은호의 세상만나기")
      .forEach((essay) => {
        const card = el("article", "essay-card reveal");
        card.append(el("h3", "", essay.title));
        card.append(el("p", "", essay.body));
        grid.append(card);
      });
    wrap.append(grid);
    root.append(wrap);
  }

  function renderContact() {
    const profile = data.profile;
    const root = qs("#contact");
    const wrap = sectionShell("Contact", "함께 일할 준비가 되어 있습니다", "신뢰와 IT의 정확성을 함께 고민하는 개발자가 되겠습니다.");
    const card = el("div", "contact-card reveal");
    const mail = contactItem("Email", profile.email, `mailto:${profile.email}`);
    const phone = contactItem("Phone", profile.phone, `tel:${profile.phone.replace(/\s/g, "")}`);
    const insta = contactItem("Instagram", `@${profile.instagram}`, `https://www.instagram.com/${profile.instagram}`);
    const github = contactItem("GitHub", profile.github, profile.github);
    const address = contactItem("Address", profile.address, "");
    card.append(mail, phone, insta, github, address);
    wrap.append(card);
    root.append(wrap);
  }

  function contactItem(label, value, href) {
    const item = el("div", "contact-item");
    item.append(el("span", "", label));
    if (href) {
      const link = el("a", "", value);
      link.href = href;
      if (href.startsWith("http")) {
        link.target = "_blank";
        link.rel = "noreferrer";
      }
      item.append(link);
    } else {
      item.append(el("strong", "", value));
    }
    return item;
  }

  function setupNavigation() {
    navToggle.addEventListener("click", () => {
      const isOpen = navList.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute("aria-label", isOpen ? "메뉴 닫기" : "메뉴 열기");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });

    window.addEventListener("scroll", () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    }, { passive: true });
  }

  function setupObservers() {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.16 });

    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));

    const skillObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll(".skill-row__bar").forEach((bar) => {
            bar.style.width = `${bar.dataset.level}%`;
          });
          skillObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    document.querySelectorAll(".skill-card").forEach((node) => skillObserver.observe(node));

    const navObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    }, { rootMargin: "-45% 0px -48% 0px", threshold: 0 });

    sections.forEach((section) => navObserver.observe(section));
  }

  function init() {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExperience();
    renderAwards();
    renderPersonal();
    renderContact();
    setupNavigation();
    setupObservers();
  }

  init();
})();
