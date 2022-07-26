const assert = require('assert');
const greeting = require('../greet-db-logic');
const pgPromise = require('pg-promise')
const pg = require("pg");

const pgp = pgPromise({})



const local_database_url = 'postgres://siyabonga:siya@localhost:5432/my_greet_test';
const connectionString = process.env.DATABASE_URL || local_database_url;

const db = pgp(connectionString);
const greet = greeting(db)


describe("Greeting database test", async function () {



    beforeEach(async function () {
        await db.manyOrNone('delete from my_greet')

    });


    it("should display nothing if the clear botton is pressed and the are 3 names in the database", async function () {

        await greet.greetName("athi")
        await greet.greetName("siya")
        await greet.greetName("makho")

        await greet.clear()

        assert.deepEqual( [] ,await greet.getNames() )




    });

    it("should display nothing if the clear botton is pressed and the are 1 names in the database", async function () {

        await greet.greetName("athi")
        await greet.clear()


        assert.deepEqual( [] , await greet.getNames() )

    });
    
    it(" the counter should display (2) if the are 2 names in the dataabse table", async function () {

        await greet.greetName("siya");
        await greet.greetName("athi");

        assert.equal(2, await greet.counter())
    });
   
    
    it("the persons counter ", async function () {

        await greet.greetName("siya");
        await greet.greetName("athi");
        await greet.greetName("siya");
        await greet.greetName("siya");


        assert.deepEqual( {
            counter: 3,
            greeted_names: 'Siya'
          }
          , await greet.userCounter('Siya'))
    });
    
    
    it("should display (  0 ) if the is no names in the dataabse table", async function () {
        
        
        assert.equal(0, await greet.counter())
    });
    
    it("should display name if name is the name in the database", async function () {

        await greet.greetName("siya");
        assert.deepEqual([ { greeted_names: 'Siya' } ]
        , await greet.getNames())

    });





    after(async function () {
        await db.manyOrNone('Truncate my_greet');
    });
})
