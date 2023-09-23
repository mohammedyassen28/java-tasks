do {

var monthNum = prompt("Enter a number between 1-12"); 
var monthName ;


switch(monthNum) {

case "1": 
monthName = "January";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "2": 
monthName = "February";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "3": 
monthName = "March";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "4":
monthName = "April";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "5": 
monthName = "May";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "6": 
monthName = "June";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "7": 
monthName = "July";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "8": 
monthName = "August";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "9": 
monthName = "September";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "10": 
monthName = "October";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "11": 
monthName = "November";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

case "12": 
monthName = "December";
document.write("Yaaay we're in " + monthName + " ✌️");
break;

default: 
alert("Enter a valid number!");
}

} while (monthNum <= 0 || monthNum > 12);