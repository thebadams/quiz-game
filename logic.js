var start = document.querySelector(".start-button");
var blanks = document.querySelector(".word-blanks");
var words = ["JavaScript", "Query", "Attribute", "Argument", "Window", "Document"]
//countdown timer
    //game over prompt



//keydown event listener
    //change the .word-blanks



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