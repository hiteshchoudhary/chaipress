import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import editableRegions from '@cloudcannon/editable-regions/astro-integration';

export default defineConfig({
  integrations: [react(), editableRegions()],
  vite: {
    plugins: [tailwindcss()],
  },
});
