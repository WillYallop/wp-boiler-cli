import path from "path";
import type { ConfigT } from "./index.d.js";

const CONFIG: ConfigT = {
  wordpress: {
    version: "latest",
  },
  symLinks: [
    {
      source: path.resolve(process.cwd(), "./plugins"),
      target: path.resolve(process.cwd(), "./wordpress/wp-content/plugins"),
    },
    {
      source: path.resolve(process.cwd(), "./themes"),
      target: path.resolve(process.cwd(), "./wordpress/wp-content/themes"),
    },
    {
      source: path.resolve(process.cwd(), "./uploads"),
      target: path.resolve(process.cwd(), "./wordpress/wp-content/uploads"),
    },
    {
      source: path.resolve(process.cwd(), "./wp-config.php"),
      target: path.resolve(process.cwd(), "./wordpress/wp-config.php"),
    },
  ],
};

// -----------------------------------
// Exports
const constants = {
  CONFIG,
};

export default constants;
