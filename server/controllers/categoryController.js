var bl = require('../bl/categoryBL');

function getCategoriesDDL(callback) {

    bl.categories.getCategoriesDDL(function(err, catgArray) {
        if (err) {
            callback(err);
        }
       // console.log('prod controller after Call get_products() json stringify productsObjectsArray' +  JSON.stringify(prodArray));
        callback(null, catgArray);
    })
}

module.exports.getCategoriesDDL = getCategoriesDDL;