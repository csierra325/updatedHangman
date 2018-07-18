var words = ["rocket", "gamora", "drax", "nebula", "yondu", "groot",
  "quill", "collector", "galaxy", "guardians", "mantis", "thanos"
];


var chosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var Guesses = [];
var wrongGuesses = [];
var letterGuessed = "";

//  counters
var wins = 0;
var loss = 0;
var guessesLeft = 9;

function startGame() {
  guessesLeft = 5;
  chosenWord = words[Math.floor(Math.random() * words.length)];

  lettersInWord = chosenWord.split("");
  numBlanks = lettersInWord.length;
  console.log(chosenWord);

  Guesses = [];
  wrongGuesses = [];

  for (var i = 0; i < numBlanks; i++) {
    Guesses.push("_");
  }


  console.log(Guesses);

  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("word-blanks").innerHTML = Guesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


function checkLetters(letter) {

  var letterInWord = false;

  for (var i = 0; i < numBlanks; i++) {
    if (chosenWord[i] === letter) {
      letterInWord = true;
    }
  }

  if (letterInWord) {
    for (var j = 0; j < numBlanks; j++) {
      if (chosenWord[j] === letter) {

        Guesses[j] = letter;
      }
    }
    console.log(Guesses);
  } else {
    wrongGuesses.push(letter);
    guessesLeft--;

  }

}

function roundComplete() {

  document.getElementById("guesses-left").innerHTML = guessesLeft;
  document.getElementById("word-blanks").innerHTML = Guesses.join(" ");
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  if (lettersInWord.toString() === Guesses.toString()) {

    wins++;
    document.getElementById("win-counter").innerHTML = wins;

    startGame();
  } else if (guessesLeft === 0) {
    loss++;

    document.getElementById("loss-counter").innerHTML = loss;
    startGame();

  }

}

startGame();

document.onkeyup = function (event) {
  letterGuessed = String.fromCharCode(event.which).toLowerCase();
  checkLetters(letterGuessed);
  roundComplete();
};