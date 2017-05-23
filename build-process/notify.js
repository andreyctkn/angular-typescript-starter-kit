const chalk = require("chalk");
const { BUILD_TYPE } = process.env;

switch (BUILD_TYPE) {
    case "start":
        console.log(`Current build step: ${chalk.red("start")}\n${chalk.cyan("Please make sure that this step provides watch mode only for ts and scss files")}`);
        break;
    case "prod":
        console.log(`Current build step: ${chalk.red("production")}`);
        break;
}
