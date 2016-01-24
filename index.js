var vorpal = require('vorpal')();
var inquirer = require("inquirer");
var Questions = require('./qa/questions');

/**
 * Init Command
 */
vorpal
    .command('init', 'Scaffold a new webpack app')
    .action(function(args, callback) {

        var questions = Questions.questions;

        inquirer.prompt( questions, function( answers ) {
            console.log( JSON.stringify(answers, null, "  ") );
            callback();
        });

    });

vorpal
    .delimiter('repack$')
    .show()
    .parse(process.argv);
