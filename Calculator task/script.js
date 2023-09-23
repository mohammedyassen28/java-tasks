
var firstNum = parseInt(prompt("Enter the first number: "));

var process = prompt("Enter the operation  (+,-,*,/) ");

var secondNum = parseInt(prompt("Enter the second number: "));


if (process == "+") {
    var result = firstNum+secondNum;
    document.write("Operation Summation of " + firstNum + " and " + secondNum + " equals : " + result);
}
else if (process == "-") {
    var result = firstNum-secondNum;
    document.write("Operation Subtraction of " + firstNum + " and " + secondNum + " equals : " + result);
}
else if (process == "*") {
    var result = firstNum*secondNum;
    document.write("Operation Multiplication of " + firstNum + " and " + secondNum + " equals : " + result);
}
else if (process == "/") {
    var result = firstNum/secondNum;
    document.write("Operation Division of " + firstNum + " and " + secondNum + " equals : " + result);
}

else {
    document.write("ERROR ENTER A VALID OPRATION!");
}