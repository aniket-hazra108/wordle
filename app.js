const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080 ;

const gameController = require('./controller/gameController');
const loginController = require('./controller/loginController');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use("/registrar", loginController);
app.use("/ingame", gameController);


app.get('/', (req,res)=>{
    res.send("Hello, It is not valid");
});



app.listen(PORT, (err)=>{
    if(err)
        console.log(err)
    else
        console.log(PORT);
});