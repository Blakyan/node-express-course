// Get access to the express library in node_modules
const express = require('express'); 

// create an instance of the express consntructor which will be name app
const app = express(); 

app.listen(8000,function(){

    console.log("server is NOW running ")
})
