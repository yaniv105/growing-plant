const express = require('express');
const autogrowrouter = express.Router();
const mysql = require('mysql');
//var con = require('../../db');
const debug = require('debug')('app:homeroute');

var con = mysql.createConnection({
    host: "10.100.102.2",
    user: "yaniv",
    password: "1234",
    datbase: "growing_plant"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


function router(nav) {

    autogrowrouter.route('/').get((req, res) => {
 
        con.query('SELECT * FROM growing_plant.details', (err, rows) => {
            if (err) throw err;
            res.send(rows);
        });
    
        return autogrowrouter;
    });
    return autogrowrouter;
}
module.exports = router;
