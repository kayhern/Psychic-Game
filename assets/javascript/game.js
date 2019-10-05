//resource: video Jim provided in Slack: https://www.youtube.com/watch?v=SBwoFkRjZvE
//resource: video Jim provided in Slack: https://www.youtube.com/watch?v=Nau-iEEgEoM
//resource for understanding for loop and breaks and a good example of a guessing game: https://youtu.be/qdcPmQdrJac
//random letters function resource - it is my understanding that the below function spits out a random letter using Math.random and letter length: https://stackoverflow.com/questions/29505419/choosing-a-random-letter-from-a-z
//DOM content event listener needs to be input for JS to work with HTML

//the tutor said this was redundant: let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function randomLetter() {
  let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let letter = letters[Math.floor(Math.random() * letters.length)];
  console.log(letter + " computer guess");
  return letter;
}
// randomLetter();

let wins = 0;
let losses = 0;
let guessesLeft = 9;
//update guesses left
// correctAnswer is defined by the randomLetter function above
let correctAnswer = randomLetter();
console.log(correctAnswer)

//correctAnswer = computer's guess
let guessedLetters = []; //guessed letters array - push the letter of "my guess" into this array - should display letters of my guess

let updateGuessedLetters = function (guessedLettersRef) {
  document.querySelector("#guessed").innerHTML = guessedLettersRef;
};
updateGuessedLetters('');

let updateGuessesLeft = function () {
  document.querySelector("#guessesLeft").innerHTML = guessesLeft;
};
updateGuessesLeft();

let updateWins = function () {
  document.querySelector("#wins").innerHTML = wins;
};
updateWins();
//document.onkeyup function resource: https://www.youtube.com/watch?v=Tio88WjwFO0

document.onkeyup = function (event) {
  let letter = event.key.toLowerCase();
  console.log(letter + " my guess");

  //select element, display pressed letters
  guessedLetters.push(letter); //push to array
  updateGuessedLetters(guessedLetters); // display array


  //compare input with computer choice
  if (letter === correctAnswer) {// use ===, not ==
    // document.querySelector("#wins").appendChild = +1;

    //increase wins by 1, 
    wins = wins + 1;
    // wins += 1;
    // wins++;

    // assign wins to span#wins
    // same as: document.querySelector("#wins").innerHTML = wins;
    let winsSpan = document.querySelector("#wins");
    winsSpan.innerHTML = wins;

    //reset game: all choices clear, guesses left is back to 9, computer picks new random letter
    // clear choices


  } else {
    // document.querySelector("#guessesleft").innerHTML = guessesLeft;
    // decrrease guesses left by 1
    // increase losses by 1
    // clear choices 

    // if total guesses exhausted
  };

};

// if (letter == correctAnswer) {
//     document.querySelector("#wins").appendChild = +1;  
// } else {
//     document.querySelector("#guessesleft").innerHTML = guessesLeft;
// };
//for rest of onkeyup function:
//logic for correct guess compare my guess with computer guess
//in the same keyup logic as line 40
//record key stroke, push into array, then compare keystroke to computer guess


//create a brand new function to reset when win or lose
















//let guesses = String.fromCharCode(event.keyCode).
// toLowerCase;

// let correctAnswer = randomLetter;

// if the user guess equals the computer's answer then the user's wins increase by 1 or else the losses inscrease by 1 AND the guesses left is decreased by 1

//     if (guesses === correctAnswer){ 
//         wins ++;
//         alert(Wins: "" + wins || game resets);
//     } else { losses ++ 1 && guessesLeft -- 1
//         }
//     };

// // if guesses left === 0 then the game resets

//     if (guessesLeft === "0") {
//          game guesses reset
//     } else {nothing should happen};

//      + "<p>Guesses Left:</p>" + "<p>Your Guesses so far:</p>"

//     document.querySelector("#psychic-game").innerHTML = html;



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