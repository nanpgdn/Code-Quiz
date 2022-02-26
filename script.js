 //make the html for the quiz
    //this should include a question, buttons, header with timer, and a link to view scores
//need to add an event listener for when a button is clicked it hides this question and moves onto the next question
    //correct questions will prompt a correct
    //incorrect questions will deduct time from the timer //

//presents a final score 
// const myCar = {
//     make: 'Ford',
//     model: 'Mustang',
//     year: 1969
//   };
// var startButton = document.getElementById("start-btn")
const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "1. <js>",
        choice2: "2. <javascript>",
        choice3: "3. <scripting>",
        choice4: "4. <script>",
        correctAns: "4. <script>"
    },
    {
        question: "What does 'HTML' stand for?",
        choice1: "1. Hypertext Markup Language",
        choice2: "2. Home Tool Markup Language",
        choice3: "3. Handle Text and Markup Languages",
        choice4: "4. Handlebars Tech Markup Language",
        correctAns: "1. Hypertext Markup Language"
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        option1: "1. numbers and strings",
        option2: "2. other arrays",
        option3: "3. booleans",
        option4: "4. all of the above",
        correctAns: "4. all of the above"
    },
    {
        question: "What does CSS stand for?",
        choice1: "1. Creative Style Sheets",
        choice2: "2. Computer Style Sheets",
        choice3: "3. Colorful Style Sheets",
        choice4: "4. Cascading Style Sheets",
        correctAns: "4. Cascading Style Sheets"
    },
    {
        question: "What does DOM stand for?",
        choice1: "1. Display Object Management",
        choice2: "2. Document Object Model",
        choice3: "3. Digital Object Model",
        choice4: "4. Desktop Orientation Model",
        correctAns: "2. Document Object Model",
    }
]

// var timerElement = document.querySelector(".timer-count");
var startButton = document.getElementById('start-btn');
// var timer;
// var secondsLeft=60;
// var timerEl = document.getElementById("timer-count");
// var secondsLeft = 60;
var timerEl = document.getElementById("count")
var count = 60;
var timer;
var loseMsg = document.getElementById("lose")

var correctIncorrect = document.getElementById("correctIncorrect")
var qaContainerEl = document.getElementById("qaContainer");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var question = document.getElementById("question");

startButton.addEventListener('click', startQuiz);
var questionIndex = 0;

var choiceBtn = document.getElementById("choice")

function startQuiz() {
    console.log("I am working");
    startButton.classList.add('hide');
    qaContainerEl.classList.remove('hide');
    displayQs();
    startTimer();

    //example timer
    // timer = setInterval(function() {
    //     secondsLeft--;
    //     timerEl.textContent = secondsLeft;
        
    
    //     if (secondsLeft > 0) {
    //         clearInterval(timer);
    //         endQuiz();
    //     }
    
    //     if (timerCount <= 0) {
    //         clearInterval(timer);
    //         timerEl.textContent = 0;
    //         endQuiz();
    //     }
    // }, 1000)
}

function displayQs() {
    console.log("I am working too");
    question.innerHTML = questions[questionIndex].question;
    choice1.innerText = questions[questionIndex].choice1;
    choice2.innerText = questions[questionIndex].choice2;
    choice3.innerText = questions[questionIndex].choice3;
    choice4.innerText = questions[questionIndex].choice4;
    console.log("Question #" + questionIndex);
};



function startTimer () {
    timer = setInterval(function () {
        timerEl.innerText = count;
        console.log(count);
        count--;
        if(count ===-1) {
            clearInterval(timer);
        }
    },1000);
};


choiceBtn.addEventListener('click', checkAnswer)
var answer = choiceBtn.addEventListener("click", checkAnswer)

function checkAnswer() {
    if (questions[questionIndex].correctAns !== answer) {
        correctIncorrect.innerText = "Correct!" ;
        console.log("correct!");
        
    }
    else if (correctAns !== answer){

        correctIncorrect.innerText = "Incorrect!"
        count -= 10;
    }
    questionIndex++;
    if (questionIndex<=questions.length){
    displayQs();
    }

};

function endGame() {
    if (timer === 0) {
        loseMsg.classList.remove('hide')
    }
}
endGame();
// for (i of choiceBtn) {
//     i.addEventListener('click', function() {
//         checkAnswer(this.innerHTML);
//     });
// };


//example function
// function startGame() {
//     isWin = false;
//     timerCount = 10;
//     // Prevents start button from being clicked when round is in progress
//     startButton.disabled = true;
//     renderBlanks()
//     startTimer()
//   }


// Timer from Mini Project 
// function startTimer() {
//     // Sets timer
//     timer = setInterval(function() {
//       secondsLeft--;
//       timerElement.innerText = secondsLeft;
//       if (secondsLeft >= 0) {
//         // Tests if win condition is met
//         if (isWin && secondsLeft > 0) {
//           // Clears interval and stops timer
//           clearInterval(timer);
//           winGame();
//         }
//       }
//       // Tests if time has run out
//       if (secondsLeft === 0) {
//         // Clears interval
//         clearInterval(timer);
//         loseGame();
//       }
//     }, 1000)
// }
