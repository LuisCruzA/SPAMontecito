// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon'; // <-- Importación corregida
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    icon() // <-- Sin el punto y coma
  ],  
});