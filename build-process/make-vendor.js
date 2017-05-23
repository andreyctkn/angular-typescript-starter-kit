const concat = require("concat");
const chalk = require("chalk");
const libsConfig = require("./libs");
const { BUILD_TYPE } = process.env;

console.log(`${chalk.cyan("concatenating libs to vendor.js")}`);

const vendorLibs = Object
    .keys(libsConfig)
    .map(lib => BUILD_TYPE === "production" ? libsConfig[lib].path : libsConfig[lib].minPath);

concat(vendorLibs, "./dist/build/vendor.js");
