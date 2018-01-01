var express = require('express');
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res, next) {
    console.log(req.body); // get the body data of get
    res.end();
});

// Listen to '/product' in GET Verb methods
app.get('/product', function (req, res) {
    console.log(req.body); // get the body data of get
    res.end("in producti");
});

// Listen to '/product' in POST Verb methods
 app.post('/product', function (req, res) {
     console.log(req.body); // get the body data of post
     res.end();
 })


// Start the server
var server = app.listen(8081, function () {

})