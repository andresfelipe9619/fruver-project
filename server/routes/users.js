const express = require("express");
const router = express.Router();
var fetchUrl = require("fetch").fetchUrl;

//Read users collection
router.get("/", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
        "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
            if (error) {
                throw Error(error);
            }
            res.send(body.toString());
        })
})

//Create new user
router.post("/", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
        `M8EZJUQr_uur8ZAHVFPBF0G&q={"email":"${req.body.email}"}`,
        (err, meta, body) => {
            console.log('body', JSON.parse(body.toString()).length)
            
            if (JSON.parse(body.toString()).length > 0) {
                res.send({err: 'Usuario con correo ya registrado'})
            } else {
                fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
                    "M8EZJUQr_uur8ZAHVFPBF0G", {
                        'headers': {
                            'Content-Type': 'application/json'
                        },
                        'method': 'POST',
                        'payload': JSON.stringify(req.body)

                    }, (error, meta, body) => {
                        if (error) {
                            throw Error(error);
                        }
                        console.log('body', body.toString())
                        res.send(body.toString());
                    })
            }
        }
    )
})

//Update, Remove or Replace.
router.put("/", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
        "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
            if (error) {
                throw Error(error);
            }
            res.send(body.toString());
        })
})

module.exports = router;