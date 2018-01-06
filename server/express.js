var express = require('express');
var bodyParser = require("body-parser");
var dalGetProds = require('./sqlProduct.js');
var dalGetSuppl = require('./sqlSupplier.js');
var fs = require('fs');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
app.use(express.static('../client'));
app.use(express.static('../node_modules'));


// Express - to serve the client
// body parser - To handle the data of post

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        res.end(data) 
    });
   
});

// Listen to '/product' in GET Verb methods
app.get('/product', function (req, res) {
    console.log(req.body); // get the body data of get
    dalGetProds.getProducts(function(err, products) {
        if (err) {
            res.end('Sorry Dude!');
        }
        res.end(JSON.stringify(products));
    })
});

// Listen to '/product' in GET Verb methods
app.get('/supplier', function (req, res) {
    console.log(req.body); // get the body data of get
    dalGetSuppl.getSuppliers(function(err, suppliers) {
        if (err) {
            res.end('Sorry Dude!');
        }
        res.end(JSON.stringify(suppliers));
    })
});

// Listen to '/product' in POST Verb methods
 app.post('/product', function (req, res) {
     console.log(req.body); // get the body data of post
     res.end("in post producti");
 })


// Start the server
var server = app.listen(8081, function () {

})