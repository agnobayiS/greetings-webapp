const express = require('express');
const flash = require('express-flash');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const session = require('express-session');
const greetFunction = require('./greet-function');

// conecting database and js

const pgp = require('pg-promise')({});

const local_database_url = 'postgres://siyabonga:siya@localhost:5432/my_greet';
const connectionString = process.env.DATABASE_URL || local_database_url;

const db = pgp(connectionString);

// conecting database and js

const greet = require('./greet-function')(db);
const app = express();
var alphabets = /^[a-zA-Z]+$/g;


app.engine('handlebars', exphbs.engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static("public"))


app.use(session({
    secret: "<add a secret string here>",
    resave: false,
    saveUninitialized: true
}));


app.use(flash());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())


app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,


    })
);



app.get('/', async function (req, res) {

    let name = greet.getName()
    let language = greet.getlanguage()

    if (name !== '') {
        var validateName = await greet.greetName(name, language);
    }
    let counter = await greet.counter()

    console.log(counter);
    res.render('index', {
        validateName,
        counter

    })
});

app.post('/greeting', function (req, res) {
    let name = req.body.username
    let language = req.body.btn



    if (!name || !language) {
        req.flash('info', greet.validateInput(name, language));


    } else {
        greet.setName(name)
        greet.setLanguage(language)
    }

    res.redirect('/');

});

app.get('/counter', async function (req, res) {


    let names = await greet.getNames()
    console.log(names);
    res.render('names', { names })

});



app.get('/counter/:name', async function (req, res) {
   try {
    var user = req.params.name
    let number = await greet.userCounter(user)
    console.log(number);
    console.log('------------------');
    var message = `Hello ${user} you have been greeted ${number[counter]} times`;
    res.render('counter', {
        message
    });
   } catch (error) {
    console.log(error);
   }
});

app.get('/clear', async function (req, res) {
    await greet.clear()
    req.flash('info', "names cleared!");


    res.redirect('/')
})

const PORT = process.env.PORT || 3030;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});