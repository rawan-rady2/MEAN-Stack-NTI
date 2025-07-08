function EnterNumber(value) {
    document.getElementById("Answer").value += value;
}
function EnterOperator(op) {
    let current = document.getElementById("Answer").value;
    let lastChar = current.slice(-1);
    if (["+", "-", "*", "/"].includes(lastChar)) {
        document.getElementById("Answer").value = current.slice(0, -1) + op;
    } else {
        document.getElementById("Answer").value += op;
    }
}

function EnterEqual() {
    try {
        let result = eval(document.getElementById("Answer").value);
        document.getElementById("Answer").value = result;
    } catch (error) {
        alert("Invalid Expression");
    }
}
function EnterClear() {
    document.getElementById("Answer").value = "";
}

const answerInput = document.getElementById("Answer");

answerInput.addEventListener("keydown", function(event) {
  const allowedKeys = [
    "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
    "+", "-", "*", "/", ".", "Backspace", "Delete",
    "ArrowLeft", "ArrowRight", "Tab"
  ];
  if (!allowedKeys.includes(event.key)) {
    event.preventDefault();
  }
});


