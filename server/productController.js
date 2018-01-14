var bl = require('./bl');

// CRUD
function read(callback) {

    //bl.customers.getCustomers(function(err, custArray) {
    bl.getProducts(function(err, prodArray) {
        if (err) {
            callback(err);
        }

        callback(null, prodArray);
    })
}


module.exports.Read = read;