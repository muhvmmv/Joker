var playerScore = 0;
var computerScore = 0;

function play(playerChoice) {
    var choices = ["rock", "paper", "scissors"];
    var jokerChoice = choices[Math.floor(Math.random() * 3)];
    var result = "";

    // Display player and joker hands
    document.getElementById("player-hand").src = playerChoice + ".png";
    document.getElementById("player-hand").style.opacity = "1";
    document.getElementById("computer-hand").src = jokerChoice + ".png";
    document.getElementById("computer-hand").style.opacity = "1";

    if (playerChoice === jokerChoice) {
        result = "I won’t kill you because you’re just too much fun. I think you and I are destined to do this forever - ITS A TIE";
    } else if ((playerChoice === "rock" && jokerChoice === "scissors") ||
               (playerChoice === "paper" && jokerChoice === "rock") ||
               (playerChoice === "scissors" && jokerChoice === "paper")) {
        result = "Tell me something, my friend, have you ever danced with the devil in the pale moonlight? - You win!";
        playerScore++;
    } else {
        result = "You want my life? Take it! but if you keep slipping up like this I will take yours - Joker wins!";
        computerScore++;
    }

    // Update scores
    document.getElementById("player-score").innerText = playerScore;
    document.getElementById("computer-score").innerText = computerScore;

    // Display result
    document.getElementById("result").innerText = `You chose ${playerChoice}, Joker chose ${jokerChoice}. ${result}`;
}
