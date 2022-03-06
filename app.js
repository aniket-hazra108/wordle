const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 8080 ;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



app.get('/', (req,res)=>{
    res.send("Hello");
});



app.listen(PORT, (err)=>{
    if(err)
        console.log(err)
    else
        console.log(PORT);
});