import { defineConfig, presetIcons, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from "unocss";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        'src/**/*.{js,ts}',
        'data/**/*.toml',
      ],
    },
  },
  presets: [presetUno(), presetIcons({
    collections: {
      custom: {
        /* https://github.com/Remix-Design/RemixIcon */
        bluesky: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"/></svg>`
      }
    }
  }), presetWebFonts({
    fonts: {
      sans: ["Inter"],
      serif: ["Roboto Slab"],
      mono: ["JetBrains Mono"],
    },
  })],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  theme: {
    colors: {
      accent: {
        50: "var(--accent-50)",
        100: "var(--accent-100)",
        200: "var(--accent-200)",
        300: "var(--accent-300)",
        400: "var(--accent-400)",
        500: "var(--accent-500)",
        600: "var(--accent-600)",
        700: "var(--accent-700)",
        800: "var(--accent-800)",
        900: "var(--accent-900)",
      },
      ocean: {
        50: "oklch(97.35% 0.02 225.19)",
        100: "oklch(94.01% 0.04 226.78)",
        200: "oklch(89.81% 0.07 226.58)",
        300: "oklch(84.47% 0.10 224.19)",
        400: "oklch(77.09% 0.14 232.33)",
        500: "oklch(68.54% 0.18 246.60)",
        600: "oklch(60.89% 0.21 256.78)",
        700: "oklch(55.97% 0.24 261.08)",
        800: "oklch(48.45% 0.21 261.13)",
        900: "oklch(38.22% 0.14 258.51)",
        950: "oklch(30.81% 0.10 258.80)",
      },
      martinique: {
        50: "oklch(96.45% 0.01 291.29)",
        100: "oklch(93.45% 0.02 291.36)",
        200: "oklch(88.05% 0.04 292.90)",
        300: "oklch(80.64% 0.07 293.21)",
        400: "oklch(73.20% 0.09 296.72)",
        500: "oklch(66.64% 0.12 299.78)",
        600: "oklch(59.71% 0.13 301.60)",
        700: "oklch(53.66% 0.13 303.19)",
        800: "oklch(46.61% 0.10 302.36)",
        900: "oklch(35.84% 0.06 301.89)",
        950: "oklch(29.34% 0.05 303.00)",
      },
      lightning: {
        50: "oklch(98.88% 0.02 98.63)",
        100: "oklch(96.58% 0.06 98.18)",
        200: "oklch(93.50% 0.12 98.61)",
        300: "oklch(89.56% 0.16 95.42)",
        400: "oklch(84.90% 0.17 87.76)",
        500: "oklch(78.77% 0.16 75.19)",
        600: "oklch(68.24% 0.15 63.10)",
        700: "oklch(56.78% 0.14 52.80)",
        800: "oklch(48.27% 0.12 49.45)",
        900: "oklch(42.20% 0.10 49.21)",
        950: "oklch(28.46% 0.07 49.51)",
      },
    },
  },
  shortcuts: {
    "text-plain": " text-gray-900 @dark:text-stone-200"
  },
  rules: [
    [
      /use-accent-(.+)/,
      ([, accent], { theme }) => {
        const colorVars: [string, string][] = [
          "50",
          "100",
          "200",
          "300",
          "400",
          "500",
          "600",
          "700",
          "800",
          "900",
        ]
          .map(
            shade =>
              [`--accent-${shade}`, `${
                (theme.colors as any)?.[accent]?.[shade]
                ?? `var(--accent-${shade})`
              }`],
          );
        return Object.fromEntries(colorVars);
      },
    ],
  ],
});
