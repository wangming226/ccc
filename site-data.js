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
    phd: "在读博士生",
    msc: "在读硕士生",
    alumni: "毕业成员",
    detailBtn: "查看详情",
    backList: "返回论文列表",
    noPaper: "未找到该论文。"
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
    phd: "Current PhD Students",
    msc: "Current MSc Students",
    alumni: "Alumni",
    detailBtn: "View Details",
    backList: "Back to Publications",
    noPaper: "Paper not found."
  }
};

const SITE_NEWS = [
  {
    date: "2026-03-20",
    zh: { title: "网站改版为多界面结构", desc: "成员介绍与文章信息已拆分为独立页面。" },
    en: { title: "Site Upgraded to Multi-Page Structure", desc: "Members and publications are now standalone pages." }
  },
  {
    date: "2026-03-20",
    zh: { title: "论文支持独立详情页", desc: "点击论文可进入单篇文章页面。" },
    en: { title: "Publication Detail Pages Enabled", desc: "Each paper now opens in a dedicated page." }
  }
];

const MEMBER_DATA = {
  phd: [
    "王绍志", "谌宏群", "张馨睿", "代曼曼", "赵欣然", "郭梓腾", "高梓诺", "唐婕"
  ],
  msc: [
    "陈贺", "李得胜", "凌雨桐", "杨旭", "甘鑫"
  ],
  alumni: [
    "马建军", "关盛文", "蒋鑫", "许亚萍", "史俊娟", "于浩", "曾云婷", "李克寰", "梁金霞", "韩泞旭", "苏皓月", "陈雄", "龙超", "魏兆彤"
  ]
};

const PAPER_DATA = [
  {
    id: "paper-2024-1",
    date: "2024",
    zh: {
      title: "Ultra-High Metal-Ions Selectivity Induced by Intramolecular Cation Interaction",
      journal: "Angew. Chem. Int. Ed., 2024",
      abstract: "研究分子内阳离子作用对金属离子高选择性的影响机制。"
    },
    en: {
      title: "Ultra-High Metal-Ions Selectivity Induced by Intramolecular Cation Interaction",
      journal: "Angew. Chem. Int. Ed., 2024",
      abstract: "Mechanistic study on intramolecular cation interactions for high metal-ion selectivity."
    },
    source: "#"
  },
  {
    id: "paper-2023-1",
    date: "2023",
    zh: {
      title: "Dislocated Bilayer MOF Enables High-Selectivity Photocatalytic Reduction of CO2 to CO",
      journal: "Advanced Materials, 2023",
      abstract: "双层MOF结构用于提升CO2光催化还原选择性。"
    },
    en: {
      title: "Dislocated Bilayer MOF Enables High-Selectivity Photocatalytic Reduction of CO2 to CO",
      journal: "Advanced Materials, 2023",
      abstract: "Bilayer MOF structure for selective photocatalytic CO2 reduction."
    },
    source: "#"
  },
  {
    id: "paper-2022-1",
    date: "2022",
    zh: {
      title: "Guided Synthesis of a Mo Zn Dual Single-Atom Nanozyme",
      journal: "Angew. Chem. Int. Ed., 2022",
      abstract: "构建双单原子纳米酶并研究协同催化效应。"
    },
    en: {
      title: "Guided Synthesis of a Mo Zn Dual Single-Atom Nanozyme",
      journal: "Angew. Chem. Int. Ed., 2022",
      abstract: "Guided synthesis of dual single-atom nanozyme with synergistic catalysis."
    },
    source: "#"
  }
];
