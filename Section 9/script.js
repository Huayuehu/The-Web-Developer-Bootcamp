// var userFirstName = prompt("What is your first name?");
// var userLastName = prompt("What is your last name?");
// console.log("Your full name is " + userFirstName + " " + userLastName);
// var userAge = prompt("How old are you honey?");
// console.log("You are " + userAge + " years old!");

var age = prompt("How old are you honey?");
if (age < 0) {
    console.log("ERROR!!!!!!!");
} 
if (age == 21) {
    console.log("Happy 21st birthday!!");
}
if ((age % 2) == 1) {
    console.log("Your age is odd!");
}
if (age % Math.sqrt(age) == 0) {
    console.log("Your age is a perfect square!");
}
