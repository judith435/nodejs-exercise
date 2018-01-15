var bl = require('../bl/supplierBL');

function getSuppliers(callback) {

    bl.suppliers.getSuppliers(function(err, supplArray) {
        if (err) {
            callback(err);
        }
       // console.log('prod controller after Call get_products() json stringify productsObjectsArray' +  JSON.stringify(prodArray));
        callback(null, supplArray);
    })
}

function getSuppliersDDL(callback) {

    bl.suppliers.getSuppliersDDL(function(err, supplArray) {
        if (err) {
            callback(err);
        }
       // console.log('prod controller after Call get_products() json stringify productsObjectsArray' +  JSON.stringify(prodArray));
        callback(null, supplArray);
    })
}

module.exports.getSuppliers = getSuppliers;
module.exports.getSuppliersDDL = getSuppliersDDL;