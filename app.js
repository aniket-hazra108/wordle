const express = require('express');
require('dotenv').config();
const wordlist = require('wordlist-english');

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

app.get('/isWordValid', function (req, res) {
    const word = req.query.word;
    const englishWords = wordlist['english'];
    const isValid = englishWords.indexOf(word) != -1;
    res.json({ isPresent: isValid });
});

app.listen(PORT, (err) => {
    if (err)
        console.log(err)
    else
        console.log(PORT);
});