import adapter from '@sveltejs/adapter-node'; // ✅ switch from auto to node
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      out: 'build', // ✅ match Tauri's distDir if needed
    }),
  },
};

export default config;
