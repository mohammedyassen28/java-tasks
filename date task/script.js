do {
var userDate = (prompt("Enter a Date (yyyy-mm-dd)"));
var DateExp = /^(?:(?!0000)\d{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1\d|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:\d{2}(?:0[48]|[2468][048]|[13579][26])-02-29))$/;

if (DateExp.test(userDate) == false) {
    alert("Please enter a vaild date in this format (yyyy-mm-dd)")
}

else {

var userDateConverted = new Date(userDate);
var userDateDay = userDateConverted.getDay();

    if (userDateDay=="0") {
        document.write("<h1>" + userDate + " is a Sunday</h1>");
    }
    else if (userDateDay=="1") {
        document.write("<h1>" + userDate + " is a Monday</h1>");
    }
    else if (userDateDay=="2") {
        document.write("<h1>" + userDate + " is a Tuesday</h1>");
    }
    else if (userDateDay=="3") {
        document.write("<h1>" + userDate + " is a Wednesday</h1>");
    }
    else if (userDateDay=="4") {
        document.write("<h1>" + userDate + " is a Thursday</h1>");
    }
    else if (userDateDay=="5") {
        document.write("<h1>" + userDate + " is a Friday</h1>");
    }
    else {
        document.write("<h1>" + userDate + " is a Saturday</h1>");
    }

}

} while (DateExp.test(userDate) == false);
