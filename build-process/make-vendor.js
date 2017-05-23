const concat = require("concat");
const chalk = require("chalk");
const libsConfig = require("./libs");
const { BUILD_TYPE } = process.env;

console.log(`${chalk.cyan("concatenating libs to vendor.js")}`);

const vendorLibs = Object
    .keys(libsConfig.libs)
    .map(lib => BUILD_TYPE === "production" ? libsConfig.libs[lib].path : libsConfig.libs[lib].minPath);

concat(vendorLibs, "./dist/build/vendor.js");
