var dal = require('../dal');

function getCategoriesDDL(callback) {
    dal.executeQuery('get_categories_for_ddl', function(err, rows) {
        if (err) {
            callback(err);
        }
        //console.log('category bl:  ' +  JSON.stringify(rows));
        callback(null, rows);
    });
}

module.exports.categories = {
    getCategoriesDDL: getCategoriesDDL

}