var dal = require('..//dal/dal');
var parmObject = require('..//dal/spParm');
var model = require('../models/productModel');


function getProducts(callback) {
    dal.executeQuery('get_products', '',function(err, rows) {
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

function addProduct(product, callback) { //product.categoryID   product.productName

    console.log('>>> productBL: ' + JSON.stringify(product));  

    const spParms = []; 
    
    spParms.push(new parmObject.spParm(product.productName, true));
    spParms.push(new parmObject.spParm(product.supplierID, false));
    spParms.push(new parmObject.spParm(product.categoryID, false));
    spParms.push(new parmObject.spParm(product.quantityPerUnit, true));
    spParms.push(new parmObject.spParm(product.unitPrice, false));
    spParms.push(new parmObject.spParm(product.discontinued, false));

    console.log('!!! in bl  spParms: ' + JSON.stringify(spParms));
    dal.executeQuery('insert_product', spParms, function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null, 'product added successfully');
    });
}

module.exports.products = {
    getProducts: getProducts,
    addProduct: addProduct
}