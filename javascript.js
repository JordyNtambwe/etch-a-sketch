const container = document.querySelector('#container')
// This piece of code builds the 16x16 grid instead of creating a div that needs to be manually typed out 256 times
const totalSquares = 256;
for (let i = 0; i < totalSquares; i++) {
  const square = document.createElement('div');
  square.classList.add('grid');
// This EventListener triggers the moment the cursor touches a square and changing the color to black, resulting in a trail like effect
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = 'black';
  });
  container.appendChild(square);
};