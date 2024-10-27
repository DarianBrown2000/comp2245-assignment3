document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll("#board div");
    const statusDiv = document.getElementById("status");
    let currentPlayer = "X"; // Start with player X
    const gameState = Array(9).fill(null); // Array to keep track of the game state

    // Winning combinations for a 3x3 Tic-Tac-Toe board
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

      // Create "New Game" button
      const newGameButton = document.createElement("button");
      newGameButton.textContent = "New Game";
      newGameButton.classList.add("btn");
      statusDiv.after(newGameButton); // Insert after the status div

    // Loops through each div and add the 'square' class
    squares.forEach((square) => {
        square.classList.add("square");

        // Adds mouseover and mouseleave event listeners for hover effect
        square.addEventListener("mouseover", () => {
            square.classList.add("hover"); // Apply the hover style
        });
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover"); // Remove the hover style
        });
    });

    // Function to handle click events on each square
    function handleSquareClick(event) {
        const square = event.target;
        const squareIndex = Array.from(squares).indexOf(square);

        // Check if the square is already filled or if the game has a winner
        if (gameState[squareIndex] === null && !checkWinner()) {
            gameState[squareIndex] = currentPlayer; // Update game state
            square.textContent = currentPlayer; // Display X or O in the square
            square.classList.add(currentPlayer); // Add appropriate class for styling

            // Check for a winner after each move
            if (checkWinner()) {
                statusDiv.textContent = `Congratulations! ${currentPlayer} is the Winner!`;
                statusDiv.classList.add("you-won");
            } else {
                // Switch players if no winner
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    // Function to check for a winning combination
    function checkWinner() {
        return winningCombinations.some((combo) => {
            const [a, b, c] = combo;
            return gameState[a] === currentPlayer &&
                   gameState[a] === gameState[b] &&
                   gameState[a] === gameState[c];
        });
    }

    // Add click event listeners to each square
    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);
    });
});
