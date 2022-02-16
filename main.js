const fs = require("fs");
const path = require("path");
const helpModule = require("./commands/help");
const treeModule = require("./commands/tree");
const organizeModule = require("./commands/organize");

let input = process.argv.slice(2); //array for command line input
//console.log(input);

let command = input[0];

switch (command) {
  case "tree":
    treeModule.treeFnKey(input[1]);
    break;
  case "organize":
    organizeModule.organizeFnKey(input[1]);
    break;
  case "help":
    helpModule.helpFnKey();
    break;
  default:
    console.log("Invalid Command");
    break;
}
