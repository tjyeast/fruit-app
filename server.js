const express  = require('express'); //import express
const bodyParser = require('body-parser'); //used for parsing json object in the request
const methodOverride = require('method-override');

const app = express(); //express is a funtion that returns an object app
const routes = require('./routes');

//middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.use('/fruits', routes.fruits);
app.use('/users', routes.users);

const port = process.env.PORT || 3000;

app.listen(port, () => { //arrow function
    console.log(`I am listening on port ${port}`);
})