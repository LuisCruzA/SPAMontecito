// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon'; // <-- Importación corregida
import tailwindcss from '@tailwindcss/vite';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [// <-- Sin el punto y coma
  icon(), sitemap()],  
  site:"https://el-montecito.vercel.app"
});