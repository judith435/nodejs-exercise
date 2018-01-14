var productCtrl = require('./productController');


function getProducts(req, res) {
    console.log(req.body); // get the body data of get
    dalGetProds.getProducts(function(err, products) {
        if (err) {
            res.end('Sorry Dude!');
        }
        res.end(JSON.stringify(products));
    })
}


productCtrl.Read(function(err, products) {
    if (err) {
        res.end('error!');
    }

    res.end(JSON.stringify(products));
})
   

// // Step 1
// const mysql = require('mysql');
// const fs = require('fs');

// function getProducts(callback) {
//     // Step 2
//     const con = mysql.createConnection(
//         // connection details
//         {
//             host: 'localhost',
//             user: 'root',
//             password: '',
//             database: 'northwind'
//         }
//     );

//     // 3.connect
//     con.connect(function (err) {
//         if (err) {
//             console.log('Error connecting to DB:' + err);
//             return;
//         }
//         console.log('Connected');
//     });

//     // 4. crud : insert
//     // use backtick `` for free text
//     con.query('CALL get_products()',function(err, rows){
//    // con.query(`select * from products`, function (err, rows) {
//         if (err) {
//             // error log
//             // fs.readFile()
//             callback(err);

//         }
//         // con.end();
//         callback(null, rows);
//         // console.log(JSON.stringify(rows,null,4));
// /*        rows.forEach(function (row) {
//             console.log(row.model);
//         });*/
//     });

   
// }

module.exports.getProducts = getProducts;