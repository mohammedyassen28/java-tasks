do {
var userString = prompt("Enter your Word : ");
var userCase = parseInt(prompt("Consider the case of the letters? 1 : Yes , 2 : No (Enter 1 or 2)"));

if (userCase == "1") {
    var userStringReversed = userString.split('').reverse().join('');
    if (userString == userStringReversed) {
        document.write("The word '" + userString + "' is Palindrome.");
    }
    else { 
        document.write("The word '" + userString + "' is NOT Palindrome.");
    }
}

else if (userCase == "2") {

    userString = userString.toLowerCase();
    var userStringReversed = userString.split('').reverse().join('');
    
    if (userString == userStringReversed) {
        document.write("The word '" + userString + "' is Palindrome.");
    }
    else { 
        document.write("The word '" + userString + "' is NOT Palindrome.");
    }
}

else {
alert("Please try again and Choose either 1 or 2 .");
}

} while (userCase != "1" && userCase != "2");