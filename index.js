const express = require('express');
const flash = require('express-flash');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const session = require('express-session');
const greet = require('./greet-function')([]);

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

// initialise the flash middleware
app.use(flash());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: true,


    })
);



app.get('/', function (req, res) {


    let counter = greet.counter()
    console.log(counter);
    res.render('index', {
        counter

    })
});

app.post('/greeting', function (req, res) {
    let name = req.body.username
    let language = req.body.btn

    console.log("Checking name:", counter);

    if (!name || !language) {
        req.flash('info', greet.validateInput(name, language));
        res.redirect('/');

    }




    if (name && language) {
        var validateName = greet.greetName(name, language);
        console.log("validate things:", validateName);
        var counter = greet.counter()
        // var msg = greet.velidName(req.body.username, req.body.btn);
    }

    // else if (alphabets.test(name)) {
    //     console.log("mememe")
    //     var validateName = greet.regexName(name)

    // }

    res.render('index', { validateName, counter })


});

app.get('/counter', function (req, res) {


    let names = greet.getNames()
    console.log(names);
    res.render('names', { names })

});



app.get('/counter/:name', function (req, res) {
    var user = req.params.name
    let names = greet.getNames()
    for (const name in names) {
        console.log(name);
        if (name === user) {
            var number = names[name];
            var message = `Hello ${user} you have been greeted ${number} times`;
        }
    }
    res.render('counter', {
        message
    });
});

app.get('/clear', function (req, res) {
    greet.clear()
    res.redirect('/')
})

const PORT = process.env.PORT || 3030;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});