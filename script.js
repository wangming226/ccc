let currentLang = localStorage.getItem("wm-lab-lang") || "zh";
let activeSlide = 0;
let slideTimer = null;

function t(key) {
  return SITE_I18N[currentLang][key] || "";
}

function applyLang() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === currentLang);
  });
}

function renderNews() {
  const list = document.getElementById("newsList");
  if (!list) return;
  list.innerHTML = SITE_NEWS.map((n) => {
    const d = n[currentLang];
    return `<article class="news-item"><p class="meta">${n.date}</p><h4>${d.title}</h4><p>${d.desc}</p><a class="output-source-btn" href="./news-item.html?id=${n.id}">${t("detailNewsBtn")}</a></article>`;
  }).join("");
}

function renderFeatured() {
  const fp = document.getElementById("featuredPaper");
  const fm = document.getElementById("featuredMembers");
  if (fp) {
    const paper = PAPER_DATA.find((p) => p.id === FEATURED.paperId) || PAPER_DATA[0];
    const d = paper[currentLang];
    fp.innerHTML = `<p><strong>${d.title}</strong></p><p>${d.journal}</p><div class="meta-tags">${paper.tags.map((tag) => `<span class="meta-tag">${tag}</span>`).join("")}</div><div style="margin-top:10px"><a class="output-source-btn" href="./paper.html?id=${paper.id}">${t("detailBtn")}</a></div>`;
  }
  if (fm) {
    const arr = FEATURED.members.map((name) => `<span class="member-jump-link">${name}</span>`).join("");
    fm.innerHTML = `<div class="member-jump-links">${arr}</div><div style="margin-top:10px"><a class="output-source-btn" href="./members.html">${t("navMembers")}</a></div>`;
  }
}

function renderIntro() {
  const whyJoin = document.getElementById("whyJoinList");
  if (whyJoin) {
    whyJoin.innerHTML = LAB_HIGHLIGHTS[currentLang]
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
}

function renderResearch() {
  const grid = document.getElementById("researchGrid");
  if (!grid) return;
  grid.innerHTML = RESEARCH_AREAS.map((item) => {
    const d = item[currentLang];
    return `<article class="card research-card"><p class="meta">${d.title}</p><p>${d.desc}</p></article>`;
  }).join("");
}

function renderEquipment() {
  const grid = document.getElementById("equipmentGrid");
  if (!grid) return;
  grid.innerHTML = EQUIPMENT_DATA.map((item) => {
    const d = item[currentLang];
    return `<article class="card equipment-card"><h3>${d.title}</h3><p>${d.desc}</p></article>`;
  }).join("");
}

function renderRecruitment() {
  const target = document.getElementById("joinTargetList");
  const process = document.getElementById("joinProcessList");
  if (target) {
    target.innerHTML = RECRUITMENT_DATA[currentLang].targets
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
  if (process) {
    process.innerHTML = RECRUITMENT_DATA[currentLang].process
      .map((item) => `<li>${item}</li>`)
      .join("");
  }
}

function updateCarousel() {
  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".carousel-dot");
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === activeSlide);
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === activeSlide);
  });
}

function renderCarousel() {
  const slideRoot = document.getElementById("heroSlides");
  const dotRoot = document.getElementById("heroDots");
  if (!slideRoot || !dotRoot) return;

  slideRoot.innerHTML = HERO_SLIDES.map((item, index) => {
    const news = SITE_NEWS.find((entry) => entry.id === item.newsId);
    if (!news) return "";
    const d = news[currentLang];
    const active = index === activeSlide ? " active" : "";
    return `
      <article class="carousel-slide${active}">
        <p class="carousel-accent">${item[currentLang] || item.accent}</p>
        <h3>${d.title}</h3>
        <p>${d.desc}</p>
        <div class="meta-tags">${(news.tags || []).map((tag) => `<span class="meta-tag">${tag}</span>`).join("")}</div>
        <div class="paper-actions">
          <a class="output-source-btn" href="./news-item.html?id=${news.id}">${t("detailNewsBtn")}</a>
        </div>
      </article>
    `;
  }).join("");

  dotRoot.innerHTML = HERO_SLIDES.map((_, index) => {
    const active = index === activeSlide ? " active" : "";
    return `<button class="carousel-dot${active}" type="button" data-slide-index="${index}" aria-label="Slide ${index + 1}"></button>`;
  }).join("");

  dotRoot.querySelectorAll("[data-slide-index]").forEach((dot) => {
    dot.addEventListener("click", () => {
      activeSlide = Number(dot.getAttribute("data-slide-index")) || 0;
      updateCarousel();
      restartCarousel();
    });
  });

  updateCarousel();
}

function moveSlide(step) {
  activeSlide = (activeSlide + step + HERO_SLIDES.length) % HERO_SLIDES.length;
  updateCarousel();
  restartCarousel();
}

function startCarousel() {
  if (slideTimer) clearInterval(slideTimer);
  slideTimer = setInterval(() => {
    activeSlide = (activeSlide + 1) % HERO_SLIDES.length;
    updateCarousel();
  }, 4500);
}

function restartCarousel() {
  startCarousel();
}

function setupCarouselControls() {
  const prev = document.getElementById("carouselPrev");
  const next = document.getElementById("carouselNext");
  if (prev) prev.addEventListener("click", () => moveSlide(-1));
  if (next) next.addEventListener("click", () => moveSlide(1));
}

function setupAssets() {
  const logo = document.getElementById("labLogo");
  const piPhoto = document.getElementById("piPhoto");
  if (logo && PI_DATA.logo) logo.src = PI_DATA.logo;
  if (piPhoto && PI_DATA.photo) piPhoto.src = PI_DATA.photo;
}

function setupLangButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      if (!lang) return;
      currentLang = lang;
      localStorage.setItem("wm-lab-lang", currentLang);
      applyLang();
      renderIntro();
      renderResearch();
      renderEquipment();
      renderRecruitment();
      renderNews();
      renderFeatured();
      renderCarousel();
    });
  });
}

document.getElementById("year").textContent = `${new Date().getFullYear()}`;
setupAssets();
setupLangButtons();
setupCarouselControls();
applyLang();
renderIntro();
renderResearch();
renderEquipment();
renderRecruitment();
renderNews();
renderFeatured();
renderCarousel();
startCarousel();
