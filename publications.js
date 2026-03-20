let currentLang = localStorage.getItem("wm-lab-lang") || "zh";
let activePaperTag = "all";

function t(key) {
  return SITE_I18N[currentLang][key] || "";
}

function applyLang() {
  document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (key) el.setAttribute("placeholder", t(key));
  });
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === currentLang);
  });
}

function paperText(paper) {
  const d = paper[currentLang];
  return `${d.title} ${d.authors} ${d.journal} ${d.abstract} ${paper.tags.join(" ")}`.toLowerCase();
}

function renderPaperTags() {
  const tagRoot = document.getElementById("paperTags");
  const tags = [...new Set(PAPER_DATA.flatMap((paper) => paper.tags))];
  const allTags = ["all", ...tags];
  tagRoot.innerHTML = allTags
    .map((tag) => {
      const label = tag === "all" ? t("allTags") : tag;
      const active = tag === activePaperTag ? " active" : "";
      return `<button class="tag-pill${active}" type="button" data-paper-tag="${tag}">${label}</button>`;
    })
    .join("");

  tagRoot.querySelectorAll("[data-paper-tag]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activePaperTag = btn.getAttribute("data-paper-tag") || "all";
      renderPaperTags();
      renderPapers();
    });
  });
}

function renderPapers() {
  const list = document.getElementById("paperList");
  const query = (document.getElementById("paperSearch")?.value || "").trim().toLowerCase();
  const filtered = PAPER_DATA.filter((paper) => {
    const matchQuery = !query || paperText(paper).includes(query);
    const matchTag = activePaperTag === "all" || paper.tags.includes(activePaperTag);
    return matchQuery && matchTag;
  });

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">${t("searchEmpty")}</div>`;
    return;
  }

  list.innerHTML = filtered
    .map((paper) => {
      const d = paper[currentLang];
      const tags = paper.tags.map((tag) => `<span class="meta-tag">${tag}</span>`).join("");
      return `
        <article class="output-item">
          <p class="meta">${paper.date}</p>
          <h4>${d.title}</h4>
          <p><strong>${t("authors")}：</strong>${d.authors}</p>
          <p><strong>${t("journal")}：</strong>${d.journal}</p>
          <p><strong>${t("summary")}：</strong>${d.abstract}</p>
          <div class="meta-tags">${tags}</div>
          <div class="paper-actions">
            <a class="output-source-btn" href="./paper.html?id=${paper.id}">${t("detailBtn")}</a>
            <a class="output-source-btn" href="${paper.source}" target="_blank" rel="noopener noreferrer">${t("source")}</a>
          </div>
        </article>
      `;
    })
    .join("");
}

function setupLangButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      if (!lang) return;
      currentLang = lang;
      localStorage.setItem("wm-lab-lang", currentLang);
      applyLang();
      renderPaperTags();
      renderPapers();
    });
  });
}

function setupSearch() {
  const input = document.getElementById("paperSearch");
  if (!input) return;
  input.addEventListener("input", () => renderPapers());
}

setupLangButtons();
setupSearch();
applyLang();
renderPaperTags();
renderPapers();
