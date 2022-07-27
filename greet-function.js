
const moment = require('moment')
moment().format();
module.exports = function greeting() {

    var name = ""
    var language = ""
    
    var greetedNames = {}
    var alphabets = /^[a-zA-Z]{3,}$/;

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

    function setName (userName){
        name = userName 
    }
    function getName (){
        return name
    }
    function setLanguage (languageSelected){
        language = languageSelected 
    }
    function getlanguage (){
        return language
    }

    function greetName(name, language) {

        console.log(greetedNames);
        if (greetedNames[name] === undefined) {
            greetedNames[name] = 1;
        }
        else {
            greetedNames[name]++
        }

        setName("")
        setLanguage("")

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
        getlanguage,
        setLanguage,
        getName,
        setName,
        getNames,
        clear,
        validateInput,
        greetName,
        counter
    }

}