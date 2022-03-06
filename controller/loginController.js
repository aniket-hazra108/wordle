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
   console.log(req.body);
    let response = {
        isValidUserName : true //boolean true/false,
    }
    res.json(response);
});

registrar.get("/getHighScore/:id",(req,res)=>{
    let score={
        userId: req.params.id,
        highScoreList:[{
            name:"Zes",
            score:36
        },{
            name:"Goe",
            score:90
        }],
        userScorePosition:1,
        word:"mavericj",
        wordDescription: "is a good guy",
        wordLink: "https://google.com"
    };

    res.json(score);
});

module.exports = registrar;