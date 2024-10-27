document.addEventListener("DOMContentLoaded", () => {
    // Select all divs inside the #board element
    const squares = document.querySelectorAll("#board div");

    // Loop through each div and add the 'square' class
    squares.forEach((square) => {
        square.classList.add("square");
    
	// Add mouseover and mouseleave event listeners for hover effect
        square.addEventListener("mouseover", () => {
            square.classList.add("hover"); // Apply the hover style
        });
        square.addEventListener("mouseleave", () => {
            square.classList.remove("hover"); // Remove the hover style
        });
    });

    let currentPlayer = "X"; // Start with player X
    const gameState = Array(9).fill(null); // Array to keep track of game state

    // Function to handle click events on each square
    function handleSquareClick(event) {
        const square = event.target;
        const squareIndex = Array.from(squares).indexOf(square);

        // Checks if the square is already filled
        if (gameState[squareIndex] === null) {
            gameState[squareIndex] = currentPlayer; // Update game state
            square.textContent = currentPlayer; // Display X or O in the square
            square.classList.add(currentPlayer); // Add appropriate class for styling

            // Switches players
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }

    // Adds click event listeners to each square
    squares.forEach((square) => {
        square.addEventListener("click", handleSquareClick);
    });
});