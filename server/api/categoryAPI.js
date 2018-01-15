var categoryCtrl = require('../controllers/categoryController');

function getCategoriesDDL(req, res) {
    console.log(req.body); // get the body data of get
    categoryCtrl.getCategoriesDDL(function(err, categories) {
        if (err) {
            res.end('Sorry Dude! '+ err);
        }
        res.end(JSON.stringify(categories));
    })
}

module.exports.getCategoriesDDL = getCategoriesDDL;