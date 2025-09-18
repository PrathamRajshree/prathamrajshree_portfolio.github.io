import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

export default defineConfig({
  base: '/prathamrajshree_portfolio.github.io', // <-- ADD THIS LINE
  integrations: [tailwind(), svelte()]
});