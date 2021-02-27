var start = document.querySelector(".start-button");
var blanks = document.querySelector(".word-blanks");
var words = ["J _ v _ S c r _ _t", "Q _ _ r _", "_ t t r _ b _ t _", "_ r g _ m _ n _", "W _ _ d _ w", "_ o c _ m _ _ t" ]
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