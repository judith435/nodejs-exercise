var fs = require('fs');
// fs - To work with files

fs.logError(function (err, data) {
    if (err) {
        console.log(err);
    }

    console.log(data) // data is the content of the file
});


module.exports.logError = logError;