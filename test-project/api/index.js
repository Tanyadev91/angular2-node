var express = require('express'),
    app = express(),
    db = require('./db'),
    bodyParser = require('body-parser'),
    config = require('./config'),
    personController = require('./controllers/person');

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', config.frontend_url);
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With,uuid, message, uuid, x-access-token');
    'OPTIONS' === req.method
        ? res.sendStatus(200)
        : next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.get('/', function(req, res){
    res.send('Hello API!');
});

app.get('/popular_tags', personController.popularTags);
app.post('/persons', personController.addPerson);
app.get('/persons', personController.getPersons);

db.connect('mongodb://localhost:27017/test', function(err){
    if(err){
        return console.log(err);
    }
    app.listen(3000, function(){
        console.log('work!')
    })
});