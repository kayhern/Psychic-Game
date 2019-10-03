//resource: video Jim provided in Slack: https://www.youtube.com/watch?v=SBwoFkRjZvE
//resource: video Jim provided in Slack: https://www.youtube.com/watch?v=Nau-iEEgEoM
//resource for understanding for loop and breaks and a good example of a guessing game: https://youtu.be/qdcPmQdrJac


//wins and losses begin with 0
//guesses begins with 9
//the choices the user can choose are the 26 letters of the alphabet
//the computer's correct answer is chosen at random

//when the user types a letter on their keyboard, that letter should appear under the guesses so far
//when the user types a letter of their keyboard, the number of guesses should go down from 9
//if the user chooses the right number the number of wins should go up and the game should reset
//if the user chooses 9 letters that are wrong, it should reset 
//if the user chooses 9 letters that are wrong, losses should increase by 1

//guesses so far lists all the letters the person guesses with a comma in between each guess
//once guesses counts down to 0 then guesses so far resets to nothing
//if the person guesses the correct letter then wins go up by 1
//if the person guesses 9 guesses without the correct letter then losses goes up by 1
//need to define what the random letter is for each game

//need a for loop
//i = 0, i<9, i++

//random letters function resource: https://stackoverflow.com/questions/29505419/choosing-a-random-letter-from-a-z

function randomLetter() {
    let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let letter = letters[Math.floor(Math.random() * letters.length)];
    return letter;
  }

let guess;
let wins = 0
let losses = 0
let guessesleft = 9
let correctAnswer = randomLetter;


