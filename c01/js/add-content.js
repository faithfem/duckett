var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18){
  greeting = "Good Evening!"; //This is a statement. Always starts on a new line and ends in a semi-colon
}
else if (hourNow > 12){
  greeting = "Good afternoon!";
}
else if (hourNow > 0){
  greeting = "Good Morning!";
}
else{
  greeting = "Welcome!";
}

//console.log("<h3>" + greeting + "<h3>");

//console.log(greeting);

document.write("<h3>" + greeting + "<h3>");
