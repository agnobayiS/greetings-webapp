module.exports = function gretings(){

    var name = ""
    var language = ""
    var alphabets = /^[a-zA-Z]{3,}$/

    function validateInput(names, language) {
        


        if (!language && !names) {

            return "please Enter Name and language"
        }

        else if (!names) {
            return "Enter a valid name"

        }

        else if (!language) {
            return "Select a language"
        }


    }

    function setName(userName) {
        name = userName
    }
    function getName() {
        return name
    }
    function setLanguage(languageSelected) {
        language = languageSelected
    }
    function getlanguage() {
        return language
    }



    function greet(names, language){
        const name = names.charAt(0).toUpperCase() + names.substring(1).toLowerCase();
        // let names = alphabets.test(name)
        
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

   return {
    validateInput,
    setName,
    getName,
    setLanguage,
    getlanguage,
    greet


   }
}