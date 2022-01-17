const express = require('express');
const mysql = require('mysql');

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
module.exports.db;