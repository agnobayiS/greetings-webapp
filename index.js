const express = require('express');
const flash = require('express-flash');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser')
const session = require('express-session');
const greetFunction = require('./greetings-FF');
const routes = require('./routs/greet-routs')


const pgp = require('pg-promise')({});

const local_database_url = 'postgres://siyabonga:siya@localhost:5432/my_greet';
const connectionString = process.env.DATABASE_URL || local_database_url;


const app = express();


const config = {
    connectionString
}
if (process.env.NODE_ENV == "production") {
    config.ssl = {
        rejectUnauthorized: false
    }
}

const db = pgp(config);

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



// instance for all js files 
const greetDb = require('./greet-db-logic')(db);
const greetings = greetFunction()
const greetRoute = routes(greetings, greetDb)


app.get('/', greetRoute.home);

app.post('/greeting', greetRoute.greet)

app.get('/counter' ,greetRoute.namesGreeted)

app.get('/counter/:name', greetRoute.numberOfTimes)

app.get('/clear', greetRoute.clear)


const PORT = process.env.PORT || 3031;

app.listen(PORT, function () {
    console.log("App started at port:", PORT)
});