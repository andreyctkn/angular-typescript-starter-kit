const vendorLibs = require("./libs");

let externals = [];

const globals = Object.keys(vendorLibs).reduce((acc, lib) => {
    externals.push(vendorLibs[lib].importName);
    acc[vendorLibs[lib].importName] = vendorLibs[lib].globalAlias;
    return acc;
}, {});

module.exports = {
    globals: globals,
    external: externals
};
