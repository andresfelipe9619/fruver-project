const http = require('http');
const app = require('./app');

<<<<<<< HEAD
const PORT = 5000;  

const PRODUCTS = {
    data: [
        {
            id: 782,
            name: 'manzana',
            type: 'fruta'
        },
        {
            id: 655 ,
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
    },
    {
        id: 16,
        username: 'camilo',
        admin: false,
        password: 'coca123',
    }
]

// mongoose.connect(config.database); var db = mongoose.connection; // On
// Connection db.on('connected', () => {     console.log('Connected to database
// ' + config.database); }); db.on('error', (err) => {     console.log(`Database
// error: ${err}`); });

app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

const authUser = (user)=>{
    for(USER of USERS){
        if(user.username == USER.username && user.password == USER.password){
            return true;
        }else return false; 
    }
}


app.get('/home', (req, res) => {
    res.json({message: 'Responding from express'});
});

app.get('/productos', (req, res) => {

    // fetchUrl('https://api.otreeba.com/v1/strains',(error, meta, body) => {
    //     if (error) {
    //         throw Error(error);
    //     }
    //     res.send(body);
    // })

    res.send(PRODUCTS);
});

app.post('/authenticate', (req, res)=>{
    if(authUser(req.body)){
        res.send('Nice job')
    }else {
        res.send('Username or password wrong')
    }
})
=======
const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
>>>>>>> develop

app.listen(PORT, (err) => {
    err
        ? console.log(` cannot coonect to the port ${PORT} with error $ {err}`)
        : console.log(` connected to port ${PORT} succesfully `)
});