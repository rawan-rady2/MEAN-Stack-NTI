// import { Rectangle, Square, Circle } from './shapes.js';

// const rect = new Rectangle(10, 5);
// const square = new Square(7);
// const circle = new Circle(3);

// console.log("Rectangle:", rect.toString());
// console.log("Square:", square.toString());
// console.log("Circle:", circle.toString());

import { Rectangle, Square, Circle } from './shapes.js';

function validateInput(value) {
  return !isNaN(value) && value > 0;
}

document.getElementById("calcRectangle").addEventListener("click", () => {
  const width = parseFloat(document.getElementById("rectWidth").value);
  const height = parseFloat(document.getElementById("rectHeight").value);
  const resultDiv = document.getElementById("rectResult");

  if (!validateInput(width) || !validateInput(height)) {
    resultDiv.textContent = "Please enter valid positive width and height.";
    return;
  }

  const rect = new Rectangle(width, height);
  resultDiv.textContent = rect.toString();
});

document.getElementById("calcSquare").addEventListener("click", () => {
  const side = parseFloat(document.getElementById("squareSide").value);
  const resultDiv = document.getElementById("squareResult");

  if (!validateInput(side)) {
    resultDiv.textContent = "Please enter a valid positive side.";
    return;
  }

  const square = new Square(side);
  resultDiv.textContent = square.toString();
});

document.getElementById("calcCircle").addEventListener("click", () => {
  const radius = parseFloat(document.getElementById("circleRadius").value);
  const resultDiv = document.getElementById("circleResult");

  if (!validateInput(radius)) {
    resultDiv.textContent = "Please enter a valid positive radius.";
    return;
  }

  const circle = new Circle(radius);
  resultDiv.textContent = circle.toString();
});
