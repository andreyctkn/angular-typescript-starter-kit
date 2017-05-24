const pug = require("pug");
const fs = require("fs");
const path = require("path");
const buildConstants = require("./build-constants");

// Compile the source code
const compiledFunction = pug.compileFile("src/index.pug", null);
const html = compiledFunction({});

fs.writeFile(path.resolve(`${buildConstants.out}/index.html`), html, function (err) {
    if (err) throw err;
});
