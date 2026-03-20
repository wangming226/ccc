const memberData = {
  researchers: [
    { name: "王明 教授", role: "课题组负责人", focus: "超分子组装与功能材料" },
    { name: "李晨 副教授", role: "核心研究人员", focus: "金属有机笼设计与表征" },
    { name: "赵越 博士后", role: "博士后", focus: "叠层超分子机制研究" }
  ],
  students: [
    { name: "陈雨", role: "博士生", focus: "手性金属有机笼构筑" },
    { name: "孙航", role: "博士生", focus: "主客体识别与传感" },
    { name: "刘宁", role: "硕士生", focus: "超分子催化" },
    { name: "唐琪", role: "硕士生", focus: "分子堆叠动力学" }
  ],
  alumni: [
    { name: "周哲", role: "毕业成员", focus: "现就职于高校" },
    { name: "吴桐", role: "毕业成员", focus: "现就职于科研机构" }
  ]
};

const outputData = {
  papers: [
    {
      date: "2026-02",
      title: "精准构筑金属有机笼用于分子识别的策略研究",
      desc: "Angew. Chem. Int. Ed.（示例）"
    },
    {
      date: "2025-10",
      title: "叠层超分子体系的可控组装与光响应行为",
      desc: "J. Am. Chem. Soc.（示例）"
    }
  ],
  projects: [
    {
      date: "2026-01",
      title: "国家自然科学基金面上项目：功能金属有机笼构筑",
      desc: "周期：2026-2029（示例）"
    },
    {
      date: "2025-07",
      title: "吉林省重点研发计划：叠层超分子性能调控",
      desc: "周期：2025-2028（示例）"
    }
  ],
  conferences: [
    {
      date: "2025-11",
      title: "第XX届全国超分子化学学术会议",
      desc: "王明教授大会邀请报告（示例）"
    },
    {
      date: "2025-06",
      title: "International Conference on Supramolecular Chemistry",
      desc: "课题组口头报告与墙报展示（示例）"
    }
  ]
};

const newsData = [
  {
    date: "2026-03-01",
    title: "课题组在金属有机笼精准构筑方向发表最新成果",
    desc: "相关工作发表于国际化学期刊，揭示配体构型对组装路径的关键影响。"
  },
  {
    date: "2026-02-10",
    title: "课题组招收2026级研究生与博士后",
    desc: "欢迎具备化学、材料、计算化学背景同学联系，支持交叉学科联合培养。"
  },
  {
    date: "2025-12-18",
    title: "王明课题组参加国际超分子化学会议并作报告",
    desc: "围绕叠层超分子功能调控进行口头报告，与多个团队建立合作意向。"
  }
];

function renderMembers() {
  const wrap = document.getElementById("membersWrap");
  const groups = [
    { key: "researchers", title: "研究人员" },
    { key: "students", title: "学生" },
    { key: "alumni", title: "毕业成员" }
  ];

  wrap.innerHTML = groups
    .map(
      (group) => `
      <section class="member-group">
        <h3>${group.title}</h3>
        <div class="member-grid">
          ${memberData[group.key]
            .map(
              (m) => `
            <article class="member-card">
              <strong>${m.name}</strong>
              <span>${m.role}</span>
              <p>${m.focus}</p>
            </article>
          `
            )
            .join("")}
        </div>
      </section>
    `
    )
    .join("");
}

function renderOutputs(type = "papers") {
  const list = document.getElementById("outputsList");
  list.innerHTML = outputData[type]
    .map(
      (item) => `
      <article class="output-item">
        <p class="meta">${item.date}</p>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </article>
    `
    )
    .join("");
}

function renderNews() {
  const list = document.getElementById("newsList");
  list.innerHTML = newsData
    .map(
      (item) => `
      <article class="news-item">
        <p class="meta">${item.date}</p>
        <h4>${item.title}</h4>
        <p>${item.desc}</p>
      </article>
    `
    )
    .join("");
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderOutputs(tab.dataset.type);
    });
  });
}

function setupMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  navLinks.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => navLinks.classList.remove("show"));
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function setupYear() {
  document.getElementById("year").textContent = new Date().getFullYear();
}

renderMembers();
renderOutputs();
renderNews();
setupTabs();
setupMobileMenu();
setupReveal();
setupYear();
