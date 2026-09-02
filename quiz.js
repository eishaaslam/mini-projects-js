const questions = [
    { question: "What is HTML?", options: ["browser", "Programming language", "web skeleton", "all"], correct: 2 },
    { question: "What is js?", options: ["browser", "Programming language", "web skeleton", "all"], correct: 1 },
    { question: "What is css?", options: ["browser", "Programming language", "web design tool", "all"], correct: 2 },
    { question: "What is hr?", options: ["tag", "Programming language", "web skeleton", "all"], correct: 0 },
    { question: "What is vs?", options: ["browser", "Programming language", "web skeleton", "editor"], correct: 3 },
    { question: "What is google?", options: ["browser", "Programming language", "web skeleton", "all"], correct: 0 }
];

let userAnswers = [];
let timeLeft = 15;
let currentIndex = 0;
let timerLoop = null;

const startScreen = document.querySelector('.container');
const quizScreen = document.getElementById('quiz');
const resultScreen = document.getElementById('result');
const progressEl = document.getElementById('progress');
const timerEl = document.getElementById('timer');
const questionTextEl = document.getElementById('questions-text');
const optionListEl = document.getElementById('options-list');

const reviewBtn = document.querySelector('#review button');
reviewBtn.addEventListener('click', showAnswerReview);

function startQuiz() {
    currentIndex = 0;
    userAnswers = [];
    startScreen.style.display = 'none';
    resultScreen.style.display = 'none';
    quizScreen.style.display = 'block';
    loadNext();
} 

function loadNext() {
    clearInterval(timerLoop);
    timeLeft = 15;
    timerEl.innerText = "Time Left : 15s";
    
    let currentQuestionData = questions[currentIndex];
    progressEl.innerText = "Question " + (currentIndex + 1) + " / " + questions.length;
    questionTextEl.innerText = currentQuestionData.question;
    
    optionListEl.innerHTML = "";

    for (let i = 0; i < currentQuestionData.options.length; i++) {
        let choice = currentQuestionData.options[i];
        
        let div = document.createElement('div');
        let label = document.createElement('label');
        let radio = document.createElement('input');
        
        radio.type = "radio";
        radio.name = "quiz-choice";
        radio.value = i;
        
        radio.onclick = function() {
            userAnswers[currentIndex] = i;
        };
        
        label.appendChild(radio);
        label.appendChild(document.createTextNode(choice));
        div.appendChild(label);
        optionListEl.appendChild(div);
    }

    let nextBtn = document.createElement('button');
    if (currentIndex === questions.length - 1) {
        nextBtn.innerText = "Finish Quiz";
    } else {
        nextBtn.innerText = "Next";
    }
    nextBtn.onclick = moveToNext;
    optionListEl.appendChild(nextBtn);

    timerLoop = setInterval(function() {
        timeLeft = timeLeft - 1;
        timerEl.innerText = "Time Left : " + timeLeft + "s";
        
        if (timeLeft <= 0) {
            clearInterval(timerLoop);
            moveToNext();
        }
    }, 1000);
}

function moveToNext() {
    if (userAnswers[currentIndex] === undefined) {
        userAnswers[currentIndex] = null;
    }
    
    currentIndex = currentIndex + 1;
    
    if (currentIndex < questions.length) {
        loadNext();
    } else {
        clearInterval(timerLoop);
        showResults();
    }
}

function showResults() {
    let correctCount = 0;
    let incorrectCount = 0;
    let unansweredCount = 0;

    for (let i = 0; i < questions.length; i = i + 1) {
        let item = questions[i];
        let selection = userAnswers[i];
        
        if (selection === null) {
            unansweredCount = unansweredCount + 1;
        } else if (selection === item.correct) {
            correctCount = correctCount + 1;
        } else {
            incorrectCount = incorrectCount + 1;
        }
    }

    let calculatedScore = correctCount * 10;
    let calculatedPercentage = Math.round((correctCount / questions.length) * 100);

    document.getElementById('correct').innerText = correctCount;
    document.getElementById('incorrect').innerText = incorrectCount;
    document.getElementById('unanswered').innerText = unansweredCount;
    document.getElementById('score').innerText = calculatedScore;
    document.getElementById('percentage').innerText = calculatedPercentage + "%";

    quizScreen.style.display = 'none';
    resultScreen.style.display = 'block';
}

function showAnswerReview() {
    let reviewBox = document.getElementById('review-box');
    if (!reviewBox) {
        reviewBox = document.createElement('div');
        reviewBox.id = 'review-box';
        document.getElementById('review').appendChild(reviewBox);
    }
    reviewBox.innerHTML = "";

    for (let i = 0; i < questions.length; i = i + 1) {
        let item = questions[i];
        let ans = userAnswers[i];
        let status = "❌ Incorrect";
        
        if (ans === null) {
            status = "⏳ Unanswered";
        } else if (ans === item.correct) {
            status = "✅ Correct";
        }

        let chosenOptionText = "None";
        if (ans !== null) {
            chosenOptionText = item.options[ans];
        }

        let card = document.createElement('div');
        card.innerHTML = "<h4>Q" + (i + 1) + ": " + item.question + "</h4>" +
                         "<p>Your Answer: " + chosenOptionText + "</p>" +
                         "<p>Correct Answer: " + item.options[item.correct] + "</p>" +
                         "<p>Result: " + status + "</p>";
        reviewBox.appendChild(card);
    }
}