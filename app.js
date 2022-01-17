const express = require('express');
//import morgan for debuging sent package 
const morgan = require('morgan');
//import debug for debuging the connection
const debug = require('debug');
//import path for joins __dirname and a string
const path = require('path');
const { title } = require('process');
const { link } = require('fs');
//adding mysql
//var con = require('./db')
var mysql = require('mysql');
// const variables for runing app
const app = express();
const port = process.env.PORT || 3000;

//use morgan in tiny mode
app.use(morgan('tiny'));
//add bootsrap and jquery to the project
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootsrtrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
//use spesific folder to get the views js and css files
app.use(express.static(path.join(__dirname, "/src/views/public")));
//configure views to be the localhost:3000/ search for the first page in project (main file).
app.set('views', path.join(__dirname, '/src/views'));
//setting up a view engine using ejs files
app.set('view engine', 'ejs');


const nav = [
    { link: '/home', title: 'Home' },
    { link: '/settings', title: 'Settings' }
];

//router
const homeroute = require('./src/routes/homeroute')(nav);
const autogrowrouter = require('./src/routes/autogrowroute')(nav);
//rout main page
app.get('/', (req, res) => {
    res.render('login',
        {
            //send an array of objects for site menu 
            nav,
            //site title
            title: 'Auto growing plant'
        })
});
app.use('/home', homeroute);
//app use to answer loclhost:3000/settings and will send you to settings page
app.use('/settings', autogrowrouter);

//app use to listen to port
app.listen(port, (req, res) => {
    debug('listening on port ' + port);
});