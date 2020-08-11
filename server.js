// Get access to the express library in node_modules
const express = require('express'); 

// create an instance of the express consntructor which will be name app
const app = express(); 

//The server will return somme mock data just for us to test it
const mockUserData=[
    { name: 'Mark' },
    { name: 'Jill' }
]

app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.listen(8000,function(){

    console.log("server is listenning")
})
