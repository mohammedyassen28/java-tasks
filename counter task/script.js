var userString = prompt("Enter your message : ");

var eCounter = 0;

for (var i =0; i<userString.length;i++) {
    if (userString[i] == "E" || userString[i] == "e") {
        eCounter++ ;
    }
}

document.write("The letter 'e' count is : ", eCounter);