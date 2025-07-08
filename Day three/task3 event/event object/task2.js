const heading = document.createElement("h3");
heading.textContent = "Enter numbers only:";
document.body.appendChild(heading);
const input = document.createElement("input");
input.type = "text";
input.id = "numberInput";
document.body.appendChild(input);

input.addEventListener("keydown", function(event) {
  if (
    (event.key >= "0" && event.key <= "9") || 
    event.key === "Backspace" || 
    event.key === "ArrowLeft" || 
    event.key === "ArrowRight" || 
    event.key === "Tab"
  ) {
    return;
  } else {
    event.preventDefault();
  }
});
