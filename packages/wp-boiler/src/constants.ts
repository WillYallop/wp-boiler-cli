import path from "path";
import type { ConfigT } from "./index.d.js";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const CONFIG: ConfigT = {
  wordpress: {
    version: "latest",
    dest: path.resolve(process.cwd(), "./public_html"),
  },
  symlinks: [
    {
      target: path.resolve(process.cwd(), "./wordpress/plugins"),
      source: path.resolve(process.cwd(), "./public_html/wp-content/plugins"),
    },
    {
      target: path.resolve(process.cwd(), "./wordpress/themes"),
      source: path.resolve(process.cwd(), "./public_html/wp-content/themes"),
    },
    {
      target: path.resolve(process.cwd(), "./wordpress/uploads"),
      source: path.resolve(process.cwd(), "./public_html/wp-content/uploads"),
    },
    {
      target: path.resolve(process.cwd(), "./wordpress/wp-config.php"),
      source: path.resolve(process.cwd(), "./public_html/wp-config.php"),
      template: path.resolve(__dirname, "../templates/wp-config.php"),
    },
  ],
};

// -----------------------------------
// Exports
const constants = {
  CONFIG,
};

export default constants;
