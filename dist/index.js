'use strict';

var _repackBase = require('repack-base');

var _inquirer = require('inquirer');

var repackBase = new _repackBase.RepackBase();
var repack = repackBase.cli;
/**
 * Init Command
 */
repack.command('create', 'Scaffold a new webpack app').action(function (args, callback) {
    console.log(args);
    //var questions = Questions.create;
    //
    //inquirer.prompt( questions, function( answers ) {
    //
    //    callback();
    //});
});

repack.delimiter('repack$').show().parse(process.argv);
//# sourceMappingURL=index.js.map