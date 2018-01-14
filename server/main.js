var express = require('express');
var bodyParser = require("body-parser");
var dalGetProds = require('./productAPI.js');
var dalGetSuppl = require('./sqlSupplier.js');
var dalGetSupplDDL = require('./sqlSupplierDDL.js');
var dalGetCategorylDDL = require('./sqlCategoryDDL.js');

var productAPI = require('./productAPI.js');


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

// app.all('/product', function (req, res, next) {
//     console.log('Accessing the secret section ...')
// })

 app.get('/product', productAPI.getProducts);
//  app.get('/product', function (req, res) {
//     console.log(req.body); // get the body data of get
//     dalGetProds.getProducts(function(err, products) {
//         if (err) {
//             res.end('Sorry Dude!');
//         }
//         res.end(JSON.stringify(products));
//     })
// });


app.get('/supplier', function (req, res) {
    console.log(req.body); // get the body data of get
    dalGetSuppl.getSuppliers(function(err, suppliers) {
        if (err) {
            res.end('Sorry Dude!');
        }
        res.end(JSON.stringify(suppliers));
    })
});




app.get('/supplierDDL', function (req, res) {
    console.log(req.body); // get the body data of get
    dalGetSupplDDL.getSuppliersForDDL(function(err, suppliers) {
        if (err) {
            res.end('Sorry Dude!: ' + err);
        }
        res.end(JSON.stringify(suppliers));
    })
});

app.get('/categoryDDL', function (req, res) {
    console.log(req.body); // get the body data of get
    dalGetCategorylDDL.getCategoriesForDDL(function(err, categories) {
        if (err) {
            res.end('Sorry Dude!: ' + err);
        }
        res.end(JSON.stringify(categories));
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