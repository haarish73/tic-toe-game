let currentPlayer = "X";
let gameBoard = [];
let gameOver = false;

// Initialize game board
for (let i = 0; i < 9; i++) {
  gameBoard.push("");
}

// Add event listeners to boxes
const boxes = document.querySelectorAll(".box");
boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    if (!gameOver && gameBoard[index] === "") {
      gameBoard[index] = currentPlayer;
      box.textContent = currentPlayer;
      checkWin();
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  });
});

// Add event listener to reset button
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  gameBoard = [];
  for (let i = 0; i < 9; i++) {
    gameBoard.push("");
  }
  boxes.forEach((box) => {
    box.textContent = "";
  });
  currentPlayer = "X";
  gameOver = false;
});

// Check for win
function checkWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      gameBoard[a] === gameBoard[b] &&
      gameBoard[b] === gameBoard[c] &&
      gameBoard[a] !== ""
    ) {
      alert(`Player ${gameBoard[a]} wins!`);
      gameOver = true;
      return;
    }
  }

  // Check for draw
  if (!gameBoard.includes("")) {
    alert("It's a draw!");
    gameOver = true;
  }
}