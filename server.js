// Get access to the express library in node_modules
const express = require('express'); 

// create an instance of the express consntructor which will be name app
const app = express(); 

//The server will return somme mock data just for us to test it
const mockUserData=[
    { name: 'Mark' },
    { name: 'Jill' }
]

app.get('/users',function(req,res){
    res.json({
        success: true,
        message: 'successfully got users; Nice!',
        users: mockUserData
    })
})

app.listen(8000,function(){

    console.log("server is listenning ")
})
