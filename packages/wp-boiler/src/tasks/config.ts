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
      return {
        ...C.CONFIG,
        ...configModule.default,
      };
    }

    return C.CONFIG;
  } catch (e) {
    throw e;
  }
};

export default config;
