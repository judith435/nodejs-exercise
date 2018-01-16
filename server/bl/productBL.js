var dal = require('../dal');
var model = require('../models/productModel');


function getProducts(callback) {
    dal.executeQuery('get_products', function(err, rows) {
        if (err) {
            callback(err);
        }
        const productsObjectsArray = [];
        rows[0].forEach(function (row) {
            productsObjectsArray.push(new model.Product(row));
        });
        callback(null, productsObjectsArray);
    });
}

function addProduct(req, callback) {
    console.log('>>> productBL: ' + JSON.stringify(req.query));  
    // callback(null, 'gunibush');
    dal.executeQuery('get_products', function(err, rows) {
        if (err) {
            callback(err);
        }
        const productsObjectsArray = [];
        rows[0].forEach(function (row) {
            productsObjectsArray.push(new model.Product(row));
        });
        callback(null, productsObjectsArray);
    });
}

module.exports.products = {
    getProducts: getProducts,
    addProduct: addProduct
}