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

function renderPapers() {
  const list = document.getElementById("paperList");
  list.innerHTML = PAPER_DATA.map((p) => {
    const d = p[currentLang];
    return `
      <article class="output-item">
        <p class="meta">${p.date}</p>
        <h4>${d.title}</h4>
        <p>${d.journal}</p>
        <p>${d.abstract}</p>
        <a class="output-source-btn" href="./paper.html?id=${p.id}">${t("detailBtn")}</a>
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
      renderPapers();
    });
  });
}

setupLangButtons();
applyLang();
renderPapers();
