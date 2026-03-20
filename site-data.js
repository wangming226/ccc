const SITE_I18N = {
  zh: {
    brandCn: "王明课题组",
    brandEn: "Wang Ming Laboratory",
    navMembers: "成员介绍",
    navPapers: "文章信息",
    navNews: "新闻动态",
    navContact: "联系我们",
    heroTitle: "王明课题组",
    heroDesc: "研究方向：金属有机笼的精准构筑及叠层超分子的性质与功能。",
    entryTitle: "功能入口",
    entrySub: "点击后进入独立页面",
    entryMembers: "成员介绍",
    entryMembersDesc: "查看在读成员、毕业成员与个人简介",
    entryPapers: "文章信息",
    entryPapersDesc: "查看论文列表并跳转到单篇文章详情页",
    newsTitle: "新闻动态",
    newsSub: "近期更新",
    contactTitle: "联系方式",
    contactMail: "邮箱：wangming_lab@jlu.edu.cn",
    contactAddr: "地址：吉林大学（示例）",
    footerText: "王明课题组 · 吉林大学",
    membersTitle: "成员介绍",
    membersSub: "点击姓名跳转到个人简介",
    papersTitle: "文章信息",
    papersSub: "点击文章进入独立详情页",
    newsListTitle: "新闻列表",
    newsListSub: "点击新闻进入独立详情页",
    phd: "在读博士生",
    msc: "在读硕士生",
    alumni: "毕业成员",
    detailBtn: "查看详情",
    detailNewsBtn: "查看新闻",
    backList: "返回论文列表",
    backNewsList: "返回新闻列表",
    noPaper: "未找到该论文。",
    noNews: "未找到该新闻。",
    authors: "作者",
    journal: "期刊",
    keywords: "关键词",
    summary: "摘要",
    source: "原文链接",
    prev: "上一篇",
    next: "下一篇",
    featureTitle: "课题组亮点",
    featurePaper: "最新论文",
    featureMember: "成员速览",
    focusLabel: "研究方向",
    emailLabel: "邮箱",
    profileLabel: "个人简介"
  },
  en: {
    brandCn: "Wang Ming Laboratory",
    brandEn: "Jilin University",
    navMembers: "Members",
    navPapers: "Publications",
    navNews: "News",
    navContact: "Contact",
    heroTitle: "Wang Ming Laboratory",
    heroDesc: "Research direction: precise construction of metal-organic cages and stacked supramolecular functions.",
    entryTitle: "Entry Points",
    entrySub: "Click to enter standalone pages",
    entryMembers: "Members",
    entryMembersDesc: "Current students, alumni, and profiles",
    entryPapers: "Publications",
    entryPapersDesc: "Paper list with standalone detail pages",
    newsTitle: "News",
    newsSub: "Recent updates",
    contactTitle: "Contact",
    contactMail: "Email: wangming_lab@jlu.edu.cn",
    contactAddr: "Address: Jilin University (sample)",
    footerText: "Wang Ming Laboratory · Jilin University",
    membersTitle: "Members",
    membersSub: "Click a name to jump to profile",
    papersTitle: "Publications",
    papersSub: "Click a paper to open its standalone page",
    newsListTitle: "News List",
    newsListSub: "Click a news item to open its standalone page",
    phd: "Current PhD Students",
    msc: "Current MSc Students",
    alumni: "Alumni",
    detailBtn: "View Details",
    detailNewsBtn: "View News",
    backList: "Back to Publications",
    backNewsList: "Back to News",
    noPaper: "Paper not found.",
    noNews: "News not found.",
    authors: "Authors",
    journal: "Journal",
    keywords: "Keywords",
    summary: "Abstract",
    source: "Source",
    prev: "Previous",
    next: "Next",
    featureTitle: "Highlights",
    featurePaper: "Latest Paper",
    featureMember: "Member Preview",
    focusLabel: "Research",
    emailLabel: "Email",
    profileLabel: "Profile"
  }
};

