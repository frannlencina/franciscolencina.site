import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";
import netlify from '@astrojs/netlify';

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: 'https://franciscolencina.site/',
  integrations: [tailwind(), react(), sitemap()],
  adapter: netlify()
});