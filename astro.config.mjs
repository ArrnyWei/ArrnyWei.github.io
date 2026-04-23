// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://origi.com.tw';

export default defineConfig({
  site: SITE_URL,
  integrations: [tailwind({ applyBaseStyles: false }), mdx(), sitemap()],
});
