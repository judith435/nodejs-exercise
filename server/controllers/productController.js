var bl = require('../bl/productBL');
var model = require('../models/productModel');

// CRUD
function getProducts(callback) {

    bl.products.getProducts(function(err, prodArray) {
        if (err) {
            callback(err);
        }
        callback(null, prodArray);
    })
}

function checkDuplicateProduct(req, callback) {

    const product = new model.Product(JSON.parse(req.query.product));

    bl.products.checkDuplicateProduct(product, function(err, productID) {
        if (err) {
            callback(err);
        }
        callback(null, productID);
    })
}


function addProduct(req, callback) {
    console.log('>>> productContoller: ' + req.query); // get req.body the body data of get
    const product = new model.Product(JSON.parse(req.query.product));
    
    //perform server side validations on product


    bl.products.addProduct(product, function(err, result) {
        if (err) {
            callback(err);
        }
        callback(null, result);
    })
}


module.exports.getProducts = getProducts;
module.exports.checkDuplicateProduct = checkDuplicateProduct;
module.exports.addProduct = addProduct;