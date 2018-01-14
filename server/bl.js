var dal = require('./dal');
//var models = require('./models');
var model = require('./productModel');


function getProducts(callback) {
    dal.executeQuery('get_products', function(err, rows) {
        if (err) {
            callback(err);
        }

        const productsObjectsArray = [];
        rows.forEach(function (row) {
            productsObjectsArray.push(new model.Product(row));
        });
        callback(null, productsObjectsArray);
    });
}

// module.exports.getCustomers = getCustomers;

module.exports.products = {
    getProducts: getProducts
}