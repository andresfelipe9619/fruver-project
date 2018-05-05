const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const config = require('./config/database');
const morgan = require("morgan");

var fetchUrl = require("fetch").fetchUrl;
// const users = require('./routes/users'); const User =
// require('./model/user');

const PORT = 5000;

const PRODUCTS = {
    data: [
        {
            id: 782,
            name: 'manzana',
            type: 'fruta'
        }, {
            id: 655,
            name: 'cebolla',
            type: 'verdura'
        }
    ]
}

const USERS = [
    {
        id: 12,
        username: 'andres',
        admin: true,
        password: 'mamasita',
    }, {
        id: 16,
        username: 'camilo',
        admin: false,
        password: 'coca123'
    }
]

mongoose.connect(config.database);
var db = mongoose.connection; // On Connection
db.on('connected', () => {
    console.log('Connected to database' + config.database);
}); 
db.on(' error ', (err) => {
    console.log(`Database
 error : $ {err}`);
});

app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

function authUser(user) {
    console.log(typeof user);
    for (USER in USERS) {
        if (user.username == USERS[USER].username && user.password == USERS[USER].password) {
            return USERS[USER];
        }
    }
    return false;
}

app.get('/home', (req, res) => {
    res.send({message: 'Responding from express'});
});

app.get('/login', (req, res) => {
    res.send({message: 'Login loaded from express'});
});

app.get('/dashboard', (req, res) => {
    res.send({message: 'Welcome my lord'});
});

app.get('/productos', (req, res) => {

    // fetchUrl('https://api.otreeba.com/v1/strains',(error, meta, body) => {     if
    // (error) {         throw Error(error);     }     res.send(body); })

    res
        .status(200)
        .send(PRODUCTS);
});

app.post('/authenticate', (req, res) => {
    const result = authUser(req.body);
    console.log('AUTH: ', result)
    if (result) {

        res
            .status(200)
            .json(result);
    } else {
        res
            .status(401)
            .json({msg: "User doesnt exist"});
    }
})

app.listen(PORT, (err) => {
    err
        ? console.log(` cannot coonect to the port $ {
        PORT
    }
    with error $ {
        err
    }
    `)
        : console.log(` connected to port $ {
        PORT
    }
    succesfully `)
});

//Connection to MongoDB
/*
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017/fruver';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Successfully connected to server");

  client.close();
});*/