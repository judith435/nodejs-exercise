const mysql = require('mysql');

function executeQuery(sp, callback) {
    const con = mysql.createConnection(
        // connection details
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'northwind'
        }
    );

    con.connect(function (err) {
        if (err) {
            console.log('Error connecting to DB:' + err);
            return;
        }
        //console.log('Connected');
    });

    // con.query('SET @nId = 10; CALL myProcedure(@nId); SELECT @nId;')
    con.query('Call ' + sp + '()', function (err, rows) {
        if (err) {
            callback(err);
        } 
        else {
            callback(null, rows)
            //console.log('dal for sp: ' + sp + ' => '+   JSON.stringify(rows));
            console.log('dal for sp: ' + sp);

        }
    });
    con.end();
}

module.exports.executeQuery = executeQuery;