const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const auth = require('./routes/auth');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const localstrat = require('./config/localstrategy');
const articleroute = require('./routes/article');

app.use(cors({
    origin: ['http://localhost:4200', 'http://127.0.0.1:5500'],
    credentials: true
}));

app.use(session({
    secret: 'keyboard',
    saveUninitialized: false,
    cookie: { maxAge: 60000 * 60 * 24 }
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth);
app.use('/article', articleroute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("http://localhost:" + PORT + "/"));