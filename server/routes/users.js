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

router.get("/id", (req, res, next) => {
    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
    `M8EZJUQr_uur8ZAHVFPBF0G&q={"_id":"${req.body.id}"}`, (error, meta, body) => {
            if (error) {
                throw Error(error);
            }
            res.send(body.toString());
        })
})

//Create new user
router.post("/", (req, res, next) => {
    const requestOptions = {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'POST',
        'payload': JSON.stringify(req.body)

    }

    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
        `M8EZJUQr_uur8ZAHVFPBF0G&q={"email":"${req.body.email}"}`,
        (err, meta, body) => {
            console.log('new user', JSON.parse(body.toString()).length)

            if (JSON.parse(body.toString()).length > 0) {
                res.send({ err: 'Usuario con correo ya registrado' })
            }
            else {
                fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
                    "M8EZJUQr_uur8ZAHVFPBF0G", requestOptions, (error, meta, body) => {
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
    const requestOptions = {
        'headers': {
            'Content-Type': 'application/json'
        },
        'method': 'PUT',
        'payload': JSON.stringify(req.body)

    }

    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
        "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
            if (error) {
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
        'payload': JSON.stringify(req.body)

    }

    fetchUrl("https://api.mlab.com/api/1/databases/fruver/collections/usuario?apiKey=3ogwDefjJ" +
        "M8EZJUQr_uur8ZAHVFPBF0G", (error, meta, body) => {
            if (error) {
                throw Error(error);
            }
            res.send(body.toString());
        })
})

module.exports = router;