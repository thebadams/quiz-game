//declare global variables
var start = document.querySelector(".start-button");//grabs start button
var blanks = document.querySelector(".word-blanks"); //grabs word content
var words = ["JavaScript", "Query", "Attribute", "Argument", "Window", "Document"] //array of available words
var answer = "Query"; //sets answer as an empty string at the beginning
var win = document.querySelector(".win"); //grabs win counter
var lose = document.querySelector(".lose"); //grabs loss counter
var losses = 0; // sets losses to 0
var wins = 0; // sets wins to 0
var timeLeft = 10; //sets timeLeft to 10s
var reset = document.querySelector(".reset-button")//grabs reset button

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
    timeLeft = 10;
    countDownInterval = setInterval(countDown, 1000)
}

//defines countDown Function
function countDown() {
    
    timer.textContent = timeLeft;
    if(timeLeft > 0) {
    timeLeft--
    timer.textContent = timeLeft
    } else {
        clearInterval(countDownInterval); //clears the interval and stops the timer
        removeEventListener("keydown", checkKey)//removes event listener
        losses++//adds 1 to losses
        lose.textContent = losses; //updates display

        
    }
    
}

//write a function to occur when the start button is clicked

function startPlaying(){
    generateAnswer();
    renderBlanks();
    timerInterval();
    document.addEventListener("keydown", checkKey)//generates the event listener

    
};


start.addEventListener("click", startPlaying); //adds an event listener to the start button

//function to check if a given character is in a string

//keydown event listener function
function checkKey(event) {
        var keyPressed = event.key; //grabs keyPressed value
        var contentArray = blanks.textContent.split(""); // defines an array of current characters in blanks
        var index = answer.indexOf(keyPressed); //gets index of keyPressed (tells us where in the word the letter occurs)
        if (index !== -1) { //if the letter appears in the word
            contentArray[index] = answer.charAt(index); // replace array element[index] with character at index
            blanks.textContent = contentArray.join(""); // make the array a string and place it on the page
            while (index !== -1) { // when a letter appears more than once, keep running the code until indexOf returns -1
                index = answer.indexOf(keyPressed, index + 1)
                contentArray[index] = answer.charAt(index);
                blanks.textContent = contentArray.join("");
            }
        }
        if (answer === blanks.textContent) {// check win condition
            clearInterval(countDownInterval); //clear countDown interval
            document.removeEventListener("keydown", checkKey); // remove the event listener
            wins++; // add 1 to wins
            win.textContent = wins; //update win display
        };

    }

//add an event listener to the reset button
reset.addEventListener("click", function(){
    wins = 0;
    losses = 0;
    win.textContent = wins;
    lose.textContent = losses;
    });









//start button
//array of words to choose from
// start.addEventListener("click", wordChoice(){
// })

