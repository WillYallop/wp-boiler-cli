#!/usr/bin/env node

import config from "./tasks/config.js";
import installWordpress from "./tasks/install-wordpress.js";
import createSymlinks from "./tasks/create-symlinks.js";

const main = async () => {
  try {
    const configRes = await config();
    await installWordpress(configRes.wordpress);
    await createSymlinks(configRes.symlinks);
  } catch (e) {
    console.log(e);
  }
};

main();
