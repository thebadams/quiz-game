//declare global variables
var start = document.querySelector(".start-button");
var blanks = document.querySelector(".word-blanks");
var words = ["JavaScript", "Query", "Attribute", "Argument", "Window", "Document"] //array of available words
var answer = "Query"; //sets answer as an empty string at the beginning


// function to generate a word from the words array
function generateIndex() { //generates a number to reference to array
    var wordsIndex = Math.floor(Math.random()*words.length);
    return wordsIndex;
}
//function to generate the answer
function generateAnswer(){
    wordsIndex = generateIndex();
    answer = words[wordsIndex];
    return answer
}


//change the .word-blanks
function renderBlanks() {
    var string = ""
    for(var i = 0; i < answer.length; i++){
        var blank = "_";
        string = string + blank;
        blanks.textContent = string;
    }
}


//countdown timer


    //game over prompt
var timer = document.querySelector(".timer-count"); //declare variable timer that is the countdown
//defines the interval, and what function is called
var countDownInterval 
function timerInterval() {
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

//write a function to occur when the start button is clicked

function startPlaying(){
    generateAnswer();
    renderBlanks();
    timerInterval();
};

start.addEventListener("click", startPlaying);

//function to check if a given character is in a string

//keydown event listener
document.addEventListener("keydown", function(event){
    var keyPressed = event.key;
    var contentArray = blanks.textContent.split("");
    var index = answer.indexOf(keyPressed);
    if(index !== -1) {
        contentArray[index]= answer.charAt(index);
        blanks.textContent = contentArray.join("");
        while(index !== -1){
           index = answer.indexOf(keyPressed, index+1)
           contentArray[index] = answer.charAt(index);
           blanks.textContent = contentArray.join("");
        }
    }
})

// document.addEventListener("keydown", function(event) {
    
// }
//     )

//score keeper
    //win condition
    //loss condition
    //reset score









//start button
//array of words to choose from
// start.addEventListener("click", wordChoice(){
// })

