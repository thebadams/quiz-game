var start = document.querySelector(".start-button");
var blanks = document.querySelector(".word-blanks");
var words = ["JavaScript", "Query", "Attribute", "Argument", "Window", "Document"]
//countdown timer
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