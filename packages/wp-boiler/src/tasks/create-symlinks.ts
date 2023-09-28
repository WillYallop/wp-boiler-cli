import fs from "fs-extra";
import path from "path";
import { ConfigT } from "../index.d.js";

const createSymlinks = async (links: ConfigT["symlinks"]) => {
  try {
    links.forEach((link) => {
      const target = path.resolve(link.target);
      const source = path.resolve(link.source);

      // Remove existing source ready for symlink
      if (fs.existsSync(source)) fs.removeSync(source);

      let madeFile = false;

      // Create target if it doesn't exist
      if (!fs.existsSync(target)) {
        if (path.extname(target) !== "") {
          fs.ensureFileSync(target);
          madeFile = true;
        } else {
          fs.mkdirSync(target, { recursive: true });
        }
      }

      // Set template if it exists
      if (link.template && madeFile) {
        const template = path.resolve(link.template);
        fs.copySync(template, target);
      }

      // Create relative symlink
      const relativeTarget = path.relative(path.dirname(link.source), target);
      fs.ensureSymlinkSync(relativeTarget, link.source);
    });
  } catch (e) {
    throw e;
  }
};

export default createSymlinks;
