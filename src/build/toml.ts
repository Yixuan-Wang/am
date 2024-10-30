/// Rollup plugin to load toml files
import type { Plugin } from "vite";
import { parse } from "@std/toml";
import { dataToEsm } from '@rollup/pluginutils';

export default function PluginToml(): Plugin {
  return {
    name: "toml",

    transform(code, id) {
      if (!id.endsWith(".toml")) return null;

      try {
        const parsed = parse(code);
        return {
          code: dataToEsm(parsed, {
            preferConst: true,
            compact: true,
            namedExports: true,
          }),
          map: { mappings: '' }
        };
      }
      catch (err) {
        const message = 'Could not parse JSON file';
        this.error({ message, id, cause: err });
        return null;
      }
    },
  };
}