const SITE_NEWS = [
  {
    id: "news-20260320-1",
    date: "2026-03-20",
    zh: {
      title: "网站升级为多页面结构",
      desc: "成员、论文、新闻均可独立跳转访问。",
      detail: [
        "首页保留课题组概览，成员介绍、文章信息、新闻动态均拆分为独立页面。",
        "每条论文和新闻都支持进入详情页，便于后续扩展 DOI、PDF、图片和补充说明。"
      ]
    },
    en: {
      title: "Website upgraded to multi-page structure",
      desc: "Members, publications, and news now have standalone pages.",
      detail: [
        "The homepage keeps lab overview while members, papers, and news are split into dedicated pages.",
        "Each paper and news item now supports its own detail page for future DOI/PDF/image extensions."
      ]
    }
  },
  {
    id: "news-20260320-2",
    date: "2026-03-20",
    zh: {
      title: "成员模块完善为可检索跳转",
      desc: "在读与毕业成员均可点击并跳转到个人卡片。",
      detail: [
        "在读博士生、硕士生和毕业成员均可通过姓名快速跳转。",
        "个人卡片包含照片位、研究方向、邮箱与简介字段。"
      ]
    },
    en: {
      title: "Member module upgraded with jump navigation",
      desc: "Both current students and alumni are clickable with profile targets.",
      detail: [
        "PhD, MSc, and alumni names all support quick jump navigation.",
        "Profile cards include photo slot, research focus, email, and short bio."
      ]
    }
  },
  {
    id: "news-20260320-3",
    date: "2026-03-20",
    zh: {
      title: "论文详情页结构标准化",
      desc: "新增作者、期刊、关键词、摘要与上下篇导航。",
      detail: [
        "论文详情页统一展示作者、期刊、关键词和摘要信息。",
        "支持上一条/下一条浏览，减少来回返回列表的操作。"
      ]
    },
    en: {
      title: "Publication detail layout standardized",
      desc: "Added authors, journal, keywords, abstract, and prev/next navigation.",
      detail: [
        "Paper detail pages now include standardized metadata blocks.",
        "Prev/next navigation helps quick reading across multiple papers."
      ]
    }
  }
];

