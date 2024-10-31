/// Rollup plugin to load yaml files
import type { Plugin } from "vite";
import { parse } from "@std/yaml";
import { dataToEsm } from '@rollup/pluginutils';

export default function PluginYaml(): Plugin {
  return {
    name: "yaml",

    transform(code, id) {
      if (!id.endsWith(".yaml")) return null;

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
        const message = 'Could not parse YAML file';
        this.error({ message, id, cause: err });
      }
    },
  };
}
