//resource: video Jim provided in Slack: https://www.youtube.com/watch?v=SBwoFkRjZvE
//resource: video Jim provided in Slack: https://www.youtube.com/watch?v=Nau-iEEgEoM
//resource for understanding: a good example of a guessing game: https://youtu.be/qdcPmQdrJac
//random letters function resource - it is my understanding that the below function spits out a random letter using Math.random and letter length: https://stackoverflow.com/questions/29505419/choosing-a-random-letter-from-a-z
//DOM content event listener needs to be input for JS to work with HTML

//the tutor said this was redundant: let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function randomLetter() {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let letter = letters[Math.floor(Math.random() * letters.length)];
  console.log(letter + " computer guess");
  return letter;
}
randomLetter();

//variables:
let wins = 0;
let losses = 0;
let guessesLeft = 9;
// correctAnswer is defined by the randomLetter function above
let correctAnswer = randomLetter();
console.log(correctAnswer)
//correctAnswer = computer's guess
let guessedLetters = []; //guessed letters array - push the letter of "my guess" into this array - should display letters of my guess

//other functions that may be needed
let updateGuessedLetters = function (guessedLettersRef) {
  document.querySelector("#guessed").innerHTML = guessedLettersRef;
};//update the html to be the guessed letters
updateGuessedLetters('.');

let clearGuessesLeft = function (guessesRef) {
  document.querySelector("#guessesLeft").innerHTML = 0;
}
clearGuessesLeft ("0");

let updateGuessesLeft = function () {
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};
updateGuessesLeft("0");

let updateWins = function () {
  document.querySelector("#wins").innerHTML = wins;
};
updateWins();

//document.onkeyup function resource: https://www.youtube.com/watch?v=Tio88WjwFO0

console.log(guessedLetters);

//the main keyup event function

document.onkeyup = function (event) {
  let letter = event.key.toLowerCase();
  console.log(letter + " my guess");

  //select element, display pressed letters
  guessedLetters.push(letter); //push to array
  updateGuessedLetters(guessedLetters); // display array
  //compare input with computer choice

  if (letter === correctAnswer) {
    // document.querySelector("#wins").appendChild = +1;
    //increase wins by 1,
    // assign wins to span#wins
    // same as: document.querySelector("#wins").innerHTML = wins;
    //clear choices 
    wins = wins + 1;
    let winsSpan = document.querySelector("#wins");
    winsSpan.innerHTML = wins;
    updateGuessedLetters(".");
    randomLetter(); //pick another random letter to restart game
  }
   else {
    guessesLeft = guessesLeft - 1; //subtract one guess
    let leftSpan = document.querySelector("#guessesLeft");
    leftSpan.innerHTML = guessesLeft;
    //trying a for loop so when the guesses left hits 9 it resets?
    };

    if (guessesLeft === 0) {
      losses = losses + 1; //when guesses left = zero losses go up by 1
      let lossesSpan = document.querySelector("#losses");
      lossesSpan.innerHTML = losses;
      updateGuessedLetters(".");
      randomLetter();
    if (guessesLeft === 0) {
      guessesLeft = guessesLeft + 9;
      let guessesLeftSpan = document.querySelector("#guessesLeft");
      guessesLeftSpan.innerHTML = guessesLeft;
      updateGuessedLetters(".");
    } 
    if (guessesLeft === 0) {
      guessedLetters = (".");
      let guessedLettersSpan = document.querySelector("#guessed")
      guessedLettersSpan.innerHTML = guessedLetters; //reset the letters
      randomLetter(); 
    };}
    };
    //**resetting the game: all choices clear from guessed letters and computer picks new random letter --these are the things I was not able to quite accomplish -- did I need a new function to reset both of these??
    //tutoring and TAs were very helpful in getting the vision for the main functions I used