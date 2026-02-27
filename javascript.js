const container = document.querySelector('#container')
// This piece of code builds the 16x16 grid in seconds instead of creating a div that needs to be manually typed out 256 times
const totalSquares = 256;
for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('grid');
  container.appendChild(square);
};