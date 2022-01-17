const express = require('express');
const sql = require('mysql');
const autogrowrouter = express.Router();

function router(nav){    
    //route for settings
    autogrowrouter.route('/').get((req,res)=> {
        res.render('settings',  {
            //send an array of objects for site menu  
            nav,
            
          
            //site title
            title: 'Auto growing plant' 
    });
    return autogrowrouter;
});
return autogrowrouter;
}
module.exports = router;