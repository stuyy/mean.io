const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const auth = require('./routes/auth');
const cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(cors());

app.use('/', auth);

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log("http://localhost:" + PORT + "/"));