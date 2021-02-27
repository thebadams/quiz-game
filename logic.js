//countdown timer
var timer = document.querySelector(".timer-count"); //declare variable timer that is the countdown
var countDownInterval 
function interval() {
    countDownInterval = setInterval(countDown, 1000)
}
function countDown() {
    
    var timeLeft = timer.textContent;
    if(timeLeft > 0) {
    timeLeft--
    timer.textContent = timeLeft
    } else {
        clearInterval(countDownInterval);
        alert("Game Over");
        
    }
    
}



//keydown event listener
    //change the .word-blanks

//

//score keeper
    //reset score

//start button
    //array of words to choose from


