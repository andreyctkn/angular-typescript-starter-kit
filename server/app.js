const bs = require("browser-sync").create();

bs.watch("./dist/build/*").on("change", bs.reload);

bs.init({
    server: "./dist/build"
});
