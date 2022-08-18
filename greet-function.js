
const moment = require('moment')
moment().format();
module.exports = function greeting(db) {

    var name = ""
    var language = ""

    var alphabets = /^[a-zA-Z]{3,}$/;

    function validateInput(name, language) {
        let names = alphabets.test(name)


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

    async function greetName(names, language) {

        const name = names.charAt(0).toUpperCase() + names.slice(1).toLowerCase();

        let check = await db.oneOrNone('select greeted_names from my_greet where greeted_names = $1', [name])
        
        if (check === null) {
            await db.none('insert into my_greet (greeted_names, counter) values ($1, $2)', [name, 1])
        }
        else {
            await db.none('UPDATE my_greet  SET counter = counter + 1 WHERE greeted_names = $1', [name])
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



    async function getNames() {
        let allNames = await db.manyOrNone('select greeted_names from my_greet')
        return allNames
    }


    async function clear() {
        await db.none('delete from my_greet')
    }

    async function counter() {
        let count = await db.any('select * from my_greet');
        return count.length
    }

    async function userCounter(name) {
    

        let counter = await db.oneOrNone('select greeted_names,counter from my_greet where greeted_names = $1', [name])
        
        return counter
    }



    return {
        userCounter,
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