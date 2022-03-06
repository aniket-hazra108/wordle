const express = require('express');
require('dotenv').config();
const testDb = require('./controller/dbController');
const app = express();
const PORT = process.env.PORT || 8080;

const gameController = require('./controller/gameController');
const loginController = require('./controller/loginController');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(testDb);
app.use("/registrar", loginController);
app.use("/ingame", gameController);

app.get('/', (req, res) => {
    res.send("Hello, It is not valid");
});

app.listen(PORT, (err) => {
    if (err)
        console.log(err)
    else
        console.log(PORT);
});