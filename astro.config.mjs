import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import content from "@astrojs/content";

export default defineConfig({
  integrations: [mdx(), sitemap(), content()],
});
