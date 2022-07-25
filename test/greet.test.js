const assert = require('assert');

const SettingsBill = require('../greet-function');

describe("The invelid massages",function(){

    it("should display (please enter a valid name) if the are numbers in the name and lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("Please enter a valid name",passedNames.invelidName("Siyabonga32","english") )




    });
    it("should display (nceda ngenisa igama) if the are numbers in the name and lanuge is xhosa",function(){

        const passedNames = greeting()
        assert.equal("Nceda ngenisa igama",passedNames.invelidName("Siyabonga32","isixhosa") )




    });
    it("should display (Voer asseblief n naam in) if the are numbers in the name and lanuge is afrikaans",function(){

        const passedNames = greeting()
        assert.equal("Voer asseblief n naam in",passedNames.invelidName("Siyabonga32","afrikaans") )




    });


});

describe("The Greeting massages",function(){

    it("should display (Hello and name) if the name is passed in and the lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("Hello, Siyabonga",passedNames.velidName("Siyabonga","english") )




    });
    it("should display (mholo and name) if the name is passed in and the lanuge is xhosa",function(){

        const passedNames = greeting()
        assert.equal("Mholo, Aphiwe",passedNames.velidName("Aphiwe","isixhosa") )




    });
    it("should display (Hallo and name) if the name is passed in and the lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("Hallo, Siyabonga",passedNames.velidName("Siyabonga","afrikaans") )

    });
    

});

describe("Select languge massages",function(){

    it("should display (please select languge) if the name is passed and the lanuge is not passed",function(){

        const passedNames = greeting()
        assert.equal(" Please select language",passedNames.noLanguage("Siyabonga" ,"") )




    });
   
    

});

describe("The invelid massages",function(){

    it("should display (please enter a valid name) if the are numbers in the name and lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("Please enter a valid name",passedNames.invelidName("Siyabonga32","english") )




    });
    it("should display (nceda ngenisa igama) if the are numbers in the name and lanuge is xhosa",function(){

        const passedNames = greeting()
        assert.equal("Nceda ngenisa igama",passedNames.invelidName("Siyabonga32","isixhosa") )




    });
    it("should display (Voer asseblief n naam in) if the are numbers in the name and lanuge is afrikaans",function(){

        const passedNames = greeting()
        assert.equal("Voer asseblief n naam in",passedNames.invelidName("Siyabonga32","afrikaans") )




    });


});

describe("The Names that are in the list rejection massages",function(){

    it("should display (Name already exist) if the name is passed in and the lanuge is english",function(){

        const passedNames = greeting()
        assert.equal("Name already exist",passedNames.existingName("Siyabonga","english") )




    });
    it("should display (Eligama selikhona) if the name is passed in and the lanuge is xhosa",function(){

        const passedNames = greeting()
        assert.equal("Eligama selikhona",passedNames.existingName("Siyabonga","isixhosa") )




    });
    it("should display (Naam bestaan reeds) if the name is passed in and the lanuge is afrikaans",function(){

        const passedNames = greeting()
        assert.equal("Naam bestaan reeds",passedNames.existingName("Siyabonga","afrikaans") )




    });
    
    

});