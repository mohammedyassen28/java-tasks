/* Function that accepts only 2 parametersand
 throw exception if number of parameterseither less than or exceeds 2 parameters */

function TwoParameters (param1,param2) {
    if (arguments.length != 2) {
        throw console.error("Exactly two parameters needed!");
    }
} 

/*function that takes any number ofparameters and returns them reversed using array’s reverse function */

function ReversedParameters () {
    var argumentArray = [];
    for (var i =0;i<arguments.length;i++) {
        argumentArray[i] = arguments[i];
    }
    return argumentArray.reverse();
}

/*function that takes date string as aparameter, and returns the Day name (Saturday,Sunday,…) of the given date */

function DayName (dateString) {
var userDate = new Date(dateString);
var userDateDay = userDate.getDay();

if (userDateDay=="0") {
    return "Sunday";
}

else if (userDateDay=="1") {
    return "Monday";
}

else if (userDateDay=="2") {
    return "Tuesday";
}

else if (userDateDay=="3") {
    return "Wednesday";
}

else if (userDateDay=="4") {
    return "Thursday";
}

else if (userDateDay=="5") {
    return "Friday";
}

else {
    return "Saturday";
}

}

/*write a function to return reversed string.
for example "word" you will return "drow" */

function ReversedString (word) {
var reversedWord = word.split("").reverse().join("");
return reversedWord;
}
