const http = require('http');
const app = require('./app');
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://public:123@ds149844.mlab.com:49844/fruver', (err, client) => {
    if (err) return console.log(err)
    db = client.db('fruver')
    if(!err) return console.log("estoy conectado")
})

app.post('/registro', (req, res) => {
    db.collection('cliente').save(req.body, (err, result) => {
      if (err) return console.log(err)
  
      console.log('saved to database')
      res.redirect('/')
    })
  })

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.listen(PORT, (err) => {
    err
        ? console.log(` cannot coonect to the port ${PORT} with error $ {err}`)
        : console.log(` connected to port ${PORT} succesfully `)
});