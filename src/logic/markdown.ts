import { init, mdToHtml } from "md4w";

await init();

export const parseMarkdown = (markdown: string) => {
  return mdToHtml(markdown, {
    parseFlags: [
      "STRIKETHROUGH",
      "UNDERLINE",
      "WIKI_LINKS",
    ]
  });
};
