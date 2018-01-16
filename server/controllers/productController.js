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

function addProduct(req, callback) {
    console.log('>>> productContoller: ' + req.query); // get req.body the body data of get

    bl.products.addProduct(req, function(err, result) {
        if (err) {
            callback(err);
        }
        callback(null, result);
    })
}


module.exports.getProducts = getProducts;
module.exports.addProduct = addProduct;