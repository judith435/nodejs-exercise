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

function addProduct(req, callback) {
    console.log('>>> productBL: ' + JSON.stringify(req.query));  
    // callback(null, 'gunibush');
    const spParms = []; 
    spParms.push(new parmObject.spParm('AAA judy', true));
    spParms.push(new parmObject.spParm(2, false));
    spParms.push(new parmObject.spParm(2, false));
    spParms.push(new parmObject.spParm('31 bottle crate', true));
    spParms.push(new parmObject.spParm(11.67, false));
    spParms.push(new parmObject.spParm(0, false));

    console.log('!!! in bl  spParms: ' + JSON.stringify(spParms));
  //  ['AAA judy', 2, 2, '31 bottle crate', 11.67, 0];
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