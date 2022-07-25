
const moment = require('moment')
moment().format();
module.exports = function greeting() {

    
    var greetedNames = {}
    var alphabets = /^[a-zA-Z]{3,}$/g;

    function validateInput(name, language) {
        let names =  alphabets.test(name)
 
  
        if (!language && !names) {

            return "please Enter Name and language"
        }

       else if(!names){
            return "Enter a valid name"

        }
        
        else if (!language ) {
            return "Select a language"
        }


    }
   

    function greetName(name, language) {

        if (greetedNames[name] === undefined) {
            greetedNames[name] = 1;
        }
        else {
            greetedNames[name]++
        }

        switch (language) {
            case "english":
                return `Hello ${name}`
                break

            case "isixhosa":
                return `Mholo ${name}`
                break

            case "afrikaans":
                return `Hallo ${name}`
            
        }
    }



    function getNames() {
        return greetedNames
    }
   

    function clear() {
        greetedNames = {}
    }

    function counter() {

        return Object.keys(greetedNames).length
    }




    return {
        // regexName,
        getNames,
        clear,
        validateInput,
        greetName,
        counter
    }

}