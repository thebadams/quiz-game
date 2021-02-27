//countdown timer

    //game over prompt

//array of words to choose from

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