const MEMBER_DATA = {
  phd: [
    { name: "王绍志", enName: "Shaozhi Wang", email: "wangshaozhi@wangming-lab.com", focusZh: "金属有机笼精准构筑", focusEn: "Precise construction of metal-organic cages", bioZh: "关注配体工程与结构可控组装。", bioEn: "Focuses on ligand engineering and controllable assembly." },
    { name: "谌宏群", enName: "Hongqun Chen", email: "chenhongqun@wangming-lab.com", focusZh: "叠层超分子有序组装", focusEn: "Ordered stacked supramolecular assembly", bioZh: "研究多重弱相互作用驱动机制。", bioEn: "Studies multi-weak-interaction driven mechanisms." },
    { name: "张馨睿", enName: "Xinrui Zhang", email: "zhangxinrui@wangming-lab.com", focusZh: "超分子催化", focusEn: "Supramolecular catalysis", bioZh: "探索结构-催化性能关联。", bioEn: "Explores structure-catalysis relationships." },
    { name: "代曼曼", enName: "Manman Dai", email: "daimanman@wangming-lab.com", focusZh: "分子识别与传感", focusEn: "Molecular recognition and sensing", bioZh: "开发高选择性识别体系。", bioEn: "Develops high-selectivity recognition systems." },
    { name: "赵欣然", enName: "Xinran Zhao", email: "zhaoxinran@wangming-lab.com", focusZh: "刺激响应超分子体系", focusEn: "Stimuli-responsive supramolecular systems", bioZh: "构建可逆响应功能平台。", bioEn: "Builds reversible responsive functional platforms." },
    { name: "郭梓腾", enName: "Ziteng Guo", email: "guoziteng@wangming-lab.com", focusZh: "功能有机-金属组装体", focusEn: "Functional organic-metal assemblies", bioZh: "聚焦发光与电子功能耦合。", bioEn: "Focuses on coupled luminescent and electronic functions." },
    { name: "高梓诺", enName: "Zinuo Gao", email: "gaozinuo@wangming-lab.com", focusZh: "配位自组装机制", focusEn: "Coordination-driven self-assembly mechanisms", bioZh: "研究热力学与动力学控制路径。", bioEn: "Studies thermodynamic and kinetic control pathways." },
    { name: "唐婕", enName: "Jie Tang", email: "tangjie@wangming-lab.com", focusZh: "主客体化学与功能化", focusEn: "Host-guest chemistry and functionalization", bioZh: "开展功能分子识别材料研究。", bioEn: "Works on functional molecular recognition materials." }
  ],
  msc: [
    { name: "陈贺", enName: "He Chen", email: "chenhe@wangming-lab.com", focusZh: "发光超分子材料", focusEn: "Luminescent supramolecular materials", bioZh: "研究发光性质调控与机制。", bioEn: "Studies luminescence tuning and mechanisms." },
    { name: "李得胜", enName: "Desheng Li", email: "lidesheng@wangming-lab.com", focusZh: "超分子识别与分离", focusEn: "Supramolecular recognition and separation", bioZh: "关注复杂体系选择性分离。", bioEn: "Focuses on selective separation in complex systems." },
    { name: "凌雨桐", enName: "Yutong Ling", email: "lingyutong@wangming-lab.com", focusZh: "可控分子堆叠", focusEn: "Controllable molecular stacking", bioZh: "研究堆叠构型与功能关系。", bioEn: "Studies stack conformation-function relationships." },
    { name: "杨旭", enName: "Xu Yang", email: "yangxu@wangming-lab.com", focusZh: "多孔超分子组装", focusEn: "Porous supramolecular assemblies", bioZh: "探索高比表面积超分子体系。", bioEn: "Explores high-surface-area supramolecular systems." },
    { name: "甘鑫", enName: "Xin Gan", email: "ganxin@wangming-lab.com", focusZh: "功能分子材料设计", focusEn: "Functional molecular material design", bioZh: "开展结构导向功能设计研究。", bioEn: "Works on structure-oriented functional design." }
  ],
  alumni: [
    { name: "马建军", enName: "Jianjun Ma", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "关盛文", enName: "Shengwen Guan", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "蒋鑫", enName: "Xin Jiang", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "许亚萍", enName: "Yaping Xu", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "史俊娟", enName: "Junjuan Shi", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "于浩", enName: "Hao Yu", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "曾云婷", enName: "Yunting Zeng", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "李克寰", enName: "Kehuan Li", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "梁金霞", enName: "Jinxia Liang", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "韩泞旭", enName: "Ningxu Han", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "苏皓月", enName: "Haoyue Su", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "陈雄", enName: "Xiong Chen", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "龙超", enName: "Chao Long", destinationZh: "已毕业", destinationEn: "Graduated" },
    { name: "魏兆彤", enName: "Zhaotong Wei", destinationZh: "已毕业", destinationEn: "Graduated" }
  ]
};

