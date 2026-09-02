let userScore = 0;
let compScore = 0;
let gameOver = false;

const userScoreSpan = document.getElementById('user-score');
const compScoreSpan = document.getElementById('comp-score');
const resultMsg = document.getElementById('result-msg');
const choicesMsg = document.getElementById('choices-msg');

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playGame(userChoice) {
    if (gameOver) return;

    const compChoice = getComputerChoice();
    choicesMsg.textContent = `You chose ${userChoice} | Computer chose ${compChoice}`;

    if (userChoice === compChoice) {
        resultMsg.textContent = "It's a Tie! 🤝";
        resultMsg.style.color = "#2c3e50";
    } 
    else if (
        (userChoice === "Rock" && compChoice === "Scissors") ||
        (userChoice === "Paper" && compChoice === "Rock") ||
        (userChoice === "Scissors" && compChoice === "Paper")
    ) {
        userScore++; 
        userScoreSpan.textContent = userScore; 
        resultMsg.textContent = "You Win this round! 🎉";
        resultMsg.style.color = "#2ecc71"; 
    } 
    else {
        compScore++; 
        compScoreSpan.textContent = compScore; 
        resultMsg.textContent = "Computer Wins this round! 🤖";
        resultMsg.style.color = "#e74c3c"; 
    }

    if (userScore === 5 || compScore === 5) {
        gameOver = true;
        if (userScore === 5) {
            resultMsg.textContent = "🏆 CHAMPION! You won the game! 🏆";
            resultMsg.style.color = "#2ecc71";
        } else {
            resultMsg.textContent = "💀 GAME OVER! Computer won! 💀";
            resultMsg.style.color = "#e74c3c";
        }
        choicesMsg.textContent = "Refresh the page to play again!";
    }
}

rockBtn.addEventListener('click', function() { playGame('Rock'); });
paperBtn.addEventListener('click', function() { playGame('Paper'); });
scissorsBtn.addEventListener('click', function() { playGame('Scissors'); });