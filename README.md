# 歐力吉官方網站

使用 **Astro + Tailwind CSS** 建置的靜態官網，透過 GitHub Actions 自動部署到 **GitHub Pages**，並綁定 GoDaddy 自訂網域。

---

## 開發

```bash
npm install         # 安裝依賴
npm run dev         # 啟動開發伺服器 http://localhost:4321
npm run build       # 產出靜態檔案到 dist/
npm run preview     # 預覽 dist/ 產出
```

> 若本機已安裝 pnpm，也可用 `pnpm install` / `pnpm dev`（專案用哪個都可以）。

---

## 專案結構

```
src/
├─ components/      # 版面元件（Header、Footer、Hero、Services、...）
├─ content/
│  ├─ config.ts     # Portfolio collection zod schema
│  └─ portfolio/    # 每筆作品一個 .mdx（此為主要內容更新位置）
├─ data/site.ts     # 公司基本資料（名稱、Email、電話、服務項目…）
├─ layouts/         # 頁面共用 HTML 殼
├─ pages/           # 檔案即路由
│  ├─ index.astro
│  ├─ portfolio/    # 作品集列表 + 動態詳頁
│  └─ 404.astro
└─ styles/global.css
public/
├─ CNAME            # 自訂網域（一行）— 上線前請填入網域
├─ .nojekyll        # 讓 GitHub Pages 不要跑 Jekyll
└─ favicon.svg
```

## 更新內容的位置

| 你要改什麼 | 改這個檔 |
|-----------|---------|
| 公司名稱 / Email / 電話 / 地址 / 統編 / 數據卡 | `src/data/site.ts` |
| 服務項目清單 | `src/data/site.ts` 的 `services` |
| 導覽列項目 | `src/data/site.ts` 的 `nav` |
| 公司簡介文案 | `src/components/About.astro` |
| Hero 標語 | `src/data/site.ts` 的 `slogan` + `src/components/Hero.astro` |
| 新增作品 | 在 `src/content/portfolio/` 建立 `xxx.mdx`，frontmatter 參考 `sample-1.mdx` |
| 品牌色 | `tailwind.config.mjs` 的 `colors.primary` / `colors.accent` |
| 網站網域 | `astro.config.mjs` 的 `SITE_URL` + `public/CNAME` |

Portfolio frontmatter 必填欄位：`title`, `category`（Web/App/System/POS/Other）, `year`, `summary`。封面圖用 `coverUrl`（遠端）或 `cover`（本地圖，放 `src/content/portfolio/` 或引用 `public/images/`）。

---

## 首次部署到 GitHub Pages（使用者/組織網站）

1. 建立 GitHub repo，名稱**必須**為 `<你的-github-帳號>.github.io`
2. 本機：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:<帳號>/<帳號>.github.io.git
   git push -u origin main
   ```
3. 進入 repo 的 **Settings → Pages → Source** 選 **GitHub Actions**
4. 回到 **Actions** 分頁，確認 `Deploy to GitHub Pages` workflow 跑完（綠勾）
5. 此時可用 `https://<帳號>.github.io/` 預覽

## 綁定 GoDaddy 網域

假設網域為 `olegi.com.tw`：

### 1. 設定 CNAME 檔
編輯 `public/CNAME`，填入**一行**：
```
olegi.com.tw
```
commit & push。

### 2. GoDaddy DNS 設定
登入 GoDaddy → 網域管理 → DNS：

**Apex 網域（`olegi.com.tw`）— 加 4 筆 A 紀錄：**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 185.199.108.153 | 1 Hour |
| A | @ | 185.199.109.153 | 1 Hour |
| A | @ | 185.199.110.153 | 1 Hour |
| A | @ | 185.199.111.153 | 1 Hour |

**www 子網域 — 加 1 筆 CNAME：**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| CNAME | www | `<帳號>.github.io` | 1 Hour |

> 若 GoDaddy 本來有預設的 Parking A 紀錄或指向自家頁面的 CNAME，記得先刪除。

### 3. 回 GitHub 設定 Custom domain
進入 repo **Settings → Pages**：

- **Custom domain** 欄填入 `olegi.com.tw` → Save
- 等待 GitHub 完成 DNS 檢查（通常幾分鐘到數小時）
- DNS 檢查通過後，勾選 **Enforce HTTPS**

### 4. 更新 Astro 的 site URL
編輯 `astro.config.mjs`：
```js
const SITE_URL = 'https://olegi.com.tw';
```
commit & push，下次 build 的 sitemap 與 canonical 連結就會用正式網域。

---

## 上線前檢查清單

- [ ] `src/data/site.ts` — Email / 電話 / 地址 / 統編 / 統計數字 / 服務清單
- [ ] `astro.config.mjs` — `SITE_URL` 設為正式網域
- [ ] `public/CNAME` — 填入正式網域
- [ ] `src/components/Hero.astro` — slogan 與描述文字
- [ ] `src/components/About.astro` — 公司簡介正式文案
- [ ] `src/content/portfolio/*.mdx` — 替換 sample 為實際作品
- [ ] `public/favicon.svg` — 替換為品牌 Logo（可選）
- [ ] `tailwind.config.mjs` — 品牌色（可選）
