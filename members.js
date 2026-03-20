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

function nameOf(m) {
  return currentLang === "zh" ? m.name : m.enName;
}

function focusOf(m) {
  return currentLang === "zh" ? m.focusZh : m.focusEn;
}

function bioOf(m) {
  return currentLang === "zh" ? m.bioZh : m.bioEn;
}

function renderJumpLinks(arr) {
  return arr.map((m) => `<a class="member-jump-link" href="#${makeId(m.name)}">${nameOf(m)}</a>`).join("");
}

function renderProfileCards(arr, roleLabel) {
  return arr
    .map((m) => `
      <article class="member-profile-card" id="${makeId(m.name)}">
        <div class="member-photo-wrap">
          <img class="member-photo" src="./assets/members/${m.name}.jpg" alt="${nameOf(m)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
          <span class="member-photo-fallback">${m.name.slice(0, 1)}</span>
        </div>
        <h4>${nameOf(m)}</h4>
        <p class="member-profile-role">${roleLabel}</p>
        <p><strong>${t("focusLabel")}：</strong>${focusOf(m)}</p>
        <p><strong>${t("emailLabel")}：</strong><a href="mailto:${m.email}">${m.email}</a></p>
        <p><strong>${t("profileLabel")}：</strong>${bioOf(m)}</p>
      </article>
    `)
    .join("");
}

function renderAlumniCards(arr) {
  return arr
    .map((m) => `
      <article class="member-profile-card" id="${makeId(m.name)}">
        <div class="member-photo-wrap">
          <img class="member-photo" src="./assets/members/${m.name}.jpg" alt="${nameOf(m)}" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='grid';" />
          <span class="member-photo-fallback">${m.name.slice(0, 1)}</span>
        </div>
        <h4>${nameOf(m)}</h4>
        <p class="member-profile-role">${t("alumni")}</p>
        <p>${currentLang === "zh" ? m.destinationZh : m.destinationEn}</p>
      </article>
    `)
    .join("");
}

function renderMembers() {
  const wrap = document.getElementById("membersWrap");

  wrap.innerHTML = `
    <section class="member-group member-nav-block">
      <h3>${t("phd")}</h3>
      <div class="member-jump-links">${renderJumpLinks(MEMBER_DATA.phd)}</div>
      <h3 style="margin-top:16px">${t("msc")}</h3>
      <div class="member-jump-links">${renderJumpLinks(MEMBER_DATA.msc)}</div>
      <h3 style="margin-top:16px">${t("alumni")}</h3>
      <div class="member-jump-links">${renderJumpLinks(MEMBER_DATA.alumni)}</div>
    </section>
    <section class="member-group">
      <h3>${t("phd")}</h3>
      <div class="member-profile-grid">${renderProfileCards(MEMBER_DATA.phd, t("phd"))}</div>
    </section>
    <section class="member-group">
      <h3>${t("msc")}</h3>
      <div class="member-profile-grid">${renderProfileCards(MEMBER_DATA.msc, t("msc"))}</div>
    </section>
    <section class="member-group">
      <h3>${t("alumni")}</h3>
      <div class="member-profile-grid">${renderAlumniCards(MEMBER_DATA.alumni)}</div>
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
