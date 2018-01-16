var productCtrl = require('../controllers/productController');


function getProducts(req, res) {
    //console.log(req.body); // get the body data of get
    productCtrl.getProducts(function(err, products) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(products));
    })
}

function addProduct(req, res) {
    console.log('>>> productAPI: ' + req.query); // get req.body the body data of get
    productCtrl.addProduct(req, function(err, result) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(result));
    })
}


module.exports.getProducts = getProducts;
module.exports.addProduct = addProduct;