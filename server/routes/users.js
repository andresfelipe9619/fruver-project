const express = require("express");
const router = express.Router();
var fetchUrl = require("fetch").fetchUrl;

//Read users collection
router.get("/", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
    "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
        if(error){
              throw Error(error);
         }
        res.send(body.toString());
    })
})

//Create new user
router.post("/", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
    "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
        if(error){
              throw Error(error);
         }
        res.send(body.toString());
    })
})

//Update, Remove or Replace.
router.put("/", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
    "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
        if(error){
              throw Error(error);
         }
        res.send(body.toString());
    })
})

module.exports = router;