// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// TODO: 若實際網域與 origi.com.tw 不同，請在此替換
const SITE_URL = 'https://www.origi.com.tw';

export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
});
