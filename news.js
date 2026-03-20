let currentLang = localStorage.getItem("wm-lab-lang") || "zh";
let activeNewsTag = "all";

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

function newsText(item) {
  const d = item[currentLang];
  return `${d.title} ${d.desc} ${(d.detail || []).join(" ")} ${(item.tags || []).join(" ")}`.toLowerCase();
}

function renderNewsTags() {
  const root = document.getElementById("newsTags");
  const tags = [...new Set(SITE_NEWS.flatMap((item) => item.tags || []))];
  const allTags = ["all", ...tags];
  root.innerHTML = allTags
    .map((tag) => {
      const label = tag === "all" ? t("allTags") : tag;
      const active = tag === activeNewsTag ? " active" : "";
      return `<button class="tag-pill${active}" type="button" data-news-tag="${tag}">${label}</button>`;
    })
    .join("");

  root.querySelectorAll("[data-news-tag]").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeNewsTag = btn.getAttribute("data-news-tag") || "all";
      renderNewsTags();
      renderNewsList();
    });
  });
}

function renderNewsList() {
  const list = document.getElementById("newsPageList");
  const query = (document.getElementById("newsSearch")?.value || "").trim().toLowerCase();
  const filtered = SITE_NEWS.filter((item) => {
    const matchQuery = !query || newsText(item).includes(query);
    const matchTag = activeNewsTag === "all" || (item.tags || []).includes(activeNewsTag);
    return matchQuery && matchTag;
  });

  if (!filtered.length) {
    list.innerHTML = `<div class="empty-state">${t("searchEmpty")}</div>`;
    return;
  }

  list.innerHTML = filtered
    .map((item) => {
      const d = item[currentLang];
      const tags = (item.tags || []).map((tag) => `<span class="meta-tag">${tag}</span>`).join("");
      return `
        <article class="news-item">
          <p class="meta">${item.date}</p>
          <h4>${d.title}</h4>
          <p>${d.desc}</p>
          <div class="meta-tags">${tags}</div>
          <div class="paper-actions">
            <a class="output-source-btn" href="./news-item.html?id=${item.id}">${t("detailNewsBtn")}</a>
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
      renderNewsTags();
      renderNewsList();
    });
  });
}

function setupSearch() {
  const input = document.getElementById("newsSearch");
  if (!input) return;
  input.addEventListener("input", () => renderNewsList());
}

setupLangButtons();
setupSearch();
applyLang();
renderNewsTags();
renderNewsList();
