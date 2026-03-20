let currentLang = localStorage.getItem("wm-lab-lang") || "zh";

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
    fp.innerHTML = `<p><strong>${d.title}</strong></p><p>${d.journal}</p><a class="output-source-btn" href="./paper.html?id=${paper.id}">${t("detailBtn")}</a>`;
  }
  if (fm) {
    const arr = FEATURED.members.map((name) => `<span class="member-jump-link">${name}</span>`).join("");
    fm.innerHTML = `<div class="member-jump-links">${arr}</div><div style="margin-top:10px"><a class="output-source-btn" href="./members.html">${t("navMembers")}</a></div>`;
  }
}

function setupLangButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      if (!lang) return;
      currentLang = lang;
      localStorage.setItem("wm-lab-lang", currentLang);
      applyLang();
      renderNews();
      renderFeatured();
    });
  });
}

document.getElementById("year").textContent = `© ${new Date().getFullYear()}`;
setupLangButtons();
applyLang();
renderNews();
renderFeatured();
