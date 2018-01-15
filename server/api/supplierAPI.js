var supplierCtrl = require('../controllers/supplierController');


function getSuppliers(req, res) {
    console.log(req.body); // get the body data of get
    supplierCtrl.getSuppliers(function(err, suppliers) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(suppliers));
    })
}


function getSuppliersDDL(req, res) {
    console.log(req.body); // get the body data of get
    supplierCtrl.getSuppliersDDL(function(err, suppliers) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(suppliers));
    })
}

module.exports.getSuppliers = getSuppliers;
module.exports.getSuppliersDDL = getSuppliersDDL;