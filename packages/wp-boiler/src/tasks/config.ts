import { pathToFileURL } from "url";
import C from "../constants.js";
import findPath from "../utils/find-path.js";

const config = async () => {
  try {
    const find = findPath({
      fileName: "wp-boiler.config",
      extensions: [".js", ".mjs"],
    });

    if (find.found && find.path) {
      const configUrl = pathToFileURL(find.path).href;
      const configModule = await import(configUrl);
      const configRes = configModule.default;

      return {
        wordpress: {
          version: configRes.wordpress.version || C.CONFIG.wordpress.version,
          dest: C.CONFIG.wordpress.dest,
        },
        symlinks: C.CONFIG.symlinks,
      };
    }

    return C.CONFIG;
  } catch (e) {
    throw e;
  }
};

export default config;
