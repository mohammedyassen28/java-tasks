do {
var userName = prompt("Enter your name : ");
var numExp = /\d/ ;
    if (numExp.test(userName) == true) {
        alert("Please Enter characters & not numbers.");
    }
} while (numExp.test(userName) == true);

do {
    var userPhone = prompt("Enter your phone number : ");
    var phoneExp = /^\d{8}$/;
    if (phoneExp.test(userPhone) == false) {
        alert("Please Enter a vaild phone number");
    }

} while (phoneExp.test(userPhone) == false);

do {
    var userMobile = prompt("Enter your Mobile number : ");
    var mobileExp = /^(010|011|012)\d{8}$/
    if (mobileExp.test(userMobile) == false) {
        alert("Please Enter a vaild mobile number");
    }
} while (mobileExp.test(userMobile) == false)

do {
    var userEmail = prompt("Enter your Email : ");
    var emailExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailExp.test(userEmail) == false) {
        alert("Please Enter a vaild Email");
    }

} while (emailExp.test(userEmail) == false);

document.write("<h1>Welcome " + userName + ",</h1>");
document.write("<h2>Let's review your data.</h2>");
document.write("<h3> Your name is : " + userName + "<br>" + "Your phone number is : " + userPhone
                + "<br>" + "Your mobile number is : " + userMobile + "<br>" + "Your Email is : " + userEmail + "</h3>")