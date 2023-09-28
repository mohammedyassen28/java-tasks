var userArray = [];
userArray[0] = parseFloat(prompt("Enter the first number : "));
userArray[1] = parseFloat(prompt("Enter the second number : "));
userArray[2] = parseFloat(prompt("Enter the third number : "));

var arraySum = 0;
var arrayMulti = 1;
var arrayDiv = userArray[0]/userArray[1]/userArray[2];

for(var i =0 ; i<3; i++) {
    arraySum += userArray[i];
    arrayMulti *= userArray[i];
}

document.write("<h1> <span style='color:red;'>Sum of the 3 values </span>" + userArray[0] + "+" + userArray[1] + "+" + userArray[2] + " = " + arraySum + "</h1>");
document.write("<h1> <span style='color:red;'>Multiplication of the 3 values </span>" + userArray[0] + "*" + userArray[1] + "*" + userArray[2] + " = " + arrayMulti + "</h1>");
document.write("<h1> <span style='color:red;'>Divison of the 3 values </span>" + userArray[0] + "/" + userArray[1] + "/" + userArray[2] + " = " + arrayDiv.toFixed(2) + "</h1>");