import path from "path";
import fs from "fs";

const findPath = (options: {
  path?: string;
  fileName: string;
  extensions: string[];
}): {
  path?: string | undefined;
  found: boolean;
} => {
  const cwd = process.cwd();

  if (options.path) {
    if (path.isAbsolute(options.path)) {
      return {
        path: options.path,
        found: true,
      };
    }
    return {
      path: path.resolve(cwd, options.path),
      found: true,
    };
  }

  let configPath: string | undefined = undefined;
  const root = path.parse(cwd).root;
  const configFileName = options.fileName;
  const configExtensions = options.extensions;

  const search = (cwd: string): void => {
    console.log(cwd);

    const files = fs.readdirSync(cwd);
    const configFiles = files.filter((file) => {
      const { name, ext } = path.parse(file);
      return name === configFileName && configExtensions.includes(ext);
    });

    if (configFiles.length > 0) {
      configPath = path.resolve(cwd, configFiles[0] || "");
      return;
    }

    const parent = path.resolve(cwd, "..");
    if (parent === cwd || parent === root) {
      return;
    }

    search(parent);
  };
  search(cwd);

  return {
    path: configPath,
    found: configPath !== undefined,
  };
};

export default findPath;
