#!/usr/bin/env node

import config from "./tasks/config.js";

const main = async () => {
  try {
    const configRes = await config();
    console.log(configRes);
  } catch (e) {
    console.log(e);
  }
};

main();
