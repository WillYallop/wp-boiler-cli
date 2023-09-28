import axios from "axios";
import tar from "tar";
import fs from "fs";
import { ConfigT } from "../index.d.js";

const installWordpress = async (config: ConfigT["wordpress"]) => {
  const { version, dest } = config;

  const url = `https://wordpress.org/wordpress-${version}.tar.gz`;
  const response = await axios.get(url, { responseType: "stream" });

  fs.mkdirSync(dest, { recursive: true });

  response.data.pipe(tar.extract({ cwd: dest, strip: 1 }));

  return new Promise((resolve, reject) => {
    response.data.on("end", () => {
      resolve(true);
    });
    response.data.on("error", (e: Error) => {
      reject(e);
    });
  });
};

export default installWordpress;
