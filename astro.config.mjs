import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://prathamrajshree.github.io",
  base: "/prathamrajshree_portfolio.github.io/",
  integrations: [svelte(), tailwind()],
  output: "static"
});
