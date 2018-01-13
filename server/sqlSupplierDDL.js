// Step 1
const mysql = require('mysql');
const fs = require('fs');

function getSuppliersForDDL(callback) {
    // Step 2
    const con = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'northwind'
        }
    );

    // 3.cconnect
    con.connect(function (err) {
        if (err) {
            console.log('Error connecting to DB:' + err);
            return;
        }
        console.log('Connected');
    });

    // 4. crud : insert
    con.query('CALL get_suppliers_for_ddl()',function(err, rows){
        if (err) {
            callback(err);
        }
        callback(null, rows);
    });
}

module.exports.getSuppliersForDDL = getSuppliersForDDL;