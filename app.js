const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req,res)=>{
    res.send("Hello");
});




app.listen(process.env.port||8000, (err)=>{
    if(err)
        console.log(err)
    else
        console.log(8080);
});