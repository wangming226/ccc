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

function renderNewsList() {
  const list = document.getElementById("newsPageList");
  list.innerHTML = SITE_NEWS.map((n) => {
    const d = n[currentLang];
    return `
      <article class="news-item">
        <p class="meta">${n.date}</p>
        <h4>${d.title}</h4>
        <p>${d.desc}</p>
        <a class="output-source-btn" href="./news-item.html?id=${n.id}">${t("detailNewsBtn")}</a>
      </article>
    `;
  }).join("");
}

function setupLangButtons() {
  document.querySelectorAll("[data-lang-btn]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang-btn");
      if (!lang) return;
      currentLang = lang;
      localStorage.setItem("wm-lab-lang", currentLang);
      applyLang();
      renderNewsList();
    });
  });
}

setupLangButtons();
applyLang();
renderNewsList();
