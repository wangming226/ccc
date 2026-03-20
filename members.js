let currentLang = localStorage.getItem("wm-lab-lang") || "zh";

function t(key) {
  return SITE_I18N[currentLang][key] || "";
}

function makeId(name) {
  return `m-${name.charCodeAt(0)}-${name.charCodeAt(name.length - 1)}`;
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

function renderMembers() {
  const wrap = document.getElementById("membersWrap");

  const listLinks = (arr) =>
    arr
      .map((name) => `<a class="member-jump-link" href="#${makeId(name)}">${name}</a>`)
      .join("");

  const profileCards = (arr, role) =>
    arr
      .map(
        (name) => `
          <article class="member-profile-card" id="${makeId(name)}">
            <div class="member-photo-wrap">
              <img class="member-photo" src="./assets/members/${name}.jpg" alt="${name}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
              <span class="member-photo-fallback">${name.slice(0, 1)}</span>
            </div>
            <h4>${name}</h4>
            <p class="member-profile-role">${role}</p>
            <p><strong>${currentLang === "zh" ? "研究方向" : "Research"}：</strong>${currentLang === "zh" ? "待补充" : "TBD"}</p>
            <p><strong>${currentLang === "zh" ? "邮箱" : "Email"}：</strong>${makeId(name)}@wangming-lab.com</p>
          </article>
        `
      )
      .join("");

  wrap.innerHTML = `
    <section class="member-group member-nav-block">
      <h3>${t("phd")}</h3>
      <div class="member-jump-links">${listLinks(MEMBER_DATA.phd)}</div>
      <h3 style="margin-top:16px">${t("msc")}</h3>
      <div class="member-jump-links">${listLinks(MEMBER_DATA.msc)}</div>
    </section>
    <section class="member-group">
      <h3>${t("membersTitle")}</h3>
      <div class="member-profile-grid">${profileCards(MEMBER_DATA.phd, t("phd"))}${profileCards(MEMBER_DATA.msc, t("msc"))}</div>
    </section>
    <section class="member-group">
      <h3>${t("alumni")}</h3>
      <div class="member-jump-links">${MEMBER_DATA.alumni.map((n) => `<span class="member-jump-link">${n}</span>`).join("")}</div>
    </section>
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
      renderMembers();
    });
  });
}

setupLangButtons();
applyLang();
renderMembers();
