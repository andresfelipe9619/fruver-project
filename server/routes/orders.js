const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var fetchUrl = require("fetch").fetchUrl;

// const Product = require("../models/product");

router.get("/", (req, res, next) => {
    // fetchUrl('https://api.predic8.de:443/shop/orders/', (error, meta, body) => {
    //     if(error){
    //           throw Error(error);
    //      }
    //     res.send(body.toString());
    // })
    res.send({ message: 'Responding from express' });
    
})

module.exports = router;
