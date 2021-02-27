//countdown timer
    //game over prompt

//array of words to choose from

//keydown event listener

    //change the .word-blanks
    function renderBlanks() {
 
      chosenWord = words[Math.floor(Math.random() * words.length)];
      lettersInChosenWord = chosenWord.split("");
      numBlanks = lettersInChosenWord.length;
      blanksLetters = []
      
      for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("_");
      }
      
      wordBlank.textContent = blanksLetters.join(" ")
    }
//score keeper
    //reset score

//start button










