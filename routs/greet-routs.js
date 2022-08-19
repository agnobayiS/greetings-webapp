module.exports = function greet(greeting, db) {


    async function home(req, res) {

        let name = greeting.getName()
        let language = greeting.getlanguage()

        if (name !== '') {
            await db.greetName(name);
            var validateName = greeting.greet(name, language)
        }
        let counter = await db.counter()

        console.log(counter);
        res.render('index', {
            validateName,
            counter

        })
    }

    function greet(req, res) {
        let name = req.body.username
        let language = req.body.btn



        if (!name || !language) {
            req.flash('info', greeting.validateInput(name, language));


        } else {
            greeting.setName(name)
            greeting.setLanguage(language)
        }
        res.redirect('/');
    }

    async function clear (req, res) {
        await db.clear()
        req.flash('info', "names cleared!");
    
    
        res.redirect('/')
    }

    async function namesGreeted (req, res) {


        let names = await db.getNames()
    
        res.render('names', {
            names
    
        })
    
    }

    async function numberOfTimes(req, res) {

        let user = req.params.name
        let number = await db.userCounter(user)
    
    
        res.render('counter', {
            user,
            number
    
        })
    }

    return {
        home,
        greet,
        clear,
        namesGreeted,
        numberOfTimes

    }
}