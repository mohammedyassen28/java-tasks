
var firstNumber;
do {
    firstNumber = parseInt(prompt("Enter the first number"));
    if (isNaN(firstNumber)){
      alert("Invalid number. Please enter a valid number.")
    }
} while (isNaN(firstNumber));

var secondNumber;
do {
    secondNumber = parseInt(prompt("Enter the second number"));
    if (isNaN(secondNumber)){
      alert("Invalid number. Please enter a valid number.")
    }
} while (isNaN(secondNumber));

var operation ; 
do{
  var operation  = prompt("Enter the operation (+, -, *, /)");
  if (operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/"){
    alert("Invalid operatin. Please enter a valid operation.")
  }
}while(operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/")

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} else if (operation === "-") {
    result = firstNumber - secondNumber;
} else if (operation === "*") {
    result = firstNumber * secondNumber;
} else if (operation === "/") {
    result = firstNumber / secondNumber;
    if (secondNumber === 0) {
        alert("Error: Division by zero is not allowed.");
    }
}
document.write(firstNumber + " " + operation + " " + secondNumber + " = " + result);
