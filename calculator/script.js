const display = document.getElementById("result");

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    let expression = display.value.replace('%', '/100');
    display.value = eval(expression);
  } catch {
    display.value = "Error";
  }
}
