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
  const idx = PAPER_DATA.findIndex((p) => p.id === id);
  const paper = idx >= 0 ? PAPER_DATA[idx] : null;
  const root = document.getElementById("paperDetail");

  if (!paper) {
    root.innerHTML = `<h3>${t("noPaper")}</h3><a class="output-source-btn" href="./publications.html">${t("backList")}</a>`;
    return;
  }

  const d = paper[currentLang];
  const prev = idx > 0 ? PAPER_DATA[idx - 1] : null;
  const next = idx < PAPER_DATA.length - 1 ? PAPER_DATA[idx + 1] : null;
  const tags = paper.tags.map((tag) => `<span class="meta-tag">${tag}</span>`).join("");

  root.innerHTML = `
    <p class="meta">${paper.date}</p>
    <h2>${d.title}</h2>
    <p><strong>${t("authors")}：</strong>${d.authors}</p>
    <p><strong>${t("journal")}：</strong>${d.journal}</p>
    <p><strong>${t("keywords")}：</strong>${d.keywords}</p>
    <p><strong>${t("summary")}：</strong>${d.abstract}</p>
    <div class="meta-tags">${tags}</div>
    <div class="paper-actions">
      <a class="output-source-btn" href="./publications.html">${t("backList")}</a>
      <a class="output-source-btn" href="${paper.source}" target="_blank" rel="noopener noreferrer">PDF/DOI</a>
    </div>
    <div class="paper-actions" style="margin-top:14px">
      ${prev ? `<a class="output-source-btn" href="./paper.html?id=${prev.id}">${t("prev")}</a>` : ""}
      ${next ? `<a class="output-source-btn" href="./paper.html?id=${next.id}">${t("next")}</a>` : ""}
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
