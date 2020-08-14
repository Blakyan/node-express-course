// Get access to the express library in node_modules
const express = require('express'); 

// create an instance of the express consntructor which will be name app
const app = express(); 
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//The server will return somme mock data just for us to test it
const mockUserData=[
    { name: 'Mark' },
    { name: 'Jill' }
]

const mockPlaceData=[
    { name: 'Lepop' },
    { name: 'Friends Food' },
    { name: 'Pizza Doree' }
]
// GET REQUEST
app.get('/users/:id',function(req,res){
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'got one user',
        user: req.params.id
    })
})

app.get('/places',function(req,res){
    res.json({
        success: true,
        message: 'all the places',
        places: mockPlaceData
    })
})

//POST REQUEST
app.post('/login',function(req,res){
    const username= req.body.username;
    const password= req.body.password;

    const mockUsername="billyTheKid";
    const mockPassword="SuperSecret.";

    if (username===mockUsername && password===mockPassword){
        res.json({
            success: true,
            message: 'password and username match!',
            token: 'encrypted token goes here'
        })
    }else {
        res.json({
            success: false,
            message: 'password and username do not match'
        })
    }
})


app.listen(8000,function(){

    console.log("server is listenning")
})
