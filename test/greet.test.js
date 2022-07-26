const assert = require('assert');

const greeting = require('../greet-function');



describe("The Greeting massages",function(){

    it("should display (Hello and name) if the name is passed in and the lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("Hello Siyabonga",passedNames.greetName("Siyabonga","english") )




    });
    it("should display (mholo and name) if the name is passed in and the lanuge is xhosa",function(){

        const passedNames = greeting()
        assert.equal("Mholo Aphiwe",passedNames.greetName("Aphiwe","isixhosa") )




    });
    it("should display (Hallo and name) if the name is passed in and the lanuge is afrikaans",function(){

        const passedNames = greeting()
        assert.equal("Hallo Siyabonga",passedNames.greetName("Siyabonga","afrikaans") )

    });
    

});

describe("Select languge massages",function(){

    it("should display (please select languge) if the name is passed and the lanuge is not passed",function(){

        const passedNames = greeting()
        assert.equal("Select a language",passedNames.validateInput("Siyabonga" ,"") )




    });
   
    

});

describe("The invelid massages",function(){

    it("should display (please enter a valid name) if the is no name given",function(){

        const passedNames = greeting()
        assert.equal("Enter a valid name",passedNames.validateInput(" ","english") )




    });
    


});
describe("The invelid massages",function(){

    it("should display (please Enter Name and language) if the is no name passed and no languge selected",function(){

        const passedNames = greeting()
        assert.equal("please Enter Name and language",passedNames.validateInput(" ","") )




    });
    


});

