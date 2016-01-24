/**
 * Created by dbuarque on 1/24/16.
 */
var Questions = {
    init: [

        {
            message: "Type the your awesome app name ?",
            type: "input",
            name: "app_name",
            validate: function( value ) {
                var pass = value.match(/^[^\\\\\/\?\%\*\:\|\"<>]+$/i);
                if (pass) {
                    return true;
                } else {
                    return "Please enter a valid phone number";
                }
            }
        },
        {
            message: "Enable docker ?",
            type: "confirm",
            name: "is_docker_enabled",
            default: true
        },
        {
            type: "list",
            name: "frontend",
            expand: true,
            message: "Choose a front-end framework:",
            choices: [
                {
                    name: "Angularjs",
                    value: "angularjs"
                },
                {
                    name: "Reactjs",
                    value: "reactjs"
                }
            ]
        },
        {
            message: "Enable Redux ?",
            type: "confirm",
            name: "is_redux_enabled",
            default: true
        },
        {
            message: "Enable TDD ?",
            type: "confirm",
            name: "is_tdd_enabled",
            default: true
        },
        {
            message: "Enable BDD ?",
            type: "confirm",
            name: "is_redux_enabled",
            default: true
        },
        {
            message: "Enable Live Reload ?",
            type: "confirm",
            name: "is_redux_enabled",
            default: true
        },
        //{
        //    type: "input",
        //    name: "phone",
        //    message: "What's your phone number",
        //    validate: function( value ) {
        //        var pass = value.match(/^([01]{1})?[\-\.\s]?\(?(\d{3})\)?[\-\.\s]?(\d{3})[\-\.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i);
        //        if (pass) {
        //            return true;
        //        } else {
        //            return "Please enter a valid phone number";
        //        }
        //    }
        //},
        //{
        //    type: "list",
        //    name: "size",
        //    message: "What size do you need",
        //    choices: [ "Large", "Medium", "Small" ],
        //    filter: function( val ) { return val.toLowerCase(); }
        //},
        //{
        //    type: "input",
        //    name: "quantity",
        //    message: "How many do you need",
        //    validate: function( value ) {
        //        var valid = !isNaN(parseFloat(value));
        //        return valid || "Please enter a number";
        //    },
        //    filter: Number
        //},
        //{
        //    type: "expand",
        //    name: "toppings",
        //    message: "What about the toping",
        //    choices: [
        //        {
        //            key: "p",
        //            name: "Peperonni and chesse",
        //            value: "PeperonniChesse"
        //        },
        //        {
        //            key: "a",
        //            name: "All dressed",
        //            value: "alldressed"
        //        },
        //        {
        //            key: "w",
        //            name: "Hawaïan",
        //            value: "hawaian"
        //        }
        //    ]
        //},
        //{
        //    type: "rawlist",
        //    name: "beverage",
        //    message: "You also get a free 2L beverage",
        //    choices: [ "Pepsi", "7up", "Coke" ]
        //},
        //{
        //    type: "input",
        //    name: "comments",
        //    message: "Any comments on your purchase experience",
        //    default: "Nope, all good!"
        //},
        //{
        //    type: "list",
        //    name: "prize",
        //    message: "For leaving a comments, you get a freebie",
        //    choices: [ "cake", "fries" ],
        //    when: function( answers ) {
        //        return answers.comments !== "Nope, all good!";
        //    }
        //}
    ],
    add:[],
    rm: [],
};

module.exports = Questions;