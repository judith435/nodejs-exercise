var bl = require('../bl/productBL');

// CRUD
function getProducts(callback) {

    //bl.customers.getCustomers(function(err, custArray) {
    bl.products.getProducts(function(err, prodArray) {
        if (err) {
            callback(err);
        }
       // console.log('prod controller after Call get_products() json stringify productsObjectsArray' +  JSON.stringify(prodArray));
        callback(null, prodArray);
    })
}


module.exports.getProducts = getProducts;