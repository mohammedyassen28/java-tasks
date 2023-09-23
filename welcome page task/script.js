alert("Welcome to my site!");

var userName = prompt("Enter your name : ");
var userColor = prompt("Enter the number of your favourite color ( 1 : Red / 2 : Green / 3 : Blue) : ");

if (userColor == "1") {
document.write("Welcome " + "<span style='color:red;'>" + userName + "</span>");
}

else if (userColor == "2") {
    document.write("Welcome " + "<span style='color:green;'>" + userName + "</span>");

}

else if (userColor == "3") {
    document.write("Welcome " + "<span style='color:blue;'>" + userName + "</span>");

}

else {
    document.write("Refresh the page and enter a valid color");
}