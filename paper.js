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

function renderPaperDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const paper = PAPER_DATA.find((p) => p.id === id);
  const root = document.getElementById("paperDetail");

  if (!paper) {
    root.innerHTML = `<h3>${t("noPaper")}</h3><a class="output-source-btn" href="./publications.html">${t("backList")}</a>`;
    return;
  }

  const d = paper[currentLang];
  root.innerHTML = `
    <p class="meta">${paper.date}</p>
    <h2>${d.title}</h2>
    <p><strong>${d.journal}</strong></p>
    <p>${d.abstract}</p>
    <div class="paper-actions">
      <a class="output-source-btn" href="./publications.html">${t("backList")}</a>
      <a class="output-source-btn" href="${paper.source}" target="_blank" rel="noopener noreferrer">PDF/DOI</a>
    </div>
  `;
}

function setupLangButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      if (!lang) return;
      currentLang = lang;
      localStorage.setItem("wm-lab-lang", currentLang);
      applyLang();
      renderPaperDetail();
    });
  });
}

setupLangButtons();
applyLang();
renderPaperDetail();
