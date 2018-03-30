//create an array of words
var wordBank = ['spongebob','squidword','patrick','sandy'];
//choose words randomly
var randWord;
var underscore = [];
var userGuess = [];
var wins = 0;
var loss = 0;
var guessesLeft = 12;
var wrongLetter = [];

//create underscores based on lengths of word
function StartGame(){
    //picks random word.
    randWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log(randWord);
    for(var i = 0; i < randWord.length; i++){
       underscore.push('_');
       console.log(randWord);
    }
    document.getElementById('underscore').innerHTML = underscore;
    
    
    document.onkeyup = function(event) {
        guessesLeft = 12;
        wrongletter = [];
        userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
        console.log(userGuess);
        //checking if letter exist inside word.
        if(randWord.indexOf(userGuess) > -1){
            for(var i = 0; i < randWord.length; i ++){
                if(randWord[i] === userGuess){
                    randWord[i] = userGuess;
                    //console.log(userGuess);
                    //console.log(randWord[i]);
                    document.getElementById('underscore').innerHTML = randWord[i];
                }
                else{
                    wrongLetter.push(userGuess);
                    guessesLeft --;
                    document.getElementById('wrongGuess').innerHTML = wrongLetter;
                    document.getElementById('triesLeft').innerHTML = guessesLeft;
                }
    
            }
        }
        //document.getElementById('wrongGuess').innerHTML = wrongLetter;
    }
}
StartGame();

//HTML
//document.getElementById('triesLeft').innerHTML = guessesLeft;
//StartGame(wordBank);
//get user guess
//document.onkeyup = function(event) {
    //userGuess = String.fromCharCode(event.keyCode);
    //checking if letter exist inside word.
    //if(randWord.indexOf(userGuess) > -1){
    //    for(var i = 0; i < randWord.length; i ++){
    //        if(randWord[i] === userGuess){
    //            underscore[i] = userGuess;
    //            document.getElementById('underscore').innerHTML = underscore[i];
    //        }
    //        else {
    //            wrongLetter.push(userGuess);
    //            guessesLeft --;
    //        }

    //    }
//    }
//    document.getElementById('wrongGuess').innerHTML = wrongLetter;

//}

//check if guess is right
//if right push to right array
//if wrong push to wrong array
