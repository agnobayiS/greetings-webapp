const assert = require('assert');
const Greetings = require('../greetings-FF');



describe("The Greetings factory function", function () {

    it(' it should return (Hello Name) if name is passed and language is Eglish', function () {
        let greetings = Greetings();

        assert.deepEqual("Hello Siya", greetings.greet("siya", "english"))
    });

    it(' it should return (Hallo Name) if name is passed and language is Afrikaans', function () {
        let greetings = Greetings();

        assert.deepEqual("Hallo Siya", greetings.greet("siya", "afrikaans"))
    });

    it(' it should return (Mholo Name) if name is passed and language is Xosha', function () {
        let greetings = Greetings();

        assert.deepEqual("Mholo Siya", greetings.greet("siya", "isixhosa"))
    });

    it('it should return (please Enter Name and language) if the is no name and language is not selected', function () {
        let greetings = Greetings();
        assert.deepEqual("please Enter Name and language", greetings.validateInput("",""))
    });


    it('it should return (Enter a valid name) if language is not selected and name is not entered', function () {
        let greetings = Greetings();
        assert.deepEqual("Enter a valid name", greetings.validateInput("","english"))
    });


    it('it should return (Select a language) if the name is not added', function () {
        let greetings = Greetings();
        assert.deepEqual("Select a language", greetings.validateInput("athi", ""))
    });


})