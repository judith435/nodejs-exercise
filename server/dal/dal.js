const mysql = require('mysql');

function executeQuery(spName, spParms, callback) {
    console.log('@@@ in dal  spParms: ' + JSON.stringify(spParms));

    var parms;
    if (spParms === '') {
        parms = '()';
    }
    else {
            let parmTemp = '';
            spParms.forEach(function (parm) {
                parmTemp = parm.isString ? '"' + parm.value + '"' : parm.value;
                parms += parmTemp;
                parms += ',';
                console.log('*** in loop parms=' + parms)

            });
            console.log('### at end of loop parms=' + parms)
        
       parms = '("AAA judy", 2, 2, "31 bottle crate", 11.67, 0)';
    }

    // IN productName VARCHAR(40),
    // IN supplierID int(11),
    // IN categoryID int(11),
    // IN quantityPerUnit VARCHAR(20),
    // IN unitPrice decimal(19,4),
    // in discontinued tinyint(1)



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
    // con.query('CALL sp_get_employee_detail(1)', (err, rows) => {
    //     if(err) throw err;
    con.query('Call ' + spName + parms, function (err, rows) {
        if (err) {
            console.log('>>> dal' + err);
            callback(err);
        } 
        else {
            callback(null, rows)
            //console.log('dal for spName: ' + spName + ' => '+   JSON.stringify(rows));
            console.log('dal for spName: ' + spName);

        }
    });
    con.end();
}

module.exports.executeQuery = executeQuery;