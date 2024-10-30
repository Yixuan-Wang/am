import { defineConfig } from "astro/config";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import UnoCSS from "unocss/astro";
import Inspect from "vite-plugin-inspect";
import Toml from "./src/build/toml";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: "@unocss/reset/tailwind.css",
  })],
  vite: {
    plugins: [
      Inspect(),
      Toml(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './'), // Alias '@' to the root directory
      },
    },
  },
});
