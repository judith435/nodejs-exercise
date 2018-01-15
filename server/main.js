var express = require('express');
var bodyParser = require("body-parser");

var apiProducts = require('./api/productAPI.js');
var apiSuppliers = require('./api/supplierAPI.js');
var apiCategories = require('./api/categoryAPI.js');

// var dalGetSupplDDL = require('./sqlSupplierDDL.js');
var dalGetCategorylDDL = require('./sqlCategoryDDL.js');


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

// Listen to '/' in GET Verb methods - serve the main Angular index.html file
app.get('/', function (req, res) {

    fs.readFile('client/index.html', 'utf8', function (err, data) {
        if (err) {
            console.log(err);
        }
        res.end(data) 
    });
   
});

app.get('/product', apiProducts.getProducts);
app.get('/supplier', apiSuppliers.getSuppliers);
app.get('/supplier/ddl', apiSuppliers.getSuppliersDDL);
app.get('/category/ddl', apiCategories.getCategoriesDDL);

// Listen to '/product' in POST Verb methods
 app.post('/product', function (req, res) {
     console.log(req.body); // get the body data of post
     res.end("in post producti");
 })


// Start the server
var server = app.listen(8081, function () {

})