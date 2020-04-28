#! /usr/bin/env node

const pkg = require(__dirname + "/package.json");
const args = require("yargs")
	.version(pkg.version)
  .usage("\nUsage:\n  $0 <command> <args> [options]")
	.command("compile <files..>", "Compile *.md files recursively", yargs => yargs.default("command", "compile"))
	.help();

const argv = args.argv;

if (!argv.command) {
	args.showHelp();
	return console.log("\nError:\n  You need to specify a command");
}

require(__dirname + "/index.js")[argv.command](argv);
