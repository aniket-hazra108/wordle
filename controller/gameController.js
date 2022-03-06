const express = require('express');
const game = express.Router();

game.post("/gameAttempt",(req,res)=>{
    /*
    Request
    {
        userId:
        wordEntered:
        currentStep:
    }
    */
   let response = {
        isWordValid: false, //true/false,
        isWordCorrect: false, //true/false,
        gameOver: false ,//true/false,
        guessedWords: [["m","o","u","n","t"],["t","r","a","i","n"]],
        selectedLetters: [{"letter":"m","state":"absent"},{"letter":"o","state":"absent"},{"letter":"u","state":"absent"},{"letter":"n","state":"absent"},{"letter":"t","state":"correct"},{"letter":"r","state":"correct"},{"letter":"a","state":"correct"},{"letter":"i","state":"absent"},{"letter":"n","state":"absent"}],
        states: [["absent","absent","absent","absent","present"],["correct","correct","correct","absent","absent"]],
    }

    res.json(response);
});

module.exports = game;