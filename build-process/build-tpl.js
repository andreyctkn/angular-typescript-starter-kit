const pug = require('pug');
const fs = require("fs");
const path = require("path");

// Compile the source code
const compiledFunction = pug.compileFile("src/index.pug", null);
const html = compiledFunction({});

fs.writeFile(path.resolve("dist/build/index.html"), html, function (err) {
    if (err) throw err;
});
