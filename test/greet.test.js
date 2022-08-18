const assert = require('assert');
const greeting = require('../greet-function');
const pgPromise = require('pg-promise')
const pg = require("pg");

const pgp = pgPromise({})


const local_database_url = 'postgres://siyabonga:siya@localhost:5432/my_greet_test';
const connectionString = process.env.DATABASE_URL || local_database_url;

const db = pgp(connectionString);



describe("The Greeting massages", async function () {



    beforeEach(async function () {
        await db.manyOrNone('delete from my_greet')

    });


    it("should display (Hello, name) if the name is passed in and the lanuge is english", async function () {

        const passedNames = greeting(db)
        assert.equal("Hello Siyabonga",await passedNames.greetName("Siyabonga", "english"))




    });
    it("should display (Mholo, name) if the name is passed in and the lanuge is xhosa", async function () {


        const passedNames = greeting(db)
        assert.equal("Mholo Aphiwe",await passedNames.greetName("Aphiwe", "isixhosa"))




    });
    it("should display (Hallo, name) if the name is passed in and the lanuge is afrikaans", async function () {


        const passedNames = greeting(db)
        assert.equal("Hallo Siyabonga", await passedNames.greetName("Siyabonga", "afrikaans"))

    });


    after( async function(){
        await db.manyOrNone('Truncate my_greet');
    });

});

describe("Select languge massages", function () {

    it("should display (please select languge) if the name is passed and the lanuge is not passed", function () {

        const passedNames = greeting()
        assert.equal("Select a language", passedNames.validateInput("Siyabonga", ""))




    });



});

describe("The invelid massages", function () {

    it("should display (please enter a valid name) if the is no name given", function () {

        const passedNames = greeting()
        assert.equal("Enter a valid name", passedNames.validateInput(" ", "english"))




    });



});
describe("The invelid massages", function () {

    it("should display (please Enter Name and language) if the is no name passed and no languge selected", function () {

        const passedNames = greeting()
        assert.equal("please Enter Name and language", passedNames.validateInput(" ", ""))




    });



});

