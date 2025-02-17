import { parse } from "@retorquere/bibtex-parser";
import { file } from 'astro/loaders';

file('content.bib', {
  parser: (bibtex) => {
    const library = parse(bibtex);
    return library.entries;
  }
})