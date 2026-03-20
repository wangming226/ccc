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

function renderNewsDetail() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const idx = SITE_NEWS.findIndex((n) => n.id === id);
  const item = idx >= 0 ? SITE_NEWS[idx] : null;
  const root = document.getElementById("newsDetail");

  if (!item) {
    root.innerHTML = `<h3>${t("noNews")}</h3><a class="output-source-btn" href="./news.html">${t("backNewsList")}</a>`;
    return;
  }

  const d = item[currentLang];
  const paragraphs = (d.detail || []).map((p) => `<p>${p}</p>`).join("");
  const prev = idx > 0 ? SITE_NEWS[idx - 1] : null;
  const next = idx < SITE_NEWS.length - 1 ? SITE_NEWS[idx + 1] : null;
  const tags = (item.tags || []).map((tag) => `<span class="meta-tag">${tag}</span>`).join("");

  root.innerHTML = `
    <p class="meta">${item.date}</p>
    <h2>${d.title}</h2>
    <p>${d.desc}</p>
    <div class="meta-tags">${tags}</div>
    ${paragraphs}
    <div class="paper-actions">
      <a class="output-source-btn" href="./news.html">${t("backNewsList")}</a>
    </div>
    <div class="paper-actions" style="margin-top:14px">
      ${prev ? `<a class="output-source-btn" href="./news-item.html?id=${prev.id}">${t("prev")}</a>` : ""}
      ${next ? `<a class="output-source-btn" href="./news-item.html?id=${next.id}">${t("next")}</a>` : ""}
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
      renderNewsDetail();
    });
  });
}

setupLangButtons();
applyLang();
renderNewsDetail();
