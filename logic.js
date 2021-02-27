var start = document.querySelector(".start-button");
var blanks = document.querySelector(".word-blanks");
var words = ["JavaScript", "Query", "Attribute", "Argument", "Window", "Document"]
//countdown timer


    //game over prompt
var timer = document.querySelector(".timer-count"); //declare variable timer that is the countdown
//defines the interval, and what function is called
var countDownInterval 
function interval() {
    countDownInterval = setInterval(countDown, 1000)
}

//defines countDown Function
function countDown() {
    
    var timeLeft = timer.textContent;
    if(timeLeft > 0) {
    timeLeft--
    timer.textContent = timeLeft
    } else {
        clearInterval(countDownInterval); //clears the interval and stops the timer
        alert("Game Over");
        
    }
    
}



//keydown event listener

    //change the .word-blanks
    function renderBlanks() {
      // Randomly picks word from words array
      chosenWord = words[Math.floor(Math.random() * words.length)];
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      blanksLetters = []
      // Uses loop to push blanks to blankLetters array
      for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_");
      }
      // Changes blankLetters array into a string and renders it on the screen
      wordBlank.textContent = blanksLetters.join(" ")
    }
//score keeper
    //reset score









//start button
//array of words to choose from
// start.addEventListener("click", wordChoice(){
// })
function wordChoice(){
    var item = words[Math.floor(Math.random() * words.length)];
        blanks.textContent = item;
};

