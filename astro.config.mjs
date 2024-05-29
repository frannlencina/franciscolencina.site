import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from "@astrojs/react";

import netlify from '@astrojs/netlify';

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [tailwind(), react()],
  adapter: netlify(),
});