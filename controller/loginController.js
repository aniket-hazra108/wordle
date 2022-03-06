const express = require('express');
const registrar = express.Router();

registrar.get('/generateUserId', (req,res)=>{
    let response = {
        userId : "XYZ.Hell"
    }
    res.json(response);
});

registrar.post('/startGame', (req,res)=>{
    //request body
    /*
     {
        userId: "",
        wordLength: 4,5,6,7,8,
    }
    */
    let response = {
        isValidUserName : true //boolean
    }
});

module.exports = registrar;