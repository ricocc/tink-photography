import { defineConfig } from "astro/config";
import { siteConfig } from "./src/config/site";
import { fileURLToPath } from "node:url";

// https://astro.build/config
export default defineConfig({
  site: siteConfig.url,
  vite: {
    resolve: {
      alias: {
        "@/elements": fileURLToPath(new URL("./src/components/elements", import.meta.url)),
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  },
});
