let score = 0;

function playGame(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    // Display choices
    document.getElementById("player-choice").textContent = "Your Choice: " + playerChoice;
    document.getElementById("computer-choice").textContent = "Computer's Choice: " + computerChoice;

    // Determine the winner
    let result = "";
    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
        score++;
    } else {
        result = "You Lose!";
        score--;
    }

    // Display result and score
    document.getElementById("game-result").textContent = "Result: " + result;
    document.getElementById("score").textContent = "Score: " + score;
}
