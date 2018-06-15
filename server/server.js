const http = require('http');
const app = require('./app');


const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.listen(PORT, (err) => {
    err
        ? console.log(` cannot coonect to the port ${PORT} with error $ {err}`)
        : console.log(` connected to port ${PORT} succesfully `)
});

