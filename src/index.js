import  { RepackBase } from 'repack-base';
import { inquirer } from 'inquirer';

const repackBase    = new RepackBase();
const repack        = repackBase.cli;
/**
 * Init Command
 */
repack
    .command('create', 'Scaffold a new webpack app')
    .action(function(args, callback) {
        console.log(args);
        //var questions = Questions.create;
        //
        //inquirer.prompt( questions, function( answers ) {
        //
        //    callback();
        //});

    });

repack
    .delimiter('repack$')
    .show()
    .parse(process.argv);
