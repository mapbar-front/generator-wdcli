"use strict";
const chalk = require("chalk");
class Utils {
  log(data, color = "yellow") {
    const fn = chalk[color] || chalk.yellow;
    console.log(fn(data));
  }
}
module.exports = new Utils();
