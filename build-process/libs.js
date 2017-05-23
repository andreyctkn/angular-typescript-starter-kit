const path = require("path");

const npm = "node_modules";

const vendorLibs = {
    angular: {
        importName: "angular",
        globalAlias: "angular",
        path: path.resolve(`${npm}/angular/angular.js`),
        minPath: path.resolve(`${npm}/angular/angular.min.js`)
    },
};

module.exports = vendorLibs;
