const container = document.querySelector('#container');
const button = document.querySelector('#newGrid');

function createNewGrid(squaresPerSide) {
  // This clears the old grid first before creating a new one
  container.innerHTML = '';
  // This calculates the total squares
  const totalSquares = squaresPerSide * squaresPerSide;
  // This calculates the size of each square to fit in 256px
  const size = 960 / squaresPerSide;
  // This piece of code builds the 16x16 grid instead of creating a div that needs to be manually typed out 256 times
  for (let i = 0; i < totalSquares; i++) {
    const square = document.createElement('div');
    square.classList.add('grid');
    // This allows the grid to change its side dynamically
    square.style.width = `${size}px`;
    square.style.height = `${size}px`;
    // This EventListener triggers the moment the cursor touches a square and changing the color to black, resulting in a trail like effect
    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = 'black';
    });
    container.appendChild(square);
  };
};
// This EventListener triggers a popup asking the number of squares the user wants per side
button.addEventListener('click', () => {
  let userChoice = prompt("Enter squares per side (Max 100):");
// This checks if the value entered is valid
  if (isNaN(userChoice) || userChoice < 1 || userChoice > 100) {
    alert("Your input is invalid. Please enter a number between 1 and 100!");
  } else {
    createNewGrid(userChoice);
  };
});

createNewGrid(16);