const PAPER_DATA = [
  {
    id: "paper-2024-01",
    date: "2024",
    zh: {
      title: "Ultra-High Metal-Ions Selectivity Induced by Intramolecular Cation Interaction",
      journal: "Angew. Chem. Int. Ed., 2024",
      authors: "Shi et al.",
      abstract: "构建分子内阳离子相互作用体系，实现超高金属离子识别选择性。",
      keywords: "超分子识别；金属离子选择性；分子内作用"
    },
    en: {
      title: "Ultra-High Metal-Ions Selectivity Induced by Intramolecular Cation Interaction",
      journal: "Angew. Chem. Int. Ed., 2024",
      authors: "Shi et al.",
      abstract: "An intramolecular cation-interaction strategy enables ultra-high metal-ion selectivity.",
      keywords: "supramolecular recognition; metal-ion selectivity; intramolecular interaction"
    },
    source: "#"
  },
  {
    id: "paper-2023-01",
    date: "2023",
    zh: {
      title: "Dislocated Bilayer MOF Enables High-Selectivity Photocatalytic Reduction of CO2 to CO",
      journal: "Advanced Materials, 2023",
      authors: "Liang et al.",
      abstract: "位错双层MOF提高CO2光催化还原至CO的选择性与稳定性。",
      keywords: "MOF；光催化；CO2还原"
    },
    en: {
      title: "Dislocated Bilayer MOF Enables High-Selectivity Photocatalytic Reduction of CO2 to CO",
      journal: "Advanced Materials, 2023",
      authors: "Liang et al.",
      abstract: "A dislocated bilayer MOF improves selectivity and durability in photocatalytic CO2-to-CO conversion.",
      keywords: "MOF; photocatalysis; CO2 reduction"
    },
    source: "#"
  },
  {
    id: "paper-2023-02",
    date: "2023",
    zh: {
      title: "Sandwich-like Heterochromophore Metallo-Supramolecules",
      journal: "2023",
      authors: "Han et al.",
      abstract: "通过致密发色团排布构筑三明治型异发色团金属超分子。",
      keywords: "金属超分子；发色团排布；光物理"
    },
    en: {
      title: "Sandwich-like Heterochromophore Metallo-Supramolecules",
      journal: "2023",
      authors: "Han et al.",
      abstract: "Sandwich-like heterochromophore metallo-supramolecules were assembled via dense chromophore arrangement.",
      keywords: "metallo-supramolecule; chromophore arrangement; photophysics"
    },
    source: "#"
  },
  {
    id: "paper-2022-01",
    date: "2022",
    zh: {
      title: "Guided Synthesis of a Mo Zn Dual Single-Atom Nanozyme",
      journal: "Angew. Chem. Int. Ed., 2022",
      authors: "Ma et al.",
      abstract: "引导合成Mo/Zn双单原子纳米酶并阐明协同效应。",
      keywords: "单原子催化；纳米酶；协同效应"
    },
    en: {
      title: "Guided Synthesis of a Mo Zn Dual Single-Atom Nanozyme",
      journal: "Angew. Chem. Int. Ed., 2022",
      authors: "Ma et al.",
      abstract: "Guided synthesis of a Mo/Zn dual single-atom nanozyme reveals synergistic catalytic behavior.",
      keywords: "single-atom catalysis; nanozyme; synergy"
    },
    source: "#"
  },
  {
    id: "paper-2022-02",
    date: "2022",
    zh: {
      title: "Design and Self-Assembly of Macrocycles with Metals at the Corners",
      journal: "Chemistry - An Asian Journal, 2022",
      authors: "Xu et al.",
      abstract: "设计角位金属宏环并研究其可控自组装行为。",
      keywords: "宏环；配位自组装；构型调控"
    },
    en: {
      title: "Design and Self-Assembly of Macrocycles with Metals at the Corners",
      journal: "Chemistry - An Asian Journal, 2022",
      authors: "Xu et al.",
      abstract: "Metal-corner macrocycles were designed with controllable self-assembly behavior.",
      keywords: "macrocycle; coordination self-assembly; conformation control"
    },
    source: "#"
  },
  {
    id: "paper-2021-01",
    date: "2021",
    zh: {
      title: "Conformational Control of a Metallo-Supramolecular Cage via Dissymmetrical Modulation",
      journal: "Angew. Chem. Int. Ed., 2021",
      authors: "Yu et al.",
      abstract: "通过不对称调控策略实现对金属超分子笼构象的精确控制。",
      keywords: "超分子笼；构象控制；不对称调控"
    },
    en: {
      title: "Conformational Control of a Metallo-Supramolecular Cage via Dissymmetrical Modulation",
      journal: "Angew. Chem. Int. Ed., 2021",
      authors: "Yu et al.",
      abstract: "Dissymmetrical modulation enables precise conformational control of a metallo-supramolecular cage.",
      keywords: "supramolecular cage; conformational control; dissymmetrical modulation"
    },
    source: "#"
  }
];

const FEATURED = {
  paperId: "paper-2024-01",
  members: ["王绍志", "郭梓腾", "陈贺"]
};
