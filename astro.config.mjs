import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://TracyZZZmm.github.io/mywebsite/",
  routes: [
    { src: "/", dest: "/src/pages/index.astro" },
    { src: "/about", dest: "/src/pages/about.astro" },
    { src: "/contact", dest: "/src/pages/contact.astro" },
  ],
});
