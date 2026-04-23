// 集中管理公司基本資料。
// 資料來源：公司簡介.pdf（2017 年起 ORIGI，前身為 1992 年成立之昇鼎科技）

export type ServiceItem = {
  title: string;
  desc: string;
  highlights?: string[];
};

export type NavItem = { label: string; href: string };

export type HistoryItem = {
  year: string;
  title: string;
  desc?: string;
};

export type ProcessStage = {
  stage: string;
  steps: string[];
};

export const site = {
  name: '歐力吉股份有限公司',
  nameEn: 'ORIGI CO., LTD.',
  shortName: 'ORIGI',
  slogan: '網站・APP・系統開發，一條龍服務',
  description:
    '歐力吉股份有限公司（ORIGI）自 1992 年深耕科技產業，專注於網站、APP 與系統開發三大主軸，服務超過 700 家合作企業。',
  locale: 'zh-Hant',

  email: 'contact@origi.com.tw',
  tel: '+886-937-036-564',
  address: '116 台北市文山區汀州路四段 253 號 11 樓',
  taxId: '66918158',
  businessHours: '週一至週五 09:00 – 18:00',

  social: {
    facebook: '',
    line: '',
    github: '',
  },

  // 公司數據
  stats: [
    { label: '成立年份', value: '1992' },
    { label: '合作企業', value: '700+' },
    { label: 'APP 開發', value: '70+' },
    { label: '成立歐力吉', value: '2017' },
  ],

  // 公司發展沿革
  history: [
    {
      year: '1992',
      title: '昇鼎科技成立',
      desc: '經營電腦 3C 週邊商品。',
    },
    {
      year: '1996',
      title: '實體商圈成立',
      desc: '台北光華、NOVA、台中店陸續設立。',
    },
    {
      year: '2005',
      title: '每家比電子購物商城',
      desc: '整合網路資源，跨足電商平台經營。',
    },
    {
      year: '2006',
      title: '整合行銷專案部門',
      desc: '整合行銷專案部門建置完成。',
    },
    {
      year: '2011',
      title: '全年度營業額突破四億',
    },
    {
      year: '2015',
      title: '軟體專案規模化',
      desc: '合作企業超過 700 家，開發超過 70 款 APP，並建置完整專案流程 SOP。',
    },
    {
      year: '2017/09',
      title: '成立歐力吉股份有限公司',
      desc: '軟體開發部編制進入，正式以 ORIGI 品牌提供網站／APP／系統開發服務。',
    },
  ] satisfies HistoryItem[],

  // 服務項目（4 大類）
  services: [
    {
      title: '專屬 APP 設計開發',
      desc: '手持裝置 APP (iOS / Android) 開發、軟硬體整合、藍牙 / Wi-Fi / NFC 資料傳輸模組整合、AR 擴增實境建置。從專案規劃到 APP 建置完成一條龍服務。',
      highlights: ['iOS / Android', 'IoT 整合', 'AR / LBS', '上架與維運'],
    },
    {
      title: '網站與系統開發',
      desc: 'RWD 跨平台網頁設計、企業形象網站、電子商務購物網站、後台管理系統。便利的管理後台搭配完整教育訓練。',
      highlights: ['RWD 響應式', '電商購物車', '會員與金流', '後台管理'],
    },
    {
      title: '系統規劃',
      desc: '配合使用需求進行系統分析、規劃與設計，搭配 Prototype 製作、維運流程設計與 UI/UX 提案，以達成系統的高可用性。',
      highlights: ['需求訪談', 'Prototype', 'UI/UX', '維運流程'],
    },
    {
      title: '技術諮詢',
      desc: '在專案前期的企劃規劃，或專案完成後的衍伸開發諮詢。有別於傳統專案服務，提供更深入的顧問服務與提案。',
      highlights: ['前期規劃', '技術選型', '架構評估', '長期顧問'],
    },
  ] satisfies ServiceItem[],

  // 專案服務流程（4 階段）
  process: [
    {
      stage: '前期接洽',
      steps: ['需求訪談', '製作功能列表', '流程設計', '製作 Prototype', '報價'],
    },
    {
      stage: '專案簽約',
      steps: ['視覺風格提案／製作', 'Prototype 微調確認', '開發階段人力分配', '開發資源調度'],
    },
    {
      stage: '專案執行',
      steps: ['定期反饋開發進度', '階段性驗證與測試', '雙方偕同測試／微調', '製作物發佈與上線'],
    },
    {
      stage: '結案驗收',
      steps: ['驗收測試', '製作說明文件', '提交結案文件', '歸檔與結案', '保固開始'],
    },
  ] satisfies ProcessStage[],

  // 其他專案（無截圖、以文字呈現於作品集頁底部）
  otherProjects: [
    { name: '環境即時通', client: '行政院環保署', category: 'App' },
    { name: '林場巡邏系統', client: '林務局', category: 'App' },
    { name: '下水道行動查報', client: '水利署', category: 'App' },
    { name: '水利行政系統', client: '水利署', category: 'System', note: '地圖圖資 ARCGIS 應用' },
    { name: '電線桿行動查報', client: '台灣電力公司', category: 'App' },
    { name: '台糖土地巡邏系統', client: '台糖', category: 'System', note: '地圖圖資 ARCGIS 應用' },
    { name: '上班打卡系統', client: '台積電', category: 'App' },
    { name: 'GetMarried', client: '婚禮相策', category: 'App', note: '婚禮籌備與賓客 App' },
    { name: '杯杯', client: '自家產品', category: 'App', note: '聊天配對交友 App' },
    { name: '藍芽水杯', client: 'IoT 品牌商', category: 'System', note: 'IoT + App 整合' },
    { name: '我幫你 AAMS', client: '自家產品', category: 'System', note: '視訊直播社群平台' },
  ],

  // 合作客戶（部分）
  clients: [
    '台灣電力公司',
    '遠百企業 (愛買)',
    '合作金庫',
    '保力達',
    'Krispy Kreme',
    'Perrier',
    '阿曼開發',
    '日暘建設',
    '誼光保全',
    '台灣三菱電機',
    '台北護理大學',
    '台灣大學',
    '台北金融研究發展基金會',
    '萬海航運',
    'CBRE 世邦魏理仕',
    '首都飯店',
    '休閒國聯 (鮮芋仙)',
    '宜蘭縣政府',
    '鼎文文教',
    '三重地政事務所',
    '中華民國路跑協會',
    '臺北市政府衛生局',
    '喜樂愛加倍庇護工場',
    '中國文化大學',
    '資策會',
    '財團法人中衛發展中心',
    '台北市電影戲劇業職業工會',
    '工業技術研究院',
  ],

  // 導覽
  nav: [
    { label: '關於我們', href: '#about' },
    { label: '服務項目', href: '#services' },
    { label: '服務流程', href: '#process' },
    { label: '作品實績', href: '#portfolio' },
    { label: '聯絡我們', href: '#contact' },
  ] satisfies NavItem[],
};

export type Site = typeof site;
