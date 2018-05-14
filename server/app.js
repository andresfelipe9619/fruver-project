const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
const config = require('./config/database');
const morgan = require("morgan");

var fetchUrl = require("fetch").fetchUrl;
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const orderRoutes = require('./routes/orders');
const invoiceRoutes = require('./routes/invoices');

const USERS = [
    {
        id: 12,
        username: 'andres',
        admin: true,
        password: 'mamasita',
<<<<<<< HEAD
        redirect: false
        
=======
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    }, {
        id: 16,
        username: 'camilo',
        admin: true,
<<<<<<< HEAD
        password: 'coca123',
        redirect: false
=======
        password: 'coca123'
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    }
]

// Body Parser Middleware
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/products", productRoutes);
// app.use("/orders", orderRoutes);
// app.use("/invoices", invoiceRoutes);
// app.use("/users", userRoutes);

app.get('/home', (req, res) => {
    res.send({ message: 'Responding from express' });
});

app.get('/login', (req, res) => {
    res.send({ message: 'Login loaded from express' });
});

app.get('/dashboard', (req, res) => {
    res.send({ message: 'Welcome my lord' });
});


app.post('/authenticate', (req, res) => {
    const result = authUser(req.body);
    console.log('AUTH: ', result);

    if (result) {
        res.status(200).json(result);
    } else {
<<<<<<< HEAD
        res.status(401).json({ err: "User doesnt exist" });
=======
        res.status(401).json({ msg: "User doesnt exist" });
>>>>>>> bf63e8c79aee1c7fe9bda3acc8e5d9e85e034d9e
    }

});

function authUser(user) {
    console.log(typeof user);
    for (USER in USERS) {
        if (user.username == USERS[USER].username && user.password == USERS[USER].password) {
            return USERS[USER];
        }
    }
    return false;
}

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});


module.exports = app;