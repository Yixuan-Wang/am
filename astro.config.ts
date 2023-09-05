import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";
import Inspect from "vite-plugin-inspect";

// https://astro.build/config
export default defineConfig({
  integrations: [UnoCSS({
    injectReset: "@unocss/reset/tailwind.css",
  })],
  vite: {
    plugins: [
      Inspect(),
    ],
  },
});
