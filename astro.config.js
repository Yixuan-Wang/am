import { defineConfig } from "astro/config";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import UnoCSS from "unocss/astro";
import Inspect from "vite-plugin-inspect";
import Yaml from "./src/build/yaml";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: "@unocss/reset/tailwind.css",
  })],
  vite: {
    plugins: [
      Inspect(),
      Yaml(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './'), // Alias '@' to the root directory
      },
    },
  },
});
