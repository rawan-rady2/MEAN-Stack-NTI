let values = [];

for (let i = 0; i < 3; i++) {
  let val;
  do {
    val = prompt("Enter number " + (i + 1) + ":");
    if (val === null || val.trim() === "" || isNaN(val)) {
      alert("Invalid input. Please enter a valid number.");
    } else {
      values.push(parseFloat(val));
      break;
    }
  } while (true);
}


let sum = values[0] + values[1] + values[2];
let product = values[0] * values[1] * values[2];


let divisionResult;
if (values[1] === 0 || values[2] === 0) {
  divisionResult = "Cannot divide by zero.";
} else {
  divisionResult = values[0] / values[1] / values[2];
}

document.write(`<p class="red">sum of the 3 values ${values[0]} + ${values[1]} + ${values[2]} = ${sum}</p>`);
document.write(`<p class="red">multiplication of the 3 values ${values[0]} * ${values[1]} * ${values[2]} = ${product}</p>`);
document.write(`<p class="red">division of the 3 values ${values[0]} / ${values[1]} / ${values[2]} = ${divisionResult}</p>`);
