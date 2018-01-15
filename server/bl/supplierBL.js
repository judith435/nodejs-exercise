var dal = require('../dal');
var model = require('../models/supplierModel');


function getSuppliers(callback) {
    dal.executeQuery('get_suppliers', function(err, rows) {
        if (err) {
            callback(err);
        }
        const suppliersObjectsArray = [];
        rows[0].forEach(function (row) {
            suppliersObjectsArray.push(new model.Supplier(row));
        });
        callback(null, suppliersObjectsArray);
    });
}


function getSuppliersDDL(callback) {
    dal.executeQuery('get_suppliers_for_ddl', function(err, rows) {
        if (err) {
            callback(err);
        }
        callback(null, rows);
    });
}

module.exports.suppliers = {
    getSuppliers: getSuppliers,
    getSuppliersDDL: getSuppliersDDL

}