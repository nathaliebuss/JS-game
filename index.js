//--- ARRAY---//
const choices = ["Rock", "Paper", "Scissors"]; //array

let userChoice;
let computerChoice;

//--- SCORE LIST ---//
let userScore = 0;
let computerScore = 0;
const winningScore = 3;
let tieScore = 0;

for (let i = 0; i < choices.length; i++) {
    console.log(`Choice ${i + 1}: ${choices[i]}`);
}

// DOM stuff
const scoreCount = document.querySelectorAll(".score");
const buttons = Array.from(document.querySelectorAll(".btn"));
console.log(buttons);
const restartBtn = document.querySelector(".restart_btn");
const result = document.querySelector(".result_txt");
const tieCount = document.querySelector(".tie_score");
console.log(tieScore);

const getComputerChoice = () => {
    const randomNrForComp = Math.floor(Math.random() * choices.length);
    computerChoice = choices[randomNrForComp];
};

const displayChoices = () => {
    document.querySelector(".user_choice").textContent = userChoice;
    document.querySelector(".comp_choice").textContent = computerChoice;
};

const displayScore = () => {
    document.querySelector(".score").textContent = userScore;
    document.querySelector(".score").textContent = computerScore;
};

// click for the btns
// function
const runGame = () => {
    buttons.forEach((item) => {
        item.addEventListener("click", () => setUserChoice(item));
        item.disabled = true;
    });
};

// GAME LOGIC
let rounds = 0;

const gameResult = () => {
    if (userChoice === computerChoice) {
        result.textContent = "It's a tie!";
        tieScore++;
        tieCount.textContent = tieScore;
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        userScore++;
        document.querySelector(".result_txt").textContent = "You win!";
        document.querySelector(".user_score").textContent = userScore;
    } else {
        computerScore++;
        document.querySelector(".result_txt").textContent = "Computer wins!";
        document.querySelector(".comp_score").textContent = computerScore;
    }

};

const setUserChoice = (button) => {
    if (rounds < winningScore) {
        userChoice = button.textContent;
        getComputerChoice();
        displayChoices();
        gameResult();
        rounds++;
    }
    if (rounds === winningScore) {
        if (userScore > computerScore) {
            document.querySelector('.result_txt').textContent = 'Game over! User won!'
        } if (userScore < computerScore) {
            document.querySelector('.result_txt').textContent = 'Game over! Computer won!'
        } else {
            document.querySelector('.result_txt').textContent = "Game over! It's a tie!"
        }
        buttons.forEach(btn => btn.disabled = true);
    }
};

const startGame = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false; 
        buttons[i].addEventListener("click", () => {
            setUserChoice(buttons[i]);
        });
    }
};

// function to reset game
const restartGame = () => {
    restartBtn.addEventListener("click", () => {
        rounds = 0;
        userScore = 0;
        computerScore = 0;
        tieScore = 0;

        document.querySelector(".user_score").textContent = userScore;
        document.querySelector(".comp_score").textContent = computerScore;
        document.querySelector(".tie_score").textContent = "0";
        document.querySelector(".user_choice").textContent = "?";
        document.querySelector(".comp_choice").textContent = "?";
        result.textContent = "-";
        buttons.forEach(btn => btn.disabled = false);
    });
};

startGame()
restartGame()

// call game function

//-- FOR LOOP -- //
// for (let i = 0; i < USER_CHOICES.length; i++) {
//     console.log(`Input: ${i + 1}: ${USER_CHOICES[i]}`);
// }

//-- ROUNDS--//
// let round = 1;

// while (round <= ROUNDS) {
//     console.log(`Round ${round} of ${ROUNDS}!`);

//     let computerChoice =
//         USER_CHOICES[Math.floor(Math.random() * USER_CHOICES.length)]; //let computerChoice = Math.floor(Math.random() * 3) + 1; // rock,paper,scissors gets a number assigned

//     let userChoice = prompt("rock, paper , scissors?");

//     //--- GAME PLAY ---//
//     if (userChoice === computerChoice) {
//         result = "It's a tie!";
//         tieScore++;
//     } else if (
//         (userChoice === "rock" && computerChoice === "scissors") ||
//         (userChoice === "paper" && computerChoice === "rock") ||
//         (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//         result = "You win!!!!!!";
//         userScore++;
//     } else {
//         result = "Computer wins ";
//         computerScore++;
//     }
//     //--ROUND RESULTS--//
//     alert(
//         `You chose ${userChoice}, computer chose ${computerChoice} ${result}`,
//     );
//     console.log(
//         `The score is You: ${userScore}, Computer: ${computerScore}, Ties: ${tieScore}`,
//     );

//     round++;
// }

// //---- FINAL RESULTS ----//
// if (userScore > computerScore) {
//     console.log(`You won! ${userScore} - ${computerScore}`);
// } else if (userScore < computerScore) {
//     console.log(`Computer wins! ${computerScore} - ${userScore}`);
// } else {
//     console.log(`It was a tie!!, ${userScore} - ${computerScore}`);
// }
