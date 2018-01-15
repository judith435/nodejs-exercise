var bl = require('../bl/productBL');

// CRUD
function getProducts(callback) {

    bl.products.getProducts(function(err, prodArray) {
        if (err) {
            callback(err);
        }
       // console.log('prod controller after Call get_products() json stringify productsObjectsArray' +  JSON.stringify(prodArray));
        callback(null, prodArray);
    })
}

function addProduct(callback) {

    bl.products.addProduct(function(err, result) {
        if (err) {
            callback(err);
        }
        callback(null, result);
    })
}


module.exports.getProducts = getProducts;