const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
// const users = require('./routes/users');
// const User = require('./model/user');

const PORT = 5000;

// mongoose.connect(config.database);
// var db = mongoose.connection;

// // On Connection
// db.on('connected', () => {
//     console.log('Connected to database ' + config.database);
// });

// db.on('error', (err) => {
//     console.log(`Database error: ${err}`);
// });

app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.get('/home', (req, res)=>{
    res.send('Hello world from express!!!');
});

app.listen(PORT, (err)=>{
    err?console.log(`cannot coonect to the port ${PORT} with error ${err}`):console.log(`connected to port ${PORT} succesfully`)
});
