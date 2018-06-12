const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
var fetchUrl = require("fetch").fetchUrl;

// const Product = require("../models/product");

//Read products
router.get("/", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/producto?apiKey=3ogwDefjJ" +
    "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
        if(error){
              throw Error(error);
         }
        res.send(body.toString());
    })
})

//Create products
router.post("/", (req, res, next) => {
    const requestOptions = {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'POST',
        'payload': JSON.stringify(req.body)

    }


    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/producto?apiKey=3ogwDefjJ" +
    "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
        if(error){
              throw Error(error);
         }
        res.send(body.toString());
    })
})

//Update, Delete or Replace
router.put("/", (req, res, next) => {
    const requestOptions = {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'PUT',
        'payload': JSON.stringify(req.body)

    }

    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/producto?apiKey=3ogwDefjJ" +
    "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
        if(error){
              throw Error(error);
         }
        res.send(body.toString());
    })
})

router.delete("/", (req, res, next) => {
    const requestOptions = {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'DELETE',
        'payload': req.body.id.id.toString()
    }
    console.log('DELETE', req.body)

    fetchUrl(`https://api.mlab.com/api/1/databases/fruver/collections/producto/?apiKey=3ogwDefjJ` +
    "M8EZJUQr_uur8ZAHVFPBF0G",requestOptions, (error, meta, body) => {
        if(error){
              throw Error(error);
         }
    console.log('DELETE response cody', body.toString())

        res.send(body.toString());
    })
})
module.exports = router;
